from django.views.generic import DetailView, TemplateView

from .models import Page


class AboutIndexView(TemplateView):
    """
    This creates the core view for the about app, introducing customers to the
    concept of the business.
    """
    template_name = 'about/about.html'

    def get_context_data(self, **kwargs):
        context = super(AboutIndexView, self).get_context_data(**kwargs)
        context['about_page'] = Page.objects.all().exclude(title='About Us')
        context['about_us'] = Page.objects.get(title='About Us')
        return context


class PageDetailView(DetailView):
    """
    This creates the individual pages for each subset of the About app,
    explaining different aspects of the company.
    """
    context_object_name = 'page_detail'
    queryset = Page.objects.all()
    template_name = 'about/page.html'

    def get_context_data(self, **kwargs):
        context = super(PageDetailView , self).get_context_data(**kwargs)
        context['other_page'] = Page.objects.all()
        return context
