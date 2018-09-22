from django.contrib import admin
from .models import Page


class PageAdmin(admin.ModelAdmin):
    list_display = ('title')


admin.site.register(Page)
