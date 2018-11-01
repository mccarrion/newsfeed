from rest_framework import viewsets
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import User
from .serializers import UserSerializer
from newsfeed.core.permissions import IsOwnerOrReadOnly


# TODO: Update views to match REST-Auth
# Link to repo: https://github.com/Tivix/django-rest-auth
class UserDetailView(RetrieveUpdateAPIView):
    """
    This is an API endpoint that provides 'list', 'create', 'retrieve',
    'update' and 'destroy' actions for the model.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)

    def get_object(self):
        return self.request.user

class LoginView(GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = LoginSerializer
    token_model = TokenModel

    @sensitive_post_parameters_m
    def dispatch(self, *args, **kwargs):
        return super(LoginView, self).dispatch(*args, **kwargs)

    def process_login(self):
        django_login(self.request, self.user)

    def get_response_serializer(self):
        if getattr(settings, 'REST_USE_JWT', False):
            response_serializer = JWTSerializer
        else:
            response_serializer = TokenSerializer
        return response_serializer
