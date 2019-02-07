import jwt

from rest_framework.authentication import BaseAuthentication

from .models import User

class JWTAuthentication(BaseAuthentication):
    pass