from allauth.account.forms import ResetPasswordForm
from usermap.models import VaasUserProfile
from rest_auth.registration.serializers import RegisterSerializer
from rest_auth.serializers import UserDetailsSerializer
from rest_auth.serializers import PasswordResetSerializer
from rest_framework import serializers
from django.utils import timezone
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model
User = get_user_model()


class VaasPasswordResetSerializer(PasswordResetSerializer):
    password_reset_form_class = ResetPasswordForm

# class VaasPasswordResetSerializer(PasswordResetSerializer):
#     # def get_email_options(self):
#     #     return {
#     #         'subject_template_name': 'registration/password_reset_subject.txt',
#     #         'email_template_name': 'registration/password_reset_message.txt',
#     #         'html_email_template_name': 'registration/password_reset_message.html',
#     #         # 'extra_email_context': {
#     #         #     'pass_reset_obj': self.your_extra_reset_obj
#     #         # }
#     #     }

#     def send_mail(self, subject_template_name, email_template_name, context, from_email, to_email, html_email_template_name=None):
#         """
#         Send a django.core.mail.EmailMultiAlternatives to `to_email`.
#         """
#         subject = loader.render_to_string(subject_template_name, context)
#         # Email subject *must not* contain newlines
#         subject = ''.join(subject.splitlines())
#         body = loader.render_to_string(email_template_name, context)

#         email_message = EmailMultiAlternatives(
#             subject, body, from_email, [to_email])
#         if html_email_template_name is not None:
#             html_email = loader.render_to_string(
#                 html_email_template_name, context)
#             email_message.attach_alternative(html_email, 'text/html')

#         email_message.send()


class LoginSerializer(serializers.ModelSerializer):
    """Login Serialization for email"""
    email = serializers.EmailField(required=False, allow_blank=True)
    password = serializers.CharField(style={'input_type': 'password'})

    class Meta:
        model = User
        fields = ('email', 'password')

    def _validate_email(self, email, password):
        user = None
        if email and password:
            user = authenticate(email=email, password=password)
        else:
            raise exceptions.ValidationError('email does not exist')
        return user

    def validate(self, attrs):
        password = attrs.get('password')
        email = attrs.get('email')
        user = self._validate_email(email, password)
        attrs['user'] = user
        return attrs

# class LoginSerializer(serializers.Serializer):
    # email = serializers.EmailField(required=False, allow_blank=True)
    # password = serializers.CharField(style={'input_type': 'password'})
#     USERNAME_FIELD = 'email'

#     REQUIRED_FIELDS = []

#     def get_cleaned_data(self):
#         data_dict = super().get_cleaned_data()
#         data_dict['email'] = self.validated_data.get('email', '')
#         data_dict['password'] = self.validated_data.get('password', '')
#         return data_dict

#     class Meta:
#         model = User
#         fields = ('email', 'password')


class VaasUserProfileAdapterSerializer(RegisterSerializer):

    first_name = serializers.CharField(
        required=True,
        max_length=50,
    )
    last_name = serializers.CharField(
        required=True,
        max_length=50,
    )
    phone = serializers.CharField(
        required=True,
        max_length=20,
    )

    address = serializers.CharField(
        required=False,
        style={'base_template': 'textarea.html'}
    )
    local_govt = serializers.CharField(
        required=False,
        max_length=20,
    )
    state = serializers.CharField(
        required=False,
        max_length=20,
    )
    gender = serializers.CharField(
        required=False,
        max_length=20,
    )
    birthday = serializers.DateField(
        required=False,
    )
    slug = serializers.SlugField(max_length=100, required=True)

    USERNAME_FIELD = 'email'
    username = None
    REQUIRED_FIELDS = []

    def get_cleaned_data(self):
        data_dict = super().get_cleaned_data()
        data_dict['first_name'] = self.validated_data.get('first_name', '')
        data_dict['last_name'] = self.validated_data.get('last_name', '')
        data_dict['phone'] = self.validated_data.get('phone', '')
        data_dict['local_govt'] = self.validated_data.get('local_govt', '')
        data_dict['state'] = self.validated_data.get('state', '')
        data_dict['slug'] = self.validated_data.get('slug', '')
        return data_dict
