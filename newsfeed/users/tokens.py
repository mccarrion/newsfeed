import jwt

from rest_framework.authentication import (
    BaseAuthentication, get_authorization_header
)
from rest_framework.exceptions import AuthenticationFailed

from .models import User

# TODO: Authentication will adhere closely to existing open source backends 
# until my understanding of how, when, and why JWT are encoded and decoded
# Check out realworld.io. Code will evolve beyond this starting point.
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
        token = auth[1].decode('utf-8')

        if prefix.lower() != auth_header_prefix:
            return None
        
        return self._authenticate_credentials(request, token)
    
    def _authenticate_credentials(self, request, token):
        try:
            payload = jwt.decode(token, settings.SECRET_KEY)
        except:
            msg = 'Authentication error, token could not be decoded.'
            raise AuthenticationFailed(msg)
        
        try:
            user = User.objects.get(pk=payload['id'])
        except User.DoesNotExist:
            msg = 'No user exists for this token.'
            raise AuthenticationFailed(msg)
        
        return (user, token)
