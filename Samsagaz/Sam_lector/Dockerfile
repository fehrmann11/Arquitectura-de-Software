FROM python:3.6.3

ENV SLACK_TOKEN=
ENV SLACK_SIGNING_SECRET=

COPY ./requirements.txt /requirements.txt

RUN pip install -r /requirements.txt

ENV PYTHONUNBUFFERED=1

WORKDIR /Sam_lector

COPY ./sam.py /sam.py

CMD [ "python", "/sam.py" ]