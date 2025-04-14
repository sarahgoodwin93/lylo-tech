from django.contrib import admin
from django.urls import path
from . import views
from .views import (
    ContactFormView,
    ContactListView,
    ScrollingView,
    HomeTwoView,
)

urlpatterns = [
    path('', views.home_page, name="home"),
    path('home/contact/', ContactFormView.as_view(), name='contact'),
    path('home/contact/list/', ContactListView.as_view(), name='contact_list'),
    path('home/scrolling/', views.ScrollingView, name='scrolling'),
    path('home/hometwo/', views.HomeTwoView, name='hometwo'),
]