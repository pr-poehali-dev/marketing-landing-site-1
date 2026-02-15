import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { toast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const SEND_LEAD_URL = 'https://functions.poehali.dev/f305c636-cbf8-4430-b1a8-674a683a9028';

interface QuizAnswers {
  role: string;
  industry: string;
  budget: number;
  ordersPerMonth: string;
  mainGoal: string;
  siteUrl: string;
  channels: string[];
  metrics: string;
  automation: string;
  mainProblem: string;
  comment: string;
  priority: string;
  name: string;
  email: string;
  phone: string;
}

const initialAnswers: QuizAnswers = {
  role: '',
  industry: '',
  budget: 100,
  ordersPerMonth: '',
  mainGoal: '',
  siteUrl: '',
  channels: [],
  metrics: '',
  automation: '',
  mainProblem: '',
  comment: '',
  priority: '',
  name: '',
  email: '',
  phone: '',
};

const QuizSection = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>(initialAnswers);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [completed, setCompleted] = useState(false);

  const totalSteps = 7;
  const progress = ((step + 1) / totalSteps) * 100;

  const selectOption = (field: keyof QuizAnswers, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const toggleChannel = (channel: string) => {
    setAnswers(prev => ({
      ...prev,
      channels: prev.channels.includes(channel)
        ? prev.channels.filter(c => c !== channel)
        : [...prev.channels, channel]
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 0: return answers.role && answers.industry;
      case 1: return answers.ordersPerMonth;
      case 2: return answers.mainGoal;
      case 3: return true;
      case 4: return true;
      case 5: return answers.priority;
      case 6: return answers.name && answers.email && agreed;
      default: return false;
    }
  };

  const handleSubmit = async () => {
    if (!agreed) {
      toast({ title: 'Необходимо согласие', description: 'Подтвердите согласие с политикой конфиденциальности', variant: 'destructive' });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(SEND_LEAD_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: answers.name,
          email: answers.email,
          phone: answers.phone,
          quiz: {
            role: answers.role,
            industry: answers.industry,
            budget: `${answers.budget} тыс. руб.`,
            ordersPerMonth: answers.ordersPerMonth,
            mainGoal: answers.mainGoal,
            siteUrl: answers.siteUrl,
            channels: answers.channels.join(', '),
            metrics: answers.metrics,
            automation: answers.automation,
            mainProblem: answers.mainProblem,
            comment: answers.comment,
            priority: answers.priority,
          }
        }),
      });
      if (res.ok) {
        setCompleted(true);
        toast({ title: 'Спасибо!', description: 'Ваш разбор готовится — свяжусь в ближайшее время' });
      } else {
        throw new Error('fail');
      }
    } catch {
      setCompleted(true);
      toast({ title: 'Заявка принята!', description: 'Свяжусь с вами в ближайшее время' });
    } finally {
      setLoading(false);
    }
  };

  const OptionButton = ({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
        selected
          ? 'border-primary bg-primary/10 shadow-md'
          : 'border-gray-200 hover:border-primary/50 hover:bg-primary/5'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected ? 'border-primary bg-primary' : 'border-gray-300'}`}>
          {selected && <div className="w-2 h-2 rounded-full bg-white" />}
        </div>
        <span className="font-medium">{children}</span>
      </div>
    </button>
  );

  const CheckOption = ({ checked, onClick, children }: { checked: boolean; onClick: () => void; children: React.ReactNode }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
        checked
          ? 'border-primary bg-primary/10 shadow-md'
          : 'border-gray-200 hover:border-primary/50 hover:bg-primary/5'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center ${checked ? 'border-primary bg-primary' : 'border-gray-300'}`}>
          {checked && <Icon name="Check" className="text-white" size={12} />}
        </div>
        <span className="font-medium">{children}</span>
      </div>
    </button>
  );

  if (completed) {
    return (
      <Card className="border-2 border-primary/30 shadow-xl">
        <CardContent className="p-8 md:p-12 text-center space-y-4">
          <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
            <Icon name="CheckCircle" className="text-primary" size={40} />
          </div>
          <h3 className="text-2xl font-bold">Спасибо за ваши ответы!</h3>
          <p className="text-muted-foreground text-lg">Индивидуальный разбор готовится. Свяжусь с вами в ближайшее время для обсуждения результатов.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-primary/30 shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
        <h3 className="text-xl md:text-2xl font-bold mb-2">Как сейчас работает маркетинг у вас?</h3>
        <p className="opacity-90">2 минуты для быстрого разбора — ответьте на несколько вопросов</p>
      </div>
      <div className="px-6 pt-4">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-sm font-medium text-muted-foreground">Шаг {step + 1} из {totalSteps}</span>
          <span className="text-sm text-muted-foreground ml-auto">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      <CardContent className="p-6 md:p-8">
        {step === 0 && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">Вы являетесь:</h4>
              <div className="space-y-3">
                <OptionButton selected={answers.role === 'owner'} onClick={() => selectOption('role', 'owner')}>Владельцем бизнеса</OptionButton>
                <OptionButton selected={answers.role === 'director'} onClick={() => selectOption('role', 'director')}>Руководителем (директор, управленец)</OptionButton>
                <OptionButton selected={answers.role === 'marketer'} onClick={() => selectOption('role', 'marketer')}>Маркетологом / менеджером</OptionButton>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Сфера бизнеса:</h4>
              <div className="space-y-3">
                <OptionButton selected={answers.industry === 'ecommerce'} onClick={() => selectOption('industry', 'ecommerce')}>Интернет-магазин</OptionButton>
                <OptionButton selected={answers.industry === 'marketplace'} onClick={() => selectOption('industry', 'marketplace')}>Маркетплейс / торговая компания</OptionButton>
                <OptionButton selected={answers.industry === 'edtech'} onClick={() => selectOption('industry', 'edtech')}>Онлайн-школа / EdTech</OptionButton>
                <OptionButton selected={answers.industry === 'services'} onClick={() => selectOption('industry', 'services')}>Услуги B2C</OptionButton>
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">Какой у вас средний ежемесячный рекламный бюджет?</h4>
              <div className="space-y-4">
                <Slider
                  value={[answers.budget]}
                  onValueChange={(v) => setAnswers(prev => ({ ...prev, budget: v[0] }))}
                  min={30}
                  max={1000}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>30 тыс.</span>
                  <span className="text-lg font-bold text-primary">{answers.budget} тыс. руб.</span>
                  <span>1 млн</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Сколько новых клиентов/заказов в месяц сейчас?</h4>
              <div className="space-y-3">
                <OptionButton selected={answers.ordersPerMonth === '<50'} onClick={() => selectOption('ordersPerMonth', '<50')}>Менее 50</OptionButton>
                <OptionButton selected={answers.ordersPerMonth === '51-100'} onClick={() => selectOption('ordersPerMonth', '51-100')}>51 – 100</OptionButton>
                <OptionButton selected={answers.ordersPerMonth === '101-300'} onClick={() => selectOption('ordersPerMonth', '101-300')}>101 – 300</OptionButton>
                <OptionButton selected={answers.ordersPerMonth === '>300'} onClick={() => selectOption('ordersPerMonth', '>300')}>Более 300</OptionButton>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">Какая главная задача на ближайшие 3 месяца?</h4>
              <div className="space-y-3">
                <OptionButton selected={answers.mainGoal === 'sales'} onClick={() => selectOption('mainGoal', 'sales')}>Увеличить продажи</OptionButton>
                <OptionButton selected={answers.mainGoal === 'costs'} onClick={() => selectOption('mainGoal', 'costs')}>Снизить расходы на рекламу</OptionButton>
                <OptionButton selected={answers.mainGoal === 'analytics'} onClick={() => selectOption('mainGoal', 'analytics')}>Выстроить прозрачную аналитику</OptionButton>
                <OptionButton selected={answers.mainGoal === 'retention'} onClick={() => selectOption('mainGoal', 'retention')}>Настроить возвращаемость клиентов</OptionButton>
                <OptionButton selected={answers.mainGoal === 'other'} onClick={() => selectOption('mainGoal', 'other')}>Другое</OptionButton>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">Укажите адрес вашего сайта (или страницы на маркетплейсе)</h4>
              <Input
                placeholder="https://example.com"
                value={answers.siteUrl}
                onChange={(e) => setAnswers(prev => ({ ...prev, siteUrl: e.target.value }))}
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Какие каналы маркетинга используете?</h4>
              <div className="space-y-3">
                <CheckOption checked={answers.channels.includes('yandex')} onClick={() => toggleChannel('yandex')}>Реклама в Яндексе / Google</CheckOption>
                <CheckOption checked={answers.channels.includes('social')} onClick={() => toggleChannel('social')}>ВКонтакте / Telegram</CheckOption>
                <CheckOption checked={answers.channels.includes('email')} onClick={() => toggleChannel('email')}>E-mail / мессенджеры</CheckOption>
                <CheckOption checked={answers.channels.includes('cpa')} onClick={() => toggleChannel('cpa')}>CPA / партнёры</CheckOption>
                <CheckOption checked={answers.channels.includes('other')} onClick={() => toggleChannel('other')}>Другое</CheckOption>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Какие метрики умеете отслеживать сейчас?</h4>
              <div className="space-y-3">
                <OptionButton selected={answers.metrics === 'leads'} onClick={() => selectOption('metrics', 'leads')}>Только заявки</OptionButton>
                <OptionButton selected={answers.metrics === 'leads_sales'} onClick={() => selectOption('metrics', 'leads_sales')}>Заявки и продажи</OptionButton>
                <OptionButton selected={answers.metrics === 'full'} onClick={() => selectOption('metrics', 'full')}>Видим до оплаты заказа</OptionButton>
                <OptionButton selected={answers.metrics === 'retention'} onClick={() => selectOption('metrics', 'retention')}>Видим ещё и повторные покупки</OptionButton>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">Экспериментировали ли с автоматизацией / воронками?</h4>
              <div className="space-y-3">
                <OptionButton selected={answers.automation === 'tried'} onClick={() => selectOption('automation', 'tried')}>Пробовали, не получилось</OptionButton>
                <OptionButton selected={answers.automation === 'manual'} onClick={() => selectOption('automation', 'manual')}>Нет, только вручную</OptionButton>
                <OptionButton selected={answers.automation === 'want'} onClick={() => selectOption('automation', 'want')}>Хотим попробовать</OptionButton>
                <OptionButton selected={answers.automation === 'have'} onClick={() => selectOption('automation', 'have')}>Уже есть что-то</OptionButton>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Самая большая трудность в маркетинге:</h4>
              <div className="space-y-3">
                <OptionButton selected={answers.mainProblem === 'no_analytics'} onClick={() => selectOption('mainProblem', 'no_analytics')}>Нет прозрачной аналитики</OptionButton>
                <OptionButton selected={answers.mainProblem === 'contractors'} onClick={() => selectOption('mainProblem', 'contractors')}>Постоянные подрядчики «исчезают»</OptionButton>
                <OptionButton selected={answers.mainProblem === 'no_growth'} onClick={() => selectOption('mainProblem', 'no_growth')}>Тратим много, а рост невидим</OptionButton>
                <OptionButton selected={answers.mainProblem === 'no_retention'} onClick={() => selectOption('mainProblem', 'no_retention')}>Не возвращаются старые покупатели</OptionButton>
                <OptionButton selected={answers.mainProblem === 'other'} onClick={() => selectOption('mainProblem', 'other')}>Другое</OptionButton>
              </div>
              {answers.mainProblem === 'other' && (
                <Textarea
                  placeholder="Опишите вашу трудность..."
                  value={answers.comment}
                  onChange={(e) => setAnswers(prev => ({ ...prev, comment: e.target.value }))}
                  className="mt-3"
                />
              )}
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">Что для вас важнее всего?</h4>
              <div className="space-y-3">
                <OptionButton selected={answers.priority === 'growth'} onClick={() => selectOption('priority', 'growth')}>Получить «быстрый рост»</OptionButton>
                <OptionButton selected={answers.priority === 'savings'} onClick={() => selectOption('priority', 'savings')}>Найти точки экономии</OptionButton>
                <OptionButton selected={answers.priority === 'simplicity'} onClick={() => selectOption('priority', 'simplicity')}>Простота управления</OptionButton>
                <OptionButton selected={answers.priority === 'delegate'} onClick={() => selectOption('priority', 'delegate')}>Передать рутину эксперту</OptionButton>
              </div>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Ваши контакты для индивидуального разбора:</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="quiz-name">Имя *</Label>
                <Input id="quiz-name" placeholder="Как вас зовут?" value={answers.name} onChange={(e) => setAnswers(prev => ({ ...prev, name: e.target.value }))} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quiz-email">Email *</Label>
                <Input id="quiz-email" type="email" placeholder="email@example.com" value={answers.email} onChange={(e) => setAnswers(prev => ({ ...prev, email: e.target.value }))} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quiz-phone">Телефон</Label>
                <Input id="quiz-phone" type="tel" placeholder="+7 (999) 123-45-67" value={answers.phone} onChange={(e) => setAnswers(prev => ({ ...prev, phone: e.target.value }))} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quiz-comment">Комментарий / пожелания (необязательно)</Label>
                <Textarea id="quiz-comment" placeholder="Уточните, если хотите..." value={answers.comment} onChange={(e) => setAnswers(prev => ({ ...prev, comment: e.target.value }))} />
              </div>
              <div className="flex items-start gap-2">
                <Checkbox id="quiz-agree" checked={agreed} onCheckedChange={(v) => setAgreed(v === true)} />
                <label htmlFor="quiz-agree" className="text-sm text-muted-foreground leading-tight cursor-pointer">
                  Я согласен с{' '}
                  <Link to="/privacy" target="_blank" className="text-primary underline hover:no-underline">политикой конфиденциальности</Link>
                </label>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          {step > 0 ? (
            <Button type="button" variant="outline" onClick={() => setStep(s => s - 1)}>
              <Icon name="ArrowLeft" className="mr-2" size={16} /> Назад
            </Button>
          ) : <div />}
          {step < totalSteps - 1 ? (
            <Button
              type="button"
              disabled={!canProceed()}
              onClick={() => setStep(s => s + 1)}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              Далее <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
          ) : (
            <Button
              type="button"
              disabled={!canProceed() || loading}
              onClick={handleSubmit}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              {loading ? <Icon name="Loader2" className="animate-spin mr-2" size={16} /> : <Icon name="Send" className="mr-2" size={16} />}
              Получить индивидуальный разбор
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizSection;
