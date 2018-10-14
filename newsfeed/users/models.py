import uuid

from django.contrib.auth.models import AbstractUser
from django.urls import reverse
from django.db import models


# TODO: Work on defining varying levels of authentication.
class User(AbstractUser):
    """
    This is an extendable model that will represent users across the website.
    """
    name = models.CharField(blank=True, max_length=255)
    unique_id = models.UUIDField(default=uuid.uuid4, editable=False,
                                 unique=True)

    def __str__(self):
        return self.username

    def get_absolute_url(self):
        return reverse('users:detail', kwargs={'username': self.username})
