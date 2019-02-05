from rest_framework import generics, viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from .models import Article
from .serializers import ArticleSerializer
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
    serializer_class = ArticleSerializer

    def get_queryset(self):
        subject = self.kwargs['subject']
        return Article.objects.filter(subject=subject).order_by("-date")


class ArticleDetailView(MultipleFieldLookupMixin, generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)
    # TODO: needing multiple lookup fields supposedly does not follow
    # RESTful design principles. May need to find a better way of doing things
    lookup_fields = ('subject', 'slug')
