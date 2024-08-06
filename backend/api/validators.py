from rest_framework import serializers
from django.contrib.auth.models import User

def validate_email(value):
    if User.objects.filter(email=value).exists():
        raise serializers.ValidationError(f"{value} email already exists")
    return value

def validate_password(value):
    if len(value) < 8:
        raise serializers.ValidationError("Password must be at least 8 characters")
    if len(value) > 15:
        raise serializers.ValidationError("Password must be at most 15 characters")
    if not any(char.isdigit() for char in value):
        raise serializers.ValidationError("Password must contain at least one digit")
    if not any(char.isupper() for char in value):
        raise serializers.ValidationError("Password must contain at least one uppercase letter")
    if not any(char.islower() for char in value):
        raise serializers.ValidationError("Password must contain at least one lowercase letter")
    return value
