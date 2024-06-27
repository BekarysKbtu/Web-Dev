import json
from django.core.management.base import BaseCommand
from api.models import Product, Category

class Command(BaseCommand):
    help = 'Load data from store.json'

    def handle(self, *args, **kwargs):
        with open('store.json') as f:
            data = json.load(f)
            for item in data['products']:
                category_name = item.pop('category')
                category, _ = Category.objects.get_or_create(name=category_name)
                Product.objects.create(category=category, **item)
        self.stdout.write(self.style.SUCCESS('Data loaded successfully'))