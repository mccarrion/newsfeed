from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import User
from .serializers import UserSerializer
from newsfeed.core.permissions import IsOwnerOrReadOnly


# TODO: Update views to match REST-Auth
# Link to repo: https://github.com/Tivix/django-rest-auth
class UserViewSet(viewsets.ModelViewSet):
    """
    This is an API endpoint that provides 'list', 'create', 'retrieve',
    'update' and 'destroy' actions for the model.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
