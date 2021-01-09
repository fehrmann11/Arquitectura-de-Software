FROM python:3.6.3

ENV SLACK_TOKEN=

COPY ./requirements.txt /requirements.txt

RUN pip install -r /requirements.txt

WORKDIR /Sam_escritor

COPY ./sam_escribe.py /sam_escribe.py
COPY ./sam_escribe.py /sam_escribe.py

CMD [ "python", "/sam_escribe.py" ]
