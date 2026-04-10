import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import LeadForm from '@/components/LeadForm';

const SEO_TITLE = 'SVEN: запуск YouTube и Instagram с нуля, рост VK с 40К до 70К, performance с ритейлом | Константин Пожидаев';
const SEO_DESC = 'Как я запустил digital-экосистему бренда SVEN с нуля: YouTube-канал, Instagram, рост VK-сообщества с 40 000 до 70 000 подписчиков, коллаборации с Goods и геймерскими комьюнити, совместные performance-кампании с ритейлом в Яндекс.Директ, VK и Instagram. Кейс по бренд-маркетингу и контент-продакшну.';
const SEO_URL = 'https://pozhidaev.ru/cases/sven';

const Sven = () => {
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
    setMeta('keywords', 'SVEN, бренд-маркетинг, YouTube, VK, Instagram, контент-продакшн, коллаборации, performance, Яндекс.Директ, Константин Пожидаев');
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
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-6">
            {['Бренд-маркетинг', 'Контент-продакшн', 'Компьютерная акустика', 'Performance с ритейлом'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            SVEN: я запустил digital-экосистему бренда с нуля и вырастил VK-сообщество с 40 000 до 70 000 подписчиков
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            Компьютерная акустика и аксессуары. Я выстроил всё с нуля в одиночку: запустил YouTube-канал и Instagram, вырастил VK-сообщество на 30 000 подписчиков, организовал полный цикл контент-продакшна обзоров, выстроил коллаборации с Goods, геймерскими комьюнити и Российским союзом молодёжи, запустил совместные performance-кампании с ритейлом.
          </p>

          {/* Три ключевые цифры */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { value: '+30 000', label: 'новых подписчиков VK (с 40К до 70К)' },
              { value: '3 канала', label: 'YouTube + VK + Instagram одновременно' },
              { value: '×0→1', label: 'YouTube и Instagram запущены с абсолютного нуля' },
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
            SVEN — бренд компьютерной акустики и аксессуаров. Продуктовая линейка охватывает геймерский и масс-сегменты: акустические системы, наушники, периферия.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Когда я зашёл в проект, в наличии была одна активная VK-группа с ~40 000 участников. YouTube-канала не существовало. Instagram — тоже. Вся операционка по соцсетям и контент-продакшну легла на мою сторону полностью. Формат работы — one-man-band: я отвечал за стратегию, контент, съёмку, аналитику и performance одновременно.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { emoji: '🟡', color: 'border-yellow-200 bg-yellow-50', title: 'Только VK и только 40К', text: 'Одна площадка, одна аудитория. YouTube и Instagram нужно было запустить с нуля — без базы, без контента, без процессов' },
              { emoji: '🔴', color: 'border-red-200 bg-red-50', title: 'Нет контент-продакшна', text: 'Ни обзоров, ни видео, ни системного контента. Весь продакшн — организовать, запустить и вести самому' },
              { emoji: '🔴', color: 'border-red-200 bg-red-50', title: 'One-man-band', text: 'Стратегия, контент, съёмка, монтаж, реклама, аналитика, партнёрства — всё на одном человеке без команды на входе' },
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Стратегия: контент как ядро, cross-channel как система</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Я выстроил логику от содержания к дистрибуции. Не "давайте сделаем YouTube", а "давайте создадим контент, который будет работать на всех площадках сразу и питать рекламу".
          </p>

          <div className="space-y-5">
            {[
              { emoji: '🎯', title: 'Контент как ядро', text: 'Системные обзоры продуктов, сравнения моделей, гайды по подключению и настройке, подборки "для геймеров / для дома / для офиса". Каждый материал — не разовый контент, а актив: основа для рекламных креативов, PR-интеграций и SEO.' },
              { emoji: '🔄', title: 'Cross-channel дистрибуция', text: 'Единые рубрики и креативные "арки" — я переупаковывал один контент под формат каждой площадки. YouTube-обзор → нарезка для VK → короткий формат для Instagram. Производство ×1, охват ×3.' },
              { emoji: '🤝', title: 'Комьюнити-партнёрства', text: 'Я изначально закладывал коллаборации как инструмент роста: геймерские сообщества, молодёжные организации, маркетплейсы. Это давало охват и доверие, которые нельзя купить просто рекламой.' },
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

      {/* ЭКРАН 4 — Запуск соцсетей */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Как я запустил три канала параллельно</h2>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: 'Play',
                emoji: '▶',
                platform: 'YouTube',
                color: 'border-red-200 bg-red-50',
                iconColor: 'bg-red-100 text-red-600',
                title: 'С нуля до системного канала',
                items: [
                  'Редакционная матрица: обзоры, сравнения, гайд-ролики',
                  'Полный продакшн-цикл: сценарий → съёмка → монтаж',
                  'Дизайн обложек, SEO-оформление, плейлисты',
                  'A/B-тесты миниатюр и первых 10 секунд',
                  'Оптимизация удержания аудитории',
                ],
              },
              {
                icon: 'Camera',
                emoji: '📸',
                platform: 'Instagram',
                color: 'border-pink-200 bg-pink-50',
                iconColor: 'bg-pink-100 text-pink-600',
                title: 'Визуальная сетка и короткие форматы',
                items: [
                  'Запуск с нуля: визуальная сетка с единым стилем',
                  'Румапы, распаковки, лайфстайл-сценарии',
                  'Сторис с мини-обзорами и опросами',
                  'Контент адаптирован под механику платформы',
                ],
              },
              {
                icon: 'Users',
                emoji: '💙',
                platform: 'ВКонтакте',
                color: 'border-blue-200 bg-blue-50',
                iconColor: 'bg-blue-100 text-blue-600',
                title: 'Рост с 40К до 70К',
                items: [
                  'Контент-план: обзоры, новинки, офферы партнёров',
                  'Конкурсы и активации аудитории',
                  'Модерация, ответы на комментарии',
                  'Кросс-промо из YouTube и Instagram',
                  'UGC-механики и серии закреплённых постов',
                ],
              },
            ].map((card) => (
              <div key={card.platform} className={`rounded-2xl border-2 p-6 ${card.color}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${card.iconColor}`}>
                  <Icon name={card.icon as string} size={20} />
                </div>
                <div className="font-bold text-gray-900 text-lg mb-1">{card.platform}</div>
                <div className="text-sm font-medium text-muted-foreground mb-4">{card.title}</div>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Icon name="Check" size={12} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 5 — Коллаборации */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Коллаборации: как я расширял охват через партнёрства</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Реклама даёт охват. Партнёрства дают доверие. Я выстраивал оба инструмента параллельно.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { emoji: '🛒', title: 'Goods (СберМегаМаркет)', color: 'border-green-200 bg-green-50', text: 'Специальные подборки продуктов SVEN, промо-акции, контентная интеграция в соцсетях бренда. Совместные кампании с фокусом на конкретные SKU — с UTM-сквозняком и контролем вклада в продажи.' },
              { emoji: '🎮', title: 'Геймерские сообщества', color: 'border-purple-200 bg-purple-50', text: 'Совместные активности с релевантными комьюнити: обзорные стримы, подборки геймерских сетапов, интеграции в тематические каналы. Аудитория — точная, вовлечённость — высокая.' },
              { emoji: '🎓', title: 'Российский союз молодёжи', color: 'border-indigo-200 bg-indigo-50', text: 'Охват молодёжной аудитории через тематические интеграции в рамках активностей РСМ. Дополнительный канал присутствия бренда там, где целевая аудитория проводит время.' },
            ].map((card) => (
              <div key={card.title} className={`rounded-2xl border-2 p-6 ${card.color}`}>
                <div className="text-3xl mb-3">{card.emoji}</div>
                <div className="font-bold text-gray-900 mb-2">{card.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭКРАН 6 — Performance */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Performance с ритейлом: как обзорный контент стал основой рекламы</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Я не разделял контент и рекламу на два разных мира. Видеообзоры, которые я снимал для YouTube — становились основой для рекламных креативов. Это давало и качество, и скорость производства.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              { emoji: '🔵', color: 'border-yellow-200 bg-yellow-50', title: 'Яндекс.Директ', items: ['Брендовая и категорийная семантика', 'Ретаргетинг по посетителям сайта', 'Промо-окна под акции партнёров', 'Защита бренда в поиске'] },
              { emoji: '🟣', color: 'border-blue-200 bg-blue-50', title: 'VK Ads', items: ['Таргетинг по интересам (гейминг, музыка, ПК)', 'Look-alike по аудитории сообщества', 'Ремаркетинг по просмотрам видео', 'Взаимодействие с контентом'] },
              { emoji: '📸', color: 'border-pink-200 bg-pink-50', title: 'Instagram Ads', items: ['Интересы и поведение', 'Ремаркетинг по просмотрщикам видео', 'Видеорезы из обзоров как креативы', 'Нативный формат без "рекламного" вида'] },
            ].map((card) => (
              <div key={card.title} className={`rounded-2xl border-2 p-6 ${card.color}`}>
                <div className="text-2xl mb-3">{card.emoji}</div>
                <div className="font-bold text-gray-900 mb-3">{card.title}</div>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Icon name="ChevronRight" size={12} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6 mb-5">
            <div className="font-semibold text-gray-900 mb-3">Что использовал в креативах</div>
            <ul className="space-y-2">
              {[
                'Видеорезы из обзоров с акцентом на звук и визуал',
                'Сравнения "модель vs модель" с конкретными сценариями использования',
                'Короткие демо под конкретный сегмент: геймеры, музыканты, офис',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="Check" size={12} className="text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 flex gap-4">
            <Icon name="Zap" size={20} className="text-amber-500 shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-gray-900">Операционная дисциплина: </span>
              Сквозная разметка UTM по всем кампаниям, еженедельные спринты оптимизации, контроль ДРР/CAC по SKU-кампаниям, атрибуция через партнёрские отчёты ритейла.
            </div>
          </div>
        </div>
      </section>

      {/* ЭКРАН 7 — Контент-продакшн */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Контент-продакшн: как я организовал съёмку обзоров под ключ</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Обзор техники — это не просто "снять и выложить". Это производственный процесс с чёткими стандартами. Я выстроил его с нуля и вёл самостоятельно.
          </p>

          {/* Производственный цикл */}
          <div className="rounded-2xl bg-white border border-gray-200 p-6 mb-8 overflow-x-auto">
            <div className="text-sm font-semibold text-gray-700 mb-4">Производственный цикл — 6 шагов</div>
            <div className="flex items-center gap-2 min-w-max">
              {[
                { icon: 'FileText', label: 'Бриф на\nпродукт' },
                { icon: 'Edit3', label: 'Сценарий\nи тайминг' },
                { icon: 'Video', label: 'Съёмка\n(свет/звук)' },
                { icon: 'Scissors', label: 'Монтаж и\nцветокор.' },
                { icon: 'Image', label: 'Дизайн\nобложки' },
                { icon: 'Upload', label: 'SEO и\nпубликация' },
              ].map((step, i, arr) => (
                <div key={step.label} className="flex items-center gap-2">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                      <Icon name={step.icon as string} size={18} className="text-primary" />
                    </div>
                    <div className="text-xs font-medium text-gray-700 leading-tight whitespace-pre-line w-16">{step.label}</div>
                  </div>
                  {i < arr.length - 1 && <Icon name="ArrowRight" size={16} className="text-gray-300 shrink-0" />}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="rounded-2xl bg-white border border-gray-200 p-6">
              <div className="font-semibold text-gray-900 mb-3">Тест-сцены для каждого обзора</div>
              <ul className="space-y-2">
                {[
                  { icon: 'Music', text: 'Музыкальный тест: разные жанры, АЧХ, сцена' },
                  { icon: 'Gamepad2', text: 'Игровой тест: шутеры, стратегии, атмосферные игры' },
                  { icon: 'Film', text: 'Кино-тест: динамика, объём, низкие частоты' },
                  { icon: 'Search', text: 'Крупные планы: детали конструкции, разъёмы, управление' },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Icon name={item.icon as string} size={15} className="text-primary shrink-0 mt-0.5" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 p-6">
              <div className="font-semibold text-gray-900 mb-3">Оптимизация видео</div>
              <ul className="space-y-2">
                {[
                  'A/B-тесты миниатюр и первых 10 секунд',
                  'Удержание <40% на 30-й сек → переделка интро',
                  'Низкий CTR → новая обложка и заголовок',
                  'Данные диктуют решения, не вкус',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Icon name="BarChart2" size={14} className="text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 flex gap-4">
            <Icon name="Lightbulb" size={20} className="text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-gray-900">Результат: </span>
              Регулярный поток обзорного контента стал основой для всего: рекламных креативов, PR-интеграций с партнёрами, органического SEO на YouTube.
            </p>
          </div>
        </div>
      </section>

      {/* ЭКРАН 8 — Аналитика */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Как я выстроил аналитику по всем направлениям</h2>

          <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-6 py-3 font-semibold text-gray-700">Направление</th>
                  <th className="text-left px-6 py-3 font-semibold text-gray-700">Метрики</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dir: 'VK', metrics: 'Рост подписчиков, охваты, ER, вовлечённость по рубрикам' },
                  { dir: 'YouTube', metrics: 'Просмотры, удержание аудитории, CTR миниатюр, рост подписчиков' },
                  { dir: 'Instagram', metrics: 'Охваты, вовлечённость, рост аккаунта, сохранения' },
                  { dir: 'Performance-кампании', metrics: 'CPC, CPL, CTR креативов, ДРР/CAC по SKU, вклад канала в промо' },
                  { dir: 'Партнёрства', metrics: 'Вклад трафика в промо-окна, атрибуция через UTM и партнёрские отчёты' },
                ].map((row, i, arr) => (
                  <tr key={row.dir} className={i < arr.length - 1 ? 'border-b border-gray-100' : ''}>
                    <td className="px-6 py-3 font-medium text-gray-700 whitespace-nowrap">{row.dir}</td>
                    <td className="px-6 py-3 text-muted-foreground">{row.metrics}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Место под скриншоты аналитики */}
          <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center mb-6">
            <Icon name="BarChart2" size={36} className="mx-auto mb-3 text-gray-300" />
            <p className="text-sm text-gray-400">Место под скриншоты YouTube Studio / VK Analytics</p>
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6">
            <div className="font-semibold text-gray-900 mb-3">Принципы работы с данными</div>
            <ul className="space-y-2">
              {[
                'Быстрые итерации по сигналам: если метрика провалилась — правка в течение недели, не месяца',
                'Удержание <40% на 30-й секунде → пересбор интро',
                'Низкий CTR → замена обложки и заголовка',
                'Нерентабельный креатив в рекламе → отключение в течение 48 часов',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="Check" size={12} className="text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ЭКРАН 9 — Результаты */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-white to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Результаты</h2>

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
                  { key: 'Рост VK-сообщества', value: 'с 40 000 до 70 000 (+30 000, +75%)', highlight: true },
                  { key: 'YouTube-канал', value: 'Запущен с нуля, системный поток обзорного контента', highlight: false },
                  { key: 'Instagram', value: 'Запущен с нуля, визуальная сетка, короткие форматы', highlight: false },
                  { key: 'Каналов под управлением', value: '3 (YouTube + VK + Instagram)', highlight: false },
                  { key: 'Партнёрства', value: 'Goods, геймерские комьюнити, РСМ', highlight: false },
                  { key: 'Performance-кампании', value: 'Яндекс.Директ + VK Ads + Instagram Ads', highlight: false },
                  { key: 'Контент-продакшн', value: 'Полный цикл: сценарий → съёмка → монтаж → публикация', highlight: false },
                ].map((row, i, arr) => (
                  <tr key={row.key} className={`${i < arr.length - 1 ? 'border-b border-gray-100' : ''} ${row.highlight ? 'bg-primary/5' : ''}`}>
                    <td className={`px-6 py-3 ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.key}</td>
                    <td className={`px-6 py-3 text-right ${row.highlight ? 'font-black text-primary text-base' : 'text-muted-foreground'}`}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted-foreground mb-6 italic">Абсолютные цифры по продажам, CPL и ДРР по кампаниям — под NDA.</p>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-muted-foreground leading-relaxed">
              Я выстроил digital-присутствие бренда с нуля в одиночку. Два канала — YouTube и Instagram — запущены там, где их не существовало. VK-сообщество выросло на 75%. Обзорный контент стал одновременно инструментом охвата, доверия и основой для рекламных креативов. Performance-кампании с ритейлом работали на данных — с UTM-сквозняком, еженедельной оптимизацией и контролем CAC по SKU.
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
              { emoji: '💡', title: 'Обзорный контент — это не затраты, это актив', text: 'Видео которое я снял для YouTube работало потом как рекламный креатив, как основа для PR-интеграции с партнёром и как SEO-страница в поиске. Один материал — три канала применения.' },
              { emoji: '💡', title: 'Cross-channel синергия умножает охват без умножения затрат', text: 'Я не делал отдельный контент для каждой площадки. Я переупаковывал один материал под формат платформы. YouTube → VK → Instagram → рекламный креатив. Производство ×1, охват ×3.' },
              { emoji: '💡', title: 'Геймерские комьюнити — точная и вовлечённая аудитория', text: 'Коллаборации с геймерскими сообществами дали лучший органический отклик по сравнению с широкими форматами. Аудитория релевантная, доверие к рекомендации — высокое.' },
              { emoji: '💡', title: 'Данные быстрее интуиции', text: 'Если удержание видео падало — я переделывал интро, а не ждал. Если CTR миниатюры был низким — менял обложку на следующей неделе. Скорость реакции на данные определяла скорость роста канала.' },
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
              'YouTube', 'ВКонтакте', 'Instagram', 'Яндекс.Директ', 'VK Ads', 'Instagram Ads',
              'YouTube Studio', 'Яндекс.Метрика', 'UTM-разметка', 'Сценарии и брифы',
              'Съёмка и монтаж', 'Дизайн обложек', 'SEO для YouTube', 'Партнёрские дашборды',
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
            Я построил digital-экосистему бренда SVEN с нуля в формате one-man-band. Запустил YouTube и Instagram там, где их не было. Вырастил VK-сообщество с 40 000 до 70 000 подписчиков. Выстроил полный цикл контент-продакшна обзоров и организовал коллаборации с Goods, геймерскими комьюнити и Российским союзом молодёжи. Запустил совместные performance-кампании с ритейлом в трёх каналах — с данными, UTM-сквозняком и еженедельной оптимизацией.
          </p>

          <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-blue-50 to-slate-100 border border-primary/10 p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Нужно выстроить digital-присутствие бренда, запустить контент-продакшн или организовать performance-кампании с ритейлом?
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

export default Sven;
