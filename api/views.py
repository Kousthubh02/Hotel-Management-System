from django.shortcuts import render
from .models import *
from .serializers import *
from django.http import JsonResponse
# Create your views here.
def Category_view(request):
    cat=Category.objects.all()
    serializer=CategorySerializer(cat,many=True)
    return JsonResponse(serializer.data,safe=False)

def Burger_view(request):
    cat=Burger.objects.all()
    serializer=BurgerSerializer(cat,many=True)
    return JsonResponse(serializer.data,safe=False)
