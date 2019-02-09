import jwt

from rest_framework.authentication import BaseAuthentication

from .models import User

class JWTAuthentication(BaseAuthentication):
    def authenticate(self, request):
        auth_header = get_authorization_header(request).split()
        
        if not auth_header:
            return None
        
        if len(auth_header) == 1:
            return None
        
        elif len(auth_header) > 2:
            return None
        
        return token