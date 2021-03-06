import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse

# from newsfeed.articles.models import Article


# TODO: Work on defining varying levels of authentication.
# Figure out how user data is exposed from User model
class User(AbstractUser):
    """
    This is an extendable model that will represent users across the website.
    """
    name = models.CharField(blank=True, max_length=255)
    unique_id = models.UUIDField(
        default=uuid.uuid4, 
        editable=False,
        unique=True
    )
    favorites = models.ManyToManyField('articles.Article')

    def __str__(self):
        return self.username

    def get_absolute_url(self):
        return reverse('users:detail', kwargs={'username': self.username})

    def is_favorited(self, article):
        return self.favorites.filter(pk=article.pk).exists()

    def favorite(self, article):
        if self.favorites.filter(pk=article.pk).exists():
            self.favorites.remove(article)
        else:
            self.favorites.add(article)
