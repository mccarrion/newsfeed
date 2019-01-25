from rest_framework import viewsets
from rest_framework.generics import GenericAPIView, RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny

from .models import User
from .serializers import UserSerializer
from newsfeed.core.helpers import IsOwnerOrReadOnly


# TODO: Update views to match REST-Auth
# Link to repo: https://github.com/Tivix/django-rest-auth
class UserProfileView(RetrieveUpdateAPIView):
    """
    This is an API endpoint that provides 'list', 'create', 'retrieve',
    'update' and 'destroy' actions for the model.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user
