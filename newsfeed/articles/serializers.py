from rest_framework import serializers

from .models import Article, Comment, Favorite
from hitcount.models import HitCount
from newsfeed.users.models import User


class AuthorField(serializers.RelatedField):
	def to_representation(self, obj):
		data = obj.username
		return data

	def to_internal_value(self, id):
		return User.objects.get(id=id)


class HitCountField(serializers.RelatedField):
	def to_representation(self, obj):
		data = obj.hits
		return data

	def to_internal_value(self, id):
		return HitCount.objects.get(id=id)


class ArticleSerializer(serializers.ModelSerializer):
    author = AuthorField(
    	queryset=User.objects.all(), many=True, required=True
    )
    hit_count = HitCountField(
    	queryset=HitCount.objects.all()
    )
    class Meta:
        model = Article
        fields = (
            'title', 
            'subtitle', 
            'thumbnail', 
            'author', 
            'hit_count', 
            'image', 
            'body', 
            'date', 
            'slug', 
            'whats_news',
            'subject'
        )


class CommentSerializer(serializers.ModelSerializer):
    user = serializers.RelatedField(read_only=True)

    class Meta:
        model = Comment
        fields = ('body', 'date', 'user', 'article')
    
    def create(self, validated_data):
        article = self.context['article']
        user = self.context['user']

        return Comment.objects.create(
            article=article, user=user, **validated_data
        )

    def update(self, instance, validated_data):
        instance.body = validated_data.get('body', instance.body)
        instance.date = validated_data.get('date', instance.date)
        instance.save()
        return instance


class FavoriteSerializer(serializers.ModelSerializer):
    user = serializers.RelatedField(source='user', read_only=True)

    class Meta:
        model = Favorite
        fields = ('favorited', 'user', 'article')

    def create(self, validated_data):
        article = self.context['article']
        user = self.context['user']

        return Favorite.objects.create(
            article=article, user=user, **validated_data
        )

    def update(self, instance, validated_data):
        instance.favorited = validated_data.get('favorited', instance.favorited)
        instance.save()
        return instance
