import os
from decouple import config
from pathlib import Path
import django_heroku

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = config('DEBUG', default=False, cast=bool)

ALLOWED_HOSTS = ["*"]


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'rest_auth',
    'rest_auth.registration',
    'rest_framework',
    'rest_framework.authtoken',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.facebook',
    'allauth.socialaccount.providers.twitter',
    'corsheaders',
    'storages',
    'ckeditor',
    'ckeditor_uploader',
    'vaas',
    'usermap',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',  # 'whitenoise',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'agrolyte.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'agrolyte.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}


# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/
SITE_ID = 1
ACCOUNT_AUTHENTICATION_METHOD = 'email'
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_USERNAME_REQUIRED = False
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
AUTHENTICATION_METHOD = 'email'
ACCOUNT_EMAIL_VERIFICATION = 'optional'
AUTH_USER_MODEL = 'usermap.VaasUserProfile'
ACCOUNT_ADAPTER = 'usermap.adapter.VaasUserProfileAdapter'
REST_AUTH_REGISTER_SERIALIZERS = {
    'REGISTER_SERIALIZER': 'vaas.serializers.VaasUserProfileAdapterSerializer',


}
REST_AUTH_SERIALIZERS = {
    'LOGIN_SERIALIZER': 'vaas.serializers.LoginSerializer',
    'USER_DETAILS_SERIALIZER': 'vaas.serializers.VaasUserProfileAdapterSerializer',
    'PASSWORD_RESET_SERIALIZER': 'vaas.serializers.VaasPasswordResetSerializer',
}

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.AllowAny',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
        # 'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ),
}
CORS_ORIGIN_ALLOW_ALL = True
CSRF_COOKIE_NAME = "csrftoken"


# CKEDITOR
CKEDITOR_FILENAME_GENERATOR = 'usermap.utils.get_filename'
CKEDITOR_UPLOAD_PATH = "uploads/"
CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': 'Full',
        'height': 300,
        'width': 900,
    },
}

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

STATIC_URL = '/static/'
STATICFILES_DIRS = ('',)
STATIC_ROOT = os.path.join(BASE_DIR, 'templates/static')
# STATICFILES_STORAGE = 'whitenoise.storage.CompressedStaticFilesStorage'

STATIC_SWITCHER = config('STATIC_SWITCHER')
if STATIC_SWITCHER == 'True':
    STATIC_ROOT = ""
    STATICFILES_DIRS = (
        os.path.join(BASE_DIR, 'templates/static'),
    )


EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = config('EMAIL_HOST_USER', default='')
EMAIL_HOST_PASSWORD = config('EMAIL_HOST_PASSWORD')
EMAIL_PORT = 587
EMAIL_USE_TLS = True
SERVER_EMAIL = EMAIL_HOST_USER
DEFAULT_FROM_EMAIL = ''


AWS_ACCESS_KEY_ID = config('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = config('AWS_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = config('AWS_STORAGE_BUCKET_NAME')
AWS_S3_FILE_OVERWRITE = False
AWS_DEFAULT_ACL = None
AWS_S3_FILE_OVERWRITE = False
AWS_DEFAULT_ACL = None
AWS_S3_REGION_NAME = "us-east-2"
AWS_S3_SIGNATURE_VERSION = "s3v4"

SSL_ACTIVATE = config('SSL_ACTIVATE')
if SSL_ACTIVATE == "True":
    SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
    SESSION_COOKIE_SECURE = True
    CSRF_COOKIE_SECURE = True
    SECURE_HSTS_SECONDS = None
    SECURE_HSTS_INCLUDE_SUBDOMAINS = True
    SECURE_FRAME_DENY = True
    CORS_REPLACE_HTTPS_REFERER = False
    HOST_SCHEME = "https://"


django_heroku.settings(locals(), staticfiles=False)
