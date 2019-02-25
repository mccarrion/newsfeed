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
