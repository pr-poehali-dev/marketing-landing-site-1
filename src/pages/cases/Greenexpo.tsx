import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import LeadForm from '@/components/LeadForm';

const SEO_TITLE = 'GreenExpo: рост выставки в 2 раза год к году, ДРР 8%, 40% экспонентов из digital | Константин Пожидаев';
const SEO_DESC = 'Как я выстроил системный поток B2B-лидов для отраслевой выставки GreenExpo и вырастил число экспонентов и выручку в 2 раза год к году при доле рекламных расходов всего 8%. Кейс по B2B маркетингу и event-продвижению.';
const SEO_URL = 'https://pozhidaev.ru/cases/greenexpo';

const Greenexpo = () => {
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    document.title = SEO_TITLE;
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    setMeta('description', SEO_DESC);
    setMeta('keywords', 'GreenExpo, B2B маркетинг, event-маркетинг, экология, зелёные технологии, Яндекс.Директ, конференция, Константин Пожидаев');
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
                <DialogHeader>
                  <DialogTitle>Обсудим вашу задачу</DialogTitle>
                </DialogHeader>
                <LeadForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      {/* ЭКРАН 1 — Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white via-emerald-50/40 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-8">
            <Icon name="Leaf" size={16} />
            B2B · Event-маркетинг · Экология и зелёные технологии · Февраль — Сентябрь 2025
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            GreenExpo: число экспонентов и выручка выставки выросли в{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">2 раза</span>
            {' '}год к году — при ДРР{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">8%</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
            Ежегодная B2B выставка-форум в нише экологии и зелёных технологий. Я выстроил системный поток лидов из digital, организовал деловую программу с 11 спикерами, провёл онлайн-конференцию с 300 регистрациями и шоу-апом 67%. Всё это при доле рекламных расходов от выручки в 8%.
          </p>

          {/* Ключевые цифры */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { value: '×2', label: 'рост выставки год к году', color: 'from-emerald-600 to-green-500', bg: 'bg-emerald-50', border: 'border-emerald-200' },
              { value: '8%', label: 'ДРР от выручки', color: 'from-primary to-secondary', bg: 'bg-blue-50', border: 'border-blue-200' },
              { value: '40%', label: 'экспонентов из digital дошли до оплаты', color: 'from-violet-500 to-purple-400', bg: 'bg-violet-50', border: 'border-violet-200' },
            ].map((item) => (
              <div key={item.value} className={`${item.bg} border ${item.border} rounded-2xl p-5 text-center`}>
                <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                  {item.value}
                </div>
                <div className="text-xs text-muted-foreground leading-snug">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Главное фото */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 mb-10">
            <img src="https://cdn.poehali.dev/files/03e8bbb7-df8b-47a8-9583-3923df600702.JPG" alt="Выступление на конференции GreenExpo" className="w-full object-cover max-h-[480px]" />
          </div>

          <Dialog open={formOpen} onOpenChange={setFormOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90">
                Обсудить похожую задачу
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Обсудим вашу задачу</DialogTitle>
              </DialogHeader>
              <LeadForm />
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* ЭКРАН 2 — Контекст */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">С чего я начинал</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground mb-10 space-y-4">
            <p>GreenExpo — ежегодная выставка-форум в сфере экологии и зелёных технологий. B2B-аудитория: производители, дистрибьюторы, ритейл и корпоративные покупатели в нише устойчивого развития.</p>
            <p>Я вошёл в проект как директор по маркетингу на проектной основе. Задача была сформулирована чётко: увеличить число экспонентов и выручку выставки, выстроить системный поток лидов из digital и подготовить медиаплан.</p>
            <p>Специфика ниши создавала дополнительный вызов: узкая B2B-аудитория, ограниченный релевантный рекламный инвентарь, длинный цикл принятия решения об участии в выставке. Нельзя было просто "запустить рекламу широко" и ждать результата.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { color: 'border-l-yellow-500 bg-yellow-50', icon: '🟡', title: 'Узкая B2B-ниша', desc: 'Ограниченный релевантный инвентарь — нужна точечная работа с нужной аудиторией' },
              { color: 'border-l-yellow-500 bg-yellow-50', icon: '🟡', title: 'Длинный цикл сделки', desc: 'Решение об участии в выставке принимается не за день — нужна многоэтапная воронка касаний' },
              { color: 'border-l-red-500 bg-red-50', icon: '🔴', title: 'Нет системного digital-потока', desc: 'Не было выстроенной системы лидогенерации из digital с прозрачной аналитикой по каналам' },
            ].map((card, i) => (
              <div key={i} className={`border-l-4 ${card.color} rounded-r-xl p-5`}>
                <div className="text-2xl mb-2">{card.icon}</div>
                <div className="font-semibold text-gray-900 mb-2">{card.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 3 — Зоны ответственности */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Что входило в мою зону ответственности</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { emoji: '📢', title: 'Привлечение экспонентов', desc: 'Стратегия и управление рекламными кампаниями для привлечения B2B-участников выставки' },
              { emoji: '🎤', title: 'Деловая программа', desc: 'Подготовка и упаковка конференции: спикеры, темы, анонсы, модерация' },
              { emoji: '📰', title: 'PR и медиа', desc: 'Организация медиаосвещения, фото/видео контент, координация подрядчиков по съёмке и постпродакшну' },
              { emoji: '📊', title: 'Аналитика и отчётность', desc: 'Настройка еженедельной отчётности по лидам и продажам, контроль ДРР по каналам' },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{card.emoji}</div>
                <div className="font-bold text-gray-900 mb-2">{card.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 4 — Стратегия */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Как я выстраивал поток B2B-лидов</h2>
          <p className="text-muted-foreground mb-10 text-lg leading-relaxed">B2B в нише экологии — это не масс-маркет. Здесь не работает "широкий охват с красивым баннером". Я выстроил точечную работу с нужной аудиторией через несколько каналов и этапов касания.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: '🎯',
                title: 'Точечная сегментация',
                desc: 'Я разбил потенциальных экспонентов на сегменты по типу бизнеса, размеру и зрелости в нише. Для каждого сегмента — свой оффер и своё рекламное сообщение.',
                color: 'border-emerald-200 bg-emerald-50',
              },
              {
                emoji: '🔄',
                title: 'Многоканальная воронка касаний',
                desc: 'Один контакт не убеждает в участии в выставке. Я выстроил последовательность касаний через несколько каналов — от первого охвата до закрытия сделки.',
                color: 'border-blue-200 bg-blue-50',
              },
              {
                emoji: '📐',
                title: 'Контроль ДРР на уровне канала',
                desc: 'Каждый рекламный канал я оценивал не по кликам и охватам, а по стоимости лида и доле в выручке. Нерентабельные направления отключал быстро.',
                color: 'border-violet-200 bg-violet-50',
              },
            ].map((card, i) => (
              <div key={i} className={`rounded-2xl border-2 ${card.color} p-6`}>
                <div className="text-3xl mb-3">{card.emoji}</div>
                <div className="font-bold text-gray-900 mb-2">{card.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 5 — Рекламные каналы */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Какие каналы я запустил и как они работали</h2>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: '🔵',
                title: 'Яндекс.Директ — основной канал',
                desc: 'Поисковые кампании по брендовым и категорийным запросам: выставки, экология, зелёные технологии, sustainability. РСЯ для добора аудитории по интересам и поведению. Дал основной объём качественных лидов.',
                badge: 'Основной',
                badgeColor: 'bg-emerald-100 text-emerald-700',
              },
              {
                icon: '🔵',
                title: 'ВКонтакте Ads',
                desc: 'Таргетинг по должностям (руководители, директора по закупкам, маркетологи), по отраслевым сообществам и интересам в нише экологии и B2B. Ретаргетинг по посетителям сайта и взаимодействиям.',
                badge: null,
                badgeColor: '',
              },
              {
                icon: '🔵',
                title: 'Telegram Ads и посевы',
                desc: 'Реклама в тематических Telegram-каналах по нише экологии, устойчивого развития, маркетплейсов и B2B-предпринимательства. Нативные интеграции в релевантных каналах.',
                badge: null,
                badgeColor: '',
              },
              {
                icon: '🎤',
                title: 'Деловая программа как лид-магнит',
                desc: 'Сильная программа конференции — это не просто контент для участников. Я использовал её как самостоятельный инструмент привлечения экспонентов: компании хотят быть там, где собирается их аудитория.',
                badge: 'Нестандартный инструмент',
                badgeColor: 'bg-violet-100 text-violet-700',
              },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="font-bold text-gray-900">{card.title}</div>
                  {card.badge && (
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ml-2 shrink-0 ${card.badgeColor}`}>{card.badge}</span>
                  )}
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 6 — Онлайн-конференция */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Онлайн-конференция GreenExpo 2025: я собрал 300 регистраций и провёл эфир с шоу-апом 67%</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">В рамках выставки я организовал и провёл отраслевую онлайн-конференцию по продвижению эко-брендов — под ключ: от формирования программы до технической трансляции.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Параметры */}
            <div>
              <div className="font-semibold text-gray-900 mb-4">Параметры мероприятия</div>
              <div className="rounded-2xl overflow-hidden border border-gray-200">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      { label: 'Дата', value: '9 сентября 2025' },
                      { label: 'Формат', value: 'Онлайн-конференция' },
                      { label: 'Тематических блоков', value: '4' },
                      { label: 'Спикеров', value: '11' },
                      { label: 'Моя роль', value: 'Модератор и спикер блока по маркетингу и маркетплейсам' },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3 text-muted-foreground font-medium w-2/5">{row.label}</td>
                        <td className="px-4 py-3 text-gray-900 font-semibold">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Программа конференции */}
            <div>
              <div className="font-semibold text-gray-900 mb-4">Программа конференции — 4 блока</div>
              <div className="space-y-3">
                {[
                  { num: '01', title: 'Выход на рынок и позиционирование ECO-брендов' },
                  { num: '02', title: 'Сертификация ECO-брендов и помощь от государства' },
                  { num: '03', title: 'Продвижение в digital и на маркетплейсах' },
                  { num: '04', title: 'Работа с аудиторией и репутацией' },
                ].map((block) => (
                  <div key={block.num} className="flex items-center gap-3 rounded-xl bg-white border border-gray-200 px-4 py-3">
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-100 rounded-lg px-2 py-1 shrink-0">Блок {block.num}</span>
                    <span className="text-sm text-gray-900">{block.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Фото конференции */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 mb-10">
            <img src="https://cdn.poehali.dev/files/bbfd613e-eb14-4455-99d4-94bfadd80665.jpg" alt="Аудитория на конференции GreenExpo" className="w-full object-cover max-h-[400px]" />
          </div>

          {/* Что сделал под ключ */}
          <div className="mb-10">
            <div className="font-semibold text-gray-900 mb-5 text-lg">Что я сделал под ключ</div>
            <div className="space-y-4">
              {[
                { num: '1', title: 'Программа и спикеры', desc: 'Сформулировал 4 тематических блока под боли аудитории эко-брендов. Подобрал и подготовил 11 спикеров: согласовал темы, тайминг, тезисы, брифы для каждого.' },
                { num: '2', title: 'Лендинг и регистрация', desc: 'Сделал одностраничник с акцентом на ценность блоков, карточки спикеров, расписание и простую форму регистрации. Подключил интеграцию с CRM и Telegram-ботом, настроил UTM-трекинг по каналам.' },
                { num: '3', title: 'CRM и коммуникации', desc: 'Выстроил цепочки в email и Telegram-боте: подтверждение регистрации, серия напоминаний, инструкции входа в эфир, пост-мероприятие (запись, материалы, опрос). Сегментировал аудиторию: новые vs ранее взаимодействовавшие.' },
                { num: '4', title: 'Перформанс-продвижение', desc: 'Яндекс.Директ — основной канал: поисковые кластеры и РСЯ под темы конференции. VK Ads и Telegram Ads для добора аудитории и ремаркетинга. Еженедельные спринты оптимизации и правки креативов.' },
                { num: '5', title: 'Техническая подготовка', desc: 'Подготовил ТЗ и договоры подрядчикам по стримингу. Провёл технические репетиции, разработал план эфира и чек-листы: звуковой тракт, связь со спикерами, резервный канал.' },
              ].map((step) => (
                <div key={step.num} className="flex gap-4 rounded-2xl bg-white border border-gray-200 p-5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shrink-0">{step.num}</div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{step.title}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Результаты конференции */}
          <div className="font-semibold text-gray-900 mb-4 text-lg">Результаты конференции</div>
          <div className="rounded-2xl overflow-hidden border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Показатель</th>
                  <th className="px-4 py-3 text-left font-semibold">Результат</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Регистраций', value: '300', highlight: false },
                  { label: 'Участников онлайн', value: '200+', highlight: false },
                  { label: 'Шоу-ап', value: '67%+', highlight: true },
                  { label: 'Основной канал трафика', value: 'Яндекс.Директ', highlight: false },
                  { label: 'Эфир', value: 'Проведён по таймингу, стабильная трансляция', highlight: false },
                ].map((row, i) => (
                  <tr key={i} className={row.highlight ? 'bg-emerald-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-muted-foreground font-medium">{row.label}</td>
                    <td className={`px-4 py-3 font-bold ${row.highlight ? 'text-emerald-700' : 'text-gray-900'}`}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ЭКРАН 7 — PR и медиа */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">PR и медиа: как я выстраивал присутствие в инфополе</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">Выставка в нише экологии — это не только про продажи стендов. Это про репутацию и присутствие в профессиональном сообществе. Я выстраивал медиаосвещение так, чтобы оно работало на оба результата одновременно.</p>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 mb-8">
            <div className="font-semibold text-gray-900 mb-4">Что я сделал</div>
            <ul className="space-y-3">
              {[
                'Организовал медиаосвещение мероприятия в отраслевых и деловых изданиях',
                'Координировал подрядчиков по фото и видеосъёмке и постпродакшну',
                'Подготовил фото и видеоконтент с выставки и конференции',
                'Использовал контент вокруг деловой программы как инструмент PR и ретаргетинга одновременно',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="Check" size={12} className="text-emerald-600" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Галерея */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { url: 'https://cdn.poehali.dev/files/a0e92c43-57c5-43e1-8241-5e319cf6c6d1.jpg', alt: 'Аудитория выставки GreenExpo' },
              { url: 'https://cdn.poehali.dev/files/e588c3c1-7c00-4921-b375-3af68f2adce2.jpg', alt: 'Стенды участников GreenExpo' },
              { url: 'https://cdn.poehali.dev/files/b8099094-349d-4d08-8213-23740d7ff654.jpg', alt: 'Экспоненты на выставке GreenExpo' },
              { url: 'https://cdn.poehali.dev/files/31313b8a-b630-40cf-8e7f-e4701cc6a4dd.png', alt: 'Выступление на форуме GreenExpo' },
            ].map((photo, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-gray-200">
                <img src={photo.url} alt={photo.alt} className="w-full h-[160px] object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 8 — Аналитика */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Как я выстроил аналитику</h2>

          {/* Схема-цепочка */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start mb-2">
              {[
                'Яндекс.Директ + VK Ads + Telegram',
                'Лендинг (UTM-разметка)',
                'CRM',
                'Еженедельный отчёт',
              ].map((step, i, arr) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="rounded-xl bg-white border border-emerald-200 px-4 py-2 text-sm font-medium text-gray-800 shadow-sm">{step}</div>
                  {i < arr.length - 1 && <Icon name="ArrowRight" size={18} className="text-emerald-400 shrink-0" />}
                </div>
              ))}
            </div>
          </div>

          {/* Таблица метрик */}
          <div className="font-semibold text-gray-900 mb-4">Что я контролировал еженедельно</div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Уровень</th>
                  <th className="px-4 py-3 text-left font-semibold">Метрики</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { level: 'Рекламные каналы', metrics: 'CPL по каналу, CPC, CTR, вклад в лиды' },
                  { level: 'Воронка продаж', metrics: 'Лид → квалификация → переговоры → оплата' },
                  { level: 'Финансовый результат', metrics: 'ДРР от выручки, стоимость привлечённого экспонента' },
                  { level: 'Конференция', metrics: 'Регистрации, шоу-ап, канальная аналитика по UTM' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-muted-foreground font-medium">{row.level}</td>
                    <td className="px-4 py-3 text-gray-900">{row.metrics}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border-l-4 border-l-emerald-500 bg-emerald-50 p-5">
            <div className="font-semibold text-gray-900 mb-1">Моё правило</div>
            <div className="text-sm text-muted-foreground leading-relaxed">Еженедельная отчётность по лидам и продажам — без исключений. Все решения по перераспределению бюджета я принимал на основе данных, а не ощущений.</div>
          </div>
        </div>
      </section>

      {/* ЭКРАН 9 — Результаты */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Результаты: февраль — сентябрь 2025</h2>

          {/* Крупные цифры */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { value: '×2', label: 'рост числа экспонентов', color: 'from-emerald-600 to-green-500', bg: 'bg-emerald-50', border: 'border-emerald-200' },
              { value: '8%', label: 'ДРР от выручки', color: 'from-primary to-secondary', bg: 'bg-blue-50', border: 'border-blue-200' },
              { value: '40%', label: 'экспонентов из digital до оплаты', color: 'from-violet-500 to-purple-400', bg: 'bg-violet-50', border: 'border-violet-200' },
              { value: '67%+', label: 'шоу-ап конференции', color: 'from-orange-500 to-amber-400', bg: 'bg-orange-50', border: 'border-orange-200' },
            ].map((item) => (
              <div key={item.value} className={`${item.bg} border ${item.border} rounded-2xl p-5 text-center`}>
                <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>{item.value}</div>
                <div className="text-xs text-muted-foreground leading-snug">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Таблица результатов */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Показатель</th>
                  <th className="px-4 py-3 text-left font-semibold">Результат</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Рост числа экспонентов', value: '×2 год к году' },
                  { label: 'Рост выручки выставки', value: '×2 год к году' },
                  { label: 'ДРР от выручки', value: '8%' },
                  { label: 'Доля экспонентов из digital до оплаты', value: '40%' },
                  { label: 'Регистраций на конференцию', value: '300' },
                  { label: 'Участников онлайн', value: '200+' },
                  { label: 'Шоу-ап конференции', value: '67%+' },
                  { label: 'Спикеров конференции', value: '11' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-muted-foreground font-medium">{row.label}</td>
                    <td className="px-4 py-3 font-bold text-gray-900">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mb-8">Абсолютные цифры по выручке и бюджетам — под NDA.</p>

          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              ДРР 8% в B2B event-маркетинге — это не случайность. Это результат точечной сегментации аудитории, многоканальной воронки касаний и жёсткого контроля стоимости лида по каждому каналу. 40% экспонентов я привлёк из digital, и они дошли до оплаты — значит трафик был не просто целевым, а качественно отработанным на всех этапах воронки.
            </p>
          </div>
        </div>
      </section>

      {/* ЭКРАН 10 — Инсайты */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Ключевые инсайты которые я вынес из проекта</h2>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: '💡',
                title: 'Деловая программа — это инструмент продаж',
                desc: 'Сильные спикеры и актуальные темы работали не только на участников конференции. Я использовал программу как аргумент для экспонентов: компании хотят быть там, где собирается их аудитория.',
              },
              {
                icon: '💡',
                title: 'Яндекс.Директ работает в узкой B2B-нише',
                desc: 'Правильно настроенная семантика под боли и запросы целевой аудитории дала мне основной объём качественных лидов — и на выставку, и на конференцию.',
              },
              {
                icon: '💡',
                title: 'Мультиканальные напоминания = высокий шоу-ап',
                desc: '67% шоу-ап — это результат правильно выстроенной цепочки касаний через email и Telegram. Я выстроил серию напоминаний в правильное время — и люди пришли на эфир.',
              },
              {
                icon: '💡',
                title: 'Еженедельные спринты дают накопительный эффект',
                desc: 'Быстрые правки креативов и семантики каждую неделю на основе данных — это не рутина. Это то, что позволило мне удержать ДРР на уровне 8% при росте объёма кампаний.',
              },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl bg-white border border-gray-200 p-6">
                <div className="text-2xl mb-3">{card.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{card.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 11 — Роль на мероприятии */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Моя роль на GreenExpo 2025</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">Помимо маркетинговой работы я лично участвовал в мероприятии в двух ролях.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-7">
              <div className="text-3xl mb-3">🎙️</div>
              <div className="font-bold text-gray-900 mb-2 text-lg">Модератор конференции</div>
              <div className="text-sm text-muted-foreground leading-relaxed">Я вёл онлайн-конференцию в прямом эфире, управлял тайминг-планом и координировал 11 спикеров в режиме реального времени</div>
            </div>
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-7">
              <div className="text-3xl mb-3">📢</div>
              <div className="font-bold text-gray-900 mb-2 text-lg">Спикер блока по маркетингу и маркетплейсам</div>
              <div className="text-sm text-muted-foreground leading-relaxed">Я выступил с докладом по продвижению эко-брендов в digital и на маркетплейсах — как практик с реальными кейсами из проектов</div>
            </div>
          </div>

          {/* Место под фото */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 mb-6 bg-gray-50 flex items-center justify-center min-h-[200px]">
            <div className="text-center text-gray-400 py-12">
              <Icon name="Image" size={40} className="mx-auto mb-3 opacity-40" />
              <p className="text-sm opacity-60">Здесь будет фото Константина в роли модератора или спикера на мероприятии</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Я — постоянный партнёр выставки GreenExpo и модератор конференции по маркетингу эко-брендов.{' '}
            <a href="https://greenexpo.pro" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
              greenexpo.pro
            </a>
          </p>
        </div>
      </section>

      {/* ЭКРАН 12 — Инструменты */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Стек инструментов</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Яндекс.Директ',
              'ВКонтакте Ads',
              'Telegram Ads',
              'Telegram-посевы',
              'CRM',
              'Email-рассылки',
              'Telegram-бот',
              'UTM-разметка',
              'Яндекс.Метрика',
              'Сервис онлайн-трансляций',
            ].map((tool) => (
              <span key={tool} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 13 — Итог и CTA */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Итог</h2>
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-3xl">
            За 8 месяцев работы я вырастил выставку GreenExpo в 2 раза год к году по числу экспонентов и выручке. ДРР составил 8% — при том что я работал в узкой B2B-нише с длинным циклом сделки. 40% экспонентов пришли из digital и дошли до оплаты. Параллельно я организовал и провёл онлайн-конференцию с 300 регистрациями, 11 спикерами и шоу-апом 67%.
          </p>

          <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-green-500 p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Нужно привлечь B2B-аудиторию на мероприятие или выстроить поток лидов в сложной нише?
            </h3>
            <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
              Давайте я разберу вашу ситуацию. 30 минут, бесплатно, конкретные выводы по вашему проекту.
            </p>
            <Dialog open={formOpen} onOpenChange={setFormOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-50 font-bold px-8">
                  Обсудить задачу
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Обсудим вашу задачу</DialogTitle>
                </DialogHeader>
                <LeadForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-100 bg-white">
        <div className="container mx-auto max-w-4xl flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/" onClick={scrollToTop} className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Константин Пожидаев
          </Link>
          <Link to="/cases" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
            <Icon name="ArrowLeft" size={14} />
            Все кейсы
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Greenexpo;