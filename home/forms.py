from django import forms
from .models import Contact, ContactMessage

class ContactMessageForm(forms.ModelForm):
    class Meta:
        model = ContactMessage
        fields = ['name', 'company', 'business', 'message']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'Your Name'}),
            'company': forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'Company'}),
            'business': forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'Type of Business'}),
            'message': forms.Textarea(attrs={'class': 'form-input', 'placeholder': 'Your Message'}),
        }
