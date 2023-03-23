from rest_framework import serializers
from .models import Todo


"""
 Serialize Todo model, and convert fields to JSON
"""
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')
