from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.NewHome, name='newhome'),
    path('home/workwithus/', views.WorkWithUsView, name='workwithus'),
    path('home/whoweare/', views.WhoWeAreView, name='whoweare'),
    path('home/whatwedo/', views.WhatWeDoView, name='whatwedo'),
    path('home/behindthebuild/', views.BehindTheBuildView, name='behindthebuild'),
    path('home/newdesignhome/', views.NewDesignHome, name='newdesignhome'),
    path('home/oldhome', views.home_page, name="home"),
]
