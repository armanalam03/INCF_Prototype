from rest_framework import serializers
from api.models import Note, NoteComment

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = NoteComment
        fields = '__all__'

