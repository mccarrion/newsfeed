from django.urls import include, path, re_path
from rest_framework.routers import DefaultRouter

from .views import ArticleDetailView, ArticleViewSet, SubjectListView

router = DefaultRouter()
router.register(r'viewset', ArticleViewSet)

#TODO: The detail url has to be on top or else it will be
# overwritten by the list view. This may need to be corrected
# so order is not as important
app_name = "articles"
urlpatterns = [
    path(r'', include(router.urls)),
    re_path(r'(?P<subject>.+)/(?P<slug>.+)/$', ArticleDetailView.as_view()),
    re_path(r'(?P<subject>.+)/$', SubjectListView.as_view()),
]
