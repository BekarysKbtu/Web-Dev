from django.contrib import admin
from django.urls import path, include
from shop_back.views import home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('api.urls')),
    path('', home),
]
