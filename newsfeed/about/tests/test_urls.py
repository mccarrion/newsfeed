from django.urls import include, path, reverse
from rest_framework import status
from rest_framework.test import APITestCase, URLPatternsTestCase


class ArticleUrlTests(APITestCase, URLPatternsTestCase):
    urlpatterns = [
        path('api/', include('newsfeed.about.urls')),
    ]

    def test_url_pattern(self):
        """
        Ensure that the views exist at the url pattern provided.
        """
        url = reverse('about')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
