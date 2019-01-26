from django.urls import include, path, re_path

from allauth.account.views import confirm_email


urlpatterns = [
    re_path(r'^rest-auth/', include('rest_auth.urls')),
    re_path(r'^rest-auth/registration/account-confirm-email/(?P<key>\w+)/$',confirm_email, name='confirm_email'),
    re_path(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    re_path(r'^accounts/', include('allauth.urls')),
    # re_path(r'^', include('django.contrib.auth.urls')),
]