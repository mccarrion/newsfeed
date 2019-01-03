from rest_framework import serializers

from .models import Article


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('title', 'subtitle', 'thumbnail', 'author',
                  'image', 'body', 'date', 'slug', 'subject')

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('title', 'subtitle', 'thumbnail', 'author',
                  'image', 'body', 'date', 'slug', 'subject')
