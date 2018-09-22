from typing import Any, Sequence

from factory import DjangoModelFactory, Faker, post_generation


class AuthorFactory(DjangoModelFactory):
    """
    This is the factory for testing if the Author class is working.
    """
    name = Faker("name")
    title = Faker("title")
    description = Faker("description")
    photo = Faker("photo")
    user = Faker("user")


class ArticleFactory(DjangoModelFactory):
    """
    This is the factory for testing if the Article class is working.
    """
    title = Faker("title")
    subtitle = Faker("subtitle")
    thumbnail = Faker("thumbnail")
    author = Faker("author")
    image = Faker("image")
    body = Faker("body")
    date = Faker("date")
    slug = Faker("slug")
    subject = Faker("subject")
