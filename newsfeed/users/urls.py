from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (SignUpView, UserProfileView)


app_name = "users"
urlpatterns = [
    path('$/', UserProfileView.as_view(), name='user_profile'),
    path('signup/', SignUpView.as_view()),
]
