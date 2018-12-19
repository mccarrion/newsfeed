from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import PageViewSet

router = DefaultRouter()
router.register(r'', PageViewSet)

app_name = "about"
urlpatterns = [
    path(r'', include(router.urls)),
]
