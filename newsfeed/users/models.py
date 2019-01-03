import uuid

from django.contrib.auth.models import AbstractUser
from django.urls import reverse
from django.db import models


# TODO: Work on defining varying levels of authentication.
# Figure out how the abstract model relates the the API library that
# is used for exposing the User authentication endpoints
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

# TODO: This model will be rolled into the User model and then differing levels
# of authentication will be developed to differentiate between Authors of news
# articles and Users who comment on articles.
# class Author(models.Model):
#     """
#     This class will create an author that will be tied to each article.
#     """
#     name = models.CharField(max_length=255)
#     title = models.CharField(max_length=255)
#     description = models.TextField()
#     photo = models.ImageField(upload_to='articles', blank=True,
#         null=True, max_length=255)
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#
#     def __str__(self):
#         return self.name
