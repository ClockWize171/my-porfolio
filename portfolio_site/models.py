from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    picture = models.ImageField(null=True, blank=True, upload_to='static/image/')
    title = models.CharField(max_length=255)
    description = models.TextField()
    link = models.CharField(max_length=255)

    def __str__(self):
        return self.title

