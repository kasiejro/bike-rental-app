from django.contrib import admin
from django.conf.urls import url, include
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/', include('TaskManager.API.urls', namespace = 'api-tasks')),
]