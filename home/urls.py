from django.contrib import admin
from django.urls import path
from . import views
from .views import (
    ContactFormView,
    ContactListView,
    WorkWithUsView,
    WhoWeAreView,
    WhatWeDo,
)

urlpatterns = [
    path('', views.home_page, name="home"),
    path('home/contact/', ContactFormView.as_view(), name='contact'),
    path('home/contact/list/', ContactListView.as_view(), name='contact_list'),
    path('home/workwithus/', views.WorkWithUsView, name='workwithus'),
    path('home/whoweare/', views.WhoWeAreView, name='whoweare'),
    path('home/whatwedo/', views.WhatWeDo, name='whatwedo'),
]