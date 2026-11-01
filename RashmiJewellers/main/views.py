from django.shortcuts import render
from .models import *
# Create your views here.
def home(request):
    return render(request, 'main/home.html')

def about(request):
    return render(request,'main/about.html')

def collection(request):
    product=Product.objects.all()
    context={
        'products':product
    }
    return render(request, 'main/collection.html',context)
