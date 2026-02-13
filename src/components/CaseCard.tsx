import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import type { CaseData } from '@/data/cases';

interface CaseCardProps {
  caseData: CaseData;
}

const CaseCard = ({ caseData }: CaseCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        className="border-2 hover:shadow-2xl transition-all hover:scale-[1.02] group overflow-hidden cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className={`h-48 bg-gradient-to-br ${caseData.gradient} flex items-center justify-center group-hover:scale-105 transition-transform relative overflow-hidden`}>
          {caseData.image ? (
            <img src={caseData.image} alt={caseData.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
          ) : (
            <Icon name={caseData.icon as "ShoppingCart"} className="text-white" size={64} />
          )}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        </div>
        <CardHeader>
          <CardTitle className="text-2xl">{caseData.title}</CardTitle>
          <CardDescription>{caseData.subtitle}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-semibold text-sm text-muted-foreground mb-1">ЗАДАЧА</p>
            <p className="text-sm">{caseData.task}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <div className="text-3xl font-bold text-primary">{caseData.stat1}</div>
              <p className="text-sm text-muted-foreground">{caseData.stat1Label}</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">{caseData.stat2}</div>
              <p className="text-sm text-muted-foreground">{caseData.stat2Label}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{caseData.title}</DialogTitle>
          </DialogHeader>
          {caseData.image && (
            <img src={caseData.image} alt={caseData.title} className="w-full h-64 object-cover rounded-lg" />
          )}
          <div className="grid grid-cols-2 gap-4 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{caseData.stat1}</div>
              <p className="text-sm text-muted-foreground">{caseData.stat1Label}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">{caseData.stat2}</div>
              <p className="text-sm text-muted-foreground">{caseData.stat2Label}</p>
            </div>
          </div>
          <div className="space-y-3">
            {caseData.fullDescription.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{paragraph}</p>
            ))}
          </div>
          <a href={caseData.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm flex items-center gap-1">
            <Icon name="ExternalLink" size={14} /> Подробнее на сайте
          </a>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CaseCard;
