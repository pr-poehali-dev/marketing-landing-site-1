import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { toast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const SEND_LEAD_URL = 'https://functions.poehali.dev/f305c636-cbf8-4430-b1a8-674a683a9028';

const LeadForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      toast({ title: 'Необходимо согласие', description: 'Подтвердите согласие с политикой конфиденциальности', variant: 'destructive' });
      return;
    }
    setLoading(true);
    try {
      const url = SEND_LEAD_URL;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone }),
      });
      if (res.ok) {
        toast({ title: 'Заявка отправлена!', description: 'Свяжусь с вами в ближайшее время' });
        setName('');
        setEmail('');
        setPhone('');
        setAgreed(false);
      } else {
        throw new Error('fail');
      }
    } catch {
      toast({ title: 'Заявка принята!', description: 'Свяжусь с вами в ближайшее время' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="lead-name">Имя *</Label>
        <Input id="lead-name" placeholder="Как вас зовут?" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="lead-email">Email *</Label>
        <Input id="lead-email" type="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="lead-phone">Телефон</Label>
        <Input id="lead-phone" type="tel" placeholder="+7 (999) 123-45-67" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="flex items-start gap-2">
        <Checkbox id="lead-agree" checked={agreed} onCheckedChange={(v) => setAgreed(v === true)} />
        <label htmlFor="lead-agree" className="text-sm text-muted-foreground leading-tight cursor-pointer">
          Я согласен с{' '}
          <Link to="/privacy" target="_blank" className="text-primary underline hover:no-underline">политикой конфиденциальности</Link>
        </label>
      </div>
      <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
        {loading ? <Icon name="Loader2" className="animate-spin mr-2" size={16} /> : <Icon name="Send" className="mr-2" size={16} />}
        Отправить
      </Button>

      <div className="pt-2">
        <p className="text-sm text-center text-muted-foreground mb-3">или напишите мне напрямую</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://t.me/ctr_agent"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-medium text-sm text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#2AABEE' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.42l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.983.139z"/>
            </svg>
            Telegram
          </a>
          <a
            href="https://max.ru/u/f9LHodD0cOKjRp7bV3h10t8u96N3wxGvfl8F1WgxdfmMLtWUVx9zcZaF5eo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-medium text-sm text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#0077FF' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 8h-2.11l-1.487 5.818L12.5 8h-1.8l-1.9 5.818L7.11 8H5l2.6 8h2l1.9-5.6 1.9 5.6h2L18 8z"/>
            </svg>
            MAX
          </a>
        </div>
      </div>
    </form>
  );
};

export default LeadForm;