from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIRequestFactory

from newsfeed.news.models import Article
from newsfeed.news.views import ArticleViewSet


class ArticleViewTests(TestCase):

    def test_viewset(self):
        factory = APIRequestFactory()
        view = ArticleViewSet.as_view(actions={'get': 'retrieve'})
        article = Article(title="test title")
        article.save()

        request = factory.get(reverse('articles', args=(article.pk,)))
        response = view(request)
