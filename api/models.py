from django.db import models

# Create your models here.

# table for the names of category
class category(models.Model):
    name=models.CharField(max_length=50)



# table for items in category south indian
class Southindian(models.Model):
    name=models.CharField(max_length=20)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    image=models.ImageField(upload_to='images/')

# table for items in catgeory hot drinks
class HotDrinks(models.Model):
    name=models.CharField(max_length=20)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    image=models.ImageField(upload_to='images/')


class Coolers(models.Model):
    name=models.CharField(max_length=20)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    image=models.ImageField(upload_to='images/')

# table for items in catgeory Mojito
class Mojito(models.Model):
    name=models.CharField(max_length=20)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    image=models.ImageField(upload_to='images/')


# table for items in catgeory Sandwitch
class Sandwitch(models.Model):
    name=models.CharField(max_length=20)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    image=models.ImageField(upload_to='images/')

# table for items in catgeory Pizza
class Pizza(models.Model):
    name=models.CharField(max_length=20)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    image=models.ImageField(upload_to='images/')

# table for items in catgeory Burger
class Burger(models.Model):
    name=models.CharField(max_length=20)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)

# table for items in catgeory Pav bhaji
class PavBhaji(models.Model):
    name=models.CharField(max_length=20)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    image=models.ImageField(upload_to='images/')

# table for items in catgeory Punjabi
class Punjabi(models.Model):
    name=models.CharField(max_length=20)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    image=models.ImageField(upload_to='images/')


# table for items in catgeory Chinese
class Chinese(models.Model):
    name=models.CharField(max_length=20)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    image=models.ImageField(upload_to='images/')


# table for items in catgeory Rice
class Rice(models.Model):
    name=models.CharField(max_length=20)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    image=models.ImageField(upload_to='images/')


# table for items in catgeory milkshake
class Milkshake(models.Model):
    name=models.CharField(max_length=20)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    image=models.ImageField(upload_to='images/')


# table for items in catgeory Dessert
class Dessert(models.Model):
    name=models.CharField(max_length=20)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    image=models.ImageField(upload_to='images/')



    