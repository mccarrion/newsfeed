from django.test import TestCase

from newsfeed.about.models import Page


class PageModelTest(TestCase):

    def test_string_representation(self):
        page = Page(title="test title")
        self.assertEqual(str(page), page.title)
