from django.urls import path
from .views import apiData
from .views import openData
from .views import submit
from .views import allnotes
from .views import notes
from .views import User_Submissions
from .views import Note_comments

urlpatterns = [
    path('', apiData),
    path('allnotes/', allnotes),
    path('notes/', notes),
    path('open/', openData),
    path('submit/', submit),
    path('user_submission/', User_Submissions),
    path('note_comments/', Note_comments)
]