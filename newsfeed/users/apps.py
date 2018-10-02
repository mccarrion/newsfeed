from django.apps import AppConfig


class UsersConfig(AppConfig):
    name = 'newsfeed.users'
    verbose_name = "Users"

    def ready(self):
        try:
            import users.signals  # noqa F401
        except ImportError:
            pass
