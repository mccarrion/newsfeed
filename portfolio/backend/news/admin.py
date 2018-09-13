from django.contrib import admin
from django.forms import ModelForm

from .models import Article, Author

class SubjectForm(ModelForm):
    BUSINESS = 'business'
    ARTS = 'arts'
    TECH = 'tech'
    SPORTS = 'sports'
    LIFESTYLE = 'lifestyle'
    CULTURE = 'culture'
    TRAVEL = 'travel'
    OPINION = 'opinion'
    POLITICS = 'politics'
    NATIONAL = 'national'
    WORLD = 'world'
    SUBJECT_CHOICES = (
        (BUSINESS, 'Business'),
        (ARTS, 'Arts'),
        (TECH, 'Tech'),
        (SPORTS, 'Sports'),
        (LIFESTYLE, 'Lifestyle'),
        (CULTURE, 'Culture'),
        (TRAVEL, 'Travel'),
        (OPINION, 'Opinion'),
        (POLITICS, 'Politics'),
        (NATIONAL, 'National'),
        (WORLD, 'World'),
    )

    def __init__(self, *args, **kwargs):
        super(SubjectForm, self).__init__(*args, **kwargs)
        if self.instance.id:
            CHOICES_INCLUDING_DB_VALUE = [(
                self.instance.field,
                )*2] + self.SUBJECT_CHOICES
            self.fields['subject_field'] = forms.ChoiceField(
                choices=CHOICES_INCLUDING_DB_VALUE)


class NewsAdmin(admin.ModelAdmin):
    form = SubjectForm

admin.site.register(Article)
admin.site.register(Author)
