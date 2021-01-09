FROM python:3.6.3

COPY ./requirements.txt /requirements.txt

RUN pip install -r /requirements.txt

ENV PYTHONUNBUFFERED=1

WORKDIR /Sam_buscador

COPY ./sam_wiki.py /sam_wiki.py

CMD [ "python", "/sam_wiki.py" ]
