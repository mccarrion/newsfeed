from django.test import TestCase

from newsfeed.news.models import Article


class ArticleViewTests(TestCase):

    def setUp(self):
        self.article = Article.objects.create(title="some title")

    def test_article_view(self):
        Article.objects.create(title="title", body="body")
        response = self.client.get('/')
        self.assertContains(response, "title")
        self.assertContains(response, "body")

    def test_article_list(self):
        Article.objects.create(title="title_one", body="body_one")
        Article.objects.create(title="title_two", body="body_two")
        response = self.client.get('/')
        self.assertContains(response, "title_one")
        self.assertContains(response, "body_one")
        self.assertContains(response, "title_two")
