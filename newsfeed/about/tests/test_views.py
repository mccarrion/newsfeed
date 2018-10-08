from django.test import TestCase
from django.urls import reverse
from django.utils import timezone
from rest_framework.test import APIRequestFactory

from newsfeed.about.models import Page
from newsfeed.about.views import PageViewSet


class PageViewTests(TestCase):

    def test_viewset(self):
        factory = APIRequestFactory()
        view = PageViewSet.as_view(actions={'get': 'retrieve'})
        page = Page(
            title="test title",
            sub_title="test subtitle",
            body="test body",
            date=timezone.now()
        )
        page.save()

        request = factory.get(reverse('about:page-detail', args=(page.pk,)))
        response = view(request)
