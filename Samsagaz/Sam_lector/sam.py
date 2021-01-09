import slack
import os
import logging
from flask import Flask , request, Response
from slackeventsapi import SlackEventAdapter
from slack import WebClient
import pika
import sys
import time
import pyrebase
from datetime import date,datetime
time.sleep(30)

#conectamos a firebase
config = {
  "apiKey": "apiKey",
  "authDomain": "eventos.firebaseapp.com",
  "databaseURL": "https://eventos-1edcd-default-rtdb.firebaseio.com/",
  "storageBucket": "local"
}

firebase = pyrebase.initialize_app(config)

db = firebase.database()

#env_path = Path('.') / '.env'
#load_dotenv(dotenv_path=env_path)

#Coneccion a RabbitMQ

HOST = os.environ['RABBITMQ_HOST']

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host=HOST))
channel = connection.channel()

#Creamos el exchange 'sam' de tipo 'fanout'
channel.exchange_declare(exchange='sam', exchange_type='topic', durable=True)



#AppFLask
app = Flask(__name__) #__name__ representa el nombre del archivo
slack_event_adapter = SlackEventAdapter(os.environ.get("SLACK_SIGNING_SECRET"), "/slack/events", app)
#cliente SLACK
client = slack.WebClient(token=os.environ['SLACK_TOKEN'])
BOT_ID = "U01D7DQNM71"


@slack_event_adapter.on('message')
def message(payload):#payload es la info o data que envia slack 
    event = payload.get('event',{})
    channel_id = event.get('channel')
    user_id = event.get('user')
    text = event.get('text')
    #testeo read and write
    if user_id != BOT_ID:#mensajes no pertenecientes a sam
        H = text.find('Hola')
        B = text.find('Adios')
        D = text.find('día')
        C = text.find('Cómo')
        EO = text.find ('estuvo')
        EA = text.find('esta')
        if H!=-1:
            client.chat_postMessage(channel=channel_id, text=" Hola "+ user_id)
        if B!=-1:
            client.chat_postMessage(channel=channel_id, text="Adiós "+ user_id)
        if C!=-1:
            if D!=-1:
                if EO !=-1:
                    client.chat_postMessage(channel = channel_id,text = "He tenido mejores")
                if EA !=-1:
                    client.chat_postMessage(channel = channel_id,text = "Estoy bien, aunque con algo de hambre")
        if text.startswith("[traducir]"):
            channel.basic_publish(exchange='sam', routing_key="traducir", body=text)
        if text.startswith("[wikipedia]"):
            channel.basic_publish(exchange='sam', routing_key="wikipedia", body=text)
        if text.startswith("[evento]"):
            channel.basic_publish(exchange='sam', routing_key="eventos", body=text)



#COMANDOS
@app.route('/eventosmes',methods=['POST'])
def eventosmes():
    mes = str(date.today().month)
    eventos= db.child(mes).get()
    if isinstance(eventos.each(), list):
        for user in eventos.each():
            a=str(user.val())
            b= a.split()
            em = "Titulo: "+b[3][1:-2]+", Día: "+ b[1][:-1]
            channel.basic_publish(exchange='sam', routing_key="publicar_slack", body=em)	
    else:
        print("No existen eventos ingresados este mes") 
    return Response(),200

if __name__ == "__main__":
    # Create the logging object
    logger = logging.getLogger()

    # Set the log level to DEBUG. This will increase verbosity of logging messages
    logger.setLevel(logging.DEBUG)

    # Add the StreamHandler as a logging handler
    logger.addHandler(logging.StreamHandler())

    # Run our app on our externally facing IP address on port 3000 instead of
    # running it on localhost, which is traditional for development.
    app.run(host='0.0.0.0', port=3000)