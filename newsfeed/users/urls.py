from django.urls import include, path
from rest_framework.routers import DefaultRouter
from rest_framework_jwt import views

from .auth import RegisterView
from .views import ProfileView


app_name = "users"
urlpatterns = [
    path('register/', RegisterView.as_view(), name='registration'),
    path('<username>/', ProfileView.as_view(), name='user_profile'),
    path('login/', views.ObjtainJSONWebToken.as_view(), name='login'),
    path('login/refresh/', views.RefreshJSONWebToken.as_view(), name='login_refresh'),
]
