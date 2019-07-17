from django.utils import timezone
from rest_framework import generics, status, viewsets
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from .models import Article, Comment
from .serializers import (
    ArticleSerializer, 
    CommentSerializer
)
from newsfeed.core.helpers import IsOwnerOrReadOnly, MultipleFieldLookupMixin


class ArticleListView(generics.ListAPIView):
    """
    This API endpoint is designed to create a list of articles broken up by the
    subject that each article contains.
    """
    lookup_url_kwarg = 'subject'
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)

    def get_queryset(self):
        subject = self.kwargs.get(self.lookup_url_kwarg)
        
        # Control flow for handling subject in path
        if subject == None:
            queryset = Article.objects.all().order_by("-date")
        else:
            queryset = Article.objects.filter(subject=subject)
        
        return queryset


class ArticleDetailView(generics.RetrieveAPIView):
    """
    This gets a single article based on the article's slug. Slugs will have a
    constraint for uniqueness.
    """
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)
    lookup_field = 'slug'


class CommentsView(generics.ListCreateAPIView):
    """
    This is a controller for users to create, read, and alter comments.
    """
    lookup_field = 'article__slug'
    lookup_url_kwarg = 'slug'
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Comment.objects.select_related(
       'article', 'user'
    )
    serializer_class = CommentSerializer

    def filter_queryset(self, queryset):
       filters = {
           self.lookup_field: self.kwargs[self.lookup_url_kwarg]
       }

       return queryset.filter(**filters)
    
    def create(self, request, slug=None):
        data = request.data
        context = {'user': request.user}

        try:
            context['article'] = Article.objects.get(slug=slug)
        except Article.DoesNotExist:
            raise NotFound('An article with this slug does not exist.')

        serializer = self.serializer_class(data=data, context=context)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class FavoritesView(generics.GenericAPIView):
    lookup_field = 'article__slug'
    lookup_url_kwarg = 'slug'
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Article.objects.all()
    # queryset = Article.objects.select_related(
    #     'article', 'user'
    # )
    serializer_class = ArticleSerializer

    # def filter_queryset(self):
    #     filters = {
    #         self.lookup_field: self.kwargs[self.lookup_url_kwarg]
    #     }

    #     return queryset.filter(**filters)
    
    def put(self, request, slug=None):
        user = self.request.user

        try:
            article = Article.objects.get(slug=slug)
        except Article.DoesNotExist:
            raise NotFound('Article with this slug not found')
        
        user.favorite(article)

        serializer = self.serializer_class(article, context=serializer_context)

        return Response(serializer.data, status=status.HTTP_201_CREATED)