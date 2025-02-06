from django import forms
from .models import Contact


# Contact form for businesses to register intrest.
class ContactForm(forms.ModelForm):
    """
    FORM: Contact.
    """

    class Meta:
        model = Contact
        fields = [
            "name",
            "email",
            "service_needed",
            "message",
        ]
