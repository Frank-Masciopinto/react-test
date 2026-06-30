from rest_framework import viewsets

from .models import User
from .serializers import UserSerializer


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """Read-only API for directory users.

    TODO: filter queryset by ?search= query param (case-insensitive name/email).
    """

    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        search = self.request.query_params.get("search", "").strip()

        # TODO: apply case-insensitive filter on name and email when search is set
        # Example:
        # if search:
        #     queryset = queryset.filter(
        #         Q(name__icontains=search) | Q(email__icontains=search)
        #     )

        return queryset
