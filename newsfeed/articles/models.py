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
    thumbnail = ThumbnailerImageField(
        upload_to='thumbnail', 
        blank=True,
        null=True, 
        resize_source=dict(size=(150, 150), crop="True"), 
        max_length=255
    )
    author = models.ManyToManyField(User)
    image = models.ImageField(upload_to='articles', blank=True,
        null=True, max_length=255)
    body = models.TextField()
    date = models.DateTimeField(default=timezone.now)
    slug = models.SlugField(max_length=128, unique=True, blank=True)

    # This is for the headline feed. The idea is that an Editor in the newsroom
    # would set this value to true for selected articles and it would
    # lead to the article becoming a part of the headline
    whats_news = models.BooleanField(default=False)

    # This list will be used to break up the news website into subsections
    # based on what subjects the publisher decides to include
    TECH = 'tech'
    BUSINESS = 'business'
    WORLD = 'world'
    SCIENCE = 'science'

    # Using an array of tuples to allow publisher to define subjects
    # to include in their news website.
    SUBJECT_CHOICES = (
        (TECH, 'Tech'),
        (BUSINESS, 'Business'),
        (WORLD, 'World'),
        (SCIENCE, 'Science'),
    )

    subject = models.CharField(
        max_length=9,
        choices=SUBJECT_CHOICES,
        default='science'
    )

    #TODO: Add a check for uniqueness
    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class Comment(models.Model):
    """
    This model stores the user's comments.
    """
    body = models.TextField(max_length=1024)
    date = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    article = models.ForeignKey(Article, on_delete=models.CASCADE)


class Favorite(models.Model):
    """
    This is a model for tracking articles that have been favorited by 
    various users. The tracking will be done through a boolean where when the 
    article is favorited, the boolean will be marked true.
    """
    favorited = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
