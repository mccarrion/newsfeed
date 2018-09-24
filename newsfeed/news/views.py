from rest_framework import viewsets
from rest_framework.permissions import (IsAuthenticatedOrReadOnly,
                                        IsOwnerOrReadOnly)
from rest_framework.response import Response

from .models import Article
from .serializers import ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    """
    This is an API endpoint that provides 'list', 'create', 'retrieve',
    'update' and 'destroy' actions for the model.
    """
    queryset = Article.objects.all().order_by("-date")
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)
    #TODO: Add pagination from Django REST framework tools

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
