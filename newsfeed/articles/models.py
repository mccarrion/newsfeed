from django.db import models
from django.utils import timezone
from django.utils.text import slugify
from easy_thumbnails.fields import ThumbnailerImageField

from newsfeed.users.models import User


class Article(models.Model):
    """
    This is the model for all of the articles that will be written in the news
    website.
    """
    title = models.CharField(max_length=128)
    subtitle = models.CharField(max_length=128)
    thumbnail = ThumbnailerImageField(upload_to='thumbnail', blank=True,
        null=True, resize_source=dict(size=(150, 150), crop="True"), max_length=255)
    author = models.ManyToManyField(Author)
    image = models.ImageField(upload_to='articles', blank=True,
        null=True, max_length=255)
    body = models.TextField()
    date = models.DateTimeField(default=timezone.now)
    slug = models.SlugField(max_length=128, unique=True, blank=True)

    # This list will be used to break up the news website into subsections
    # based on what subjects the publisher decides to include
    TECH = 'tech'
    BUSINESS = 'business'
    WORLD = 'world'
    SCIENCE = 'science'

    # Using an array of tuples to allow publisher to define subjects
    # to include in their news website.
    SUBJECT_CHOICES = [
        (TECH, 'Tech'),
        (BUSINESS, 'Business'),
        (WORLD, 'World'),
        (SCIENCE, 'Science'),
    ]

    subject = models.CharField(
        max_length=9,
        choices=SUBJECT_CHOICES,
        default='science'
    )

    def get_absolute_url(self):
        kwargs = {
            'year': self.date.year,
            'month': self.date.strftime('%b').lower(),
            'day': self.date.strftime('%d').lower(),
            'slug': self.slug,
        }

    #TODO: Add a check for uniqueness
    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
