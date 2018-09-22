from django.urls import include, path

from . import views

urlpatterns = [
    path(r'', views.AboutIndexView.as_view()),
    path(r'<slug:slug>', views.PageDetailView.as_view()),
]
