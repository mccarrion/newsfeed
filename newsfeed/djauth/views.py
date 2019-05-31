from newsfeed.djauth import permissions
from djoser.views import (
    ActivationView as BaseActivationView,
    PasswordResetConfirmView as BasePasswordResetConfirmView,
    PasswordResetView as BasePasswordResetView,
    RootView as BaseRootView,
    SetPasswordView as BaseSetPasswordView,
    SetUsernameView as BaseSetUsernameView,
    UserCreateView as BaseUserCreateView,
    UserDeleteView as BaseUserDeleteView,
    UserView as BaseUserView
)

class RootView(BaseRootView):
    """
    Root endpoint
    """


class UserCreateView(BaseUserCreateView):
    """
    User registration endpoint
    """


class UserDeleteView(BaseUserDeleteView):
    """
    User deletion endpoint
    """
    permission_classes = [permissions.IsAuthenticated]


class PasswordResetView(BasePasswordResetView):
    """
    Email user password reset link
    """


class SetPasswordView(BaseSetPasswordView):
    """
    Change user password
    """
    permission_classes = [permissions.IsAuthenticated]

class PasswordResetConfirmView(BasePasswordResetConfirmView):
    """
    Finish password reset
    """


class ActivationView(BaseActivationView):
    """
    Activate user account
    """


class SetUsernameView(BaseSetUsernameView):
    """
    Change user's username
    """
    permission_classes = [permissions.IsAuthenticated]


class UserView(BaseUserView):
    """
    Get/Update User
    """
    permission_classes = [permissions.IsAuthenticated]