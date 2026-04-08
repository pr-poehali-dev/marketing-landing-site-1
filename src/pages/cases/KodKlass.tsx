import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import LeadForm from '@/components/LeadForm';

const SEO_TITLE = 'КодКласс: рост выручки в 4 раза за 4 месяца при ДРР 25–27% | Константин Пожидаев';
const SEO_DESC = 'Как масштабировать детскую онлайн-школу программирования в 4 раза за 4 месяца через ВКонтакте и Senler-бот — без роста ДРР выше 27%. Кейс по стратегии трафика и построению команды.';
const SEO_URL = 'https://pozhidaev.ru/cases/kodklass';

const KodKlass = () => {
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
    setMeta('keywords', 'КодКласс, детская онлайн-школа программирования, кейс ВКонтакте, Senler-бот, рост выручки, ДРР, Константин Пожидаев');
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
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white via-blue-50/40 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
            <Icon name="Code2" size={16} />
            EdTech · Детская онлайн-школа программирования · Декабрь 2024 — Март 2025
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            КодКласс: общая выручка школы выросла в{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">4 раза</span>{' '}
            за 4 месяца
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl">
            Один перформанс-канал, два таргетолога на входе, чёткая задача на масштаб. За 4 месяца нашли победную связку, перестроили команду и вывели выручку на уровень 10+ млн рублей в месяц — при ДРР 25–27%.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { value: '×4', label: 'рост общей выручки школы', color: 'from-primary to-secondary' },
              { value: '25–27%', label: 'ДРР удерживался ежемесячно', color: 'from-secondary to-accent' },
              { value: '10+ млн ₽', label: 'выручка в месяц на выходе', color: 'from-accent to-primary' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-8 rounded-2xl bg-white border-2 border-gray-100 shadow-sm">
                <div className={`text-5xl md:text-6xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <Dialog open={formOpen} onOpenChange={setFormOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
                Обсудить похожую задачу
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader><DialogTitle>Обсудим вашу задачу</DialogTitle></DialogHeader>
              <LeadForm />
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* ЭКРАН 2 — Контекст */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Что было на старте</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Декабрь 2024. КодКласс — детская онлайн-школа программирования — обратились с задачей: масштабировать трафик и продажи на оффер "бесплатный пробный урок с педагогом". Сохранить при этом управляемую юнит-экономику.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            На входе: два таргетолога ВКонтакте, один рабочий канал трафика, нет выстроенной системы гипотез и регламентов. Запас для роста — огромный. Но нужна была стратегия, а не просто "больше рекламы".
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Мой формат работы в этом проекте: стратегия и аналитика — моя зона. Первые запуски — руками. Как только связка отработана — стандартизация и передача команде.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: 'Radio', color: 'yellow', title: 'Один рабочий канал', desc: 'ВКонтакте — основной и единственный работающий канал трафика' },
              { icon: 'Users', color: 'yellow', title: 'Команда без системы', desc: '2 таргетолога, нет регламентов, нет цикла гипотез, нет сквозной аналитики' },
              { icon: 'TrendingUp', color: 'red', title: 'Задача: кратный рост', desc: 'Масштабировать выручку при сохранении ДРР — быстро, без права на долгую "раскачку"' },
            ].map((card) => (
              <div key={card.title} className={`p-6 rounded-xl border-2 bg-white ${card.color === 'red' ? 'border-red-200' : 'border-yellow-200'}`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${card.color === 'red' ? 'bg-red-100' : 'bg-yellow-100'}`}>
                  <Icon name={card.icon as 'Radio'} size={20} className={card.color === 'red' ? 'text-red-500' : 'text-yellow-600'} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 3 — Стратегия */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Стратегия: четыре принципа, которые легли в основу</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: 'RefreshCw', title: 'Короткие Agile-циклы', desc: 'Гипотеза → запуск → аналитика → оптимизация → масштабирование. Максимум одна неделя на проверку каждой связки. Никаких "дадим ещё месяц".' },
              { icon: 'BarChart2', title: 'Сквозная аналитика от клика до оплаты', desc: 'Контролировал каждый шаг воронки: креатив → клик → шаги бота → запись на пробный → шоу-ап → оплата. ДРР считался на уровне каждой связки.' },
              { icon: 'Map', title: 'Гео-стратегия "светофор"', desc: 'Все регионы разбил на три группы по конверсии. Бюджет концентрировался в топовых гео. Слабые регионы — минимальные ставки и локальные тесты.' },
              { icon: 'Users', title: 'Команда под скорость масштабирования', desc: 'Сеньоры — на стратегические связки и оптимизацию. Стажёры — на массовые запуски по чек-листам. Высокий темп тестирования без потери качества.' },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-xl border border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={card.icon as 'RefreshCw'} size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 4 — Победная связка */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Протестировали 5 типов воронок. Победила одна</h2>
          <p className="text-muted-foreground mb-10">Мы не угадывали — мы проверяли. Каждая воронка запускалась по единому регламенту, замерялась по одним метрикам, сравнивалась честно.</p>

          <div className="mb-6 p-6 rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                <Icon name="Trophy" size={16} className="text-yellow-900" />
              </div>
              <span className="font-bold text-primary text-sm uppercase tracking-wide">Победившая связка</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">ВКонтакте таргет → "Написать в сообщество" → Senler-бот с триггерной цепочкой</h3>
            <p className="text-muted-foreground leading-relaxed">
              Один клик на объявлении — и пользователь уже в диалоге. Бот ведёт к записи на пробный урок без лишних шагов. Минимальное трение на входе дало максимальную конверсию в запись и в оплату — лучше чем все альтернативы.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
            <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
              <span className="text-sm font-medium text-muted-foreground">Что тестировали (остались как поддерживающие каналы)</span>
            </div>
            <table className="w-full">
              <tbody>
                {[
                  { variant: 'ВК → подписная страница Senler', result: 'Хуже по CR в запись' },
                  { variant: 'ВК → лендинг Tilda (микро)', result: 'Хуже по CR в оплату' },
                  { variant: 'ВК → лендинг Tilda (полный)', result: 'Хуже по CR в оплату' },
                  { variant: 'ВК → лид-формы', result: 'Хуже по качеству лидов' },
                  { variant: 'Telegram-посевы + Маркет-платформа VK', result: 'Выше CPA — оставлены точечно' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="px-6 py-3 text-sm text-gray-700">{row.variant}</td>
                    <td className="px-6 py-3 text-sm text-muted-foreground text-right">{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ЭКРАН 5 — Оптимизация Senler */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Как докручивали воронку изнутри</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Найти победную связку — это половина работы. Дальше нужно было выжать из неё максимум. Мы работали с Senler-ботом системно: не "правили на ощущение", а тестировали каждый элемент отдельно.
          </p>

          <div className="space-y-4">
            {[
              { num: '1', title: 'Карта бота с точками потерь', desc: 'Построил полную схему бота и зафиксировал на каких шагах пользователи уходят. Каждая точка потери — конкретная гипотеза на следующий цикл тестирования.' },
              { num: '2', title: 'A/B-тесты первого сообщения', desc: 'Точка входа — самое важное место в боте. Тестировал формулировки, тон, формат CTA. Именно здесь сосредоточен наибольший потенциал роста CR.' },
              { num: '3', title: 'Тайминг и формат напоминаний', desc: 'Тестировали время отправки напоминаний о записанном уроке, формат сообщений, количество касаний. Нашли оптимальное окно — шоу-ап на пробный урок вырос.' },
              { num: '4', title: 'Сокращение шагов до записи', desc: 'Убрали промежуточные шаги которые не давали ценности пользователю. Меньше шагов — меньше трения — выше конверсия на каждом переходе.' },
            ].map((step) => (
              <div key={step.num} className="flex gap-5 p-5 rounded-xl border border-gray-100 bg-white shadow-sm">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 6 — Команда */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Как выстроил работу команды</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Состав команды после масштабирования</h3>
              <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Роль</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Задача</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { role: 'Я', task: 'Стратегия, аналитика, архитектура процессов' },
                      { role: 'Сеньоры-таргетологи', task: 'Стратегические связки, оптимизация' },
                      { role: 'Стажёры-таргетологи', task: 'Массовые запуски по чек-листам' },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="px-6 py-3 text-sm font-medium text-gray-900">{row.role}</td>
                        <td className="px-6 py-3 text-sm text-muted-foreground">{row.task}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-gray-200 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Icon name="FileText" size={18} className="text-secondary" />
                </div>
                <h3 className="font-bold text-gray-900">Регламенты которые внедрил</h3>
              </div>
              <ul className="space-y-2">
                {[
                  'Алгоритм запуска новых кампаний — от гипотезы до первых данных',
                  'Чек-листы по креативам и сегментации аудиторий',
                  'Единые стандарты UTM-разметки для сквозной аналитики',
                  'Еженедельные ретроспективы и перераспределение бюджета',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Icon name="CheckCircle" size={16} className="text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon name="Target" size={18} className="text-accent" />
                </div>
                <h3 className="font-bold text-gray-900">KPI каждого специалиста</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Каждый таргетолог работал со своими плановыми показателями: CPL к пробному уроку / CR по воронке / ДРР по связкам. Еженедельный разбор — без исключений.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ЭКРАН 7 — Аналитика */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Сквозная аналитика: от клика до оплаты</h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-10 flex-wrap">
            {['ВКонтакте Ads', 'Senler / Tilda', 'AmoCRM', 'Сводный дашборд Google Таблицы'].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2">
                <div className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm text-center">{step}</div>
                {i < arr.length - 1 && <Icon name="ArrowRight" size={18} className="text-muted-foreground shrink-0" />}
              </div>
            ))}
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white mb-8">
            <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
              <span className="text-sm font-semibold text-gray-700">Метрики контроля на каждом этапе</span>
            </div>
            <table className="w-full">
              <tbody>
                {[
                  { stage: 'Реклама', metric: 'CPC, CTR, CR в клик' },
                  { stage: 'Бот / лендинг', metric: 'CR в запись на пробный' },
                  { stage: 'Пробный урок', metric: 'Шоу-ап, доходимость' },
                  { stage: 'Продажа', metric: 'CR в оплату, ДРР по связке' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="px-6 py-3 text-sm font-medium text-gray-900">{row.stage}</td>
                    <td className="px-6 py-3 text-sm text-muted-foreground">{row.metric}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-5 rounded-xl bg-amber-50 border border-amber-200">
            <div className="flex items-start gap-3">
              <Icon name="AlertCircle" size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-amber-900 text-sm">Правило дисциплины: </span>
                <span className="text-sm text-amber-800">Нерентабельные связки отключались в течение 48 часов. Бюджет немедленно перераспределялся в пользу связок с лучшим ДРР. Это правило не обсуждалось — оно было зафиксировано в регламенте.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ЭКРАН 8 — Результаты */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Результаты: декабрь 2024 — март 2025</h2>

          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white mb-6">
            <table className="w-full">
              <tbody>
                {[
                  { label: 'Рост выручки', value: '×4 за 4 месяца', highlight: true },
                  { label: 'Выручка на выходе', value: '10+ млн ₽ в месяц', highlight: false },
                  { label: 'ДРР', value: '25–27% ежемесячно', highlight: false },
                  { label: 'Основной драйвер роста', value: 'ВКонтакте + Senler-бот', highlight: false },
                  { label: 'Срок', value: '4 месяца', highlight: false },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 last:border-0 ${row.highlight ? 'bg-gradient-to-r from-primary/5 to-secondary/5' : ''}`}>
                    <td className={`px-6 py-4 text-sm ${row.highlight ? 'font-bold text-primary' : 'font-medium text-gray-900'}`}>{row.label}</td>
                    <td className={`px-6 py-4 text-sm text-right ${row.highlight ? 'font-black text-2xl text-primary' : 'text-muted-foreground'}`}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted-foreground italic mb-4">
            Основной вклад в рост — таргет ВКонтакте в связке с Senler-ботом. Telegram-посевы и Маркет-платформа использовались как поддерживающие каналы. Детальные данные по бюджетам — под NDA.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            После завершения проекта команда и система продолжили работу самостоятельно. Задача была выполнена — я передал работающий механизм и вышел из проекта.
          </p>
        </div>
      </section>

      {/* ЭКРАН 9 — Инсайты */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Что сработало лучше всего: инсайты проекта</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: 'MessageCircle', title: 'Мессенджер-воронка бьёт лендинг', desc: 'VK → Senler-бот показал конверсию выше, чем любой лендинг или лид-форма. Причина простая: меньше шагов, меньше трения, быстрее первая реакция.' },
              { icon: 'MapPin', title: 'Гео-фокус эффективнее широкого охвата', desc: 'Концентрация бюджета в топовых регионах по конверсии дала кратно лучший результат, чем равномерное размазывание по всей России.' },
              { icon: 'Users', title: 'Модель "сеньоры + стажёры" = скорость без потери качества', desc: 'Сеньоры держат стратегические связки и оптимизацию. Стажёры обеспечивают скорость масштабирования по чётким регламентам. Тестировали гипотезы в 3–4 раза быстрее.' },
              { icon: 'Zap', title: 'Жёсткие KPI + 48-часовое правило = управляемый рост', desc: 'Еженедельный разбор метрик и немедленное отключение нерентабельных связок не давали плохим гипотезам "тянуть одеяло" на себя.' },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-xl border border-gray-100 shadow-sm bg-white">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name={card.icon as 'MessageCircle'} size={20} className="text-secondary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 10 — Инструменты */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Стек инструментов проекта</h2>
          <div className="flex flex-wrap gap-3">
            {['ВКонтакте Ads', 'Senler', 'Tilda', 'AmoCRM', 'Google Таблицы', 'Telegram-посевы', 'Маркет-платформа VK', 'Яндекс.Метрика', 'UTM-разметка'].map((tool) => (
              <span key={tool} className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 11 — Итог и CTA */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Итог</h2>
          <p className="text-muted-foreground leading-relaxed mb-16 max-w-3xl">
            За 4 месяца общая выручка КодКласс выросла в 4 раза и вышла на уровень 10+ млн рублей в месяц. ДРР удерживался в диапазоне 25–27% на протяжении всего периода. Найдена и отмасштабирована победная связка, выстроена команда с регламентами и KPI, внедрена сквозная аналитика от клика до оплаты.
            {' '}Я вошёл в проект чтобы решить конкретную задачу — и вышел когда она была решена, оставив работающую систему и самостоятельную команду.
          </p>

          <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-purple-50 to-secondary/10 border border-primary/20 p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Узнаёте свою ситуацию?</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Если вам нужно масштабировать трафик онлайн-школы или выстроить перформанс-систему с управляемым ДРР — давайте разберём вашу ситуацию. 30 минут, бесплатно, без обязательств.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
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

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/30 text-center text-sm text-muted-foreground">
        <Link to="/" className="font-semibold text-gray-900 hover:text-primary transition-colors">Константин Пожидаев</Link>
        {' '}— системный маркетолог · <Link to="/cases" className="hover:text-primary transition-colors">Все кейсы</Link>
      </footer>
    </div>
  );
};

export default KodKlass;
