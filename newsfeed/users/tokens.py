import jwt

from rest_framework.authentication import (
    BaseAuthentication, get_authorization_header
)

from .models import User

class JWTAuthentication(BaseAuthentication):
    def authenticate(self, request):
        auth = get_authorization_header(request).split()
        auth_header_prefix = 'token'
        
        if not auth:
            return None
        
        if len(auth) == 1:
            # No credentials provided, so this is invalid.
            return None
        elif len(auth) > 2:
            # Token string should not contain spaces
            return None

        prefix = auth[0].decode('utf-8')
        
        return self._authenticate_credentials(request, token)
    
    def _authenticate_credentials(self, request, token):
        pass
