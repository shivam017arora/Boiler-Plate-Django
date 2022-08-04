from rest_framework import serializers
from .models import Category


class CategorySerialzier(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        read_only_fields = ['id']
        extra_kwargs = {
            'name': {'required': True}
        }
