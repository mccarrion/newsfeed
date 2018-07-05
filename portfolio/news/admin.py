from django.contrib import admin
from django.forms import ModelForm

from .models import Article

class SubjectForm(ModelForm):
    BUSINESS = 'BUSINESS'
    ARTS = 'ARTS'
    TECH = 'TECH'
    SPORTS = 'SPORTS'
    LIFESTYLE = 'LIFESTYLE'
    CULTURE = 'CULTURE'
    TRAVEL = 'TRAVEL'
    OPINION = 'OPINION'
    POLITICS = 'POLITICS'
    NATIONAL = 'NATIONAL'
    WORLD = 'WORLD'
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
                self.instance.field,)*2] + self.SUBJECT_CHOICES
            self.fields['subject_field'] = forms.ChoiceField(
                choices=CHOICES_INCLUDING_DB_VALUE)


class NewsAdmin(admin.ModelAdmin):
    form = SubjectForm

admin.site.register(Article)
