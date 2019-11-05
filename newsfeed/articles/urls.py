from django.urls import include, path, re_path

from .views import (
    ArticleDetailView, 
    ArticleListView,
    CommentsView,
    FavoritedView
)


app_name = "articles"
urlpatterns = [
    #Article list handles two paths now
    path(r'', ArticleListView.as_view(), name='articles'),
    re_path(r'feed/(?P<subject>.+)/$', ArticleListView.as_view()),
    re_path(r'(?P<slug>.+)/comments/$', CommentsView.as_view()),
    re_path(r'(?P<slug>.+)/favorited/$', FavoritedView.as_view()),
    re_path(r'(?P<slug>.+)/$', ArticleDetailView.as_view()),
]
