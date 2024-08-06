from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Note
from .validators import validate_email, validate_password

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, validators=[validate_password])
    email = serializers.EmailField(validators=[validate_email])
    class Meta:
        model = User
        fields = [
            "id",
            "first_name",
            "last_name",
            "username",
            "email",
            "password"
        ]


class PublicUserSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    username = serializers.CharField()


class NoteSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="note-show-update-delete", lookup_field="pk")
    author = PublicUserSerializer(read_only=True)
    class Meta:
        model = Note
        fields = [
            "id",
            "title",
            "content",
            "created",
            "updated",
            "url",
            "author",
        ]

    def create(self, validated_data):
        user = self.context.get('request').user
        note = Note.objects.create(author=user, **validated_data)
        return note
