from rest_framework import serializers

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "external_id", "name", "email", "company", "city", "created_at")
        read_only_fields = fields
