# Generated by Django 4.0.6 on 2022-08-08 10:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('freelanco', '0006_alter_proposals_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='proposals',
            name='status',
            field=models.CharField(choices=[('sent', 'Sent'), ('accepted', 'Accepted'), ('approved', 'Approved'), ('contract_running', 'In Progress'), ('rejected', 'Rejected')], default='sent', max_length=50),
        ),
    ]