# hh_back/api/management/commands/load_data.py
import json
from django.core.management.base import BaseCommand
from api.models import Company, Vacancy

class Command(BaseCommand):
    help = 'Load data from JSON files'

    def handle(self, *args, **kwargs):
        with open('companies.json', 'r') as file:
            companies = json.load(file)
            for company_data in companies:
                Company.objects.update_or_create(id=company_data['id'], defaults=company_data)

        with open('vacancies.json', 'r') as file:
            vacancies = json.load(file)
            for vacancy_data in vacancies:
                company_id = vacancy_data.pop('company')  # Получаем ID компании
                try:
                    company = Company.objects.get(id=company_id)  # Получаем объект компании
                    Vacancy.objects.update_or_create(name=vacancy_data['name'], defaults={**vacancy_data, 'company': company})
                except Company.DoesNotExist:
                    self.stdout.write(self.style.ERROR(f'Company with id {company_id} does not exist'))

        self.stdout.write(self.style.SUCCESS('Data loaded successfully'))