import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';
import LeadForm from '@/components/LeadForm';
import TelegramButton from '@/components/TelegramButton';
import CaseCard from '@/components/CaseCard';
import { cases } from '@/data/cases';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О себе</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('cases')} className="text-sm font-medium hover:text-primary transition-colors">Кейсы</button>
              <button onClick={() => scrollToSection('expertise')} className="text-sm font-medium hover:text-primary transition-colors">Экспертность</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">Обсудить проект</Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Обсудить проект</DialogTitle>
                  <DialogDescription>Оставьте контакты — свяжусь в течение 24 часов</DialogDescription>
                </DialogHeader>
                <LeadForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">10+ лет в digital-маркетинге</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Помогаю бизнесам расти <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">в условиях жёсткой конкуренции</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Через аналитику, стратегию и маркетинг, который считает деньги</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Performance, маркетплейсы, онлайн-образование, ECO и lifestyle‑бренды.<br />
              Работаю как партнёр бизнеса, а не подрядчик по рекламе.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" onClick={() => scrollToSection('cases')} className="text-lg px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="Briefcase" className="mr-2" size={20} />Посмотреть кейсы
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                    <Icon name="MessageCircle" className="mr-2" size={20} />Обсудить задачу
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Обсудить проект</DialogTitle>
                    <DialogDescription>Оставьте контакты — свяжусь в течение 24 часов</DialogDescription>
                  </DialogHeader>
                  <LeadForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Я строю маркетинговые <span className="text-primary">системы</span>, а не просто запускаю рекламу
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">За последние 10+ лет я работал интернет‑маркетологом, тимлидом по трафику и директором по маркетингу.</p>
              <p className="text-lg leading-relaxed">
                Моя зона ответственности — не клики и отчёты, а <span className="font-semibold text-primary">рост выручки</span>, управляемость маркетинга и прогнозируемый результат.
              </p>
            </div>
            <Card className="border-2 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader><CardTitle className="text-2xl">Я глубоко погружаюсь в бизнес:</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg"><Icon name="Target" className="text-primary" size={24} /></div>
                  <div><p className="font-medium">Понимаю продукт и экономику</p><p className="text-sm text-muted-foreground">Изучаю бизнес-модель целиком</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg"><Icon name="Calculator" className="text-accent" size={24} /></div>
                  <div><p className="font-medium">Считаю воронки и unit‑экономику</p><p className="text-sm text-muted-foreground">Цифры превыше всего</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-secondary/10 p-2 rounded-lg"><Icon name="BarChart3" className="text-secondary" size={24} /></div>
                  <div><p className="font-medium">Принимаю решения на основе данных</p><p className="text-sm text-muted-foreground">Не интуиции, а аналитики</p></div>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
                  <p className="font-semibold text-center">Маркетинг для меня — это инженерная система, где всё должно быть измеримо и понятно</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Факты, за которые я <span className="text-primary">отвечал лично</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-8 border-2 hover:border-primary transition-colors hover:shadow-xl">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">29</div>
              <p className="text-lg font-semibold mb-2">Онлайн‑марафонов</p>
              <p className="text-muted-foreground">с посещаемостью 10–18 тыс. человек</p>
            </Card>
            <Card className="text-center p-8 border-2 hover:border-accent transition-colors hover:shadow-xl">
              <div className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">3000+</div>
              <p className="text-lg font-semibold mb-2">Учеников</p>
              <p className="text-muted-foreground">в онлайн‑школах, где я выстраивал маркетинг</p>
            </Card>
            <Card className="text-center p-8 border-2 hover:border-secondary transition-colors hover:shadow-xl">
              <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">3-8 млн</div>
              <p className="text-lg font-semibold mb-2">Бюджет в месяц</p>
              <p className="text-muted-foreground">на рекламу в проектах 2022-2025</p>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <Card className="p-6 border-2 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-xl"><Icon name="TrendingUp" className="text-primary" size={32} /></div>
                <div><div className="text-3xl font-bold text-primary">250-300%</div><p className="text-muted-foreground">ROI в каждом проекте</p></div>
              </div>
            </Card>
            <Card className="p-6 border-2 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-4 rounded-xl"><Icon name="Users" className="text-accent" size={32} /></div>
                <div><div className="text-3xl font-bold text-accent">2 года</div><p className="text-muted-foreground">Директор по маркетингу в онлайн‑школах</p></div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">С какими проектами я <span className="text-primary">работаю</span></h2>
          <p className="text-center text-muted-foreground text-lg mb-12">Специализация в высококонкурентных нишах</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary hover:shadow-2xl transition-all group">
              <CardHeader>
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform"><Icon name="GraduationCap" className="text-white" size={32} /></div>
                <CardTitle className="text-2xl">Онлайн‑образование</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-2"><Icon name="Check" className="text-primary mt-1" size={18} /><span>Автоворонки и запуски</span></div>
                <div className="flex items-start gap-2"><Icon name="Check" className="text-primary mt-1" size={18} /><span>Масштабирование и удержание</span></div>
                <div className="flex items-start gap-2"><Icon name="Check" className="text-primary mt-1" size={18} /><span>Аналитика и экономика продукта</span></div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-accent hover:shadow-2xl transition-all group">
              <CardHeader>
                <div className="bg-gradient-to-br from-accent to-primary p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform"><Icon name="ShoppingCart" className="text-white" size={32} /></div>
                <CardTitle className="text-2xl">E-com и Маркетплейсы</CardTitle>
                <CardDescription>Wildberries, Ozon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-2"><Icon name="Check" className="text-accent mt-1" size={18} /><span>Стратегия роста бренда</span></div>
                <div className="flex items-start gap-2"><Icon name="Check" className="text-accent mt-1" size={18} /><span>SEO и упаковка карточек</span></div>
                <div className="flex items-start gap-2"><Icon name="Check" className="text-accent mt-1" size={18} /><span>Внутренняя и внешняя реклама</span></div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary hover:shadow-2xl transition-all group">
              <CardHeader>
                <div className="bg-gradient-to-br from-secondary to-accent p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform"><Icon name="Zap" className="text-white" size={32} /></div>
                <CardTitle className="text-2xl">Сложные бизнесы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-2"><Icon name="Check" className="text-secondary mt-1" size={18} /><span>Высокая конкуренция</span></div>
                <div className="flex items-start gap-2"><Icon name="Check" className="text-secondary mt-1" size={18} /><span>Нет очевидных решений</span></div>
                <div className="flex items-start gap-2"><Icon name="Check" className="text-secondary mt-1" size={18} /><span>Нужен взрослый, системный маркетинг</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Как я <span className="text-primary">работаю</span></h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              { icon: 'Search', title: 'Погружаюсь в бизнес и продукт', color: 'primary' },
              { icon: 'Calculator', title: 'Оцифровываю воронку и экономику', color: 'secondary' },
              { icon: 'Users', title: 'Составляю аватары клиентов — их боли, желания, потребности', color: 'accent' },
              { icon: 'Target', title: 'Под аватары формирую УТП, оффер, конвертеры трафика', color: 'primary' },
              { icon: 'Lightbulb', title: 'Формирую стратегию и гипотезы роста', color: 'secondary' },
              { icon: 'Rocket', title: 'Запускаю, анализирую, масштабирую', color: 'accent' },
              { icon: 'CheckCircle', title: 'Регулярно отчитываюсь и контролирую', color: 'primary' }
            ].map((step, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all hover:scale-[1.02]">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className={`bg-${step.color}/10 p-4 rounded-xl shrink-0`}><Icon name={step.icon as any} className={`text-${step.color}`} size={28} /></div>
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`text-3xl font-bold text-${step.color}/30`}>{index + 1}</div>
                    <p className="text-lg font-medium">{step.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="mt-12 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-2 border-primary/20">
            <CardContent className="p-8 text-center">
              <p className="text-xl font-semibold">
                <span className="text-primary">Прозрачность</span>, <span className="text-secondary">цифры</span> и{' '}
                <span className="text-accent">ответственность за результат</span> — базовые принципы моей работы
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="cases" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Избранные <span className="text-primary">кейсы</span></h2>
          <p className="text-center text-muted-foreground text-lg mb-12">Исходная задача • Принятые решения • Конкретные цифры</p>
          <div className="grid md:grid-cols-2 gap-6">
            {cases.map((c) => (<CaseCard key={c.id} caseData={c} />))}
          </div>
        </div>
      </section>

      <section id="expertise" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Работаю с рынком и <span className="text-primary">делюсь опытом</span></h2>
          <p className="text-center text-muted-foreground text-lg mb-12">Спикер и модератор отраслевых мероприятий</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="bg-primary/10 p-4 rounded-xl w-fit mb-4"><Icon name="Mic" className="text-primary" size={32} /></div>
                <CardTitle>Спикер ЭкоГородЭкспо</CardTitle>
              </CardHeader>
              <CardContent><p className="text-muted-foreground">Выступления о маркетинге и продвижении экологических брендов</p></CardContent>
            </Card>
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="bg-accent/10 p-4 rounded-xl w-fit mb-4"><Icon name="Users" className="text-accent" size={32} /></div>
                <CardTitle>Модератор конференций</CardTitle>
              </CardHeader>
              <CardContent><p className="text-muted-foreground">Международная отраслевая конференция по развитию органических брендов</p></CardContent>
            </Card>
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="bg-secondary/10 p-4 rounded-xl w-fit mb-4"><Icon name="Award" className="text-secondary" size={32} /></div>
                <CardTitle>Директор по маркетингу</CardTitle>
              </CardHeader>
              <CardContent><p className="text-muted-foreground">GreenExpo 2025 — крупнейшая выставка экологических продуктов</p></CardContent>
            </Card>
          </div>
          <Card className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border-2">
            <CardContent className="p-8 text-center">
              <Icon name="Quote" className="text-primary mx-auto mb-4" size={48} />
              <p className="text-xl font-medium italic mb-4">"Маркетинг — это не магия и не искусство. Это инженерная система, где каждое решение должно быть обосновано цифрами и приводить к измеримому результату"</p>
              <p className="text-muted-foreground">— Константин Пожидаев</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Если вам нужен маркетинг, который можно{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">объяснить цифрами</span>
            {' '}— мы сработаемся
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Я не беру все проекты подряд и не продаю универсальные решения.<br />
            Мне важно понимать бизнес, задачи и реальную цель роста.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('cases')} className="text-lg px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Briefcase" className="mr-2" size={20} />Посмотреть кейсы
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                  <Icon name="Send" className="mr-2" size={20} />Связаться со мной
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Обсудить проект</DialogTitle>
                  <DialogDescription>Оставьте контакты — свяжусь в течение 24 часов</DialogDescription>
                </DialogHeader>
                <LeadForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Константин Пожидаев</h3>
              <p className="text-muted-foreground">Интернет-маркетолог с 10+ летним опытом в digital</p>
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
