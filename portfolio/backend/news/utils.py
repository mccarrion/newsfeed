from django.utils.text import slugify

def create_unique_slug(model_instance, slugable_field_name, slug_field_name):
    """
    This function creates a unique slug based on a sluggable field name as it
    exists as a part of a model.
    """
    slug = slugify(getattr(model_instance, slugable_field_name))
    unique_slug = slug
    instance = 1
    ModelClass = model_instance.__class__

    while ModelClass._default_manager.filter(
        **{slug_field_name: unique_slug}).exists():
        unique_slug = '{}-{}'.format(slug, instance)
        instance += 1

    return unique_slug
