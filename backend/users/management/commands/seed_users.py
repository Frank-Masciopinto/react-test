import requests
from django.core.management.base import BaseCommand

from users.models import User

USERS_URL = "https://jsonplaceholder.typicode.com/users"


class Command(BaseCommand):
    help = "Seed users from JSONPlaceholder into the relational database."

    def handle(self, *args, **options):
        response = requests.get(USERS_URL, timeout=30)
        response.raise_for_status()
        payload = response.json()

        created = 0
        updated = 0

        for item in payload:
            _, was_created = User.objects.update_or_create(
                external_id=item["id"],
                defaults={
                    "name": item["name"],
                    "email": item["email"],
                    "company": item.get("company", {}).get("name", ""),
                    "city": item.get("address", {}).get("city", ""),
                },
            )
            if was_created:
                created += 1
            else:
                updated += 1

        self.stdout.write(
            self.style.SUCCESS(
                f"Seeded users: {created} created, {updated} updated ({len(payload)} total)."
            )
        )
