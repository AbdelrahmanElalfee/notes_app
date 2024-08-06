from django.contrib import admin
from django.urls import path
from api import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name='auth-login'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='auth-refresh'),
    path('api/register/', views.user_register, name='user-register'),
    path('api/notes/', views.NoteListCreateView.as_view(), name='note-list-create'),
    path('api/notes/<int:pk>/', views.NoteDetailsUpdateDeleteView.as_view(), name='note-show-update-delete'),
    path('api/notes/search/', views.NoteSearchView.as_view(), name='note-search'),
]
