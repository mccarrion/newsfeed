from django.contrib import admin
from django.forms import ModelForm

from .models import Article

class SubjectForm(ModelForm):
    TECH = 'tech'
    BUSINESS = 'business'
    WORLD = 'world'
    SCIENCE = 'science'

    SUBJECT_CHOICES = [
        (TECH, 'Tech'),
        (BUSINESS, 'Business'),
        (WORLD, 'World'),
        (SCIENCE, 'Science'),
    ]

    def __init__(self, *args, **kwargs):
        super(SubjectForm, self).__init__(*args, **kwargs)
        if self.instance.id:
            CHOICES_INCLUDING_DB_VALUE = [(
                self.instance.field,
                )*2] + self.SUBJECT_CHOICES
            self.fields['subject_field'] = forms.ChoiceField(
                choices=CHOICES_INCLUDING_DB_VALUE)


class ArticlesAdmin(admin.ModelAdmin):
    form = SubjectForm

admin.site.register(Article)
