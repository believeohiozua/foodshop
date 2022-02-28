from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField
from django.template.defaultfilters import slugify
from .photoresize import edit_photo
