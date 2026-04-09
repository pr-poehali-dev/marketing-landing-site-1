import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import LeadForm from '@/components/LeadForm';

const SEO_TITLE = 'Vegannova: оборот Wildberries +40% при росте рекламных расходов +9% | Константин Пожидаев';
const SEO_DESC = 'Как вырастить оборот e-commerce бренда БАДов на Wildberries на 40% при росте рекламного бюджета всего на 9%, запустить D2C-магазин на InSales и получить 14% повторных покупок через Telegram-воронки. Кейс по e-commerce маркетингу.';
const SEO_URL = 'https://pozhidaev.ru/cases/vegannova';

const Vegannova = () => {
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
    setMeta('keywords', 'Vegannova, Wildberries, БАДы, e-commerce, D2C, InSales, Telegram-воронки, Константин Пожидаев');
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
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white via-green-50/40 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-8">
            <Icon name="ShoppingBag" size={16} />
            E-commerce · БАДы и суперфуды · Wildberries + D2C · Ноябрь 2024 — Сентябрь 2025
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Vegannova: оборот на Wildberries вырос на{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">+40%</span>
            {' '}— при росте рекламных расходов всего на{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">+9%</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
            90 артикулов, портфель БАДов и суперфудов, продажи на Wildberries и запуск собственного интернет-магазина с нуля. Выстроили аналитическую систему по каждому SKU и подгруппе товаров, нашли точки роста в карточках и рекламе, запустили D2C-канал и Telegram-воронки — 14% покупателей возвращаются за повторной покупкой.
          </p>

          {/* Ключевые цифры */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { value: '+40%', label: 'рост оборота на WB', color: 'from-green-500 to-emerald-400', bg: 'bg-green-50', border: 'border-green-200' },
              { value: '+9%', label: 'рост рекламных расходов', color: 'from-primary to-secondary', bg: 'bg-blue-50', border: 'border-blue-200' },
              { value: '500+', label: 'покупателей в D2C за первый месяц', color: 'from-violet-500 to-purple-400', bg: 'bg-violet-50', border: 'border-violet-200' },
              { value: '14%', label: 'повторных покупок из Telegram', color: 'from-orange-500 to-amber-400', bg: 'bg-orange-50', border: 'border-orange-200' },
            ].map((item) => (
              <div key={item.value} className={`${item.bg} border ${item.border} rounded-2xl p-5 text-center`}>
                <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                  {item.value}
                </div>
                <div className="text-xs text-muted-foreground leading-snug">{item.label}</div>
              </div>
            ))}
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">С чего начинали</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground mb-10 space-y-4">
            <p>Vegannova — e-commerce бренд БАДов и суперфудов. Продажи на Wildberries, портфель из 90 артикулов в одной витринной категории — но с совершенно разными продуктовыми кластерами и логиками спроса.</p>
            <p>Главная проблема на входе: всё управлялось «средней температурой по больнице». Один ДРР на всю категорию, одни решения для всех карточек, нет декомпозиции по подгруппам. При этом омега-3, коллаген, Д3 и магний — это принципиально разные аудитории, разная конкуренция, разные конверсии и разная экономика.</p>
            <p>Второй вызов: бренд хотел выйти за пределы маркетплейса — выстроить прямой канал продаж и начать работать с покупателями напрямую.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { color: 'border-l-red-500 bg-red-50', icon: '🔴', title: 'Нет сегментации портфеля', desc: '90 артикулов управлялись как единая категория — без разбивки по подгруппам и логикам спроса' },
              { color: 'border-l-red-500 bg-red-50', icon: '🔴', title: 'Нет системы планирования', desc: 'Не было алгоритма планирования продаж, декомпозиции в трафик и бюджет, контроля отклонений от плана' },
              { color: 'border-l-yellow-500 bg-yellow-50', icon: '🟡', title: 'Нет D2C-канала', desc: 'Все продажи через Wildberries, нет прямого контакта с покупателем, нет работы с повторными покупками' },
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

      {/* ЭКРАН 3 — Стратегия */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Стратегия: два контура роста параллельно</h2>
          <p className="text-muted-foreground mb-10 text-lg">Я не стал разрываться между задачами. Выстроил две параллельные системы которые усиливали друг друга.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-500 text-white flex items-center justify-center font-bold text-lg">1</div>
                <span className="font-bold text-gray-900">Контур 1 — Wildberries</span>
              </div>
              <div className="text-sm font-semibold text-green-700 mb-3">Рост оборота через аналитику и CRO</div>
              <p className="text-sm text-muted-foreground leading-relaxed">Маркетплейс как основной драйвер выручки. Задача — выстроить аналитику по каждому SKU и подгруппе, найти и устранить потери в воронке, вырасти в обороте без пропорционального роста рекламных расходов.</p>
            </div>
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-lg">2</div>
                <span className="font-bold text-gray-900">Контур 2 — D2C</span>
              </div>
              <div className="text-sm font-semibold text-primary mb-3">Интернет-магазин и Telegram-воронки</div>
              <p className="text-sm text-muted-foreground leading-relaxed">Собственный канал продаж как инструмент лояльности и повторных покупок. Telegram-воронки как мост между WB-покупателем и прямым каналом. Снижение зависимости от маркетплейса в долгосрочной перспективе.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ЭКРАН 4 — Аналитическая система */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Аналитическая система: экономика в любом разрезе за секунды</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">Первое что я сделал — выстроил единую аналитическую таблицу которая стала «операционным центром» всего проекта. До этого решения принимались на ощущениях. После — на цифрах.</p>

          {/* Блок 1 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-7 mb-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="BarChart3" size={18} className="text-primary" />
              </div>
              <span className="font-bold text-gray-900">Многоуровневая аналитика в Excel</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Экономика считалась одновременно в четырёх разрезах:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {[
                { icon: 'Package', label: 'По артикулу', sub: 'каждый SKU отдельно' },
                { icon: 'Layers', label: 'По подгруппе', sub: 'Омега-3, Коллаген, Д3, Магний, суперфуды' },
                { icon: 'User', label: 'По менеджеру', sub: 'кто за что отвечает и какой результат даёт' },
                { icon: 'Building2', label: 'По бренду', sub: 'сводная картина для руководства' },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 rounded-xl p-4 text-center">
                  <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={22} className="text-primary mx-auto mb-2" />
                  <div className="font-semibold text-gray-900 text-sm mb-1">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.sub}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Это позволило видеть где именно теряются деньги — не «в категории БАД вообще», а конкретно в подгруппе «Коллаген» в карточке с артикулом Х.</p>
          </div>

          {/* Блок 2 — Декомпозиция */}
          <div className="bg-white rounded-2xl border border-gray-200 p-7 mb-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center">
                <Icon name="GitFork" size={18} className="text-green-600" />
              </div>
              <span className="font-bold text-gray-900">Алгоритм планирования с полной декомпозицией</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">От планового оборота — вниз по воронке:</p>
            <div className="flex flex-col items-center gap-1">
              {[
                { label: 'Оборот', color: 'bg-green-500' },
                { label: 'Количество покупок', color: 'bg-green-400' },
                { label: 'Корзин', color: 'bg-emerald-400' },
                { label: 'Переходов в карточку', color: 'bg-teal-400' },
                { label: 'Показов', color: 'bg-cyan-500' },
                { label: 'Трафика', color: 'bg-blue-500' },
                { label: 'Рекламного бюджета', color: 'bg-primary' },
              ].map((step, i, arr) => (
                <div key={step.label} className="flex flex-col items-center w-full max-w-xs">
                  <div className={`${step.color} text-white text-sm font-semibold px-6 py-2.5 rounded-xl w-full text-center`}>
                    {step.label}
                  </div>
                  {i < arr.length - 1 && (
                    <Icon name="ArrowDown" size={20} className="text-gray-400 my-0.5" />
                  )}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mt-6">Это дало чёткий ответ на вопрос: сколько нужно показов и какой бюджет, чтобы выполнить план по выручке в каждой подгруппе. Планирование перестало быть интуицией — стало математикой.</p>
          </div>

          {/* Блок 3 — РНП */}
          <div className="bg-white rounded-2xl border border-gray-200 p-7 mb-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center">
                <Icon name="Activity" size={18} className="text-orange-600" />
              </div>
              <span className="font-bold text-gray-900">РНП с цветовой подсветкой</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Отчёт «рука на пульсе» с автоматической подсветкой отклонений от плана — два состояния, никакой двусмысленности:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <div className="bg-green-50 border-2 border-green-300 rounded-xl p-5 flex items-start gap-4">
                <div className="w-5 h-5 rounded-full bg-green-500 shrink-0 mt-0.5"></div>
                <div>
                  <div className="font-bold text-green-800 mb-1">Зелёный — в плане</div>
                  <div className="text-sm text-green-700">Показатель в плане или выше. Работаем дальше.</div>
                </div>
              </div>
              <div className="bg-pink-50 border-2 border-pink-300 rounded-xl p-5 flex items-start gap-4">
                <div className="w-5 h-5 rounded-full bg-pink-400 shrink-0 mt-0.5"></div>
                <div>
                  <div className="font-bold text-pink-800 mb-1">Розовый — требует внимания</div>
                  <div className="text-sm text-pink-700">Отклонение от плана, требует внимания и действия.</div>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Менеджеры видели свою зону ответственности в режиме реального времени. Руководство видело общую картину по всем подгруппам. Время реакции на проблему сократилось с недель до дней.</p>
          </div>

          {/* Блок 4 — Фабрика гипотез */}
          <div className="bg-white rounded-2xl border border-gray-200 p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center">
                <Icon name="FlaskConical" size={18} className="text-violet-600" />
              </div>
              <span className="font-bold text-gray-900">Фабрика гипотез</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">На основе аналитики формировался еженедельный список гипотез для тестирования: визуалы карточек, инфографика, Rich-контент, ставки в рекламе, управление склейкой. Каждая гипотеза — конкретный артикул, конкретная метрика, конкретный срок проверки. Никаких «попробуем и посмотрим».</p>
          </div>
        </div>
      </section>

      {/* ЭКРАН 5 — CRO карточек */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">CRO карточек: системный подход к росту конверсий</h2>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
            <div className="space-y-6">
              {[
                {
                  num: '01',
                  title: 'Конкурентный анализ по каждой подкатегории',
                  desc: 'Использовал сервисы аналитики и подписку «Джем»: позиции конкурентов, ценовые стратегии, ставки в рекламе, визуал карточек, конверсии, объём продаж. По каждой подгруппе — отдельный срез рынка и выводы для гипотез.',
                  icon: 'Search',
                },
                {
                  num: '02',
                  title: 'A/B-тесты главного фото',
                  desc: 'Тестировал ракурсы, раскладки, айдентику. Замерял изменение CTR после каждого теста. Победившие варианты масштабировались на похожие SKU внутри подгруппы.',
                  icon: 'ImageIcon',
                },
                {
                  num: '03',
                  title: 'Обновление инфографики и Rich-контента',
                  desc: 'Переработал структуру выгод в карточках: ответы на возражения, ключевые свойства продукта, сертификаты качества. Цель — рост конверсии из перехода в карточку в добавление в корзину.',
                  icon: 'FileImage',
                },
                {
                  num: '04',
                  title: 'Управление склейкой и расклейкой товаров',
                  desc: 'Стратегическое управление вариантами и модификациями внутри категорий — для оптимизации позиций и конверсий.',
                  icon: 'Link2',
                },
                {
                  num: '05',
                  title: 'Контроль ДРР по SKU',
                  desc: 'Строгий контроль рекламных расходов на уровне каждого артикула и подгруппы.',
                  icon: 'TrendingDown',
                  highlight: 'ДРР по бренду удерживался в диапазоне 8–11% от выручки каждый месяц.',
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 md:pl-16 relative">
                  <div className="hidden md:flex absolute left-0 w-10 h-10 rounded-full bg-primary text-white items-center justify-center text-sm font-bold shrink-0">
                    {step.num}
                  </div>
                  <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="md:hidden w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">{step.num}</div>
                      <Icon name={step.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-primary hidden md:block" />
                      <span className="font-semibold text-gray-900">{step.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    {step.highlight && (
                      <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-800 rounded-lg text-sm font-semibold">
                        <Icon name="Target" size={14} />
                        {step.highlight}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ЭКРАН 6 — Telegram-воронки */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Как выстроили прямой канал с покупателями</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">Wildberries не даёт прямого контакта с покупателем. Мы это изменили — через физическую точку входа прямо в упаковке каждого товара.</p>

          {/* Механика */}
          <div className="flex flex-wrap items-center gap-3 mb-10 p-5 bg-white rounded-2xl border border-gray-200">
            <span className="text-sm text-muted-foreground">Механика входа:</span>
            {['QR-код на упаковке + вкладыш в коробке', 'Покупатель сканирует', 'Попадает в Telegram-бот'].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-3">
                <div className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium">{step}</div>
                {i < arr.length - 1 && <Icon name="ArrowRight" size={16} className="text-muted-foreground shrink-0" />}
              </div>
            ))}
          </div>

          <h3 className="font-semibold text-gray-900 mb-4">8 воронок под разные сценарии:</h3>
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Сценарий воронки</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Цель</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { scenario: 'Полезный контент по продуктам и режимам приёма', goal: 'Вовлечение и доверие' },
                  { scenario: 'Гарантии и FAQ', goal: 'Снижение возвратов' },
                  { scenario: 'Напоминания о повторной покупке', goal: 'Рост LTV' },
                  { scenario: 'Кросс-селлы и наборы', goal: 'Рост среднего чека' },
                  { scenario: 'Персональные промо-коды', goal: 'Перевод в D2C-магазин' },
                  { scenario: 'Брошенная корзина', goal: 'Возврат к покупке' },
                  { scenario: 'Пост-покупка', goal: 'Отзывы и лояльность' },
                  { scenario: 'Сегментированные рассылки', goal: 'Повторные покупки' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="px-6 py-3 text-sm text-gray-900">{row.scenario}</td>
                    <td className="px-6 py-3 text-sm text-muted-foreground">{row.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-4 p-5 bg-orange-50 border border-orange-200 rounded-xl">
            <div className="text-4xl font-black text-orange-500">14%</div>
            <div>
              <div className="font-semibold text-gray-900">повторных покупок через Telegram-канал</div>
              <div className="text-sm text-muted-foreground">без рекламных расходов на повторное привлечение</div>
            </div>
          </div>
        </div>
      </section>

      {/* ЭКРАН 7 — Запуск D2C */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Запуск D2C интернет-магазина на InSales</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Icon name="Code2" size={18} className="text-blue-600" />
                </div>
                <span className="font-bold text-gray-900">Техническая часть</span>
              </div>
              <ul className="space-y-3">
                {[
                  'Сравнительный анализ CMS-платформ → выбрана InSales как оптимальное решение под задачи бренда',
                  'Подключение платёжных модулей и логистики',
                  'Интеграция с CRM, email-маркетингом и Telegram-ботами',
                  'Настройка сегментированных цепочек: новые / повторные / брошенная корзина / пост-покупка',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Icon name="Check" size={16} className="text-blue-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center">
                  <Icon name="TrendingUp" size={18} className="text-green-600" />
                </div>
                <span className="font-bold text-gray-900">Маркетинговая часть</span>
              </div>
              <ul className="space-y-3">
                {[
                  'SEO-оптимизация: структура каталога, метаданные, технический аудит, контент-карты категорий',
                  'Регулярные акции и кэшбэк-механики для стимулирования прямых покупок',
                  'Контекстная и таргетированная реклама синхронизированная с Telegram-воронками',
                  'Единая аналитика: D2C-магазин и Wildberries в одном дашборде',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Icon name="Check" size={16} className="text-green-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ЭКРАН 8 — Сквозная аналитика */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Сквозная аналитика: от артикула до сводного дашборда</h2>

          {/* Схема-цепочка */}
          <div className="flex flex-wrap items-center gap-2 mb-10 p-5 bg-white rounded-2xl border border-gray-200">
            {[
              'Wildberries Ads + кабинет',
              'Сервис аналитики + Джем',
              'InSales + CRM',
              'Excel-дашборд (РНП + декомпозиция)',
            ].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2">
                <div className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">{step}</div>
                {i < arr.length - 1 && <Icon name="ArrowRight" size={16} className="text-muted-foreground shrink-0" />}
              </div>
            ))}
          </div>

          {/* Еженедельный цикл */}
          <h3 className="font-semibold text-gray-900 mb-4">Еженедельный цикл работы:</h3>
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 w-1/3">День</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Действие</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { day: 'Понедельник', action: 'Разбор РНП: зелёное масштабируем, розовое разбираем и исправляем' },
                  { day: 'Понедельник', action: 'Синхронизация с менеджерами по товарным группам' },
                  { day: 'В течение недели', action: 'Запуск гипотез из фабрики: визуалы, ставки, склейка' },
                  { day: 'Пятница', action: 'Сбор результатов тестов, решения по бюджету на следующую неделю' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="px-6 py-3 text-sm font-medium text-gray-900">{row.day}</td>
                    <td className="px-6 py-3 text-sm text-muted-foreground">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ЭКРАН 9 — Результаты */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Результаты: ноябрь 2024 — сентябрь 2025</h2>

          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white mb-6">
            <table className="w-full">
              <tbody>
                {[
                  { label: 'Рост оборота на Wildberries', value: '+40%', highlight: true },
                  { label: 'Рост рекламных расходов', value: 'всего +9%', highlight: true },
                  { label: 'ДРР по бренду', value: '8–11% ежемесячно', highlight: false },
                  { label: 'Покупателей в D2C за первый месяц', value: '500+', highlight: false },
                  { label: 'Повторных покупок через Telegram', value: '14%', highlight: false },
                  { label: 'Telegram-воронок запущено', value: '8', highlight: false },
                  { label: 'Артикулов под управлением', value: '90', highlight: false },
                  { label: 'Подгрупп в аналитике', value: 'Омега-3, Коллаген, Д3, Магний + суперфуды', highlight: false },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 last:border-0 ${row.highlight ? 'bg-gradient-to-r from-green-50 to-emerald-50' : ''}`}>
                    <td className={`px-6 py-4 text-sm ${row.highlight ? 'font-bold text-gray-900' : 'font-medium text-gray-900'}`}>{row.label}</td>
                    <td className={`px-6 py-4 text-right ${row.highlight ? 'font-black text-2xl text-green-600' : 'text-sm text-muted-foreground'}`}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted-foreground italic mb-6">
            Детальные данные по абсолютным цифрам выручки и бюджетам — под NDA по запросу.
          </p>

          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              Рост оборота на 40% при росте рекламных расходов всего на 9% — это результат не «больше рекламы», а умной аналитики. Сегментация портфеля по подгруппам, планирование с полной декомпозицией воронки, РНП с двухцветной подсветкой и фабрика гипотез по карточкам — всё это вместе дало эффект который невозможно получить точечными правками.
            </p>
          </div>
        </div>
      </section>

      {/* ЭКРАН 10 — Ключевые факторы */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Почему это сработало: пять ключевых решений</h2>

          <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3">
            {[
              {
                icon: '💡',
                title: 'Сегментация вместо «общих решений»',
                desc: 'Разбивка на подгруппы (Омега-3, Коллаген, Д3, Магний) дала точность управления которую невозможно получить при работе с «категорией БАД вообще». Каждая подгруппа — своя экономика, свои гипотезы, свои решения.',
              },
              {
                icon: '💡',
                title: 'Планирование сверху вниз',
                desc: 'Алгоритм декомпозиции от планового оборота до рекламного бюджета убрал вопрос «а сколько нам тратить на рекламу?» — ответ всегда был в таблице, обоснованный цифрами воронки.',
              },
              {
                icon: '💡',
                title: 'РНП: два цвета — одно правило',
                desc: 'Зелёный — работаем и масштабируем. Розовый — немедленно разбираем и исправляем. Простая система без полутонов сократила время реакции на отклонения с недель до дней.',
              },
              {
                icon: '💡',
                title: 'Фабрика гипотез по карточкам',
                desc: 'Системное тестирование визуалов и контента — не «поменяем фото и посмотрим», а структурированный цикл с замером CTR и конверсий после каждого теста.',
              },
              {
                icon: '💡',
                title: 'Telegram как канал удержания',
                desc: '14% повторных покупок через Telegram-воронки — это выручка без рекламных расходов на повторное привлечение. Каждый покупатель с Wildberries становится активом бренда, а не разовой транзакцией.',
              },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="text-2xl mb-3">{card.icon}</div>
                <div className="font-semibold text-gray-900 mb-3">{card.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 11 — Инструменты */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Стек инструментов</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Wildberries Ads', 'Сервис аналитики WB', 'Джем', 'InSales', 'Telegram-боты',
              'Email-маркетинг', 'CRM', 'SEO', 'Яндекс.Директ', 'ВКонтакте Ads', 'Excel', 'UTM-разметка',
            ].map((tool) => (
              <span key={tool} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 12 — CTA */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Итог</h2>
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-3xl">
            За 10 месяцев выстроены два параллельных контура роста. Wildberries: оборот +40% при рекламных расходах +9%, ДРР 8–11% — за счёт аналитики по подгруппам, планирования с декомпозицией и CRO карточек. D2C: запущен интернет-магазин на InSales, 8 Telegram-воронок, 500+ покупателей в базе за первый месяц, 14% повторных покупок. Система продолжает работать.
          </p>

          <div className="rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Продаёте на Wildberries или строите D2C?</h3>
            <p className="text-white/85 mb-8 leading-relaxed max-w-lg mx-auto">
              Если хотите вырасти в обороте без пропорционального роста рекламного бюджета — давайте разберём вашу ситуацию. 30 минут, бесплатно, конкретные выводы по вашему проекту.
            </p>
            <Dialog open={formOpen} onOpenChange={setFormOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 font-bold">
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
    </div>
  );
};

export default Vegannova;
