from .models import Event
from rest_framework import viewsets, permissions
from .serializers import EventSerializer


class EventViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventMyProfileViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = EventSerializer

    def get_queryset(self):
        return self.request.user.events.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
