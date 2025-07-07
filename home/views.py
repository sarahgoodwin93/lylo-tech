from django.shortcuts import render, redirect, reverse, get_object_or_404
from django.urls import reverse_lazy, reverse
from django.views import generic
from django.http import HttpResponseRedirect
from django.contrib import messages
from .models import Contact, ContactMessage
from .forms import ContactMessageForm
from django.views.generic.edit import CreateView
from django.views.generic.list import ListView
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.contrib.auth.decorators import user_passes_test

# Create your views here.
def home_page(request):
    return render (request, 'home.html')


#Home 2
def NewHome(request):
    return render (request, 'newhome.html')


# Work with us page.
def WorkWithUsView(request):
    submitted = False

    if request.method == 'POST':
        form = ContactMessageForm(request.POST)
        if form.is_valid():
            form.save()
            submitted = True
            form = ContactMessageForm()  # Clear the form

    else:
        form = ContactMessageForm()

    return render(request, 'workwithus.html', {'form': form, 'submitted': submitted})


# Who we are page.
def WhoWeAreView(request):
    return render (request, 'whoweare.html')


# What we do page.
def WhatWeDoView(request):
    return render (request, 'whatwedo.html')


# Behind the build page.
def BehindTheBuildView(request):
    return render (request, 'behindthebuild.html')



