from rest_framework import permissions


class IsAuthenticated(permissions.IsAuthenticated):
    """
    This is a wrapper to allow djoser to handle pre-flight OPTIONS 
    that come from modern browsers.
    """
    def has_permission(self, request, view):
        if request.method == 'OPTIONS':
            return True
        return super(IsAuthenticated, self).has_permission(request, view)
