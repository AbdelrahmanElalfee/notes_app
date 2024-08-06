from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework import permissions, generics, authentication
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import UserSerializer, NoteSerializer
from .models import Note
from .permissions import IsOwner
from .mixins import UserQuerySetMixin
from http import HTTPStatus


@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def user_register(request, *args, **kwargs):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'User registered successfully.'}, status=HTTPStatus.CREATED)
    return Response(serializer.errors, status=HTTPStatus.BAD_REQUEST)


class NoteListCreateView(UserQuerySetMixin, generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [IsOwner]


class NoteDetailsUpdateDeleteView(UserQuerySetMixin, generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    lookup_field = 'pk'
    permission_classes = [IsOwner]


class NoteSearchView(UserQuerySetMixin, generics.ListAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def get_queryset(self, *args, **kwargs):
        qs = super().get_queryset(*args, **kwargs)
        query = self.request.GET.get('q')
        if query:
            return qs.search(query)
        return qs
