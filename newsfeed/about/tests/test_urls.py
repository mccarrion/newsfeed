from django.urls import include, path, reverse
from rest_framework.test import APITestCase, URLPatternsTestCase


class ArticleUrlTests(APITestCase, URLPatternsTestCase):
    urlpatterns = [
        path('api/', include('api.urls')),
    ]

    def test_create_account(self):
        """
        Ensure we can create new object.
        """
        url = reverse('')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
