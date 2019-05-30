from django.apps import apps
from django.test import TestCase

from djauth.apps import DjauthConfig


class AnalyzerConfigTest(TestCase):
    """
    Add auth configuration testcase
    """
    def test_apps(self):
        """
        Test app configuration
        """
        self.assertEqual(DjauthConfig.name, 'djauth')
        self.assertEqual(apps.get_app_config('djauth'.name, 'djauth'))