from django.db import models
from django.contrib.auth.models import AbstractUser
from django.template.defaultfilters import slugify


Gender_list = [
    ("Male", "Male"),
    ("Female", "Female"),
]
State_list = [
    ('Abuja', 'Abuja'),
    ('Abia', 'Abia'),
    ('Adamawa', 'Adamawa'),
    ('IbomAkwa Ibom', 'IbomAkwa Ibom'),
    ('Anambra', 'Anambra'),
    ('Bauchi', 'Bauchi'),
    ('Bayelsa', 'Bayelsa'),
    ('Benue', 'Benue'),
    ('Borno', 'Borno'),
    ('Riverross River', 'Riverross River'),
    ('Delta', 'Delta'),
    ('Ebonyi', 'Ebonyi'),
    ('Edo', 'Edo'),
    ('Ekiti', 'Ekiti'),
    ('Enugu', 'Enugu'),
    ('Gombe', 'Gombe'),
    ('Imo', 'Imo'),
    ('Jigawa', 'Jigawa'),
    ('Kaduna', 'Kaduna'),
    ('Kano', 'Kano'),
    ('Katsina', 'Katsina'),
    ('Kebbi', 'Kebbi'),
    ('Kogi', 'Kogi'),
    ('Kwara', 'Kwara'),
    ('Lagos', 'Lagos'),
    ('Nassarawa', 'Nassarawa'),
    ('Niger', 'Niger'),
    ('Ogun', 'Ogun'),
    ('Ondo', 'Ondo'),
    ('Osun', 'Osun'),
    ('Oyo', 'Oyo'),
    ('Plateau', 'Plateau'),
    ('Rivers', 'Rivers'),
    ('Sokoto', 'Sokoto'),
    ('Taraba', 'Taraba'),
    ('Yobe', 'Yobe'),
    ('Zamfara', 'Zamfara'),
]


class VaasUserProfile(AbstractUser):
    email = models.EmailField(blank=True, null=True, unique=True)
    first_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50, blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True, unique=True)
    address = models.TextField(blank=True, null=True)
    local_govt = models.CharField(max_length=20, blank=True, null=True)
    state = models.CharField(
        max_length=6, choices=State_list, help_text="state of resident", blank=True, null=True
    )
    gender = models.CharField(
        max_length=6, choices=Gender_list, help_text="Gender", blank=True, null=True
    )
    birthday = models.DateField(blank=True, null=True)
    active = models.BooleanField(default=True)
    slug = models.SlugField(blank=True, null=True, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True, null=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    # username = None

    def __str__(self):
        return str(self.first_name)

    def save(self, *args, **kwargs):
        if self.slug:
            self.slug = slugify(self.slug)
        super().save(*args, **kwargs)

    def get_profile_page(self):
        return reverse("profile-detail", kwargs={"slug": self.slug})
