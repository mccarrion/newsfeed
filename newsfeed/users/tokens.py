import jwt

from rest_framework.authentication import BaseAuthentication

from .models import User

class JWTAuthentication(BaseAuthentication):
    def authenticate(self, request):
        auth_header = get_authorization_header(request).split()
        return token