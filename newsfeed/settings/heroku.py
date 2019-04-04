"""
These are the production settings for this Django project.
"""


import logging

from .base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv('SECRET_KEY', default='7x*9_#61df+4xe2_%dz0k3*7!e&!3b20ql0s2y5607ow@5ichy')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: If you deploy a Django app to production, make sure to set
# an appropriate host here.
# See https://docs.djangoproject.com/en/dev/ref/settings/
ALLOWED_HOSTS = ['*']

CORS_ORIGIN_ALLOW_ALL = True

INSTALLED_APPS += [
    # Additional apps for production
    'gunicorn',
]

THUMBNAIL_CACHE_DIMENSIONS = True

# Database Configuration
import dj_database_url

DATABASES = {}

DATABASES['default'] = dj_database_url.config()
DATABASES['default']['CONN_MAX_AGE'] = 500

# Static file storage
STATIC_URL = 'http://storage.googleapis.com/newsfeed-django/static/'
MEDIA_URL = 'http://storage.googleapis.com/newsfeed-django/media/'
ADMIN_MEDIA_PREFIX = STATIC_URL + 'admin/'