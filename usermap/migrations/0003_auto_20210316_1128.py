# Generated by Django 2.2 on 2021-03-16 10:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usermap', '0002_auto_20210316_1127'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vaasuserprofile',
            name='phone',
            field=models.CharField(blank=True, max_length=20, null=True, unique=True),
        ),
    ]