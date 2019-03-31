"""
These are the production settings for this Django project.
"""
import logging

from .base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: If you deploy a Django app to production, make sure to set
# an appropriate host here.
# See https://docs.djangoproject.com/en/dev/ref/settings/
ALLOWED_HOSTS = ['*']

CORS_ORIGIN_ALLOW_ALL = True

# Define thumbnail dimensions
THUMBNAIL_CACHE_DIMENSIONS = True

# Database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'newsfeed',
        'USER': os.getenv('DATABASE_USER'),
        'PASSWORD': os.getenv('DATABASE_PASSWORD'),
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}

# Static file storage
STATIC_URL = 'http://storage.googleapis.com/newsfeed-django/static/'
MEDIA_URL = 'http://storage.googleapis.com/newsfeed-django/media/'
ADMIN_MEDIA_PREFIX = STATIC_URL + 'admin/'
