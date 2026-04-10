import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import LeadForm from '@/components/LeadForm';

const SEO_TITLE = 'ВкусВилл Практика: 40+ B2B-участников ежемесячно, Telegram-посевы как основной канал при бюджете 100–150 тыс ₽ | Константин Пожидаев';
const SEO_DESC = 'Как я обеспечивал ежемесячный набор 40+ целевых участников на офлайн B2B-мероприятие ВкусВилл Практика при бюджете 100–150 тыс ₽. Telegram-посевы как основной канал после выгорания VK Ads. Кейс по performance-маркетингу для B2B-событий.';
const SEO_URL = 'https://pozhidaev.ru/cases/vkusvill-praktika';

const VkusvillPraktika = () => {
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = SEO_TITLE;
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    setMeta('description', SEO_DESC);
    setMeta('keywords', 'ВкусВилл Практика, B2B, event-маркетинг, Telegram-посевы, VK Ads, офлайн-мероприятие, Константин Пожидаев');
    setMeta('robots', 'index, follow');
    setMeta('og:title', SEO_TITLE, true);
    setMeta('og:description', SEO_DESC, true);
    setMeta('og:url', SEO_URL, true);
    setMeta('og:type', 'article', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', SEO_TITLE);
    setMeta('twitter:description', SEO_DESC);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', SEO_URL);
    return () => { document.title = 'Константин Пожидаев — системный маркетолог'; };
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else setFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* NAV */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Константин Пожидаев
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/cases" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
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
                <DialogHeader><DialogTitle>Обсудим вашу задачу</DialogTitle></DialogHeader>
                <LeadForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      {/* ЭКРАН 1 — Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-50 via-white to-green-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-6">
            {['B2B', 'Event-маркетинг', 'Telegram-посевы', 'Апрель — Июль 2022'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            ВкусВилл Практика: я обеспечивал 40+ целевых B2B-участников ежемесячно при бюджете 100–150 тыс ₽
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            Офлайн B2B-мероприятие в узкой нише. После выгорания VK Ads я перестроил стратегию и сделал Telegram-посевы основным каналом привлечения. Каждый месяц — стабильный набор целевых участников без выхода за бюджет. Без Facebook. Без больших бюджетов. На данных и дисциплине.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { value: '40+', label: 'целевых участников на каждом мероприятии' },
              { value: '100–150 тыс ₽', label: 'бюджет на месяц / событие' },
              { value: 'Telegram', label: 'основной канал после перестройки стратегии' },
            ].map((stat) => (
              <div key={stat.value} className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 text-center">
                <div className="text-3xl md:text-4xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>

          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90" onClick={scrollToContact}>
            Обсудить похожую задачу
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* ЭКРАН 2 — Контекст */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">С чего я начинал</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            ВкусВилл Практика — офлайн B2B-мероприятие в узкой нише. Я зашёл в проект в апреле 2022 года с чёткой задачей: ежемесячно собирать не менее 40 целевых участников при ограниченном бюджете.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Контекст был непростым. Facebook как рекламный канал к тому моменту уже ушёл. Нужно было найти устойчивый источник трафика, который не выгорит за один-два месяца и будет давать предсказуемый результат в узкой B2B-нише.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Я начал с VK Ads — логичный выбор для B2B аудитории. Но реальность оказалась жёстче прогноза.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { emoji: '🔴', color: 'border-red-200 bg-red-50', title: 'Узкая B2B-ниша', text: 'Ограниченный релевантный инвентарь. Не масс-маркет — точечная работа с конкретной аудиторией предпринимателей и руководителей' },
              { emoji: '🔴', color: 'border-red-200 bg-red-50', title: 'Facebook недоступен', text: 'Основной B2B-канал ушёл с рынка. Нужно было перестраивать стратегию с нуля на доступных инструментах' },
              { emoji: '🟡', color: 'border-yellow-200 bg-yellow-50', title: 'Жёсткий бюджет', text: '100–150 тыс ₽ в месяц на всё. Права на ошибку с бюджетом почти не было — каждый рубль должен был работать' },
            ].map((card) => (
              <div key={card.title} className={`rounded-2xl border-2 p-6 ${card.color}`}>
                <div className="text-2xl mb-3">{card.emoji}</div>
                <div className="font-bold text-gray-900 mb-2">{card.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 3 — Проблема и перестройка */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Почему VK Ads перестал работать и что я сделал дальше</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Я запустил VK Ads как первый канал. Логика была понятна: таргетинг по аудиториям бизнес-клубов, предпринимательских сообществ, подписчикам публичных бизнес-личностей. Аудитория релевантная — должно работать.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Первые недели давали приемлемый CPL. Но быстро стало ясно: аудитория небольшая, частота показов растёт, CPL ползёт вверх. VK Ads выгорел раньше, чем успел стать стабильным каналом.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            <span className="font-semibold text-gray-900">Что я сделал:</span> Я не стал "лечить" выгоревший канал дополнительным бюджетом. Я перестроил стратегию — перенёс основной фокус на Telegram-посевы, а VK Ads оставил в роли поддерживающего канала для ремаркетинга.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <Icon name="X" size={16} className="text-red-500" />
                </div>
                <span className="font-bold text-gray-900">До перестройки</span>
              </div>
              <div className="space-y-2">
                {[
                  'VK Ads — основной канал',
                  'Быстрое выгорание аудитории',
                  'Рост CPL',
                  'Нестабильный набор участников',
                ].map((item, i, arr) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{item}</span>
                    {i < arr.length - 1 && <Icon name="ArrowRight" size={12} className="text-red-300 shrink-0" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Icon name="Check" size={16} className="text-green-600" />
                </div>
                <span className="font-bold text-gray-900">После перестройки</span>
              </div>
              <div className="space-y-2">
                {[
                  'Telegram-посевы — основной канал',
                  'VK Ads — поддержка и ремаркетинг',
                  'Стабильный CPL',
                  'Предсказуемый набор 40+ участников ежемесячно',
                ].map((item, i, arr) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{item}</span>
                    {i < arr.length - 1 && <Icon name="ArrowRight" size={12} className="text-green-400 shrink-0" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ЭКРАН 4 — Стратегия */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Стратегия: двухконтурная модель с Telegram в центре</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Я выстроил двухконтурную модель привлечения. Telegram-посевы как основной управляемый канал с предсказуемым охватом — и VK Ads как поддерживающий инструмент дотягивания и ремаркетинга.
          </p>

          <div className="space-y-4">
            {[
              { emoji: '🎯', title: 'Отраслевые каналы — приоритет', text: 'Я искал не просто "бизнес-каналы", а тематически близкие к программе ВкусВилл Практика. Чем точнее совпадение темы канала с темой мероприятия — тем выше релевантность аудитории и ниже CPA участника.' },
              { emoji: '📋', title: 'White-лист как система', text: 'Я не закупал посевы хаотично. Формировал и поддерживал white-лист проверенных каналов с регулярными размещениями. Параллельно постоянно тестировал новые площадки — для снижения риска выгорания и расширения охвата.' },
              { emoji: '🔄', title: 'Недельные спринты', text: 'Каждую неделю: отчёт по каналам → анализ CPL и шоу-апа → корректировка бюджета → новые размещения. Не ждал месяц чтобы увидеть результат.' },
              { emoji: '📐', title: 'Нативный формат промо', text: 'Не "приходите на мероприятие", а польза и конкретика: программа, кейсы, нетворкинг, что участник получит. Нативные посты работали значительно лучше стандартных рекламных объявлений.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white border border-gray-200 p-6 flex gap-5">
                <div className="text-3xl shrink-0">{item.emoji}</div>
                <div>
                  <div className="font-semibold text-gray-900 mb-2">{item.title}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 5 — Telegram-посевы */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Как я выстраивал работу с Telegram-каналами</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Telegram-посевы — это не "купить рекламу в популярном канале". Это системная работа с аналитикой, отбором площадок и постоянным тестированием.
          </p>

          <div className="rounded-2xl bg-white border border-gray-200 overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-gray-100">
              <span className="font-semibold text-gray-900">Параметры отбора каналов</span>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-3 font-semibold text-gray-700">Параметр</th>
                  <th className="text-left px-6 py-3 font-semibold text-gray-700">Почему важен</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { param: 'ER (вовлечённость)', why: 'Показывает реальную активность аудитории, а не накрутку' },
                  { param: 'Охваты на пост', why: 'Фактический охват, а не число подписчиков' },
                  { param: 'Динамика роста канала', why: 'Живой канал или "мёртвая" подписная база' },
                  { param: 'Тематика аудитории', why: 'Совпадение с портретом участника ВкусВилл Практика' },
                  { param: 'История размещений', why: 'Как аудитория реагировала на рекламные посты ранее' },
                ].map((row, i, arr) => (
                  <tr key={row.param} className={i < arr.length - 1 ? 'border-b border-gray-100' : ''}>
                    <td className="px-6 py-3 font-medium text-gray-700 whitespace-nowrap">{row.param}</td>
                    <td className="px-6 py-3 text-muted-foreground">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              {
                dot: 'bg-green-500',
                badge: 'border-green-200 bg-green-50 text-green-700',
                label: 'White-лист',
                color: 'border-green-200 bg-green-50',
                title: 'Регулярные размещения',
                text: 'Каналы с доказанным результатом: стабильный CPL, высокий шоу-ап участников. Размещался в них регулярно — из месяца в месяц. Это основа предсказуемого набора.',
              },
              {
                dot: 'bg-yellow-500',
                badge: 'border-yellow-200 bg-yellow-50 text-yellow-700',
                label: 'Тестовые',
                color: 'border-yellow-200 bg-yellow-50',
                title: 'Тестовые размещения',
                text: 'Постоянно добавлял новые каналы в тест. Один-два размещения, оценка CPL и качества участников. Лучшие — переходили в white-лист, остальные — в black-лист.',
              },
              {
                dot: 'bg-red-500',
                badge: 'border-red-200 bg-red-50 text-red-700',
                label: 'Black-лист',
                color: 'border-red-200 bg-red-50',
                title: 'Исключённые площадки',
                text: 'Каналы с высоким CPL, нерелевантной аудиторией или низким шоу-апом — навсегда исключались из закупок. Это экономило бюджет и время.',
              },
            ].map((card) => (
              <div key={card.label} className={`rounded-2xl border-2 p-6 ${card.color}`}>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-3 h-3 rounded-full ${card.dot}`} />
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${card.badge}`}>{card.label}</span>
                </div>
                <div className="font-bold text-gray-900 mb-2">{card.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 flex gap-4">
            <Icon name="Star" size={20} className="text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-gray-900">Лучший результат давали: </span>
              Отраслевые Telegram-каналы, тематически близкие к программе ВкусВилл Практика. Чем точнее тема канала совпадала с темой мероприятия — тем ниже CPA и выше доля участников, которые реально приходили на офлайн.
            </p>
          </div>
        </div>
      </section>

      {/* ЭКРАН 6 — VK Ads */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Роль VK Ads после перестройки стратегии</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Я не отключил VK Ads полностью после выгорания. Я изменил его роль — с основного канала привлечения на поддерживающий инструмент дотягивания.
          </p>

          <div className="space-y-4">
            {[
              {
                icon: 'RefreshCw',
                title: 'Ремаркетинг по тёплой аудитории',
                text: 'Люди которые видели промо в Telegram, заходили на лендинг но не регистрировались — догонял их в VK. Повторное касание в другом канале давало дополнительные конверсии без дублирования охвата.',
              },
              {
                icon: 'Repeat',
                title: 'Ротация креативов и ограничение частоты',
                text: 'Я жёстко контролировал частоту показов чтобы не допустить повторного выгорания. Регулярная ротация форматов и креативов — новые объявления каждые 1-2 недели.',
              },
              {
                icon: 'Target',
                title: 'Точечный таргетинг',
                text: 'Узкие аудитории: активные подписчики бизнес-клубов, участники предпринимательских сообществ. Не широкий охват — точечные касания с контролем CPL.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white border border-gray-200 p-6 flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                  <Icon name={item.icon as string} size={18} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 7 — Воронка */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Воронка регистрации и работа с шоу-апом</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Собрать регистрацию — это половина задачи. Вторая половина — чтобы человек реально пришёл на офлайн-мероприятие. Я выстроил коммуникационную цепочку которая работала на оба результата.
          </p>

          {/* Воронка-цепочка */}
          <div className="rounded-2xl bg-white border border-gray-200 p-6 mb-8 overflow-x-auto">
            <div className="text-sm font-semibold text-gray-700 mb-4">Схема воронки — 7 шагов</div>
            <div className="flex items-center gap-1.5 min-w-max">
              {[
                { icon: 'Send', label: 'Telegram\nпосев / VK Ads' },
                { icon: 'Globe', label: 'Лендинг\nс UTM' },
                { icon: 'ClipboardList', label: 'Форма\nрегистрации' },
                { icon: 'CheckCircle', label: 'Подтверждение\nучастия' },
                { icon: 'Bell', label: 'Напоминание\nза день' },
                { icon: 'Clock', label: 'Напоминание\nв день события' },
                { icon: 'Users', label: 'Офлайн-\nмероприятие' },
              ].map((step, i, arr) => (
                <div key={step.label} className="flex items-center gap-1.5">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                      <Icon name={step.icon as string} size={17} className="text-primary" />
                    </div>
                    <div className="text-xs font-medium text-gray-700 leading-tight whitespace-pre-line w-14 text-center">{step.label}</div>
                  </div>
                  {i < arr.length - 1 && <Icon name="ArrowRight" size={14} className="text-gray-300 shrink-0 mb-4" />}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { emoji: '📧', title: 'Подтверждение регистрации', text: 'Сразу после регистрации — письмо или сообщение с деталями мероприятия, адресом, программой. Человек должен понять зачем он идёт ещё раз.' },
              { emoji: '⏰', title: 'Напоминание за день', text: 'За 24 часа до события — напоминание с программой и практической информацией. Снимает барьер "забыл / не знаю как добраться".' },
              { emoji: '🔔', title: 'Напоминание в день события', text: 'Утром в день мероприятия — короткое напоминание. Простая механика, которая заметно влияет на финальный шоу-ап.' },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="text-2xl mb-3">{card.emoji}</div>
                <div className="font-semibold text-gray-900 mb-2 text-sm">{card.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 8 — Аналитика */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Как я управлял эффективностью еженедельно</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            При бюджете 100–150 тыс ₽ в месяц нет права на неэффективные размещения которые живут неделями. Я выстроил аналитику которая позволяла принимать решения быстро.
          </p>

          <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
              <span className="font-semibold text-gray-700">Единая таблица по каналам — еженедельно</span>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-3 font-semibold text-gray-700">Метрика</th>
                  <th className="text-left px-6 py-3 font-semibold text-gray-700">Что показывает</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: 'Показы / Клики / CPC / CTR', shows: 'Эффективность размещения на уровне охвата' },
                  { metric: 'CPL (регистрация)', shows: 'Стоимость привлечения одного зарегистрированного участника' },
                  { metric: 'Подтверждения участия', shows: 'Качество регистраций — насколько люди реально планируют прийти' },
                  { metric: 'Фактический шоу-ап', shows: 'Сколько зарегистрированных пришли на офлайн' },
                  { metric: 'CPA участника', shows: 'Итоговая стоимость одного реального участника мероприятия' },
                ].map((row, i, arr) => (
                  <tr key={row.metric} className={i < arr.length - 1 ? 'border-b border-gray-100' : ''}>
                    <td className="px-6 py-3 font-medium text-gray-700 whitespace-nowrap">{row.metric}</td>
                    <td className="px-6 py-3 text-muted-foreground">{row.shows}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Место под скриншоты */}
          <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center mb-6">
            <Icon name="BarChart2" size={36} className="mx-auto mb-3 text-gray-300" />
            <p className="text-sm text-gray-400">Место под скриншоты аналитики / сводных таблиц</p>
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6">
            <div className="font-semibold text-gray-900 mb-3">Как я принимал решения</div>
            <ul className="space-y-2">
              {[
                'Канал с растущим CPL — снижал бюджет или отключал',
                'Канал со стабильным CPL и высоким шоу-апом — увеличивал бюджет',
                'Новый тестовый канал — давал 1-2 размещения, смотрел на CPL и качество участников',
                'Перераспределение бюджета — каждую неделю, без ожидания конца месяца',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="Check" size={12} className="text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-muted-foreground">
              <span className="font-medium text-gray-700">Инструменты: </span>
              UTM-разметка на всех ссылках, сводная таблица с еженедельной динамикой по каждому каналу и площадке, сервисы аналитики Telegram-каналов для отбора новых площадок.
            </div>
          </div>
        </div>
      </section>

      {/* ЭКРАН 9 — Результаты */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-white to-green-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Результаты: апрель — июль 2022</h2>

          <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-6 py-3 font-semibold text-gray-700">Показатель</th>
                  <th className="text-right px-6 py-3 font-semibold text-gray-700">Результат</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { key: 'Целевых участников на каждом мероприятии', value: '40+ ежемесячно', highlight: true },
                  { key: 'Бюджет на месяц / событие', value: '100–150 тыс ₽', highlight: false },
                  { key: 'Основной канал привлечения', value: 'Telegram-посевы', highlight: false },
                  { key: 'Роль VK Ads', value: 'Поддержка и ремаркетинг', highlight: false },
                  { key: 'Стабильность набора', value: 'Целевой показатель достигался каждый месяц', highlight: false },
                  { key: 'Риск выгорания', value: 'Снижен за счёт white-листа и постоянного теста', highlight: false },
                ].map((row, i, arr) => (
                  <tr key={row.key} className={`${i < arr.length - 1 ? 'border-b border-gray-100' : ''} ${row.highlight ? 'bg-primary/5' : ''}`}>
                    <td className={`px-6 py-3 ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.key}</td>
                    <td className={`px-6 py-3 text-right ${row.highlight ? 'font-black text-primary text-base' : 'text-muted-foreground'}`}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted-foreground mb-6 italic">Абсолютные цифры по CPL, CPA и шоу-апу по каналам — под NDA.</p>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-muted-foreground leading-relaxed">
              Я перестроил стратегию в момент когда VK Ads выгорел — и не потерял в результате. Telegram-посевы с системным подходом к отбору площадок дали предсказуемый поток целевых участников ВкусВилл Практика при бюджете 100–150 тыс ₽ в месяц. Каждый месяц — 40+ человек на офлайн. Без Facebook. Без больших бюджетов. На данных и дисциплине.
            </p>
          </div>
        </div>
      </section>

      {/* ЭКРАН 10 — Инсайты */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Ключевые инсайты которые я вынес из проекта</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { emoji: '💡', title: 'Тематическое совпадение канала и мероприятия — ключевой фактор CPA', text: 'Лучший результат давали Telegram-каналы тематически близкие к программе ВкусВилл Практика. Не просто "бизнес-каналы" — а максимально близкие по теме к тому, о чём говорили на мероприятии. Релевантность аудитории важнее размера канала.' },
              { emoji: '💡', title: 'White-лист — основа предсказуемости', text: 'Регулярные повторные размещения в проверенных каналах давали стабильный и прогнозируемый CPL. Я не искал каждый месяц новые площадки с нуля — я возвращался к тем что уже доказали результат.' },
              { emoji: '💡', title: 'Нативный промо-пост конвертирует лучше рекламного объявления', text: 'Пост с конкретной программой, кейсами и реальной пользой для участника работал значительно лучше стандартного "рекламного" формата. B2B-аудитория не любит когда ей "продают в лоб".' },
              { emoji: '💡', title: 'Быстрая смена канала — это не провал, это решение', text: 'Когда VK Ads выгорел — я не пытался "починить" то что сломалось. Я перенёс фокус туда где аудитория есть и не выгорает. Скорость принятия решения о смене канала определила стабильность результата.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="text-2xl mb-3">{item.emoji}</div>
                <div className="font-semibold text-gray-900 mb-2 text-sm leading-snug">{item.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 11 — Инструменты */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Стек инструментов</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Telegram-посевы',
              'VK Ads',
              'Сервисы аналитики Telegram-каналов',
              'UTM-разметка',
              'Лендинг с формой регистрации',
              'Email / мессенджер-напоминания',
              'Сводная таблица еженедельной аналитики',
              'White-лист и black-лист площадок',
            ].map((tool) => (
              <span key={tool} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-primary/40 hover:text-primary transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 12 — Итог + CTA */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Итог</h2>
          <p className="text-muted-foreground leading-relaxed mb-12">
            За четыре месяца работы с ВкусВилл Практика я выстроил устойчивую систему набора участников на офлайн B2B-мероприятие. Перестроил стратегию после выгорания основного канала. Сделал Telegram-посевы главным инструментом — с системой отбора площадок, white-листом, нативными форматами и еженедельной аналитикой. Каждый месяц — 40+ целевых участников при бюджете 100–150 тыс ₽.
          </p>

          <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-green-50 to-slate-100 border border-primary/10 p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Нужно собрать целевую аудиторию на B2B-мероприятие или выстроить поток лидов в узкой нише?
            </h3>
            <p className="text-muted-foreground mb-6">
              Давайте я разберу вашу ситуацию. 30 минут, бесплатно, конкретные выводы по вашему проекту.
            </p>
            <Dialog open={formOpen} onOpenChange={setFormOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Обсудить задачу
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader><DialogTitle>Обсудим вашу задачу</DialogTitle></DialogHeader>
                <LeadForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 border-t border-gray-100 bg-white">
        <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link to="/" className="text-sm font-semibold text-primary hover:opacity-80 transition-opacity">
            Константин Пожидаев
          </Link>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link to="/cases" className="hover:text-primary transition-colors">Все кейсы</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Политика конфиденциальности</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VkusvillPraktika;
