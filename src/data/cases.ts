export interface CaseData {
  id: string;
  title: string;
  subtitle: string;
  task: string;
  solution: string;
  stat1: string;
  stat1Label: string;
  stat2: string;
  stat2Label: string;
  gradient: string;
  icon: string;
  image: string;
  fullDescription: string[];
  sourceUrl: string;
}

export const cases: CaseData[] = [
  {
    id: 'vegannova',
    title: 'Vegannova: БАДы и суперфуды',
    subtitle: '+40% выручки на Wildberries',
    task: 'Увеличить выручку на Wildberries для бренда с 90 SKU в категориях БАДы и суперфуды',
    solution: 'Сегментация 90 SKU, аналитика РНП, A/B-тесты карточек, недельные спринты. Запуск бренд-магазина, SEO, 8 Telegram-воронок для увеличения LTV',
    stat1: '+40%',
    stat1Label: 'Рост выручки',
    stat2: '+9%',
    stat2Label: 'Рост расходов на рекламу',
    gradient: 'from-primary to-secondary',
    icon: 'ShoppingCart',
    image: 'https://static.tildacdn.com/tild3130-3562-4131-a430-646433646361/photo_2025-09-17_16-.jpg',
    fullDescription: [
      'Клиент: Vegannova — бренд БАДов и суперфудов на Wildberries, 90 SKU в подкатегориях Омега-3, коллаген, для похудения, для женщин и др.',
      'Задача: увеличить выручку при сохранении контроля над ДРР.',
      'Что сделали: провели глубокую сегментацию ассортимента, внедрили аналитику РНП (рентабельность на единицу продукции), запустили A/B-тесты карточек по CTR, конверсии в корзину и конверсии в заказ.',
      'Работали недельными спринтами: каждую неделю — новая гипотеза, тест, анализ, масштабирование.',
      'Запустили бренд-магазин на Wildberries, провели SEO-оптимизацию карточек, создали 8 Telegram-воронок для увеличения LTV.',
      'Результат: +40% выручки при росте расходов на рекламу всего на 9%.'
    ],
    sourceUrl: 'https://www.pozhidaev.site/blog/fn47liuda1-vegannova-badi-i-superfudi-rost-viruchki'
  },
  {
    id: 'greenexpo',
    title: 'Конференция GreenExpo 2025',
    subtitle: 'Эко-маркетинг: 300 регистраций',
    task: 'Организовать нишевую конференцию по эко-маркетингу и привлечь целевую B2B-аудиторию',
    solution: '4 блока, 11 спикеров, лендинг + CRM, email и Telegram-бот. Основной канал привлечения — Яндекс.Директ',
    stat1: '300',
    stat1Label: 'Регистраций',
    stat2: '200+',
    stat2Label: 'Участников онлайн',
    gradient: 'from-accent to-primary',
    icon: 'Mic',
    image: 'https://static.tildacdn.com/tild3739-3938-4264-b637-613736303232/photo_2025-09-18_11-.jpg',
    fullDescription: [
      'Проект: конференция по эко-маркетингу GreenExpo 2025 — нишевое мероприятие для продвижения экологических брендов.',
      'Задача: организовать конференцию с нуля, собрать целевую B2B-аудиторию.',
      'Что сделали: сформировали программу из 4 блоков и 11 спикеров, создали лендинг с интеграцией в CRM, настроили email-рассылки и Telegram-бот для коммуникации с участниками.',
      'Привлечение: основной канал — Яндекс.Директ, поддержка через VK Ads и Telegram Ads.',
      'Результат: 300 регистраций, 200+ участников в онлайн-трансляции.'
    ],
    sourceUrl: 'https://www.pozhidaev.site/blog/3ozut4u7d1-otraslevaya-konferentsiya-po-marketingu'
  },
  {
    id: 'hobby-school',
    title: 'Онлайн-школа хобби',
    subtitle: 'Трафик после блокировки Facebook',
    task: 'Перезапустить трафик для онлайн-школы хобби с женской ЦА после блокировки Facebook',
    solution: 'Яндекс.Директ, ВК, блогеры, Telegram. 29 марафонов (8–17 тыс. участников), сквозная аналитика',
    stat1: '3000+',
    stat1Label: 'Учеников',
    stat2: '6+ млн',
    stat2Label: 'Бюджет/мес, ДРР < 30%',
    gradient: 'from-secondary to-accent',
    icon: 'GraduationCap',
    image: 'https://static.tildacdn.com/tild3539-3562-4563-a235-653337663639/single-7193068-2.png',
    fullDescription: [
      'Клиент: онлайн-школа в тематике хобби с женской целевой аудиторией.',
      'Задача: после блокировки Facebook (основной канал) — полностью перезапустить привлечение трафика.',
      'Что сделали: выстроили новую систему привлечения на базе Яндекс.Директ, таргета ВКонтакте, VK Маркетплатформы, размещений у блогеров и в Telegram-каналах.',
      'Внедрили сквозную аналитику и контроль ДРР. Провели 29 онлайн-марафонов с посещаемостью от 8 до 17 тысяч человек.',
      'Результат: 3 000+ учеников, бюджет 6+ млн руб./мес, ДРР менее 30%.'
    ],
    sourceUrl: 'https://www.pozhidaev.site/blog/t12ecuflf1-stabilnii-potok-trafika-v-onlain-shkolu'
  },
  {
    id: 'kids-programming',
    title: 'Онлайн-школа программирования для детей',
    subtitle: '4x рост выручки за 4 месяца',
    task: 'Увеличить выручку детской онлайн-школы программирования через перформанс-маркетинг',
    solution: 'Таргет ВКонтакте + Senler-бот, A/B-тесты воронок, гео-«светофор», масштабирование команды',
    stat1: 'x4',
    stat1Label: 'Рост выручки',
    stat2: '25-27%',
    stat2Label: 'ДРР',
    gradient: 'from-primary via-secondary to-accent',
    icon: 'Code',
    image: 'https://static.tildacdn.com/tild3863-6437-4631-b639-323062363039/photo_2025-09-17_14-.jpg',
    fullDescription: [
      'Клиент: детская онлайн-школа программирования.',
      'Задача: увеличить выручку через холодный трафик с оффером «бесплатный пробный урок».',
      'Что сделали: запустили связку таргет ВКонтакте + Senler-бот, провели A/B-тесты воронок, внедрили гео-«светофор» для управления ставками по регионам, масштабировали команду.',
      'Период: декабрь 2024 — март 2025.',
      'Результат: 4-кратный рост выручки за 4 месяца при ДРР 25–27%.'
    ],
    sourceUrl: 'https://www.pozhidaev.site/blog/jzpsgp7er1-4-h-kratnii-rost-viruchki-iz-performansk'
  },
  {
    id: 'b2b-event',
    title: 'B2B офлайн-ивент',
    subtitle: 'Telegram-посевы + VK таргет',
    task: 'Обеспечить регулярный поток участников на ежемесячное офлайн B2B-мероприятие после ухода Facebook',
    solution: 'Telegram-посевы (white-list отраслевых каналов) и поддерживающий VK таргет',
    stat1: '40+',
    stat1Label: 'Участников/мес',
    stat2: '100-150К',
    stat2Label: 'Бюджет в месяц',
    gradient: 'from-accent to-secondary',
    icon: 'Users',
    image: 'https://static.tildacdn.com/tild6337-3337-4330-b134-656665323230/photo_2025-09-18_14-.jpg',
    fullDescription: [
      'Клиент: организатор ежемесячных офлайн B2B-мероприятий.',
      'Задача: после ухода Facebook — найти новые каналы для привлечения целевой аудитории на офлайн-мероприятия.',
      'Что сделали: сфокусировались на Telegram-посевах в отраслевых каналах (white-list), подключили поддерживающий VK таргет, настроили аналитику Telegram-каналов.',
      'Период: апрель–июль 2022.',
      'Результат: ежемесячно 40+ участников при бюджете 100–150 тыс. руб.'
    ],
    sourceUrl: 'https://www.pozhidaev.site/blog/2h3yyrcjy1-sbor-tselevoi-auditorii-na-oflain-b2bmer'
  },
  {
    id: 'skillcup',
    title: 'Skill Cup',
    subtitle: 'Перформанс онлайн-курсов',
    task: 'Масштабировать перформанс-маркетинг онлайн-курсов через мультиканальную стратегию',
    solution: 'FB/Meta, Яндекс.Директ, ВК, TikTok. Вебинарная воронка 30% + прямые продажи 70%',
    stat1: '1.5-6 млн',
    stat1Label: 'Бюджет/мес',
    stat2: '70/30',
    stat2Label: 'Прямые/вебинары',
    gradient: 'from-secondary to-primary',
    icon: 'TrendingUp',
    image: 'https://static.tildacdn.com/tild3433-3363-4266-a133-353736393439/photo_2025-09-18_13-.jpg',
    fullDescription: [
      'Клиент: Skill Cup — платформа онлайн-курсов.',
      'Задача: масштабировать перформанс-маркетинг и увеличить продажи курсов.',
      'Что сделали: запустили мультиканальную стратегию — FB/Meta Ads, Яндекс.Директ, реклама ВКонтакте, TikTok. Построили вебинарную воронку с авторами курсов (30% продаж) и прямые продажи через лендинги (70% продаж).',
      'Бюджет: от 1,5 до 6 млн руб./мес.',
      'Результат: системное масштабирование перформанс-маркетинга с контролируемой unit-экономикой.'
    ],
    sourceUrl: 'https://www.pozhidaev.site/blog/bc4ammxzf1-keis-skill-cup-masshtabirovanie-performa'
  },
  {
    id: 'sven',
    title: 'SVEN: акустика и аксессуары',
    subtitle: 'Digital-маркетинг бренда',
    task: 'Запустить digital-присутствие бренда SVEN и вырастить сообщество ВКонтакте',
    solution: 'Запуск YouTube и Instagram, продакшн обзорных видео, коллаборации с Goods и геймерскими сообществами, перформанс-кампании',
    stat1: '40→70K',
    stat1Label: 'VK подписчиков',
    stat2: 'YouTube',
    stat2Label: 'Запуск канала',
    gradient: 'from-primary to-accent',
    icon: 'Volume2',
    image: 'https://static.tildacdn.com/tild6136-3265-4134-b239-336462363833/photo_2025-09-18_14-.jpg',
    fullDescription: [
      'Клиент: SVEN — бренд компьютерной акустики и аксессуаров.',
      'Задача: запустить digital-присутствие бренда, вырастить сообщество.',
      'Что сделали: запустили брендовые YouTube и Instagram каналы, организовали продакшн обзорных видео, наладили коллаборации с площадкой Goods и геймерскими сообществами.',
      'Запустили перформанс-кампании с ритейлом в Яндекс.Директ, VK и Instagram.',
      'Результат: рост сообщества ВКонтакте с 40 000 до 70 000 подписчиков, запуск YouTube-канала бренда.'
    ],
    sourceUrl: 'https://www.pozhidaev.site/blog/94lfy4vkc1-sven-kompyuternaya-akustika-i-aksessuari'
  }
];

export default cases;
