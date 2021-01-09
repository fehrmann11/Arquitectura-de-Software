FROM python:3.6.3

COPY ./requirements.txt /requirements.txt

RUN pip install -r /requirements.txt

ENV PYTHONUNBUFFERED=1

WORKDIR /Sam_calendario

COPY ./sam_calendario.py /sam_calendario.py

CMD [ "python", "/sam_calendario.py" ]