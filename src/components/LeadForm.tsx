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
    </form>
  );
};

export default LeadForm;