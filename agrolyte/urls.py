from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve
from django.contrib import admin
from django.views.generic import TemplateView
from rest_auth.views import PasswordResetConfirmView
from django.urls import path, include, re_path
from django.conf.urls import url
from vaas.views import (FacebookLogin, TwitterLogin)
urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^rest-auth/facebook/$', FacebookLogin.as_view(), name='fb_login'),
    url(r'^rest-auth/twitter/$', TwitterLogin.as_view(), name='twitter_login'),
    path('accounts/', include('allauth.urls')),
    path('arden60/', admin.site.urls),
    path('', include('vaas.urls')),
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),
]


urlpatterns += [
    url(r'^media/(?P<path>.*)$', serve,
        {'document_root': settings.MEDIA_ROOT}),
    url(r'^static/(?P<path>.*)$', serve,
        {'document_root': settings.STATIC_ROOT}),
]
admin.site.site_header = "Agrolyte \n ADMINISTRATION"
admin.site.site_title = "Agrolyte"
admin.site.index_title = "This is Agrolyte Admin Portal"
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# re_path(r'^rest-auth/password/reset/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$', PasswordResetConfirmView.as_view(),
#         name='password_reset_confirm'),
# PASSWORD_RESET = (
#     r'^auth/password-reset-confirmation/'
#     r'(?P<uidb64>[0-9A-Za-z_\-]+)/'
#     r'(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})$'
# )

# urlpatterns += [
#     re_path(
#         PASSWORD_RESET,
#         TemplateView.as_view(),
#         name='password_reset_confirm',
#     ),
# ]
# path(
#     'reset-password-confirm/',
#     acc_views.CustomPasswordResetConfirmView.as_view(),
#     name='reset-password-confirm'
# ),
urlpatterns += [re_path(r'^.*',
                        TemplateView.as_view(template_name='index.html')), ]
