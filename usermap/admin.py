from django.contrib import admin
from .models import VaasUserProfile


@admin.register(VaasUserProfile)
class VaasUserProfile(admin.ModelAdmin):
    list_display = ('first_name',
                    'last_name',
                    'phone',
                    'active',
                    'email',
                    'gender',
                    'birthday',
                    'created_at',)
