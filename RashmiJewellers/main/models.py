
# Create your models here.
from django.db import models
from cloudinary.models import CloudinaryField


class Gender(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class Material(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Stone(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(
        max_digits=12,
        decimal_places=2
    )
    image = CloudinaryField('image')
    description = models.TextField(blank=True)

    gender = models.ForeignKey(
        Gender,
        on_delete=models.PROTECT,
        related_name="products"
    )

    material = models.ForeignKey(
        Material,
        on_delete=models.PROTECT,
        related_name="products"
    )

    category = models.ForeignKey(
        Category,
        on_delete=models.PROTECT,
        related_name="products"
    )

    stones = models.ManyToManyField(
        Stone,
        blank=True,
        related_name="products"
    )
    weight = models.DecimalField(
    max_digits=8,
    decimal_places=3,
    null=True,
    blank=True,
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name