from django.contrib import admin
from .models import User
from .models import Contact


# Register your models here.
class ContactAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'user',
        'email',
        'service_needed',
        'message',
        'created_on',
    )

    ordering = ('created_on',)


admin.site.register(Contact, ContactAdmin)
