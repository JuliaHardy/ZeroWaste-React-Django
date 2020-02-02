from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from django.conf.urls import url

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('accounts.urls')),
    path('events/', include('frontend.urls')),
    path('myprofile/', include('frontend.urls')),
    path('admin/', admin.site.urls),
    path('events/', include('events.urls')),
    path('myprofile/', include('events.urls'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
