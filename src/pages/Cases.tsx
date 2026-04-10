import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import LeadForm from '@/components/LeadForm';

const casesPreviews = [
  {
    id: 'online-school-hobby',
    image: 'https://cdn.poehali.dev/files/859a956e-5e3f-4bce-9782-d28e4d63f691.jpg',
    tag: 'Онлайн-образование',
    title: 'Перезапустил маркетинг онлайн-школы после полной потери трафика',
    subtitle: 'Когда Facebook заблокировали, основной канал трафика исчез за одну ночь. За 2,5 года выстроил многоканальную систему с бюджетом 6 млн ₽/мес, провёл 29 марафонов и удержал ДРР не выше 30%.',
    stats: ['3 000+ учеников', '6+ млн ₽/мес', 'ДРР < 30%'],
    link: '/cases/online-school-hobby',
  },
  {
    id: 'kodklass',
    image: null,
    tag: 'EdTech · Детская онлайн-школа программирования',
    title: 'КодКласс: общая выручка школы выросла в 4 раза за 4 месяца',
    subtitle: 'Один перформанс-канал, два таргетолога на входе, чёткая задача на масштаб. За 4 месяца нашли победную связку, перестроили команду и вывели выручку на уровень 10+ млн ₽/мес при ДРР 25–27%.',
    stats: ['×4 рост выручки', 'ДРР 25–27%', '10+ млн ₽/мес'],
    link: '/cases/kodklass',
  },
  {
    id: 'vegannova',
    image: 'https://static.tildacdn.com/tild3130-3562-4131-a430-646433646361/photo_2025-09-17_16-.jpg',
    tag: 'E-commerce · БАДы и суперфуды · Wildberries + D2C',
    title: 'Vegannova: оборот на Wildberries вырос на 40% при росте рекламных расходов всего на 9%',
    subtitle: '90 артикулов, аналитика по каждому SKU и подгруппе, запуск D2C-магазина на InSales и 8 Telegram-воронок. 14% покупателей возвращаются за повторной покупкой.',
    stats: ['+40% оборот', '+9% реклама', '14% повторных покупок', '500+ в D2C'],
    link: '/cases/vegannova',
  },
  {
    id: 'greenexpo',
    image: 'https://static.tildacdn.com/tild3739-3938-4264-b637-613736303232/photo_2025-09-18_11-.jpg',
    tag: 'B2B · Event-маркетинг · Экология и зелёные технологии',
    title: 'GreenExpo: число экспонентов и выручка выставки выросли в 2 раза год к году при ДРР 8%',
    subtitle: 'Системный поток B2B-лидов из digital, деловая программа с 11 спикерами, онлайн-конференция с 300 регистрациями и шоу-апом 67%. 40% экспонентов пришли из digital и дошли до оплаты.',
    stats: ['×2 рост выставки', 'ДРР 8%', '40% из digital', '300 регистраций'],
    link: '/cases/greenexpo',
  },
  {
    id: 'skillcup',
    image: null,
    tag: 'Edtech · Performance-маркетинг · Онлайн-курсы',
    title: 'Skill Cup: двухконтурная система продаж онлайн-курсов при бюджете до 6 млн ₽/мес',
    subtitle: 'Я зашёл как единственный performance-маркетолог. Выстроил вебинарную воронку с авторами + прямые продажи из рекламы. Собрал команду, запустил 4 канала, масштабировал бюджет с сохранением CAC/ДРР.',
    stats: ['1,5–6 млн ₽/мес', '4 канала', '30% вебинарная воронка'],
    link: '/cases/skillcup',
  },
  {
    id: 'sven',
    image: 'https://static.tildacdn.com/tild6136-3265-4134-b239-336462363833/photo_2025-09-18_14-.jpg',
    tag: 'Бренд-маркетинг · Контент-продакшн · Компьютерная акустика',
    title: 'SVEN: digital-экосистема с нуля, рост VK с 40К до 70К, performance с ритейлом',
    subtitle: 'Запустил YouTube и Instagram с нуля, вырастил VK на 30 000 подписчиков, организовал полный цикл контент-продакшна обзоров, коллаборации с Goods и геймерскими комьюнити, performance-кампании с ритейлом.',
    stats: ['+30 000 подписчиков VK', '3 канала', 'YouTube + Instagram с нуля'],
    link: '/cases/sven',
  },
  {
    id: 'vkusvill-praktika',
    image: null,
    tag: 'B2B · Event-маркетинг · Telegram-посевы',
    title: 'ВкусВилл Практика: 40+ B2B-участников ежемесячно при бюджете 100–150 тыс ₽',
    subtitle: 'После выгорания VK Ads перестроил стратегию и сделал Telegram-посевы основным каналом привлечения. Каждый месяц — стабильный набор целевых участников офлайн-мероприятия. Без Facebook. На данных и дисциплине.',
    stats: ['40+ участников/мес', '100–150 тыс ₽/мес', 'Telegram как основной канал'],
    link: '/cases/vkusvill-praktika',
  },
];

const Cases = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Константин Пожидаев
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">На главную</Link>
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

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Портфолио</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-4 leading-tight">Кейсы</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">Реальные результаты — с цифрами, решениями и инструментами. Без шаблонных историй успеха.</p>
          </div>

          <div className="space-y-8">
            {casesPreviews.map((c) => (
              <div key={c.id} className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative overflow-hidden h-64 md:h-auto">
                    {c.image ? (
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : c.id === 'skillcup' ? (
                      <div className="w-full h-full bg-gradient-to-br from-violet-600 via-indigo-600 to-primary flex items-center justify-center min-h-[256px]">
                        <div className="text-center text-white p-8">
                          <div className="text-5xl font-black mb-2 opacity-90">6 млн ₽</div>
                          <div className="text-base font-semibold opacity-80">бюджет/мес</div>
                          <div className="mt-3 text-sm opacity-60">4 канала · вебинарная воронка</div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-secondary flex items-center justify-center min-h-[256px]">
                        <div className="text-center text-white p-8">
                          <div className="text-7xl font-black mb-2 opacity-90">×4</div>
                          <div className="text-lg font-semibold opacity-80">рост выручки</div>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-primary rounded-full text-xs font-medium">
                      {c.tag}
                    </span>
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-3">{c.title}</h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{c.subtitle}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {c.stats.map((s) => (
                          <span key={s} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to={c.link}>
                        <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 w-full sm:w-auto">
                          <Icon name="BookOpen" size={16} className="mr-2" />
                          Читать целиком
                        </Button>
                      </Link>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 w-full sm:w-auto">
                            Обсудить задачу
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>Обсудим вашу задачу</DialogTitle>
                            <DialogDescription>Расскажите о проекте — найдём решение вместе</DialogDescription>
                          </DialogHeader>
                          <LeadForm />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 via-purple-50 to-accent/10 border border-primary/10 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Хотите похожий результат?</h2>
            <p className="text-muted-foreground mb-6">Расскажите о своём проекте — разберём задачу и предложим стратегию</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Обсудить мой проект
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Обсудим вашу задачу</DialogTitle>
                  <DialogDescription>Расскажите о проекте — найдём решение вместе</DialogDescription>
                </DialogHeader>
                <LeadForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cases;