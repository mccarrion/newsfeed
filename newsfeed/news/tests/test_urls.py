from django.test import TestCase

from newsfeed.news.models import Article


class ArticleUrlTests(TestCase):

    def setUp(self):
        self.article = Article.objects.create(title="some title")

    def test_title_in_article(self):
        response = self.article.get(self.article.get_absolute_url())
        self.assertContains(response, self.article.title)

    def test_description_in_article(self):
        response = self.article.get(self.article.get_absolute_url())
        self.assertContains(response, self.article.title)
