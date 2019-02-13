import jwt

from rest_framework.authentication import (
    BaseAuthentication, get_authorization_header
)

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
        
        return self._authenticate_credentials(request, token)
    
    def _authenticate_credentials(self, request, token):
        pass
