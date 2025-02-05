from django.shortcuts import render


# Create your views here.
def home_page(request):
    return render (request, 'home.html')


def work_page(request):
    print("work_page view called")
    return render (request, 'work.html')
