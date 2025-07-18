from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.NewHome, name='newhome'),
    path('workwithus/', views.WorkWithUsView, name='workwithus'),
    path('whoweare/', views.WhoWeAreView, name='whoweare'),
    path('whatwedo/', views.WhatWeDoView, name='whatwedo'),
    path('behindthebuild/', views.BehindTheBuildView, name='behindthebuild'),
    path('newdesignhome/', views.NewDesignHome, name='newdesignhome'),
    path('oldhome', views.home_page, name="home"),
    path('portfolio/', views.PortfolioView, name='portfolio')
]
