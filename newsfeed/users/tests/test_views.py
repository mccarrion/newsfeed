from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIRequestFactory

from newsfeed.users.models import User
from newsfeed.users.views import UserViewSet


class UserViewTests(TestCase):

    def test_viewset(self):
        factory = APIRequestFactory()
        view = UserViewSet.as_view(actions={'get': 'retrieve'})
        user = User(title="test title")
        user.save()

        request = factory.get(reverse('user-detail', args=(user.pk,)))
        response = view(request)
