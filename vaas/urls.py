from django.urls import path
from .views import (VaasUserProfileDetailView)


urlpatterns = [
    path('vaasuser/<slug>/', VaasUserProfileDetailView.as_view(),
         name='profile-detail'),


]
