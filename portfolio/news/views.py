from django.views.generic import ListView, DetailView

from .models import Article


class ArticleListView(ListView):
    """
    This shows the articles in a list on the home page.
    """
    queryset = Article.objects.all().order_by("-date")[:20]
    context_object_name = 'article_list'
    template_name = 'news/newsfeed.html'


class ArticleDetailView(DetailView):
    """
    This shows the full article when the user clicks on each individual article.
    """
    queryset = Article.objects.all()
    context_object_name = 'article'
    template_name = 'news/article.html'
