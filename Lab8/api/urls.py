from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, CategoryViewSet, CategoryProductsView

router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/categories/<int:pk>/products/', CategoryProductsView.as_view(), name='category-products'),
]