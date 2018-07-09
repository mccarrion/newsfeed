from django.conf.urls import url

from .views import UserListView, UserRedirectView, UserDetailView, UserUpdateView

app_name = 'Users'

urlpatterns = [
    url(r'^$', UserListView.as_view(), name='list'),
    url(r'^~redirect/$', UserRedirectView.as_view(), name='redirect'),
    url(r'^(?P<username>[\w.@+-]+)/$', UserDetailView.as_view(), name='detail'),
    url(r'^~update/$', UserUpdateView.as_view(), name='update'),
]
