from rest_framework import routers
from .api import EventViewSet, EventMyProfileViewSet


router = routers.DefaultRouter()
router.register('api/events', EventViewSet, 'events')
router.register('api/myprofile', EventMyProfileViewSet, 'myEvents')

urlpatterns = router.urls
