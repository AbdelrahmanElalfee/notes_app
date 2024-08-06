from django.db import models
from django.contrib.auth.models import User


class NoteQuerySet(models.QuerySet):
    def user_notes(self, user):
        return self.filter(author=user)

    def search(self, query):
        lookup = (models.Q(title__icontains=query) | models.Q(content__icontains=query))
        return self.filter(lookup)


class NoteManager(models.Manager):
    def get_queryset(self):
        return NoteQuerySet(self.model, using=self._db)

    def user_notes(self, user):
        return self.get_queryset().user_notes(user)

    def search(self, query):
        return self.get_queryset().search(query)


class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notes')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = NoteManager()

    def __str__(self):
        return self.title

    @property
    def created(self):
        return self.created_at.strftime("%B %d, %Y")

    @property
    def updated(self):
        return self.updated_at.strftime("%B %d, %Y")
