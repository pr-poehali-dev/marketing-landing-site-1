import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    budget: '',
    goals: '',
    currentSituation: '',
    timeline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Свяжемся с вами в течение 24 часов",
    });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Дмитрий Иванов
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
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Обсудить проект
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Расскажите о вашем проекте</DialogTitle>
                  <DialogDescription>
                    Заполните информацию, чтобы я мог подготовиться к встрече
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formStep === 1 && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ваше имя *</Label>
                        <Input
                          id="name"
                          placeholder="Иван Петров"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Компания</Label>
                        <Input
                          id="company"
                          placeholder="ООО «Рога и копыта»"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="ivan@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+7 (999) 123-45-67"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <Button type="button" onClick={() => setFormStep(2)} className="w-full">
                        Далее <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Button>
                    </div>
                  )}

                  {formStep === 2 && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="space-y-2">
                        <Label htmlFor="industry">Отрасль *</Label>
                        <Select value={formData.industry} onValueChange={(value) => setFormData({...formData, industry: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите отрасль" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="education">Онлайн-образование</SelectItem>
                            <SelectItem value="ecommerce">E-commerce / Маркетплейсы</SelectItem>
                            <SelectItem value="services">Услуги</SelectItem>
                            <SelectItem value="eco">ECO / Lifestyle</SelectItem>
                            <SelectItem value="other">Другое</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Месячный бюджет на маркетинг</Label>
                        <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите диапазон" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="500k">До 500 тыс. ₽</SelectItem>
                            <SelectItem value="500k-1m">500 тыс. - 1 млн ₽</SelectItem>
                            <SelectItem value="1m-3m">1-3 млн ₽</SelectItem>
                            <SelectItem value="3m+">Более 3 млн ₽</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Когда планируете начать?</Label>
                        <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите срок" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">Как можно скорее</SelectItem>
                            <SelectItem value="month">В течение месяца</SelectItem>
                            <SelectItem value="quarter">В течение квартала</SelectItem>
                            <SelectItem value="explore">Пока изучаю варианты</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex gap-2">
                        <Button type="button" variant="outline" onClick={() => setFormStep(1)} className="w-full">
                          <Icon name="ArrowLeft" className="mr-2" size={16} /> Назад
                        </Button>
                        <Button type="button" onClick={() => setFormStep(3)} className="w-full">
                          Далее <Icon name="ArrowRight" className="ml-2" size={16} />
                        </Button>
                      </div>
                    </div>
                  )}

                  {formStep === 3 && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="space-y-2">
                        <Label htmlFor="goals">Какие цели хотите достичь? *</Label>
                        <Textarea
                          id="goals"
                          placeholder="Увеличить продажи в 2 раза, повысить узнаваемость бренда..."
                          value={formData.goals}
                          onChange={(e) => setFormData({...formData, goals: e.target.value})}
                          rows={3}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currentSituation">Текущая ситуация с маркетингом</Label>
                        <Textarea
                          id="currentSituation"
                          placeholder="Описание текущего положения, что уже пробовали, какие есть сложности..."
                          value={formData.currentSituation}
                          onChange={(e) => setFormData({...formData, currentSituation: e.target.value})}
                          rows={4}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button type="button" variant="outline" onClick={() => setFormStep(2)} className="w-full">
                          <Icon name="ArrowLeft" className="mr-2" size={16} /> Назад
                        </Button>
                        <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                          Отправить заявку <Icon name="Send" className="ml-2" size={16} />
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                10+ лет в digital-маркетинге
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Помогаю бизнесам расти <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                в условиях жёсткой конкуренции
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Через аналитику, стратегию и маркетинг, который считает деньги
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Performance, маркетплейсы, онлайн-образование, ECO и lifestyle‑бренды.<br />
              Работаю как партнёр бизнеса, а не подрядчик по рекламе.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" onClick={() => scrollToSection('cases')} className="text-lg px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="Briefcase" className="mr-2" size={20} />
                Посмотреть кейсы
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Обсудить задачу
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Расскажите о вашем проекте</DialogTitle>
                    <DialogDescription>
                      Заполните информацию, чтобы я мог подготовиться к встрече
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {formStep === 1 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="space-y-2">
                          <Label htmlFor="name2">Ваше имя *</Label>
                          <Input id="name2" placeholder="Иван Петров" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company2">Компания</Label>
                          <Input id="company2" placeholder="ООО «Рога и копыта»" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email2">Email *</Label>
                          <Input id="email2" type="email" placeholder="ivan@example.com" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone2">Телефон</Label>
                          <Input id="phone2" type="tel" placeholder="+7 (999) 123-45-67" />
                        </div>
                        <Button type="button" onClick={() => setFormStep(2)} className="w-full">
                          Далее <Icon name="ArrowRight" className="ml-2" size={16} />
                        </Button>
                      </div>
                    )}
                    {formStep === 2 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="space-y-2">
                          <Label>Отрасль *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите отрасль" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="education">Онлайн-образование</SelectItem>
                              <SelectItem value="ecommerce">E-commerce / Маркетплейсы</SelectItem>
                              <SelectItem value="services">Услуги</SelectItem>
                              <SelectItem value="eco">ECO / Lifestyle</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex gap-2">
                          <Button type="button" variant="outline" onClick={() => setFormStep(1)} className="w-full">
                            <Icon name="ArrowLeft" className="mr-2" size={16} /> Назад
                          </Button>
                          <Button type="button" onClick={() => setFormStep(3)} className="w-full">
                            Далее <Icon name="ArrowRight" className="ml-2" size={16} />
                          </Button>
                        </div>
                      </div>
                    )}
                    {formStep === 3 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="space-y-2">
                          <Label htmlFor="goals2">Какие цели хотите достичь? *</Label>
                          <Textarea id="goals2" placeholder="Увеличить продажи..." rows={3} required />
                        </div>
                        <div className="flex gap-2">
                          <Button type="button" variant="outline" onClick={() => setFormStep(2)} className="w-full">
                            <Icon name="ArrowLeft" className="mr-2" size={16} /> Назад
                          </Button>
                          <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                            Отправить <Icon name="Send" className="ml-2" size={16} />
                          </Button>
                        </div>
                      </div>
                    )}
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Я строю маркетинговые <span className="text-primary">системы</span>, 
                а не просто запускаю рекламу
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                За последние 10+ лет я работал интернет‑маркетологом, тимлидом по трафику и директором по маркетингу.
              </p>
              <p className="text-lg leading-relaxed">
                Моя зона ответственности — не клики и отчёты, а <span className="font-semibold text-primary">рост выручки</span>, 
                управляемость маркетинга и прогнозируемый результат.
              </p>
            </div>
            <Card className="border-2 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Я глубоко погружаюсь в бизнес:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Icon name="Target" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Понимаю продукт и экономику</p>
                    <p className="text-sm text-muted-foreground">Изучаю бизнес-модель целиком</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <Icon name="Calculator" className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Считаю воронки и unit‑экономику</p>
                    <p className="text-sm text-muted-foreground">Цифры превыше всего</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <Icon name="BarChart3" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Принимаю решения на основе данных</p>
                    <p className="text-sm text-muted-foreground">Не интуиции, а аналитики</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
                  <p className="font-semibold text-center">
                    Маркетинг для меня — это инженерная система, где всё должно быть измеримо и понятно
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Факты, за которые я <span className="text-primary">отвечал лично</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-8 border-2 hover:border-primary transition-colors hover:shadow-xl">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                29
              </div>
              <p className="text-lg font-semibold mb-2">Онлайн‑марафонов</p>
              <p className="text-muted-foreground">с посещаемостью 10–18 тыс. человек</p>
            </Card>
            <Card className="text-center p-8 border-2 hover:border-accent transition-colors hover:shadow-xl">
              <div className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
                3000+
              </div>
              <p className="text-lg font-semibold mb-2">Учеников</p>
              <p className="text-muted-foreground">в онлайн‑школах, где я выстраивал маркетинг</p>
            </Card>
            <Card className="text-center p-8 border-2 hover:border-secondary transition-colors hover:shadow-xl">
              <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
                3-8 млн
              </div>
              <p className="text-lg font-semibold mb-2">Бюджет в месяц</p>
              <p className="text-muted-foreground">на рекламу в проектах 2022-2025</p>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <Card className="p-6 border-2 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Icon name="TrendingUp" className="text-primary" size={32} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">250-300%</div>
                  <p className="text-muted-foreground">ROI в каждом проекте</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-2 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-4 rounded-xl">
                  <Icon name="Users" className="text-accent" size={32} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">2 года</div>
                  <p className="text-muted-foreground">Директор по маркетингу в онлайн‑школах</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            С какими проектами я <span className="text-primary">работаю</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">Специализация в высококонкурентных нишах</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary hover:shadow-2xl transition-all group">
              <CardHeader>
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="GraduationCap" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl">Онлайн‑образование</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1" size={18} />
                  <span>Автоворонки и запуски</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1" size={18} />
                  <span>Масштабирование и удержание</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1" size={18} />
                  <span>Аналитика и экономика продукта</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent hover:shadow-2xl transition-all group">
              <CardHeader>
                <div className="bg-gradient-to-br from-accent to-primary p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="ShoppingCart" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl">E-com и Маркетплейсы</CardTitle>
                <CardDescription>Wildberries, Ozon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-accent mt-1" size={18} />
                  <span>Стратегия роста бренда</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-accent mt-1" size={18} />
                  <span>SEO и упаковка карточек</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-accent mt-1" size={18} />
                  <span>Внутренняя и внешняя реклама</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary hover:shadow-2xl transition-all group">
              <CardHeader>
                <div className="bg-gradient-to-br from-secondary to-accent p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Zap" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl">Сложные бизнесы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1" size={18} />
                  <span>Высокая конкуренция</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1" size={18} />
                  <span>Нет очевидных решений</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1" size={18} />
                  <span>Нужен взрослый, системный маркетинг</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Как я <span className="text-primary">работаю</span>
          </h2>
          
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
                  <div className={`bg-${step.color}/10 p-4 rounded-xl shrink-0`}>
                    <Icon name={step.icon as any} className={`text-${step.color}`} size={28} />
                  </div>
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

      {/* Cases Section */}
      <section id="cases" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Избранные <span className="text-primary">кейсы</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Исходная задача • Принятые решения • Конкретные цифры
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:shadow-2xl transition-all hover:scale-[1.02] group overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-105 transition-transform">
                <Icon name="GraduationCap" className="text-white" size={64} />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Онлайн-школа психологии</CardTitle>
                <CardDescription>Масштабирование автоворонок</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-sm text-muted-foreground mb-1">ЗАДАЧА</p>
                  <p>Увеличить продажи основного курса в 3 раза без роста стоимости привлечения</p>
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground mb-1">РЕШЕНИЕ</p>
                  <p>Построили двухэтапную воронку с бесплатным марафоном и автоматизированными продажами</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <div className="text-3xl font-bold text-primary">x3.5</div>
                    <p className="text-sm text-muted-foreground">Рост выручки</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">287%</div>
                    <p className="text-sm text-muted-foreground">ROI</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-2xl transition-all hover:scale-[1.02] group overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                <Icon name="ShoppingCart" className="text-white" size={64} />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">ECO-бренд на маркетплейсах</CardTitle>
                <CardDescription>Запуск и продвижение на WB/Ozon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-sm text-muted-foreground mb-1">ЗАДАЧА</p>
                  <p>Вывести новый бренд в топ категории за 6 месяцев</p>
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground mb-1">РЕШЕНИЕ</p>
                  <p>Комплексная стратегия: SEO-оптимизация карточек, внутренняя реклама, внешний трафик</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <div className="text-3xl font-bold text-accent">Топ-5</div>
                    <p className="text-sm text-muted-foreground">За 4 месяца</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">320%</div>
                    <p className="text-sm text-muted-foreground">ROI</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-2xl transition-all hover:scale-[1.02] group overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-secondary to-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                <Icon name="TrendingUp" className="text-white" size={64} />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Онлайн-марафоны</CardTitle>
                <CardDescription>29 марафонов с высокой конверсией</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-sm text-muted-foreground mb-1">ЗАДАЧА</p>
                  <p>Выстроить систему регулярных запусков с управляемой экономикой</p>
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground mb-1">РЕШЕНИЕ</p>
                  <p>Стандартизировали процессы, внедрили сквозную аналитику и A/B тестирование</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <div className="text-3xl font-bold text-secondary">18 тыс</div>
                    <p className="text-sm text-muted-foreground">Средняя посещаемость</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary">250%</div>
                    <p className="text-sm text-muted-foreground">Средний ROI</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-2xl transition-all hover:scale-[1.02] group overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                <Icon name="Zap" className="text-white" size={64} />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Lifestyle-бренд</CardTitle>
                <CardDescription>Комплексный маркетинг и позиционирование</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-sm text-muted-foreground mb-1">ЗАДАЧА</p>
                  <p>Повысить узнаваемость и увеличить продажи премиум-сегмента</p>
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground mb-1">РЕШЕНИЕ</p>
                  <p>Переупаковка бренда, контент-стратегия, таргет + лидеры мнений</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <div className="text-3xl font-bold text-primary">x2.7</div>
                    <p className="text-sm text-muted-foreground">Рост продаж</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">4.2</div>
                    <p className="text-sm text-muted-foreground">Средний чек вырос</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Работаю с рынком и <span className="text-primary">делюсь опытом</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Спикер и модератор отраслевых мероприятий
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="bg-primary/10 p-4 rounded-xl w-fit mb-4">
                  <Icon name="Mic" className="text-primary" size={32} />
                </div>
                <CardTitle>Спикер ЭкоГородЭкспо</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Выступления о маркетинге и продвижении экологических брендов
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="bg-accent/10 p-4 rounded-xl w-fit mb-4">
                  <Icon name="Users" className="text-accent" size={32} />
                </div>
                <CardTitle>Модератор конференций</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Международная отраслевая конференция по развитию органических брендов
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="bg-secondary/10 p-4 rounded-xl w-fit mb-4">
                  <Icon name="Award" className="text-secondary" size={32} />
                </div>
                <CardTitle>Директор по маркетингу</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  GreenExpo 2025 — крупнейшая выставка экологических продуктов
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border-2">
            <CardContent className="p-8 text-center">
              <Icon name="Quote" className="text-primary mx-auto mb-4" size={48} />
              <p className="text-xl font-medium italic mb-4">
                "Маркетинг — это не магия и не искусство. Это инженерная система, где каждое решение 
                должно быть обосновано цифрами и приводить к измеримому результату"
              </p>
              <p className="text-muted-foreground">— Дмитрий Иванов</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Если вам нужен маркетинг, который можно{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              объяснить цифрами
            </span>
            {' '}— мы сработаемся
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Я не беру все проекты подряд и не продаю универсальные решения.<br />
            Мне важно понимать бизнес, задачи и реальную цель роста.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('cases')} className="text-lg px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Briefcase" className="mr-2" size={20} />
              Посмотреть кейсы
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                  <Icon name="Send" className="mr-2" size={20} />
                  Связаться со мной
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Расскажите о вашем проекте</DialogTitle>
                  <DialogDescription>
                    Заполните информацию, чтобы я мог подготовиться к встрече
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formStep === 1 && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="space-y-2">
                        <Label htmlFor="name3">Ваше имя *</Label>
                        <Input id="name3" placeholder="Иван Петров" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email3">Email *</Label>
                        <Input id="email3" type="email" placeholder="ivan@example.com" required />
                      </div>
                      <Button type="button" onClick={() => setFormStep(2)} className="w-full">
                        Далее <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Button>
                    </div>
                  )}
                  {formStep === 2 && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="space-y-2">
                        <Label>Отрасль</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите отрасль" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="education">Онлайн-образование</SelectItem>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex gap-2">
                        <Button type="button" variant="outline" onClick={() => setFormStep(1)} className="w-full">
                          <Icon name="ArrowLeft" className="mr-2" size={16} /> Назад
                        </Button>
                        <Button type="button" onClick={() => setFormStep(3)} className="w-full">
                          Далее <Icon name="ArrowRight" className="ml-2" size={16} />
                        </Button>
                      </div>
                    </div>
                  )}
                  {formStep === 3 && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="space-y-2">
                        <Label htmlFor="goals3">Ваши цели *</Label>
                        <Textarea id="goals3" placeholder="Что хотите достичь?" rows={3} required />
                      </div>
                      <div className="flex gap-2">
                        <Button type="button" variant="outline" onClick={() => setFormStep(2)} className="w-full">
                          <Icon name="ArrowLeft" className="mr-2" size={16} /> Назад
                        </Button>
                        <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                          Отправить <Icon name="Send" className="ml-2" size={16} />
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Дмитрий Иванов
              </h3>
              <p className="text-muted-foreground">
                Интернет-маркетолог с 10+ летним опытом в digital
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>hello@marketing-pro.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Send" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-muted-foreground">
            <p>© 2025 Дмитрий Иванов. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
