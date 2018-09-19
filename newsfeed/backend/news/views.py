from django.core.paginator import Paginator
from rest_framework import viewsets

from .models import Article
from .serializers import ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    """
    This is an API endpoint that allows articles to be viewed.
    """
    queryset = Article.objects.all().order_by("-date")
    serializer_class = ArticleSerializer
    paginate_by = 10

class ArticleDetailView(viewsets.ModelViewSet):
    """
    API endpoint that is a detail view for an Article.
    """
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


# These are the original views. They are now being deprecated as they get
# replaced by views based on the Django Rest Framework

# class ArticleListView(ListView):
#     """
#     This shows the articles in a list on the home page.
#     """
#     queryset = Article.objects.all().order_by("-date")
#     context_object_name = 'article_list'
#     paginate_by = 10
#     template_name = 'news/newsfeed.html'
#
#
# class ArticleDetailView(DetailView):
#     """
#     This shows the full article when the user clicks on each individual article.
#     """
#     queryset = Article.objects.all()
#     context_object_name = 'article'
#     template_name = 'news/article.html'
