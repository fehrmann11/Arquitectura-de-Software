import pika
import time
import os
import wikipedia

wikipedia.set_lang("es")

time.sleep(30)

########### CONNEXIÓN A RABBIT MQ #######################
HOST = os.environ['RABBITMQ_HOST']

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host=HOST))
channel = connection.channel()

#El consumidor utiliza el exchange 'nestor'
channel.exchange_declare(exchange='sam', exchange_type='topic', durable=True)

#Se crea un cola temporaria exclusiva para este consumidor (búzon de correos)
result = channel.queue_declare(queue="wikipedia", exclusive=True, durable=True)
queue_name = result.method.queue

#La cola se asigna a un 'exchange'
channel.queue_bind(exchange='sam', queue=queue_name, routing_key="wikipedia")


#se inicia
def callback(ch, method, properties, body):
    print(body)
    if str(body).startswith("b'[wikipedia]"):
        query = str(body)[13:-1]
        print(query)
        result=wikipedia.summary(wikipedia.search(query)[0], sentences=3, auto_suggest=False)
        print(result)

        ########## PUBLICA EL RESULTADO COMO EVENTO EN RABBITMQ ##########
        channel.basic_publish(exchange='sam', routing_key="publicar_slack", body=query+":"+result)


channel.basic_consume(
    queue=queue_name, on_message_callback=callback, auto_ack=True)

channel.start_consuming()