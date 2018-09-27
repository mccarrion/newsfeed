from django.test import TestCase

from newsfeed.about.models import Page


class PageViewTests(TestCase):

    def setUp(self):
        self.page = Page.objects.create(title="some title")

    def test_first_page(self):
        Page.objects.create(title="title", description="description")
        response = self.client.get('/')
        self.assertContains(response, "title")
        self.assertContains(response, "description")

    def test_two_pages(self):
        Page.objects.create(title="title_one", description="description_one")
        Page.objects.create(title="title_two", description="description_two")
        response = self.client.get('/')
        self.assertContains(response, "title_one")
        self.assertContains(response, "description_one")
        self.assertContains(response, "title_two")
