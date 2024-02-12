from django.urls import path
from . import views # user>views에서 모든 함수를 가져온다.
from django.contrib.auth import views as auth_views

app_name = "chat"
urlpatterns = [
    path('answer/create/<int:question_id>/', views.answer_create, name='answer_create'),
    path('', views.index, name='index'),
    path('<int:question_id>/', views.detail, name='detail'),
    path('question/create/', views.question_create, name='question_create'),
]