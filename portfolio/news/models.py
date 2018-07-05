from django.db import models
from easy_thumbnails.fields import ThumbnailerImageField


class Article(models.Model):
    """
    This is the model for all of the articles that will be written in the news
    website.
    """
    title = models.CharField(max_length=128)
    subtitle = models.CharField(max_length=128)
    thumbnail = ThumbnailerImageField(upload_to='thumbnail', blank=True,
        null=True, resize_source=dict(size=(150, 150), crop="True"), max_length=255)
    author = models.CharField(max_length=128)
    image = models.ImageField(upload_to='news', blank=True,
        null=True, max_length=255)
    body = models.TextField()
    date = models.DateTimeField()

    def __str__(self):
        return self.title
