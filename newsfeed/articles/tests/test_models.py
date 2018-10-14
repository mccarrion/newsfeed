from django.test import TestCase
from django.urls import reverse
from django.utils import timezone

from newsfeed.articles.models import Article


class ArticleModelTest(TestCase):

    def test_string_representation(self):
        article = Article(title="test title")
        self.assertEqual(str(article), article.title)
