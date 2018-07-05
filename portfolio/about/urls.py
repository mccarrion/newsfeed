from django.urls import include, path

from . import views

urlpatterns = [
    path(r'', views.AboutIndexView.as_view()),
    path(r'(?P<pk>\d+)', views.PageDetailView.as_view()),
]
