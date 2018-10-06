from django.db import models


class Page(models.Model):
    title = models.CharField(max_length = 128)
    sub_title = models.CharField(max_length = 128)
    image = models.ImageField(upload_to='about', blank=True,
                              null=True, max_length=255)
    body = models.TextField()
    date = models.DateTimeField()
    slug = models.SlugField(max_length=128, unique=True, blank=True)

    def __str__(self):
        return self.title
