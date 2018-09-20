from django.core.urlresolvers import reverse
from django.test import TestCase
from django.utils import timezone

from newsfeed.news.models import Article


class ArticleTest(TestCase):

    def create_article(self, title="test_article", subtitle="test_subtitle",
        thumbnail="test_thumbnail", author="test_author", image="test_image",
        body="test_body", slug="test_slug", subject="test_subject"):

        return Article.objects.create(title=title, subtitle=subtitle,
            thumbnail=thumbnail, author=author, image=image, body=body,
            slug=slug, subject=subject)

    def test_article_creation(self):
        new_article = self.create_article()
        self.assertTrue(isinstance(new_article, Article))
        self.assertEqual(new_article.__unicode__(), new_article.title)

    def test_article_list_view(self):
        new_article = self.create_article()
        url = reverse("article.views.article")
        resp = self.client.get(url)

        self.assertEqual(resp.status_code, 200)
        self.assertIn(new_article.title, resp.content)
