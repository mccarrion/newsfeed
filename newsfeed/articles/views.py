from django.utils import timezone
from rest_framework import generics, status, viewsets
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from .models import Article, Comment, Favorite
from .serializers import (
    ArticleSerializer, 
    CommentSerializer, 
    FavoriteSerializer
)
from newsfeed.core.helpers import IsOwnerOrReadOnly, MultipleFieldLookupMixin

# TODO: Completely alter the way articles are retrieved
# there should be one article list view that is filtered based
# on information passed in the requests
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


class ArticleDetailView(generics.RetrieveAPIView):
    """
    This gets a single article based on the article's slug. Slugs will have a
    constraint for uniqueness.
    """
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)
    lookup_field = 'slug'


class CommentsView(generics.GenericAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    lookup_url_kwarg = 'slug'
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

    # GET comments filtered by article
    def get(self, request, slug=None):
        #article = Article.objects.get(slug=slug)
        #comments = Comment.objects.filter(article=article)
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)
    
    # POST a comment based on user and article
    def post(self, request, slug=None):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.data
            article = Article.objects.get(slug=slug)
            user = request.user
            comment = Comment(
                body=data['body'], 
                user=user, 
                article=article
            )
            comment.save()
            request.data['id'] = comment.pk
            return Response(request.data, status=status.HTTP_201_CREATED)


class CommentListView(generics.ListCreateAPIView):
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
        data = request.data.get('comment', {})
        context = {'user': request.user}

        try:
            context['article'] = Article.objects.get(slug=slug)
        except Article.DoesNotExist:
            raise NotFound('An article with this slug does not exist.')

        serializer = self.serializer_class(data=data, context=context)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


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