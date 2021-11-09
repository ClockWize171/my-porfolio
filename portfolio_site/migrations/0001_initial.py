# Generated by Django 3.2.9 on 2021-11-08 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('picture', models.ImageField(blank=True, null=True, upload_to='image/')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('link', models.CharField(max_length=255)),
            ],
        ),
    ]
