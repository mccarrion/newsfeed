"""
These are the local settings for this Django project.
"""

from .base import *

# Database
# https://docs.djangoproject.com/en/2.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'postgres',
        'USER': 'postgres',
        'HOST': 'postgres',
        'PORT': 5432,
    }
}

MEDIA_URL = '/media/'

STATIC_URL = '/static/'
