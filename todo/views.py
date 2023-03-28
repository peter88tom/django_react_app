from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo

# Create your views here.
class TodoView(viewsets.ModelViewSet):
    """
    The viewsets base class provides the implementation for CRUD operations by default
    """
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
