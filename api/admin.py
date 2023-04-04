from django.contrib import admin
from api.models import Note, NoteComment

# Register your models here.
admin.site.register((Note, NoteComment))