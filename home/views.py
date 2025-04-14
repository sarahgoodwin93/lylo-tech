from django.shortcuts import render, redirect, reverse, get_object_or_404
from django.urls import reverse_lazy, reverse
from django.views import generic
from django.http import HttpResponseRedirect
from django.contrib import messages
from .models import Contact
from .forms import ContactForm
from django.views.generic.edit import CreateView
from django.views.generic.list import ListView
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.contrib.auth.decorators import user_passes_test

# Create your views here.
def home_page(request):
    return render (request, 'home.html')


# Work with us page.
def WorkWithUsView(request):
    return render (request, 'workwithus.html')


# Who we are page.
def WhoWeAreView(request):
    return render (request, 'whoweare.html')


# What we do page.
def WhatWeDoView(request):
    return render (request, 'whatwedo.html')


# Behind the build page.
def BehindTheBuildView(request):
    return render (request, 'behindthebuild.html')



