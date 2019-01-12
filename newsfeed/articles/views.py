from rest_framework import generics, viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from .models import Article
from .serializers import ArticleSerializer
from newsfeed.core.permissions import IsOwnerOrReadOnly, MultipleFieldLookupMixin


class ArticleViewSet(viewsets.ModelViewSet):
    """
    This is an API endpoint that provides 'list', 'create', 'retrieve',
    'update' and 'destroy' actions for the model.
    """
    queryset = Article.objects.all().order_by("-date")
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ArticleDetailView(MultipleFieldLookupMixin, generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)
    # TODO: needing multiple lookup fields supposedly does not follow
    # RESTful design principles. May need to find a better way of doing things
    lookup_fields = ('subject', 'slug')


class SubjectListView(generics.ListAPIView):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        subject = self.kwargs['subject']
        return Article.objects.filter(subject=subject).order_by("-date")
