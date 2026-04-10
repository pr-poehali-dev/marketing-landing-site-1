import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import LeadForm from '@/components/LeadForm';

const SEO_TITLE = 'Skill Cup: вебинарная воронка + таргет, бюджет 1,5–6 млн ₽/мес при контроле ДРР/CAC | Константин Пожидаев';
const SEO_DESC = 'Как я выстроил двухконтурную систему performance-продаж онлайн-курсов в Skill Cup: вебинарная воронка с авторами + прямые продажи из рекламы при бюджете до 6 млн ₽/мес и жёстком контроле CAC/ДРР на уровне связок. Кейс по performance-маркетингу в edtech.';
const SEO_URL = 'https://pozhidaev.ru/cases/skillcup';

const SkillCup = () => {
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
    setMeta('keywords', 'Skill Cup, performance-маркетинг, edtech, онлайн-курсы, вебинарная воронка, таргет, Facebook Ads, Яндекс.Директ, CAC, ДРР, Константин Пожидаев');
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
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-violet-50 via-white to-indigo-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-6">
            {['Edtech', 'Performance-маркетинг', 'Онлайн-курсы', 'Март 2021 — Май 2022'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Skill Cup: вебинарная воронка + таргет — двухконтурная система продаж при бюджете до 6 млн ₽ в месяц
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            Я вошёл в проект как единственный performance-маркетолог. Выстроил двухконтурную модель трафика — прямые продажи из рекламы и регулярные авторские вебинары. Собрал команду, запустил все каналы, выстроил аналитику и масштабировал бюджет с сохранением контроля CAC/ДРР на уровне каждой связки.
          </p>

          {/* Три ключевые цифры */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { value: '1,5–6 млн ₽', label: 'ежемесячный рекламный бюджет под управлением' },
              { value: '4 канала', label: 'Facebook, Директ, VK, TikTok' },
              { value: '30% бюджета', label: 'вебинарная воронка, системно генерирующая продажи' },
            ].map((stat) => (
              <div key={stat.value} className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 text-center">
                <div className="text-3xl md:text-4xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            onClick={scrollToContact}
          >
            Обсудить похожую задачу
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* ЭКРАН 2 — Контекст */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">С чего я начинал</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Skill Cup — платформа онлайн-курсов. Я зашёл в проект в марте 2021 года как единственный performance-маркетолог. Передо мной стояли три задачи одновременно: увеличить продажи через холодный трафик, запустить и масштабировать вебинарную воронку как дополнительный конвертер и при этом удержать управляемость CAC/ДРР по мере роста бюджетов.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            На старте основным источником трафика был Facebook/Meta. Яндекс.Директ, ВКонтакте и TikTok выполняли поддерживающую роль. Всё держалось на одном человеке — мне.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { color: 'border-red-200 bg-red-50', dot: 'bg-red-400', emoji: '🔴', title: 'Один человек на всё', text: 'Я — единственный performance-маркетолог на входе. Стратегия, запуски, аналитика, оптимизация — всё на одной стороне' },
              { color: 'border-yellow-200 bg-yellow-50', dot: 'bg-yellow-400', emoji: '🟡', title: 'Один основной канал', text: 'Facebook/Meta как главный драйвер. Высокая зависимость от одного источника трафика — риск при любых изменениях платформы' },
              { color: 'border-yellow-200 bg-yellow-50', dot: 'bg-yellow-400', emoji: '🟡', title: 'Нет вебинарной воронки', text: 'Дополнительный конвертер холодного трафика нужно было выстроить с нуля и встроить в общую систему' },
            ].map((card) => (
              <div key={card.title} className={`rounded-2xl border-2 p-6 ${card.color}`}>
                <div className="text-2xl mb-3">{card.emoji}</div>
                <div className="font-bold text-gray-900 mb-2">{card.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{card.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 3 — Стратегия */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Стратегия: два контура продаж работают параллельно</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Я не стал делать ставку на один канал или один формат. Выстроил двухконтурную модель — каждый контур закрывал свою роль в общей системе продаж.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl bg-white border-2 border-primary/20 p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name="TrendingUp" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium">Контур 1</div>
                  <div className="font-bold text-gray-900">Прямые продажи из рекламы</div>
                </div>
                <span className="ml-auto px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">70%</span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><Icon name="ChevronRight" size={14} className="text-primary mt-0.5 shrink-0" />Холодный трафик → лендинг или оффер → покупка курса</li>
                <li className="flex items-start gap-2"><Icon name="ChevronRight" size={14} className="text-primary mt-0.5 shrink-0" />Сегменты: новички, переквалификация, профессиональный рост</li>
                <li className="flex items-start gap-2"><Icon name="ChevronRight" size={14} className="text-primary mt-0.5 shrink-0" />Линейка офферов: бесплатные вводные уроки, мини-демо, скидочные окна</li>
                <li className="flex items-start gap-2"><Icon name="ChevronRight" size={14} className="text-primary mt-0.5 shrink-0" />A/B-тесты лендингов и креативных углов, ремаркетинг</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white border-2 border-violet-200 p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                  <Icon name="Video" size={20} className="text-violet-600" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium">Контур 2</div>
                  <div className="font-bold text-gray-900">Вебинарная воронка с авторами</div>
                </div>
                <span className="ml-auto px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-bold">30%</span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><Icon name="ChevronRight" size={14} className="text-violet-500 mt-0.5 shrink-0" />Регистрация → напоминания → live с Q&A → дедлайн-оффер</li>
                <li className="flex items-start gap-2"><Icon name="ChevronRight" size={14} className="text-violet-500 mt-0.5 shrink-0" />Пост-вебинарная догревка для тех, кто не купил в эфире</li>
                <li className="flex items-start gap-2"><Icon name="ChevronRight" size={14} className="text-violet-500 mt-0.5 shrink-0" />Совместные эфиры с авторами курсов</li>
                <li className="flex items-start gap-2"><Icon name="ChevronRight" size={14} className="text-violet-500 mt-0.5 shrink-0" />Системная воронка с чёткими точками оптимизации</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6">
            <div className="flex items-start gap-3">
              <Icon name="Lightbulb" size={20} className="text-amber-500 mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-gray-900">Принцип:</span> Оба контура питались из одних и тех же каналов трафика, но конвертировали аудиторию по-разному. Это давало устойчивость: если один формат проседал — второй держал результат.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ЭКРАН 4 — Вебинарная воронка */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Как я выстроил вебинарную воронку</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Вебинар — не просто "мероприятие". Это конвертер холодного трафика, который работает по чёткой механике. Я выстроил эту механику с нуля и оптимизировал каждый её шаг.
          </p>

          {/* Схема-цепочка */}
          <div className="rounded-2xl bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-100 p-6 mb-8 overflow-x-auto">
            <div className="flex items-center gap-2 min-w-max mx-auto w-fit">
              {[
                { icon: 'Monitor', label: 'Лендинг\nрегистрации' },
                { icon: 'Bell', label: 'Email + мессенджер\nT-48 / T-24 / T-1 ч' },
                { icon: 'Radio', label: 'Live\nс Q&A' },
                { icon: 'Tag', label: 'Дедлайн-\nоффер' },
                { icon: 'Flame', label: 'Пост-вебинарная\nдогревка' },
              ].map((step, i, arr) => (
                <div key={step.label} className="flex items-center gap-2">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-xl bg-white border-2 border-violet-200 flex items-center justify-center mb-2 shadow-sm">
                      <Icon name={step.icon as string} size={20} className="text-violet-600" />
                    </div>
                    <div className="text-xs font-medium text-gray-700 leading-tight whitespace-pre-line w-20">{step.label}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <Icon name="ArrowRight" size={18} className="text-violet-400 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: 'Users', title: 'Программа эфиров с авторами', text: 'Я прорабатывал структуру каждого вебинара вместе с авторами: "крючок" первых 5 минут, блок закрытия возражений, демонстрация программы. Авторский вебинар — это не лекция, это управляемая конверсионная воронка.' },
              { icon: 'BarChart2', title: 'Точки оптимизации', text: 'Я замерял и улучшал четыре ключевых метрики: стоимость регистрации, шоу-ап, удержание до момента оффера и конверсию в оплату. Каждая из них — отдельная точка роста.' },
              { icon: 'Database', title: 'Интеграция с CRM', text: 'Фиксация источника каждого участника, метки вебинара, статус оплаты — всё в CRM. Это позволяло видеть вклад каждого вебинара в выручку и сравнивать между собой.' },
              { icon: 'Repeat', title: 'Пост-вебинарное окно', text: 'Запись + кейсы + догревающая цепочка для тех, кто не купил в эфире. Вебинар не заканчивался на закрытии эфира — он продолжал конвертировать ещё несколько дней.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={item.icon as string} size={18} className="text-primary" />
                  </div>
                  <div className="font-semibold text-gray-900">{item.title}</div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 5 — Каналы */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Четыре канала трафика и роль каждого</h2>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {[
              { emoji: '📘', title: 'Facebook/Meta — основной драйвер', color: 'border-blue-200 bg-blue-50', text: 'Основной источник охвата и продаж. Широкая аудитория, детальный таргетинг по интересам и поведению, look-alike по базам покупателей. Здесь шла основная часть бюджета и тестировались ключевые гипотезы по креативам и офферам.' },
              { emoji: '🔵', title: 'Яндекс.Директ — горячий спрос и защита бренда', color: 'border-red-200 bg-red-50', text: 'Поиск по брендовым запросам и названиям программ, РСЯ по интересам. Роль: захватить аудиторию, которая уже ищет — и не отдать её конкурентам. Стабильный CAC на нижних этапах воронки.' },
              { emoji: '🟣', title: 'ВКонтакте — ремаркетинг и интересы', color: 'border-indigo-200 bg-indigo-50', text: 'Тематические интересы и ремаркетинг по посетителям лендингов, просмотрщикам видео, участникам вебинаров без оплаты. Поддерживающий канал с точечными касаниями.' },
              { emoji: '⚫', title: 'TikTok — верхняя часть воронки', color: 'border-gray-200 bg-gray-100', text: 'Охват и видеопросмотры для работы с холодной аудиторией. "Перелив" заинтересованных пользователей в Facebook и Директ через ремаркетинговые аудитории.' },
            ].map((card) => (
              <div key={card.title} className={`rounded-2xl border-2 p-6 ${card.color}`}>
                <div className="text-2xl mb-3">{card.emoji}</div>
                <div className="font-bold text-gray-900 mb-2 text-sm">{card.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>

          {/* Таблица бюджета */}
          <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-6 py-3 font-semibold text-gray-700">Направление</th>
                  <th className="text-right px-6 py-3 font-semibold text-gray-700">Доля бюджета</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-3 text-gray-700">Прямые продажи из рекламы</td>
                  <td className="px-6 py-3 text-right font-semibold text-primary">~70%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-3 text-gray-700">Вебинарная воронка</td>
                  <td className="px-6 py-3 text-right font-semibold text-violet-600">~30%</td>
                </tr>
                <tr className="bg-primary/5">
                  <td className="px-6 py-3 font-bold text-gray-900">Общий диапазон бюджета</td>
                  <td className="px-6 py-3 text-right font-black text-primary text-base">1,5–6 млн ₽/мес</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ЭКРАН 6 — Креативная система */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Как я выстроил систему креативов</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            В edtech один и тот же креатив выгорает быстро. Я выстроил систему производства и тестирования, которая держала свежесть связок и позволяла быстро масштабировать победителей.
          </p>

          <div className="space-y-5">
            {[
              { emoji: '🎯', title: 'Креативная матрица под холодный трафик', text: 'Три "угла" подачи: боль аудитории, результат который получат, социальное доказательство (результаты выпускников, разбор программы, мини-демо). Для каждого угла — несколько форматов: видео, карусель, статик. Так я всегда имел набор гипотез для быстрого запуска.' },
              { emoji: '🔄', title: 'Быстрые перезапуски победителей', text: 'Топ-креативы не просто масштабировались — я делал варианты с изменённым заголовком, другим первым кадром, другим CTA. Это продлевало жизнь связки без падения CTR.' },
              { emoji: '📐', title: 'Сегментация по уровням подготовки', text: 'Разные офферы и разные креативы для трёх сегментов: новички, переквалификация, профессиональный рост. Одно сообщение для всех — это потеря релевантности и рост CPL.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 flex gap-5">
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

      {/* ЭКРАН 7 — Команда */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Как я выстроил команду под скорость масштабирования</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Я зашёл в проект один. Когда объём гипотез и бюджет выросли — стало ясно: нужна команда, выстроенная под скорость. Я сформировал её сам.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { step: '01', title: 'Hands-on запуск всех систем', text: 'Первые запуски в каждом канале я делал сам руками. Это важно: пока не понимаешь механику изнутри — нельзя делегировать. Я должен был знать где точки роста и где ломается воронка.' },
              { step: '02', title: 'Стандартизация и регламенты', text: 'После того как связки отработаны — зафиксировал их в регламентах. Чек-лист запуска, правила UTM-разметки, стандарты по сегментации аудиторий, weekly performance review — всё стало документом, а не знанием в голове.' },
              { step: '03', title: 'Найм и делегирование', text: 'Под масштаб добавил 2 таргетологов (кросс-канально), штатных дизайнеров креативов и специалиста по Яндекс.Директ. Каждый получил чёткие KPI и работал по утверждённым регламентам.' },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl bg-white border border-gray-200 p-6 flex gap-5">
                <div className="text-3xl font-black text-primary/20 shrink-0 w-10">{item.step}</div>
                <div>
                  <div className="font-bold text-gray-900 mb-2">{item.title}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <div className="font-semibold text-gray-900 mb-3">Планирование</div>
            <ul className="space-y-2">
              {[
                'Сет креативов планировался на 2 недели вперёд',
                'Календарь вебинаров — синхронизирован с рекламным планом',
                'Бюджеты слотировались по каналам и форматам еженедельно',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="Check" size={12} className="text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ЭКРАН 8 — Аналитика */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Сквозная аналитика: от показа до оплаты</h2>

          {/* Схема-цепочка */}
          <div className="rounded-2xl bg-gradient-to-r from-primary/5 to-violet-50 border border-primary/10 p-6 mb-8 overflow-x-auto">
            <div className="flex items-center gap-2 min-w-max mx-auto w-fit">
              {['Показ', 'Клик', 'Лид / Регистрация', 'Шоу-ап', 'Корзина', 'Оплата'].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2">
                  <div className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${i === arr.length - 1 ? 'bg-primary text-white' : 'bg-white border border-gray-200 text-gray-700'}`}>
                    {step}
                  </div>
                  {i < arr.length - 1 && <Icon name="ArrowRight" size={16} className="text-gray-400 shrink-0" />}
                </div>
              ))}
            </div>
          </div>

          {/* Таблица контроля */}
          <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-6 py-3 font-semibold text-gray-700">Уровень</th>
                  <th className="text-left px-6 py-3 font-semibold text-gray-700">Метрики</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { level: 'Рекламные каналы', metrics: 'CPL, CPC, CTR, вклад канала в лиды и выручку' },
                  { level: 'Вебинарная воронка', metrics: 'Стоимость регистрации, шоу-ап, удержание до оффера, CR в оплату' },
                  { level: 'Юнит-экономика', metrics: 'CAC/ДРР по каналам и связкам, средний чек' },
                  { level: 'Операционный контроль', metrics: 'Отключение нерентабельных связок в течение 48 часов' },
                ].map((row, i) => (
                  <tr key={row.level} className={i < 3 ? 'border-b border-gray-100' : ''}>
                    <td className="px-6 py-3 font-medium text-gray-700 whitespace-nowrap">{row.level}</td>
                    <td className="px-6 py-3 text-muted-foreground">{row.metrics}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-5 flex gap-4">
            <div className="text-2xl shrink-0">⚡</div>
            <div>
              <div className="font-bold text-gray-900 mb-1">Моё правило</div>
              <p className="text-sm text-muted-foreground leading-relaxed">Нерентабельная связка живёт не дольше 48 часов. Деньги немедленно перераспределяются в пользу того, что работает. Без исключений.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ЭКРАН 9 — Результаты */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-white to-violet-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Результаты: март 2021 — май 2022</h2>

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
                  { key: 'Рекламный бюджет под управлением', value: '1,5–6 млн ₽/мес', highlight: true },
                  { key: 'Каналов трафика в работе', value: '4 (Facebook, Директ, VK, TikTok)', highlight: false },
                  { key: 'Вебинарная воронка', value: '~30% бюджета, системные продажи', highlight: false },
                  { key: 'Контроль CAC/ДРР', value: 'Удержан на уровне связок при росте бюджета', highlight: false },
                  { key: 'Команда', value: 'Выстроена с нуля: 2 таргетолога, дизайнеры, спец по Директ', highlight: false },
                  { key: 'Отключение нерентабельных связок', value: 'В течение 48 часов', highlight: false },
                ].map((row, i, arr) => (
                  <tr key={row.key} className={`${i < arr.length - 1 ? 'border-b border-gray-100' : ''} ${row.highlight ? 'bg-primary/5' : ''}`}>
                    <td className={`px-6 py-3 ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.key}</td>
                    <td className={`px-6 py-3 text-right ${row.highlight ? 'font-black text-primary text-base' : 'text-muted-foreground'}`}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted-foreground mb-6 italic">Абсолютные цифры по выручке, CPL и CAC по каналам — под NDA.</p>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-muted-foreground leading-relaxed">
              Я зашёл в проект один и выстроил двухконтурную систему продаж: прямые продажи из рекламы + вебинарная воронка с авторами. Масштабировал бюджет от 1,5 до 6 млн ₽ в месяц без выхода за целевые пороги эффективности. Собрал команду под скорость. Система работала предсказуемо — потому что каждый элемент воронки был выстроен с нуля на данных, а не на ощущениях.
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
              { emoji: '💡', title: 'Авторский вебинар + дедлайн-оффер — лучший конвертер холода', text: 'Связка "живой эфир с автором + ограниченное предложение по времени" стабильно давала конверсии даже с холодной аудитории. Люди покупают у людей — особенно когда видят эксперта вживую.' },
              { emoji: '💡', title: 'Поисковая защита бренда в Директе — это не опция', text: 'Пока Facebook привлекал холодный трафик — Директ перехватывал тех, кто уже ищет Skill Cup или конкретные программы. Без этого часть горячего спроса уходила бы к конкурентам.' },
              { emoji: '💡', title: 'Креативная матрица под три угла — это скорость', text: 'Когда у меня всегда есть набор готовых гипотез по форматам и углам подачи — я не трачу время на "что запустить". Я запускаю и смотрю на данные.' },
              { emoji: '💡', title: 'Команда под скорость = сначала сам, потом регламент, потом делегирование', text: 'Я не нанимал людей чтобы они "разобрались сами". Я сначала разобрался сам, зафиксировал стандарт, потом передал. Это единственный способ выстроить команду которая работает без постоянного контроля.' },
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
              'Facebook/Meta Ads', 'Яндекс.Директ', 'ВКонтакте Ads', 'TikTok Ads',
              'CRM', 'Email-цепочки', 'Мессенджер-напоминания',
              'Яндекс.Метрика', 'Google Analytics', 'UTM-разметка', 'Excel-дашборды',
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
            За 14 месяцев я выстроил в Skill Cup полноценную performance-систему с нуля. Два контура продаж — прямая реклама и вебинарная воронка — работали параллельно и усиливали друг друга. Бюджет масштабировался до 6 млн ₽/мес при сохранении контроля CAC/ДРР на уровне каждой связки. Команда была собрана под скорость и работала по регламентам которые я выстроил сам.
          </p>

          <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-purple-50 to-violet-100 border border-primary/10 p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Нужно выстроить performance-систему для edtech или масштабировать продажи онлайн-курсов?
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
                <DialogHeader>
                  <DialogTitle>Обсудим вашу задачу</DialogTitle>
                </DialogHeader>
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

export default SkillCup;