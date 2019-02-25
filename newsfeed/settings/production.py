"""
These are the production settings for this Django project.
"""
import logging

from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# SECURITY WARNING: If you deploy a Django app to production, make sure to set
# an appropriate host here.
# See https://docs.djangoproject.com/en/1.10/ref/settings/
ALLOWED_HOSTS = ['*']

# Additional apps for production

INSTALLED_APPS += [
    'gunicorn',
    'storages',
]

MIDDLEWARE_CLASSES = [
    'sslify.middleware.SSLifyMiddleware',
]

# Define thumbnail dimensions
THUMBNAIL_CACHE_DIMENSIONS = True

# Honor the 'X-Forwarded-Proto' header for request.is_secure()
SECURE_SSL_REDIRECT = True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

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
STATIC_URL = 'http://storage.googleapis.com/<PROJECT_ID>/static/'
MEDIA_URL = 'http://storage.googleapis.com/<PROJECT_ID>/media/'
ADMIN_MEDIA_PREFIX = STATIC_URL + 'admin/'
