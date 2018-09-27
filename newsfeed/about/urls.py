from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import PageViewSet

router = DefaultRouter()
router.register(r'about', PageViewSet)

urlpatterns = [
    path(r'', include(router.urls)),
]
