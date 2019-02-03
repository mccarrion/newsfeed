from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (RegisterView, ProfileView)


app_name = "users"
urlpatterns = [
    path('<username>/', ProfileView.as_view(), name='user_profile'),
    path('signup/', RegisterView.as_view()),
]
