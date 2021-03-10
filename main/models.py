from django.db import models

# Create your models here.

class Todo(models.Model):
    note = models.CharField(max_length= 50)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.note