from django.urls import include, path, reverse
from django.utils import timezone
from rest_framework import status
from rest_framework.test import APITestCase, URLPatternsTestCase

from newsfeed.about.models import Page


class PageAPITests(APITestCase, URLPatternsTestCase):
    urlpatterns = [
        path('api/', include('newsfeed.about.urls')),
    ]

    def setUp(self):
        Page.objects.create(
            title='test title',
            sub_title='test subtitle',
            body='test body',
            date=timezone.now()
        )

    def test_create_page(self):
        """
        Ensure that we can create a new page.
        """
        url = reverse('about:page-list')
        data = {
            'title':'AboutUs',
            'sub_title':'OurJourney',
            'body':'WhoWeAre',
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
        page = Page.objects.get(title='test title')
        url = reverse('about:page-list')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
