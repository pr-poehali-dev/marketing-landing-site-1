import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';
import LeadForm from '@/components/LeadForm';
import TelegramButton from '@/components/TelegramButton';
import CaseCard from '@/components/CaseCard';
import QuizSection from '@/components/QuizSection';
import { cases } from '@/data/cases';

interface CertImage {
  src: string;
  alt: string;
}

const certImages: CertImage[] = [
  { src: 'https://cdn.poehali.dev/projects/56b091ad-15fa-4b9f-b598-f9ae88a1ec56/bucket/a1dd7229-67eb-4a0d-bf86-3fc6b67845cf.png', alt: 'Сертификат специалиста по Яндекс.Директу' },
  { src: 'https://cdn.poehali.dev/projects/56b091ad-15fa-4b9f-b598-f9ae88a1ec56/bucket/a867a374-b9be-4727-863a-dabbcfe209eb.JPG', alt: 'Сертификат специалиста по Яндекс.Метрике' },
  { src: 'https://cdn.poehali.dev/projects/56b091ad-15fa-4b9f-b598-f9ae88a1ec56/bucket/62a8aac4-538f-4954-89f6-594ac7b0c61c.png', alt: 'Сертификат партнера BotHelp' },
  { src: 'https://cdn.poehali.dev/projects/56b091ad-15fa-4b9f-b598-f9ae88a1ec56/bucket/926c8384-0b49-46e6-96af-b67708947155.jpg', alt: 'Диплом Skill Cup - Как делать интересные онлайн-курсы' },
  { src: 'https://cdn.poehali.dev/projects/56b091ad-15fa-4b9f-b598-f9ae88a1ec56/bucket/6b3c890b-aa2b-4491-81e9-94b459c3184a.jpg', alt: 'Диплом Skill Cup - Сильный текст в соцсетях' },
];

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const carouselRef = useRef<HTMLDivElement>(null);
  const [certIdx, setCertIdx] = useState(0);

  const scrollCert = (dir: number) => {
    const next = Math.max(0, Math.min(certImages.length - 1, certIdx + dir));
    setCertIdx(next);
    if (carouselRef.current) {
      const child = carouselRef.current.children[next] as HTMLElement;
      child?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Константин Пожидаев
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('results')} className="text-sm font-medium hover:text-primary transition-colors">Результаты</button>
              <button onClick={() => scrollToSection('approach')} className="text-sm font-medium hover:text-primary transition-colors">Подход</button>
              <button onClick={() => scrollToSection('cases')} className="text-sm font-medium hover:text-primary transition-colors">Кейсы</button>
              <button onClick={() => scrollToSection('quiz')} className="text-sm font-medium hover:text-primary transition-colors">Квиз</button>
              <button onClick={() => scrollToSection('about-me')} className="text-sm font-medium hover:text-primary transition-colors">Обо мне</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">Получить аудит</Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Бесплатный аудит</DialogTitle>
                  <DialogDescription>Оставьте контакты — свяжусь в течение 24 часов</DialogDescription>
                </DialogHeader>
                <LeadForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      {/* Экран 1 — УТП */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Системный маркетинг для бизнеса</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Помогаю руководителям и собственникам бизнеса перейти{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">от хаоса в маркетинге к спокойному контролю и прогнозируемой прибыли</span>
            </h1>
            <div className="max-w-3xl mx-auto text-left space-y-3">
              <div className="flex items-start gap-3">
                <Icon name="TrendingUp" className="text-primary mt-1 shrink-0" size={22} />
                <p className="text-lg md:text-xl text-muted-foreground">вы видите рост дохода на цифрах</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="PiggyBank" className="text-primary mt-1 shrink-0" size={22} />
                <p className="text-lg md:text-xl text-muted-foreground">маркетинговый бюджет расходуется эффективно</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="BarChart3" className="text-primary mt-1 shrink-0" size={22} />
                <p className="text-lg md:text-xl text-muted-foreground">отчёты просты, решения прозрачны, никто не тянет вас в лишнюю рутину</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="Search" className="mr-2" size={20} />Получить бесплатный аудит
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Бесплатный аудит</DialogTitle>
                    <DialogDescription>Оставьте контакты — проведу экспресс-аудит вашего маркетинга</DialogDescription>
                  </DialogHeader>
                  <LeadForm />
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                    <Icon name="MessageCircle" className="mr-2" size={20} />Записаться на консультацию
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Запись на консультацию</DialogTitle>
                    <DialogDescription>Оставьте контакты — свяжусь в течение 24 часов</DialogDescription>
                  </DialogHeader>
                  <LeadForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Экран 2 — Основной результат */}
      <section id="results" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Превратите маркетинг в{' '}
            <span className="text-primary">понятную управляемую систему</span>{' '}
            с реальным ростом прибыли
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Маркетинг вашего бизнеса начнёт приносить не только лиды, но и стабильный финансовый результат, а эффективность всех вложений будет наглядно видна и прогнозируема. Возвращайте клиентов, увеличивайте средний чек и закрывайте слабые места вашего бизнеса системно.
          </p>
        </div>
      </section>

      {/* Экран 3 — Рациональные и эмоциональные результаты */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Что вы <span className="text-primary">получите</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Eye', title: 'Полная прозрачность маркетинга', desc: 'Знаете, как работает каждый рекламный канал и куда идут деньги' },
              { icon: 'TrendingUp', title: 'Реальный и быстрый рост прибыли', desc: 'Проверяемый цифрами раз в неделю' },
              { icon: 'FileText', title: 'Честные и ясные отчёты', desc: 'Без сложной терминологии — всё понятно' },
              { icon: 'Heart', title: 'Уверенность и спокойствие', desc: 'Сосредоточьтесь на развитии бизнеса, а не на контроле подрядчиков' },
              { icon: 'Repeat', title: 'Повторные покупки', desc: 'Выстраиваем механики возврата и постоянных клиентов' },
            ].map((item, i) => (
              <Card key={i} className="border-2 hover:border-primary hover:shadow-xl transition-all group">
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={item.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Экран 4 — Инновационный подход */}
      <section id="approach" className="py-20 px-4 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Почему это <span className="text-primary">работает</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: 'Fingerprint', title: 'Индивидуальный план «под ваш бизнес»', desc: 'Никаких шаблонов — разработка и внедрение плана именно для вас' },
              { icon: 'Settings', title: 'Только нужные инструменты', desc: 'Внедряю то, что реально нужно, а не «всё подряд»' },
              { icon: 'Zap', title: 'Быстрые промежуточные результаты', desc: 'Первые изменения видны уже через 2–4 недели' },
              { icon: 'Layers', title: 'В глубину, а не в ширину', desc: 'Не только реклама, но и аналитика, CRM, воронки, автоматизация' },
            ].map((item, i) => (
              <Card key={i} className="border-2 hover:shadow-xl transition-all">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="bg-accent/10 p-3 rounded-xl shrink-0">
                    <Icon name={item.icon} className="text-accent" size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Экран 5 — Выгоды для руководителя */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Главные <span className="text-primary">выгоды</span> для вас</h2>
          <div className="space-y-4">
            {[
              { icon: 'Key', text: 'Всё под ключ — экономия вашего времени' },
              { icon: 'Wallet', text: 'Снижение необязательных трат — только эффективные практики и «честная» аналитика' },
              { icon: 'CalendarCheck', text: 'Не нужно «всё держать в голове»: еженедельная контрольная точка и обратная связь' },
              { icon: 'Rocket', text: 'Маркетинг становится не затратой, а источником роста бизнеса' },
            ].map((item, i) => (
              <Card key={i} className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                    <Icon name={item.icon} className="text-primary" size={24} />
                  </div>
                  <p className="text-lg font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Экран 6 — Кому подходит / не подходит */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Кому это <span className="text-primary">подходит</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/30 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg"><Icon name="CheckCircle" className="text-primary" size={24} /></div>
                  Подходит
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  'Владельцам, руководителям малого и среднего бизнеса с продажами в интернете или маркетплейсах',
                  'Компаниям с рекламным бюджетом от 50 000 руб. в месяц',
                  'Тем, кто готов вовлекаться ради системной работы хотя бы 1 час в неделю',
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1 shrink-0" size={18} />
                    <p>{text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-2 border-destructive/30 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <div className="bg-destructive/10 p-2 rounded-lg"><Icon name="XCircle" className="text-destructive" size={24} /></div>
                  Не подойдёт
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  'Если нужен только разовый запуск или «быстрая накрутка лидов»',
                  'Нет сайта / интернет-витрины вообще',
                  'Нет готовности реагировать на изменения или делиться информацией',
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Icon name="X" className="text-destructive mt-1 shrink-0" size={18} />
                    <p>{text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Экран 7 — Шаги работы */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Как строится наш <span className="text-primary">процесс</span></h2>
          <div className="space-y-4">
            {[
              { icon: 'MessageSquare', title: 'Интервью и экспресс-аудит вашей маркетинговой системы' },
              { icon: 'Target', title: 'Совместная постановка целей: фиксируем метрики и ожидаемый результат' },
              { icon: 'Map', title: 'Создаю подробную карту повышения эффективности' },
              { icon: 'Settings', title: 'Внедряю прозрачную аналитику, автоматизацию, оптимизацию каналов' },
              { icon: 'BarChart3', title: 'Настраиваю отчётность — вы всегда «в курсе», сколько вложено и что получили' },
              { icon: 'RefreshCw', title: 'Постоянная поддержка и корректировка — еженедельные разборы, ответы, обучение вашего сотрудника' },
              { icon: 'CheckCircle', title: 'Итоговая проверка — сравниваем было/стало, выдаю понятную «инструкцию» по поддержанию результата' },
            ].map((step, i) => (
              <Card key={i} className="border-2 hover:shadow-xl transition-all hover:scale-[1.01]">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className={`${i % 3 === 0 ? 'bg-primary/10' : i % 3 === 1 ? 'bg-secondary/10' : 'bg-accent/10'} p-4 rounded-xl shrink-0`}>
                    <Icon name={step.icon} className={i % 3 === 0 ? 'text-primary' : i % 3 === 1 ? 'text-secondary' : 'text-accent'} size={28} />
                  </div>
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`text-3xl font-bold ${i % 3 === 0 ? 'text-primary/30' : i % 3 === 1 ? 'text-secondary/30' : 'text-accent/30'}`}>{i + 1}</div>
                    <p className="text-lg font-medium">{step.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Экран 8 — Сравнение с агентствами */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Сравните <span className="text-primary">подходы</span></h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-gradient-to-r from-primary to-secondary text-white rounded-tl-xl font-bold text-lg">Работа со мной</th>
                  <th className="p-4 text-left bg-gray-200 text-gray-600 rounded-tr-xl font-bold text-lg">Обычные агентства</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Глубокое вовлечение, работа лично со мной', 'Потоковые услуги, «потерянный контроль»'],
                  ['Всё объясняю на языке собственника', 'Только рекламный жаргон'],
                  ['Отчётность и проверка на каждом этапе', 'Шаблонные отчёты, не видно настоящих результатов'],
                  ['Адаптация под ваш бизнес, а не «для всех»', 'Шаблонные решения'],
                ].map(([mine, theirs], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 border-b border-gray-100">
                      <div className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 shrink-0" size={18} />
                        <span className="font-medium">{mine}</span>
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-100 text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <Icon name="X" className="text-gray-400 mt-1 shrink-0" size={18} />
                        <span>{theirs}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Экран 9 — Гарантии */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Гарантии и <span className="text-primary">честные условия</span></h2>
          <div className="space-y-4">
            {[
              { icon: 'BarChart3', text: 'Фиксация стартовых показателей, контроль метрик и результатов' },
              { icon: 'Shield', text: 'Если через месяц не видите улучшений — продлеваю работу бесплатно или возврат аванса' },
              { icon: 'CreditCard', text: 'Оплата — по этапам, согласовывается индивидуально' },
            ].map((item, i) => (
              <Card key={i} className="border-2 border-primary/20 hover:shadow-xl transition-all">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                    <Icon name={item.icon} className="text-primary" size={28} />
                  </div>
                  <p className="text-lg font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Экран 10 — Кейсы */}
      <section id="cases" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Примеры <span className="text-primary">кейсов</span> и результатов</h2>
          <p className="text-center text-muted-foreground text-lg mb-12">Реальные проекты с конкретными цифрами</p>
          <div className="grid md:grid-cols-2 gap-6">
            {cases.map((c) => (<CaseCard key={c.id} caseData={c} />))}
          </div>
        </div>
      </section>

      {/* Экран 11 — Отзывы */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Отзывы <span className="text-primary">клиентов</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8">
                <Icon name="Quote" className="text-primary mb-4" size={36} />
                <p className="text-lg italic mb-4 leading-relaxed">«Я впервые понял, как работает мой маркетинг — не просто цифры, а понятные выводы и быстрые решения.»</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Клиент</p>
                    <p className="text-sm text-muted-foreground">Владелец интернет-магазина</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 bg-gradient-to-br from-accent/5 to-primary/5">
              <CardContent className="p-8">
                <Icon name="Quote" className="text-accent mb-4" size={36} />
                <p className="text-lg italic mb-4 leading-relaxed">«Бюджет на рекламу перестал быть туманом. Каждый рубль теперь — это возврат и рост.»</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name="User" className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Клиент</p>
                    <p className="text-sm text-muted-foreground">Руководитель онлайн-школы</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Экран 12 — Квиз */}
      <section id="quiz" className="py-20 px-4 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Пройдите <span className="text-primary">быстрый разбор</span></h2>
          <p className="text-center text-muted-foreground text-lg mb-8">Ответьте на несколько вопросов — и получите индивидуальный разбор маркетинга вашего бизнеса</p>
          <QuizSection />
        </div>
      </section>

      {/* Экран 13 — Бонусы */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Бонусы — <span className="text-accent">почему именно сейчас</span></h2>
          <div className="space-y-4">
            {[
              { icon: 'Gift', text: 'Бесплатная экспресс-диагностика одного рекламного канала для всех, кто проходит квиз' },
              { icon: 'FileDown', text: 'Чек-лист «Источники трафика в России в 2026» — сразу после консультации' },
              { icon: 'Star', text: 'Фиксация места на мою личную работу для вас' },
            ].map((item, i) => (
              <Card key={i} className="border-2 border-accent/20 hover:border-accent/50 hover:shadow-xl transition-all">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="bg-accent/10 p-3 rounded-xl shrink-0">
                    <Icon name={item.icon} className="text-accent" size={28} />
                  </div>
                  <p className="text-lg font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Экран 14 — Ограничения */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Важные <span className="text-primary">условия</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 text-center p-6 hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">3</div>
              <p className="font-semibold mb-1">клиента одновременно</p>
              <p className="text-sm text-muted-foreground">Одновременно беру не более 3 клиентов на сопровождение</p>
            </Card>
            <Card className="border-2 text-center p-6 hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-3">2</div>
              <p className="font-semibold mb-1">месяца минимум</p>
              <p className="text-sm text-muted-foreground">Минимальный срок работы для достижения эффекта</p>
            </Card>
            <Card className="border-2 text-center p-6 hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-3">
                <Icon name="Handshake" className="mx-auto" size={48} />
              </div>
              <p className="font-semibold mb-1">Гибкая оплата</p>
              <p className="text-sm text-muted-foreground">Поэтапно или по результату — обсуждается индивидуально</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Экран 15 — Призыв к действию */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Готовы превратить маркетинг из хаоса в{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">системный рост?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Оставьте заявку на разбор — и за 30 минут узнаете, где ваши главные точки роста и потери.
          </p>
          <Card className="max-w-md mx-auto border-2 border-primary/30 shadow-xl">
            <CardContent className="p-8">
              <LeadForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Экран 16 — Обо мне */}
      <section id="about-me" className="py-20 px-4 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Немного <span className="text-primary">обо мне</span></h2>
          <div className="space-y-4 max-w-3xl mx-auto mb-12">
            {[
              { icon: 'Calendar', text: 'В маркетинге с 2014 года' },
              { icon: 'Award', text: 'Сертифицированный специалист Яндекс Метрики и Яндекс Директ' },
              { icon: 'BookOpen', text: 'Строю маркетинговые процессы по методологии Антона Петроченкова «Системный лидген»' },
              { icon: 'Bot', text: 'Сертифицированный специалист сервиса автоворонок и чат-ботов в мессенджерах Bothelp' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4">
                <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                  <Icon name={item.icon} className="text-primary" size={20} />
                </div>
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
            <div className="flex items-start gap-4 p-4">
              <div className="bg-accent/10 p-2 rounded-lg shrink-0">
                <Icon name="Mic" className="text-accent" size={20} />
              </div>
              <p className="text-lg">
                Постоянный партнёр выставки{' '}
                <a href="https://greenexpo.pro/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">GreenExpo</a>, спикер и модератор{' '}
                <a href="https://greenexpo.pro/conference" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">конференции по развитию и продвижению экологичных брендов</a>
              </p>
            </div>
            <div className="flex items-start gap-4 p-4">
              <div className="bg-secondary/10 p-2 rounded-lg shrink-0">
                <Icon name="GraduationCap" className="text-secondary" size={20} />
              </div>
              <p className="text-lg">Автор онлайн-курса «Таргет ВК с нуля»</p>
            </div>
          </div>

          <div className="relative">
            <h3 className="text-2xl font-bold text-center mb-6">Мои сертификаты</h3>
            <div className="relative overflow-hidden">
              <div ref={carouselRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {certImages.map((cert, i) => (
                  <div key={i} className="snap-center shrink-0 w-[300px] md:w-[400px]">
                    <img
                      src={cert.src}
                      alt={cert.alt}
                      className="w-full h-auto rounded-xl border-2 shadow-lg hover:shadow-xl transition-shadow"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-3 mt-4">
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => scrollCert(-1)} disabled={certIdx === 0}>
                  <Icon name="ChevronLeft" size={20} />
                </Button>
                {certImages.map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full mt-2 ${i === certIdx ? 'bg-primary' : 'bg-gray-300'}`} />
                ))}
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => scrollCert(1)} disabled={certIdx === certImages.length - 1}>
                  <Icon name="ChevronRight" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="py-12 px-4 border-t bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Константин Пожидаев</h3>
              <p className="text-muted-foreground">Системный маркетинг для руководителей и собственников бизнеса</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2"><Icon name="Mail" size={18} /><span>pozhidaev.kostya@yandex.ru</span></div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="https://vk.com/ctr_agent" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.779.678.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.49-.085.744-.576.744z"/></svg>
                  </Button>
                </a>
                <a href="https://t.me/ctr_agent" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full"><Icon name="Send" size={20} /></Button>
                </a>
                <a href="https://tenchat.ru/0247534" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full"><span className="text-xs font-bold">TC</span></Button>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>&copy; 2025 Константин Пожидаев. Все права защищены.</p>
            <Link to="/privacy" className="hover:text-primary transition-colors underline">Политика конфиденциальности</Link>
          </div>
        </div>
      </footer>

      <TelegramButton />
    </div>
  );
};

export default Index;