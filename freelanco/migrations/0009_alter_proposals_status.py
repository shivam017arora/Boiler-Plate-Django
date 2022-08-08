# Generated by Django 4.0.6 on 2022-08-08 11:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('freelanco', '0008_alter_contracts_company_alter_contracts_freelancer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='proposals',
            name='status',
            field=models.CharField(choices=[('sent', 'Sent'), ('accepted', 'Accepted'), ('approved', 'Approved'), ('contract_running', 'In Progress'), ('over', 'Over'), ('rejected', 'Rejected')], default='sent', max_length=50),
        ),
    ]
