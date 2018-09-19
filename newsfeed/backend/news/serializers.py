from rest_framework import serializers

from .models import Author, Article


class ArticleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Article
        fields = ('title', 'subtitle', 'thumbnail', 'author',
                  'image', 'body', 'date', 'slug')
