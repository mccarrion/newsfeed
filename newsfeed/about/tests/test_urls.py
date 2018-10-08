from django.urls import include, path, reverse
from django.utils import timezone
from rest_framework import status
from rest_framework.test import APITestCase, URLPatternsTestCase

from newsfeed.about.models import Page


class PageUrlTests(APITestCase, URLPatternsTestCase):
    urlpatterns = [
        path('api/', include('newsfeed.about.urls')),
    ]

    def test_url_pattern(self):
        """
        Ensure that the views exist at the url pattern provided.
        """
        page = Page(
            title="test title",
            sub_title="test subtitle",
            body="test body",
            date=timezone.now()
        )
        page.save()
        url = reverse('about:page-list')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
