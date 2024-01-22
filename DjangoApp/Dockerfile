FROM python:slim-buster

 # The Rasa SDK image runs as non-root user by default. Hence, you have to switch
 # back to the `root` user if you want to install additional dependencies
RUN apt-get -y update && apt-get install -y g++
WORKDIR /app
COPY . /app
RUN pip3 install -r requirements.txt
RUN pip3 install gunicorn
VOLUME /app

CMD bash /app/preload.sh
