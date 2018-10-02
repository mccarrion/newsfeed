from django.test import TestCase
from django.urls import reverse
from django.utils import timezone

from newsfeed.news.models import Article


class ArticleModelTest(TestCase):

    def test_string_representation(self):
        page = Page(title="test title")
        self.assertEqual(str(page), page.title)
