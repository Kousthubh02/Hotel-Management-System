from django.db import models

# Create your models here.

# table for the names of category
class Category(models.Model):
    name=models.CharField(max_length=50)
    image=models.ImageField(upload_to='api/images',null=True)

    def __str__(self):
        return self.name
 
# table for items in category south indian
class Southindian(models.Model):
    name=models.CharField(max_length=50)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    def __str__(self):
        return self.name

# table for items in catgeory hot drinks
class HotDrinks(models.Model):
    name=models.CharField(max_length=50)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    def __str__(self):
        return self.name

# table for items in catgeory Mojito
class Mojito(models.Model):
    name=models.CharField(max_length=50)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    def __str__(self):
        return self.name


# table for items in catgeory Sandwitch
class Sandwitch(models.Model):
    name=models.CharField(max_length=50)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    def __str__(self):
        return self.name

# table for items in catgeory Pizza
class Pizza(models.Model):
    name=models.CharField(max_length=50)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    def __str__(self):
        return self.name

# table for items in catgeory Burger
class Burger(models.Model):
    name=models.CharField(max_length=50)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    def __str__(self):
        return self.name

# table for items in catgeory Pav bhaji
class PavBhaji(models.Model):
    name=models.CharField(max_length=50)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    def __str__(self):
        return self.name

# table for items in catgeory Punjabi
class Punjabi(models.Model):
    name=models.CharField(max_length=50)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    def __str__(self):
        return self.name


# table for items in catgeory Chinese
class Chinese(models.Model):
    name=models.CharField(max_length=50)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    def __str__(self):
        return self.name


# table for items in catgeory Rice
class Rice(models.Model):
    name=models.CharField(max_length=50)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    def __str__(self):
        return self.name


# table for items in catgeory milkshake
class Milkshake(models.Model):
    name=models.CharField(max_length=50)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    def __str__(self):
        return self.name


# table for items in catgeory Dessert
class Dessert(models.Model):
    name=models.CharField(max_length=50)
    price=models.IntegerField()
    time_taken=models.FloatField(null=True)
    def __str__(self):
        return self.name

# for details of login
class StaffDetails(models.Model):
    user_name=models.CharField(max_length=50)
    password=models.CharField(max_length=15)
    def __str__(self):
        return self.name
    


    