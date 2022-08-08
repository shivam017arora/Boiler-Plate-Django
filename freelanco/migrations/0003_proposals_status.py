# Generated by Django 4.0.6 on 2022-08-05 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('freelanco', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='proposals',
            name='status',
            field=models.CharField(choices=[('sent', 'Sent'), ('accepted', 'Accepted'), ('rejected', 'Rejected')], default='sent', max_length=50),
        ),
    ]