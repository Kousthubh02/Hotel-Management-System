from rest_framework import serializers
from .models import *

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields='__all__'

class SouthindianSerializer(serializers.ModelSerializer):
    class Meta:
        model=Southindian
        fields='__all__'

class HotDrinksSerializer(serializers.ModelSerializer):
    class Meta:
        model=HotDrinks
        fields='__all__'

class MojitoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Mojito
        fields='__all__'

class SandwitchSerializer(serializers.ModelSerializer):
    class Meta:
        model=Sandwitch
        fields='__all__'

class PizzaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Pizza
        fields='__all__'

class BurgerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Burger
        fields='__all__'

class PavBhajiSerializer(serializers.ModelSerializer):
    class Meta:
        model=PavBhaji
        fields='__all__'

class PunjabiSerializer(serializers.ModelSerializer):
    class Meta:
        model=Punjabi
        fields='__all__'

class ChineseSerializer(serializers.ModelSerializer):
    class Meta:
        model=Chinese
        fields='__all__'

class RiceSerializer(serializers.ModelSerializer):
    class Meta:
        model=Rice
        fields='__all__'

class MilkshakeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Milkshake
        fields='__all__'

class DessertSerializer(serializers.ModelSerializer):
    class Meta:
        model=Dessert
        fields='__all__'

class checkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model=checkout
        fields='__all__'

from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = all
