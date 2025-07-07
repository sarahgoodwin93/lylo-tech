from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_page, name="home"),
    path('home/workwithus/', views.WorkWithUsView, name='workwithus'),
    path('home/whoweare/', views.WhoWeAreView, name='whoweare'),
    path('home/whatwedo/', views.WhatWeDoView, name='whatwedo'),
    path('home/behindthebuild/', views.BehindTheBuildView, name='behindthebuild'),
    path('home/newhome/', views.NewHome, name='newhome'),
]
