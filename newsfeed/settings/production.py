"""
These are the production settings for this Django project.
"""


import logging

from .base import *


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
AWS_ACCESS_KEY_ID = 'SECRET'
AWS_SECRET_ACCESS_KEY = 'SECRET'
AWS_STORAGE_BUCKET_NAME = 'SECRET'
AWS_REGION = 'SECRET'

DEFAULT_FILE_STORAGE = 'settings.utils.MediaRootS3BotoStorage'
STATICFILES_STORAGE = 'settings.utils.StaticRootS3BotoStorage'

STATIC_URL = 'https://%s.s3.amazonaws.com/static/' % AWS_STORAGE_BUCKET_NAME
MEDIA_URL = 'https://%s.s3.amazonaws.com/media/' % AWS_STORAGE_BUCKET_NAME
ADMIN_MEDIA_PREFIX = STATIC_URL + 'admin/'
