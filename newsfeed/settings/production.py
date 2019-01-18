"""
These are the production settings for this Django project.
"""
import logging

from .base import *

SECRET_KEY = os.environ.get('SECRET_KEY')

DEBUG = False

ALLOWED_HOSTS = ['*']

INSTALLED_APPS += [
    # Additional apps for production
    'gunicorn',
    'storages',
]

MIDDLEWARE_CLASSES = [
    'sslify.middleware.SSLifyMiddleware',
]

THUMBNAIL_CACHE_DIMENSIONS = True

# Honor the 'X-Forwarded-Proto' header for request.is_secure()
SECURE_SSL_REDIRECT = True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# Database Configuration
import dj_database_url

DATABASES = {}

DATABASES['default'] = dj_database_url.config()
DATABASES['default']['CONN_MAX_AGE'] = 500

# Static file storage and AWS Configuration
# NOTE: These keys need to be kept outside of version control
# will work on how these keys will be stored
AWS_ACCESS_KEY_ID = os.environ.get('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = os.environ.get('AWS_STORAGE_BUCKET_NAME')
AWS_REGION = os.environ.get('AWS_REGION')

DEFAULT_FILE_STORAGE = 'settings.utils.MediaRootS3BotoStorage'
STATICFILES_STORAGE = 'settings.utils.StaticRootS3BotoStorage'

STATIC_URL = 'https://%s.s3.amazonaws.com/static/' % os.environ.get('AWS_STORAGE_BUCKET_NAME')
MEDIA_URL = 'https://%s.s3.amazonaws.com/media/' % os.environ.get('AWS_STORAGE_BUCKET_NAME')
ADMIN_MEDIA_PREFIX = STATIC_URL + 'admin/'
