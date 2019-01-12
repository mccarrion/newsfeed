from django.urls import include, path, re_path
from rest_framework.routers import DefaultRouter

from .views import ArticleDetailView, ArticleViewSet, SubjectListView

router = DefaultRouter()
router.register(r'viewset', ArticleViewSet)

#TODO: May need to make custom urls
app_name = "articles"
urlpatterns = [
    path(r'', include(router.urls)),
    re_path(r'(?P<subject>.+)/(?P<slug>.+)/$', ArticleDetailView.as_view()),
    re_path(r'(?P<subject>.+)/$', SubjectListView.as_view()),
]
