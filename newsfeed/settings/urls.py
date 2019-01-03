"""newsfeed URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('api/articles/', include('newsfeed.articles.urls', namespace='articles')),
    path('api/users/', include('newsfeed.users.urls', namespace='users')),

    #TODO: May need to move this to the frontend
    # path('privacy/', TemplateView.as_view(template_name='privacy.html')),
    # path('terms/', TemplateView.as_view(template_name='terms.html')),
    # path('robots.txt', TemplateView.as_view(template_name="robots.txt",
    #      content_type="text/plain"), name="robots.txt"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
