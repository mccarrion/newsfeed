from django.test import TestCase

from newsfeed.news.models import Article


class ArticleViewTests(TestCase):

    def setUp(self):
        self.article = Article.objects.create(title="some title")

    def test_article_view(self):
        Article.objects.create(title="title", description="description")
        response = self.client.get('/')
        self.assertContains(response, "title")
        self.assertContains(response, "description")

    def test_article_list(self):
        Article.objects.create(title="title_one", description="description_one")
        Article.objects.create(title="title_two", description="description_two")
        response = self.client.get('/')
        self.assertContains(response, "title_one")
        self.assertContains(response, "description_one")
        self.assertContains(response, "title_two")
