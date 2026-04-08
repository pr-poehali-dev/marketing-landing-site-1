import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import LeadForm from '@/components/LeadForm';

const OnlineSchoolHobby = () => {
  const [formOpen, setFormOpen] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-white">
      {/* NAV */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" onClick={scrollToTop} className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Константин Пожидаев
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/#cases" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
              <Icon name="ArrowLeft" size={16} />
              Все кейсы
            </Link>
            <Dialog open={formOpen} onOpenChange={setFormOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90">
                  Обсудить задачу
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Обсудим вашу задачу</DialogTitle>
                </DialogHeader>
                <LeadForm onSuccess={() => setFormOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      {/* SCREEN 1 — HERO */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-purple-50/60 via-white to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
              <Icon name="GraduationCap" size={13} />
              EdTech
            </span>
            <span className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1.5 rounded-full">
              <Icon name="BookOpen" size={13} />
              Онлайн-школа
            </span>
            <span className="text-xs text-muted-foreground font-medium px-2">Май 2022 — Октябрь 2024</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Перезапустил маркетинг онлайн-школы после полной потери трафика — и вывел её на{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">3 000+ учеников</span>{' '}
            одновременно
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl">
            Когда Facebook заблокировали, основной канал трафика исчез за одну ночь. За 2,5 года выстроил многоканальную систему с бюджетом 6 млн ₽/мес, провёл 29 марафонов и удержал ДРР не выше 30%.
          </p>

          {/* Key metrics card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 md:p-8 mb-10">
            <div className="grid grid-cols-3 gap-6 md:gap-10">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">29</div>
                <div className="text-sm text-gray-500 leading-tight">онлайн-марафонов проведено</div>
              </div>
              <div className="text-center border-x border-gray-100">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">3 000+</div>
                <div className="text-sm text-gray-500 leading-tight">учеников одновременно</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">≤30%</div>
                <div className="text-sm text-gray-500 leading-tight">ДРР каждый месяц</div>
              </div>
            </div>
          </div>

          <Dialog open={formOpen} onOpenChange={setFormOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 shadow-lg shadow-primary/20 px-8">
                Обсудить похожую задачу
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Обсудим вашу задачу</DialogTitle>
              </DialogHeader>
              <LeadForm onSuccess={() => setFormOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* SCREEN 2 — CONTEXT */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">С чего всё началось</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-3">
            Я вошёл в проект в момент, когда реклама в Facebook была заблокирована. Буквально — основной канал трафика обнулился. До этого были только тестовые запуски во ВКонтакте на небольших бюджетах, без системы и стабильных результатов.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Задача звучала жёстко: каждый месяц — новый поток марафона, стабильный набор аудитории, контроль юнит-экономики. Без права на «подождём пока всё устаканится».
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-50 border border-red-100 rounded-xl p-5">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
              </div>
              <div className="font-semibold text-gray-900 mb-1">Основной канал утрачен</div>
              <div className="text-sm text-gray-600">Facebook заблокирован — источник трафика обнулился полностью</div>
            </div>
            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-5">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              </div>
              <div className="font-semibold text-gray-900 mb-1">Слабый задел во ВКонтакте</div>
              <div className="text-sm text-gray-600">Только тестовые кампании на минимальных бюджетах, без системы</div>
            </div>
            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-5">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              </div>
              <div className="font-semibold text-gray-900 mb-1">Жёсткий ритм</div>
              <div className="text-sm text-gray-600">Каждый месяц — новый поток, нельзя «взять паузу на выстраивание системы»</div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 3 — GOALS */}
      <section className="py-16 bg-purple-50/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Что нужно было сделать</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: 'BarChart2', color: 'from-primary to-secondary', bg: 'bg-primary/10', title: 'Регулярный набор', desc: 'Ежемесячно обеспечивать стабильный поток на марафон — независимо от сезона' },
              { icon: 'TrendingDown', color: 'from-green-500 to-emerald-600', bg: 'bg-green-100', title: 'ДРР ≤ 30%', desc: 'Держать долю рекламных расходов не выше 30% каждый месяц' },
              { icon: 'TrendingUp', color: 'from-blue-500 to-indigo-600', bg: 'bg-blue-100', title: 'Масштабирование без просадки', desc: 'Увеличивать объём трафика при сохранении эффективности каналов' },
              { icon: 'Settings', color: 'from-accent to-orange-500', bg: 'bg-orange-100', title: 'Построить систему', desc: 'Аналитика, процессы, команда, подрядчики — всё с нуля' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex gap-4">
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon name={item.icon} size={22} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREEN 4 — STRATEGY TIMELINE */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Как выстраивал систему: этапы работы</h2>

          <div className="space-y-0">
            {[
              {
                num: '01',
                title: 'Аудит и карта воронки',
                body: 'Первое, что сделал — построил карту воронки целиком: от рекламного объявления до допродажи. Зафиксировал единые KPI для всех каналов: CPL, CPA, конверсии по этапам, ДРР ≤ 30%. Без этого масштабировать нечего — не знаешь, что работает.',
                extra: null,
              },
              {
                num: '02',
                title: 'Запуск и приоритизация каналов',
                body: 'Параллельно запустил несколько направлений:',
                extra: ['Яндекс.Директ: поиск + РСЯ для захвата активного спроса', 'ВКонтакте: таргет + Маркет-платформа под женскую аудиторию', 'Блогеры и посевы: Instagram, YouTube, Telegram — массовые закупки под график марафонов', 'CRM-маркетинг: email, Telegram, ВКонтакте для работы с базой', 'Telegram Ads — управляемый перформанс-канал'],
              },
              {
                num: '03',
                title: 'Контент и офферы под воронку',
                body: 'Разработал серии креативов и офферов под холодную и тёплую аудиторию. Под каждый ежемесячный поток — перезапуск связок с учётом сезонности.',
                extra: null,
              },
              {
                num: '04',
                title: 'Команда и операционка',
                body: 'Первые запуски в каждом канале делал сам. После отработки связок — делегировал по регламентам и чек-листам. Построил с нуля: команду по блогерам и посевам, трафик-команду (VK-таргет, Яндекс.Директ), white-лист и black-лист блогеров на основе реальных данных. Дополнительно: провёл 4 офлайн-мероприятия под ключ в Москве, Новосибирске, Екатеринбурге.',
                extra: null,
              },
              {
                num: '05',
                title: 'Аналитика и управление сезонностью',
                body: 'Сквозная аналитика: рекламные кабинеты + Яндекс.Метрика + Excel-дашборды. Прогнозирование наборов на потоки, перераспределение бюджета между каналами в зависимости от сезона. Еженедельные спринты оптимизации, A/B-тесты гипотез.',
                extra: null,
              },
            ].map((step, i) => (
              <div key={i} className="relative flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md shadow-primary/20">
                    {step.num}
                  </div>
                  {i < 4 && <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/30 to-transparent mt-2" />}
                </div>
                <div className="pt-2 pb-2 flex-1">
                  <div className="font-semibold text-gray-900 text-lg mb-2">{step.title}</div>
                  <p className="text-gray-600 leading-relaxed">{step.body}</p>
                  {step.extra && (
                    <ul className="mt-3 space-y-1.5">
                      {step.extra.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <Icon name="Check" size={15} className="text-primary mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Creatives placeholder */}
          <div className="mt-12">
            <div className="text-sm text-muted-foreground mb-3 font-medium">Примеры рекламных креативов</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { url: 'https://cdn.poehali.dev/files/859a956e-5e3f-4bce-9782-d28e4d63f691.jpg', alt: 'Как создать урожайный сад по системе НИСО' },
                { url: 'https://cdn.poehali.dev/files/4446f96e-7783-4f8e-895e-9f6054d18c4f.png', alt: 'Садоводы! А вас я попрошу остаться!' },
                { url: 'https://cdn.poehali.dev/files/49ae23de-e23c-4a6b-8afa-19f29d82a488.jpg', alt: 'Бесплатный онлайн-практикум по садоводству' },
                { url: 'https://cdn.poehali.dev/files/3cc40496-9aeb-425e-8a7a-0e763a8fb623.png', alt: 'Рекламные объявления в Яндекс' },
              ].map((creative, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                  <img src={creative.url} alt={creative.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard screenshots */}
          <div className="mt-10">
            <div className="text-sm text-muted-foreground mb-3 font-medium">Аналитические дашборды и отчёты</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                <img src="https://cdn.poehali.dev/files/bde2856a-d5d8-45e3-b5ad-aa48b8de45e5.png" alt="Таблица аналитики Яндекс.Директ по источникам трафика" className="w-full h-auto" />
                <div className="px-4 py-2 bg-gray-50 text-xs text-gray-500">Вебинарная воронка — таблица анализа динамики по источникам (Яндекс.Директ)</div>
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                <img src="https://cdn.poehali.dev/files/519f23be-5ab0-4cfc-8a39-84f631c6b04b.png" alt="Итоговая таблица динамики запусков" className="w-full h-auto" />
                <div className="px-4 py-2 bg-gray-50 text-xs text-gray-500">Итоговая таблица динамики запусков — все показатели воронки по месяцам</div>
              </div>
              <div className="md:col-span-2 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                <img src="https://cdn.poehali.dev/files/d04ccc79-7a28-4b2e-8b0c-17bc54b781f6.png" alt="Графики динамики ключевых показателей" className="w-full h-auto" />
                <div className="px-4 py-2 bg-gray-50 text-xs text-gray-500">Визуализация динамики ключевых показателей продаж — по всем потокам марафонов</div>
              </div>
              <div className="md:col-span-2 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                <img src="https://cdn.poehali.dev/files/962fc1be-0f80-4e81-a0c4-bcd25ce6b847.png" alt="Визуализация карты пути клиента в Miro" className="w-full h-auto" />
                <div className="px-4 py-2 bg-gray-50 text-xs text-gray-500">Визуализация карты пути клиента в Miro</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 5 — INSIGHTS */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Что оказалось важнее всего</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'Личный запуск → стандартизация → делегирование',
                desc: 'Каждую систему сначала запускал руками сам. Только после того как понял, что работает — стандартизировал и передавал в операционку с контролем метрик.',
              },
              {
                title: 'Единая финансовая модель',
                desc: 'ДРР по каналам, вклад каждого источника, распределение бюджетов, прогнозы на 1-2-6 месяцев — всё в одной таблице. Это позволяло принимать решения за часы, а не за дни.',
              },
              {
                title: 'Жёсткая дисциплина по отключению',
                desc: 'Нерентабельные связки отключались в рамках недели. Никаких «дадим ещё месяц». Бюджет сразу перераспределялся в пользу работающих каналов.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Lightbulb" size={20} className="text-primary" />
                </div>
                <div className="font-semibold text-gray-900 mb-2">{item.title}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREEN 6 — RESULTS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Результаты за 2,5 года работы</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              { value: '29', label: 'онлайн-марафонов проведено подряд', gradient: 'from-primary to-secondary' },
              { value: '8 000 — 17 000', label: 'участников на каждом марафоне', gradient: 'from-secondary to-accent' },
              { value: '50%+', label: 'новая холодная аудитория на каждом потоке', gradient: 'from-accent to-orange-500' },
              { value: '3 000+', label: 'учеников обучаются одновременно', gradient: 'from-primary to-accent' },
              { value: '6 млн ₽/мес', label: 'совокупный рекламный бюджет', gradient: 'from-indigo-500 to-primary' },
              { value: '≤30%', label: 'ДРР — удерживался каждый месяц, даже в несезон', gradient: 'from-green-500 to-emerald-600' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2`}>
                  {item.value}
                </div>
                <div className="text-sm text-gray-500 leading-tight">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm text-gray-500 flex items-start gap-2">
            <Icon name="Lock" size={15} className="text-gray-400 mt-0.5 flex-shrink-0" />
            Сезонные пики давали значительно лучшие показатели — детали под NDA.
          </div>
        </div>
      </section>

      {/* SCREEN 7 — BEST TOOLS */}
      <section className="py-16 bg-purple-50/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Самые эффективные инструменты в этом проекте</h2>
          <div className="space-y-3">
            {[
              'Яндекс.Директ и Telegram-каналы — наиболее окупаемые источники при масштабировании',
              'ВК Маркет-платформа — стабильный охват женской аудитории и прогнозируемые лиды',
              'Модель ежемесячных запусков — короткие циклы тестирования и быстрая оптимизация к следующему потоку',
              'Собственная команда по блогерам — скорость закупок, контроль качества, white/black-лист на реальных данных',
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Check" size={13} className="text-green-600" />
                </div>
                <span className="text-gray-700">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREEN 8 — TOOLS STACK */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Стек инструментов</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Яндекс.Директ', 'ВКонтакте', 'Telegram Ads', 'Маркет-платформа',
              'VK-посевы', 'Telegram-посевы', 'Instagram-блогеры', 'YouTube-посевы',
              'Email-маркетинг', 'CRM-маркетинг', 'Яндекс.Метрика',
              'Excel-дашборды', 'Чат-боты',
            ].map((tool, i) => (
              <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SCREEN 9 — CONCLUSION + CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-purple-50 to-orange-50/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Итог</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl">
            За 2,5 года в условиях потери ключевого рекламного канала выстроена устойчивая многоканальная система привлечения. 29 потоков подряд — стабильный набор, контроль юнит-экономики, рост активной аудитории школы. Система продолжила работать после передачи в операционку.
          </p>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 md:p-10 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Icon name="MessageCircle" size={26} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Есть похожая задача?</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Если вам нужно выстроить систему трафика для онлайн-школы или восстановить маркетинг после потери канала — расскажите о своей ситуации. Разберём за 30 минут.
            </p>
            <Dialog open={formOpen} onOpenChange={setFormOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 shadow-lg shadow-primary/20 px-10">
                  Обсудить задачу
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Обсудим вашу задачу</DialogTitle>
                </DialogHeader>
                <LeadForm onSuccess={() => setFormOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-sm text-gray-400">© 2024 Константин Пожидаев</span>
          <Link to="/" className="text-sm text-primary hover:underline">← На главную</Link>
        </div>
      </footer>
    </div>
  );
};

export default OnlineSchoolHobby;