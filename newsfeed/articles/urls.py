from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import ArticleViewSet

router = DefaultRouter()
router.register(r'articles', ArticleViewSet)

#TODO: May need to make custom urls
app_name = "articles"
urlpatterns = [
    path(r'', include(router.urls)),
]
