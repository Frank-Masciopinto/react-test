from django.contrib import admin

from .models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "company", "city", "external_id")
    search_fields = ("name", "email", "company", "city")
