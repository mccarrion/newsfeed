from rest_framework import serializers

from .models import User


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        min_length=8, 
        max_length=128, 
        write_only=True
    )
    token = serializers.CharField(read_only=True)

    class Meta:
        model = User
        fields = ['email', 'username', 'password', 'token']
    
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=255)
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        pass


class UserSerializer(serializers.ModelSerializer):
    """
    This is the serializer for the User data.
    """
    class Meta:
        model = User
        fields = ('username', 'email', 'name')
