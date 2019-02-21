# Pull base image
FROM gcr.io/google_appengine/python

# Create a virtualenv for app dependencies
RUN virtualenv -p python3 /env
ENV PATH /env/bin:$PATH

# Install dependencies
ADD requirements.txt /app/requirements.txt
RUN /env/bin/pip install --upgrade pip && /env/bin/pip install -r /app/requirements.txt
ADD . /app

CMD gunicorn -b :$PORT newsfeed.settings.wsgi

# Old Dockerfile
# Pull base image
# FROM python:3.6.1

# Set environment varibles
# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1
# ENV POSTGRES_DB postgres
# ENV POSTGRES_USER postgres
# ENV POSTGRES_PASSWORD postgres

# Create and set working directory
# RUN mkdir /app
# WORKDIR /app

# Copy contents of current directory into working directory
# ADD . /app/

# Install
# RUN pip3 install --upgrade pip
# RUN pip3 install -r requirements.txt
