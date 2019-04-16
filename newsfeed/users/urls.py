from django.urls import include, path
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

from .auth import RegisterView
from .views import ProfileView


app_name = "users"
urlpatterns = [
    path('register/', RegisterView.as_view(), name='registration'),
    path('<username>/', ProfileView.as_view(), name='user_profile'),
    path('api-token-auth/', obtain_jwt_token, name='login'),
    path('api-token-refresh/', refresh_jwt_token, name='login_refresh'),
]
