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
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold mb-2">{caseData.title}</DialogTitle>
            <p className="text-lg text-muted-foreground">{caseData.subtitle}</p>
          </DialogHeader>
          
          {caseData.images && caseData.images.length > 0 && (
            <div className="w-full">
              <img src={caseData.images[0]} alt={caseData.title} className="w-full h-80 object-cover rounded-lg shadow-lg" />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">{caseData.stat1}</div>
              <p className="text-sm text-muted-foreground">{caseData.stat1Label}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-1">{caseData.stat2}</div>
              <p className="text-sm text-muted-foreground">{caseData.stat2Label}</p>
            </div>
          </div>

          {caseData.detailedContent ? (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Проблема</h3>
                <p className="text-muted-foreground leading-relaxed">{caseData.detailedContent.problem}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-secondary">Мой подход</h3>
                <p className="text-muted-foreground leading-relaxed">{caseData.detailedContent.approach}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-accent">Что я сделал</h3>
                <ul className="space-y-2">
                  {caseData.detailedContent.actions.map((action, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground leading-relaxed">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Результаты</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{caseData.detailedContent.results}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {caseData.detailedContent.stats.map((stat, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                      <Icon name="TrendingUp" className="text-accent shrink-0 mt-0.5" size={18} />
                      <span className="text-sm">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {caseData.fullDescription.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">{paragraph}</p>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CaseCard;