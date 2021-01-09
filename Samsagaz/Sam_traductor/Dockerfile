FROM python:3.6.3

COPY ./requirements.txt /requirements.txt

RUN pip install --upgrade pip

RUN pip install -r /requirements.txt

ENV PYTHONUNBUFFERED=1

WORKDIR /Sam_traductor

COPY ./sam_traduce.py /sam_traduce.py

CMD [ "python", "/sam_traduce.py" ]
