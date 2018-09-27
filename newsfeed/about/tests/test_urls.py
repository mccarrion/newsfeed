from django.test import TestCase

from newsfeed.about.models import Page


class PageUrlTests(TestCase):

    def setUp(self):
        self.page = Page.objects.create(title="some title")

    def test_title_in_page(self):
        response = self.page.get(self.page.get_absolute_url())
        self.assertContains(response, self.page.title)

    def test_description_in_page(self):
        response = self.page.get(self.page.get_absolute_url())
        self.assertContains(response, self.page.title)
