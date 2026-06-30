import pytest
from django.urls import reverse
from rest_framework.test import APIClient

from users.models import User


@pytest.mark.django_db
def test_user_model_str():
    user = User.objects.create(name="Jane Doe", email="jane@example.com")
    assert str(user) == "Jane Doe"


@pytest.mark.django_db
def test_users_list_returns_200():
    User.objects.create(name="Jane Doe", email="jane@example.com", company="Acme", city="Paris")
    client = APIClient()
    response = client.get(reverse("user-list"))
    assert response.status_code == 200
    assert len(response.json()) == 1
    assert response.json()[0]["name"] == "Jane Doe"
