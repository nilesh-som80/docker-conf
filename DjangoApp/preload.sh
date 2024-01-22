python manage.py migrate
gunicorn DjangoApp.wsgi -b 0.0.0.0:80