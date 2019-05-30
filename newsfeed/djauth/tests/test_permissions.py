from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient


class PermissionsTest(TestCase):
    """
    Test if permissions work correctly
    """
    def setUp(self):
        """
        Set up function for testcase
        """