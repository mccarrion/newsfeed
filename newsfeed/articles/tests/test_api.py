import json

from django.urls import include, path, reverse
from django.utils import timezone
from rest_framework import status
from rest_framework.test import APITestCase, URLPatternsTestCase

from newsfeed.articles.models import Article


class ArticleAPITests(APITestCase, URLPatternsTestCase):
    urlpatterns = [
        path('api/', include('newsfeed.articles.urls')),
    ]

    def setUp(self):
        Article.objects.create(
            title='test title',
            subtitle='test subtitle',
            body='test body',
            date=timezone.now()
        )

    def test_create_account(self):
        """
        Ensure we can create new object.
        """
        url = reverse('articles:article-list')
        data = {
            'title':'NewStory',
            'subtitle':'AmazingNews',
            'body':'GreatStory',
            'date':"2012-04-23T18:25:43.511Z"
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Page.objects.count(), 1)
        self.assertEqual(Page.objects.get().title, 'AboutUs')

    def test_url_pattern(self):
        """
        Ensure that the views exist at the url pattern provided.
        """
        article = Article.objects.get(title='test title')
        url = reverse('articles:article-list')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
