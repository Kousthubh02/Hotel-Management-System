
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from api import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('category/', ),
    path('HotDrinks/', admin.site.urls),
    path('Mojito/', admin.site.urls),
    path('Sandwitch/', admin.site.urls),
    path('Pizza/', admin.site.urls),
    path('Burger/', admin.site.urls),
    path('PavBhaji/', admin.site.urls),
    path('Punjabi/', admin.site.urls),
    path('Chinese/', admin.site.urls),
    path('Rice/', admin.site.urls),
    path('Milkshake/', admin.site.urls),
    path('Dessert/', admin.site.urls),
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
