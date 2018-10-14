from django.db import models
from django.utils import timezone
from django.utils.text import slugify
from easy_thumbnails.fields import ThumbnailerImageField

from newsfeed.users.models import User


# TODO: This model will be rolled into the User model and then differing levels
# of authentication will be developed to differentiate between Authors of news
# articles and Users who comment on articles.
class Author(models.Model):
    """
    This class will create an author that will be tied to each article.
    """
    name = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = models.TextField()
    photo = models.ImageField(upload_to='articles', blank=True,
        null=True, max_length=255)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


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
    BUSINESS = 'business'
    ARTS = 'arts'
    TECH = 'tech'
    SPORTS = 'sports'
    LIFESTYLE = 'lifestyle'
    CULTURE = 'culture'
    TRAVEL = 'travel'
    OPINION = 'opinion'
    POLITICS = 'politics'
    NATIONAL = 'national'
    WORLD = 'world'
    SUBJECT_CHOICES = (
        (BUSINESS, 'Business'),
        (ARTS, 'Arts'),
        (TECH, 'Tech'),
        (SPORTS, 'Sports'),
        (LIFESTYLE, 'Lifestyle'),
        (CULTURE, 'Culture'),
        (TRAVEL, 'Travel'),
        (OPINION, 'Opinion'),
        (POLITICS, 'Politics'),
        (NATIONAL, 'National'),
        (WORLD, 'World'),
    )
    subject = models.CharField(
        max_length=9,
        choices=SUBJECT_CHOICES,
        default='arts'
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
