from django.conf import settings
from django.core.mail import send_mail
from braces.views import CsrfExemptMixin
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.core import serializers as pyserial
from rest_framework.response import Response
from rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.twitter.views import TwitterOAuthAdapter
from rest_auth.social_serializers import TwitterLoginSerializer

from rest_framework import generics, permissions, serializers, views, status
# from .models import (

# )
from usermap.models import VaasUserProfile
from .serializers import (
    VaasUserProfileAdapterSerializer
)


class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter


class TwitterLogin(SocialLoginView):
    serializer_class = TwitterLoginSerializer
    adapter_class = TwitterOAuthAdapter


class VaasUserProfileDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = VaasUserProfile.objects.all()
    serializer_class = VaasUserProfileAdapterSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.IsAuthenticated,)
