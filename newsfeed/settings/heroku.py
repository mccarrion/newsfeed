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

INSTALLED_APPS += [
    # Additional apps for production
    'gunicorn',
    'storages',
]

THUMBNAIL_CACHE_DIMENSIONS = True

# Database Configuration
import dj_database_url

DATABASES = {}

DATABASES['default'] = dj_database_url.config()
DATABASES['default']['CONN_MAX_AGE'] = 500

# Static file storage
SECRET_KEY = os.getenv('SECRET_KEY')

# Static file storage and AWS Configuration
AWS_ACCESS_KEY_ID = os.getenv('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.getenv('AWS_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = os.getenv('AWS_STORAGE_BUCKET_NAME')
AWS_REGION = os.getenv('AWS_REGION')

DEFAULT_FILE_STORAGE = 'newsfeed.settings.utils.MediaRootS3BotoStorage'
STATICFILES_STORAGE = 'newsfeed.settings.utils.StaticRootS3BotoStorage'

STATIC_URL = 'https://%s.s3.amazonaws.com/static/' % AWS_STORAGE_BUCKET_NAME
MEDIA_URL = 'https://%s.s3.amazonaws.com/media/' % AWS_STORAGE_BUCKET_NAME
ADMIN_MEDIA_PREFIX = STATIC_URL + 'admin/'
