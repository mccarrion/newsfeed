from rest_framework import serializers

from .models import Article
from newsfeed.users.models import User


class AuthorField(serializers.RelatedField):
	def to_representation(self, obj):
		data = obj.username
		return data

	def to_internal_value(self, id):
		return User.objects.get(id=id)


class ArticleSerializer(serializers.ModelSerializer):
    author = AuthorField(
    	queryset=User.objects.all(), many=True, required=True
    )
    class Meta:
        model = Article
        fields = ('title', 'subtitle', 'thumbnail', 'author',
                  'image', 'body', 'date', 'slug', 'subject')
