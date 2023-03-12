from django.shortcuts import render
from .models import *
from .serializers import *
from django.http import JsonResponse
# Create your views here.

def Category_view(request):
    cat=Category.objects.all()
    serializer=CategorySerializer(cat,many=True)
    response=JsonResponse(serializer.data,safe=False)
    response['Access-Control-Allow-Origin'] = '*'
    return response

def Southindian_view(request):
    cat=Southindian.objects.all()
    serializer=SouthindianSerializer(cat,many=True)
    return JsonResponse(serializer.data,safe=False)

def HotDrinks_view(request):
    cat=HotDrinks.objects.all()
    serializer=HotDrinksSerializer(cat,many=True)
    return JsonResponse(serializer.data,safe=False)

def Mojito_view(request):
    cat=Mojito.objects.all()
    serializer=MojitoSerializer(cat,many=True)
    return JsonResponse(serializer.data,safe=False)

def Sandwitch_view(request):
    cat=Sandwitch.objects.all()
    serializer=SandwitchSerializer(cat,many=True)
    return JsonResponse(serializer.data,safe=False)

def Pizza_view(request):
    cat=Pizza.objects.all()
    serializer=PizzaSerializer(cat,many=True)
    return JsonResponse(serializer.data,safe=False)

def Burger_view(request):
    cat=Burger.objects.all()
    serializer=BurgerSerializer(cat,many=True)
    return JsonResponse(serializer.data,safe=False)

def PavBhaji_view(request):
    cat=PavBhaji.objects.all()
    serializer=PavBhajiSerializer(cat,many=True)
    return JsonResponse(serializer.data,safe=False)

def Punjabi_view(request):
    cat=Punjabi.objects.all()
    serializer=PunjabiSerializer(cat,many=True)
    return JsonResponse(serializer.data,safe=False)

def Chinese_view(request):
    cat=Chinese.objects.all()
    serializer=ChineseSerializer(cat,many=True)
    return JsonResponse(serializer.data,safe=False)

def Rice_view(request):
    cat=Rice.objects.all()
    serializer=RiceSerializer(cat,many=True)
    return JsonResponse(serializer.data,safe=False)

def Milkshake_view(request):
    cat=Milkshake.objects.all()
    serializer=MilkshakeSerializer(cat,many=True)
    return JsonResponse(serializer.data,safe=False)

def Dessert_view(request):
    cat=Dessert.objects.all()
    serializer=DessertSerializer(cat,many=True)
    return JsonResponse(serializer.data,safe=False)

def Logindetail_view(request):
    pass



