"""newsfeed URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/dev/topics/http/urls/
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
from django.contrib.auth import views as auth_views
from django.urls import include, path, re_path
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^o/', include('oauth2_provider.urls', namespace='oauth2_provider')),
    re_path(r'^accounts/login/$', auth_views.LoginView.as_view(template_name='registration/login.html')),
    path('auth/', include('djauth.urls')),
    path('auth/', include('djauth.urls.jwt')),
    path('articles/', include('newsfeed.articles.urls', namespace='articles')),
    path('users/', include('newsfeed.users.urls', namespace='users')),
    path('robots.txt', TemplateView.as_view(template_name="robots.txt",
         content_type="text/plain"), name="robots.txt"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
