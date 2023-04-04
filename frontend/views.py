from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt, csrf_protect, ensure_csrf_cookie
from django.utils.decorators import method_decorator
# from rest_framework.decorators import APIView
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response

# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')

@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )
    def get(self, request, format=None):
        return Response({'seccess': 'CSRF cookie set'})


""" def signup(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        print("email: " + email, "password: " + password)

        myuser = User.objects.create_user(email, password)
        myuser.user_email = email
        myuser.user_pass = password
        myuser.save()
        messages.success(request, 'Account created successfully')
        return redirect('home')
    
    else:
        return HttpResponse('Error') """

