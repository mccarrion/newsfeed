from rest_framework import generics, viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from .models import Article, Comment, Favorite
from .serializers import (
    ArticleSerializer, 
    CommentSerializer, 
    FavoriteSerializer
)
from newsfeed.core.helpers import IsOwnerOrReadOnly, MultipleFieldLookupMixin


class ArticleListView(generics.ListAPIView):
    """
    This API endpoint lists all articles ever created by order of date created.
    Only can perform GET HTTP requests on this endpoint.
    """
    queryset = Article.objects.all().order_by("-date")
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)
    

class SubjectListView(generics.ListAPIView):
    """
    This API endpoint is designed to create a list of articles broken up by the
    subject that each article contains.
    """
    lookup_url_kwarg = 'subject'
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)

    def get_queryset(self):
        subject = self.kwargs.get(self.lookup_url_kwarg)
        queryset = Article.objects.filter(subject=subject)
        return queryset


class ArticleDetailView(MultipleFieldLookupMixin, generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)
    # TODO: needing multiple lookup fields supposedly does not follow
    # RESTful design principles. May need to find a better way of doing things
    lookup_fields = ('subject', 'slug')


class CommentListView(generics.ListCreateAPIView):
    lookup_field = 'article__slug'
    lookup_url_kwarg = 'slug'
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Comment.objects.select_related(
        'article'
    )
    serializer_class = CommentSerializer

    def filter_queryset(self, queryset):
        filters = {
            self.lookup_field: self.kwargs[self.lookup_url_kwarg]
        }

        return queryset.filter(**filters)


class FavoriteListView(generics.ListAPIView):
    lookup_field = 'article__slug'
    lookup_url_kwarg = 'slug'
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Favorite.objects.select_related(
        'article'
    )
    serializer_class = FavoriteSerializer

    def get_queryset(self):
        return Article.objects.filter(favorite__favorited=True)