from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (LoginView, LogoutView, PasswordChangeView,
    PasswordResetConfirmView, PasswordResetView, UserDetailsView)


app_name = "users"
urlpatterns = [
    # URLs without a token needed
    path(r'password/reset/', PasswordResetView.as_view(),
         name='rest_password_reset'),
    path(r'password/reset/confirm/', PasswordResetConfirmView.as_view(),
         name='rest_password_reset_confirm'),
    path(r'login/', LoginView.as_view(), name='rest_login'),

    # URLs that need a logged in user with a valid token
    path(r'logout/', LogoutView.as_view(), name='rest_logout'),
    path(r'user/', UserDetailsView.as_view(), name='rest_user_details'),
    path(r'password/change/', PasswordChangeView.as_view(),
         name='rest_password_change'),
]
