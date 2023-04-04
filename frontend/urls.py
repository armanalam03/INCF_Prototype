from django.urls import path
from .views import index, GetCSRFToken

urlpatterns = [
    path('', index),
    path('signup', index),
    path('home', index),
    path('notes', index),
    path('notePage', index),
    path('forum', index),
    path('submission', index),
    path('csrf_cookie', GetCSRFToken.as_view()),
]