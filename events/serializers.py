from rest_framework import serializers
from .models import Event


class EventSerializer(serializers.ModelSerializer):
    owner_name = serializers.CharField(source='owner.username', read_only=True)

    class Meta:
        model = Event
        fields = ['id', 'owner_name', 'name', 'description', 'scores', 'participants', 'date', 'photo', 'owner']
