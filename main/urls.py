from django.urls import path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView
from .views import MyObtainTokenPairView, RegisterUserView, TodoViewSet


router = DefaultRouter()

router.register('todo', TodoViewSet, basename='todo')

urlpatterns = [
    path('login/', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterUserView.as_view(), name='user_register'),
]   

urlpatterns += router.urls