from django.contrib.auth.models import User
from django.db import models


class Event(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField(max_length=220)
    scores = models.FloatField(default=0)
    participants = models.IntegerField(default=0)
    date = models.DateTimeField()
    photo = models.ImageField(upload_to='images/', null=True)
    owner = models.ForeignKey(User, related_name="events", on_delete=models.CASCADE, null=True)
