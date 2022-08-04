from django.urls import path
from .views import CategoryView, ListRoutes

urlpatterns = [
    path('', ListRoutes.as_view(), name="index"),
    path('category/', CategoryView.as_view(), name='category-list'),
]
