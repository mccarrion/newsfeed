from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import ProfileView


app_name = "users"
urlpatterns = [
    path('<username>/', ProfileView.as_view(), name='user_profile'),
]
