import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event, context):
    """Отправка заявки с сайта на почту pozhidaev.kostya@yandex.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Session-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    cors = {'Access-Control-Allow-Origin': '*'}

    if event.get('httpMethod') != 'POST':
        return {'statusCode': 405, 'headers': cors, 'body': json.dumps({'error': 'Method not allowed'})}

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    email = body.get('email', '').strip()
    phone = body.get('phone', '').strip()
    quiz = body.get('quiz')

    if not name or not email:
        return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'name and email required'})}

    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    sender_email = 'pozhidaev.kostya@yandex.ru'
    recipient_email = 'pozhidaev.kostya@yandex.ru'

    quiz_html = ''
    if quiz and isinstance(quiz, dict):
        subject = f'Результат квиза от {name}'
        label_map = {
            'role': 'Роль',
            'industry': 'Сфера бизнеса',
            'budget': 'Рекламный бюджет',
            'ordersPerMonth': 'Заказов в месяц',
            'mainGoal': 'Главная задача',
            'siteUrl': 'Сайт',
            'channels': 'Каналы маркетинга',
            'metrics': 'Отслеживаемые метрики',
            'automation': 'Автоматизация/воронки',
            'mainProblem': 'Главная трудность',
            'comment': 'Комментарий',
            'priority': 'Приоритет',
        }
        rows = ''
        for key, label in label_map.items():
            val = quiz.get(key, '')
            if val:
                rows += f'<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">{label}</td><td style="padding:8px;border:1px solid #ddd;">{val}</td></tr>'
        quiz_html = f'''
        <h3 style="margin-top:20px;">Ответы квиза:</h3>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
            {rows}
        </table>
        '''
    else:
        subject = f'Новая заявка с сайта от {name}'

    html_body = f"""
    <h2>{subject}</h2>
    <table style="border-collapse:collapse;width:100%;max-width:500px;">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">Имя</td><td style="padding:8px;border:1px solid #ddd;">{name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">Email</td><td style="padding:8px;border:1px solid #ddd;">{email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">Телефон</td><td style="padding:8px;border:1px solid #ddd;">{phone or 'Не указан'}</td></tr>
    </table>
    {quiz_html}
    """

    if smtp_password:
        msg = MIMEMultipart('alternative')
        msg['Subject'] = subject
        msg['From'] = sender_email
        msg['To'] = recipient_email
        msg.attach(MIMEText(html_body, 'html'))

        with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
            server.login(sender_email, smtp_password)
            server.sendmail(sender_email, recipient_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': cors,
        'body': json.dumps({'success': True, 'message': 'Lead sent'})
    }
