from django.urls import path
from .views import MyObtainTokenPairView, RegisterUserView
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('login', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('register', RegisterUserView.as_view(), name='user_register'),
]