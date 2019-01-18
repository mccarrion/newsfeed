"""
These are the local settings for this Django project.
"""
import os

from .base import *


# SECURITY WARNING: keep the secret key used in production secret!
# NOTE: This will need to be moved to a .env file or something of that
# nature in the near future. Also, key needs to be changed
SECRET_KEY = os.envrion.get('SECRET_KEY', default='7x*9_#61df+4xe2_%dz0k3*7!e&!3b20ql0s2y5607ow@5ichy')

DEBUG = True

# Database
# https://docs.djangoproject.com/en/2.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('POSTGRES_DB', 'postgres'),
        'USER': os.getenv('POSTGRES_USER', 'postgres'),
        'PASSWORD': os.getenv('POSTGRES_PASSWORD', 'postgres'),
        'HOST': 'postgres',
        'PORT': 5432
    }
}

# This is a whitelist of who is allowed to make HTTP
# requests on the backend
CORS_ORIGIN_ALLOW_ALL = True

CORS_ORIGIN_WHITELIST = (
    'localhost:3000'
)

EMAIL_BACKEND = 'django.core.mail.backends.filebased.EmailBackend'
EMAIL_FILE_PATH = os.path.join(BASE_DIR, 'newsfeed/temp/email')

MEDIA_URL = '/media/'

STATIC_URL = '/static/'
