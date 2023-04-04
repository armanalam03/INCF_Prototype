from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now

# Create your models here.
class Note(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    # comments = models.CharField(max_length=500)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='core')
    updated = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.id + ' ' + self.author.username

class NoteComment(models.Model):
    sno=models.AutoField(primary_key=True)
    comment=models.TextField()
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    note=models.ForeignKey(Note, on_delete=models.CASCADE)
    parent=models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True)
    timestamp=models.DateTimeField(default=now)

