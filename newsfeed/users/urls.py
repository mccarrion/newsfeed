from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (UserProfileView)


app_name = "users"
urlpatterns = [
    path('rest-auth/', include('rest_auth.urls')),
    path('user/', UserProfileView.as_view(), name='user_profile'),
]
