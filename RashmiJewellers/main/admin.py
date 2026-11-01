# Register your models here.
from django.contrib import admin
from .models import Gender, Material, Category, Stone, Product

admin.site.register(Gender)
admin.site.register(Material)
admin.site.register(Category)
admin.site.register(Stone)
admin.site.register(Product)