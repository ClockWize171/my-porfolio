from django.urls import path, include
from .views import (
    home_controller,
    project_controller,
    aboutme_controller,
    contact_controller,
)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', home_controller, name='home'),
    path('about-me/', aboutme_controller, name='aboutme'),
    path('project/', project_controller.as_view(), name='project'),
    path('contact/', contact_controller, name='contact'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)