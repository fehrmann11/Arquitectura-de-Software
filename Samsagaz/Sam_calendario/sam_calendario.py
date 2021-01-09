import pika
import time
import os
import pyrebase

time.sleep(40)

#creamos conexión a firebase
config = {
  "apiKey": "apiKey",
  "authDomain": "eventos.firebaseapp.com",
  "databaseURL": "https://eventos-1edcd-default-rtdb.firebaseio.com/",
  "storageBucket": "local"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()
########### CONNEXIÓN A RABBIT MQ #######################
HOST = os.environ['RABBITMQ_HOST']

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host=HOST))
channel = connection.channel()

#El consumidor utiliza el exchange 'nestor'
channel.exchange_declare(exchange='sam', exchange_type='topic', durable=True)

#Se crea un cola temporaria exclusiva para este consumidor (búzon de correos)
result = channel.queue_declare(queue="eventos", exclusive=True, durable=True)
queue_name = result.method.queue

#La cola se asigna a un 'exchange'
channel.queue_bind(exchange='sam', queue=queue_name, routing_key="eventos")


#se inicia
def callback(ch, method, properties, body):
    print(body)
    if str(body).startswith("b'[evento]"):
        q = str(body)[10:]
        eve =  q.split()
        T = eve [0][2:]
        M = int(eve [1][2:])
        D = int(eve [2][2:-1])
        data = {'Día:':D,'Título:':T}
        db.child(M).push(data)
        body= "Evento ingresado"
        ########## PUBLICA EL RESULTADO COMO EVENTO EN RABBITMQ ##########
        channel.basic_publish(exchange='sam', routing_key="publicar_slack", body=body)


channel.basic_consume(
    queue=queue_name, on_message_callback=callback, auto_ack=True)

channel.start_consuming()