
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from api import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('Category/',views.Category_view ),
    path('Southindian/',views.Southindian_view ),
    path('HotDrinks/', views.HotDrinks_view),
    path('Mojito/', views.Mojito_view),
    path('Sandwitch/', views.Sandwitch_view),
    path('Pizza/', views.Pizza_view),
    path('Burger/', views.Burger_view),
    path('PavBhaji/', views.PavBhaji_view),
    path('Punjabi/', views.Punjabi_view),
    path('Chinese/', views.Chinese_view),
    path('Rice/', views.Rice_view),
    path('Milkshake/', views.Milkshake_view),
    path('Dessert/', views.Dessert_view)
]
# +static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
