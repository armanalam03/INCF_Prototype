from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt, csrf_protect, ensure_csrf_cookie
from django.utils.decorators import method_decorator
# from rest_framework.decorators import APIView
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
import random
# Create your views here.

def user_signup(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        username = 'user' + str(random.randint(0,999999)) # Generates a random username

        myuser = User.objects.create_user(username = username, email = email, password = password)
        myuser.save()
        messages.success(request, 'Account created successfully')
        return redirect('http://127.0.0.1:8000/home')
    
    else:
        return HttpResponse('Error')

