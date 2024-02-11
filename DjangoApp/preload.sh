#!/usr/bin bash
cd /app/DjangoApp
apk add build-base
pip3 install -r requirements.txt

pip3 install gunicorn

python3 manage.py migrate
python3 manage.py collectstatic

gunicorn DjangoApp.wsgi -b 0.0.0.0:80