
'use client';

import type { Supplication } from '@/data/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';
import { MinusCircle, PlusCircle, CheckCircle2, Zap, BookOpen, Coffee, CalendarHeart, Sunrise, Sunset, Plane, SearchCheck, HeartPulse, BedDouble } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { cn } from '@/lib/utils';

interface SupplicationCardProps {
  supplication: Supplication;
}

const getSupplicationIcon = (id: string, categoryKey: string) => {
  if (id.includes('shifa') || id.includes('patient') || categoryKey === 'patient_dua') return <HeartPulse className="inline-block ml-1 rtl:mr-1 h-4 w-4 text-primary" />;
  if (id.includes('rizq')) return <Zap className="inline-block ml-1 rtl:mr-1 h-4 w-4 text-yellow-500" />;
  if (id.includes('travel') || categoryKey === 'travel_dua') return <Plane className="inline-block ml-1 rtl:mr-1 h-4 w-4 text-blue-500" />;
  if (id.includes('istikhara') || categoryKey === 'istikhara_dua') return <SearchCheck className="inline-block ml-1 rtl:mr-1 h-4 w-4 text-purple-500" />;
  if (id.includes('deceased') || id.includes('mayyit') || categoryKey === 'deceased_dua') return <BedDouble className="inline-block ml-1 rtl:mr-1 h-4 w-4 text-gray-500" />;
  if (id.includes('quran') || id.includes('ayat')) return <BookOpen className="inline-block ml-1 rtl:mr-1 h-4 w-4 text-green-600" />;
  if (id.includes('morning') || categoryKey === 'morning_adhkar') return <Sunrise className="inline-block ml-1 rtl:mr-1 h-4 w-4 text-orange-500" />;
  if (id.includes('evening') || categoryKey === 'evening_adhkar') return <Sunset className="inline-block ml-1 rtl:mr-1 h-4 w-4 text-indigo-500" />;
  return <CalendarHeart className="inline-block ml-1 rtl:mr-1 h-4 w-4 text-muted-foreground" />;
};

const SupplicationCard: React.FC<SupplicationCardProps> = ({ supplication }) => {
  const [count, setCount] = useState(0);
  const { toast } = useToast();

  const isCompleted = supplication.targetCount > 0 && count >= supplication.targetCount;
  const SupplicationIcon = getSupplicationIcon(supplication.id, supplication.categoryKey);

  const increment = () => {
    if (supplication.targetCount === 0 || count < supplication.targetCount) {
      setCount(prev => prev + 1);
    } else {
       toast({
          title: "مكتمل",
          description: `لقد أكملت هذا الذكر ${supplication.targetCount} مرة.`,
          variant: "default",
        });
    }
  };
  const decrement = () => setCount(prev => Math.max(0, prev - 1));
  
  useEffect(() => {
    setCount(0); 
  }, [supplication.id]);

  return (
    <Card className={cn(
      "shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl group flex flex-col h-full",
      isCompleted ? 'border-green-500 border-2 bg-green-500/10 ring-2 ring-green-400' : 'border-border hover:border-primary/50',
      "bg-card" // Ensure card background is applied
    )}>
      <CardHeader className="pb-3">
         {supplication.source && <p className="text-xs text-muted-foreground mb-2">{supplication.source}</p>}
         <div className="flex items-center justify-between">
            <Badge 
            variant={isCompleted ? "default" : "secondary"} 
            className={cn(
              "w-fit transition-colors",
              isCompleted ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground group-hover:bg-accent group-hover:text-accent-foreground'
            )}
            >
            {isCompleted ? <CheckCircle2 className="inline-block ml-1 rtl:mr-1 h-4 w-4" /> : SupplicationIcon}
            {supplication.repetition}
            </Badge>
         </div>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line font-arabic text-foreground/90 group-hover:text-foreground" lang="ar">
          {supplication.arabicText}
        </p>
        {supplication.translation && (
          <p className="mt-2 text-sm text-muted-foreground italic" lang="en">
            {supplication.translation}
          </p>
        )}
      </CardContent>
      {supplication.targetCount > 0 && (
        <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 border-t border-border/50 mt-auto">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={decrement} disabled={count === 0} aria-label="إنقاص العد">
              <MinusCircle className="h-7 w-7 text-destructive/70 hover:text-destructive transition-colors" />
            </Button>
            <span className="text-3xl font-bold w-16 text-center text-primary tabular-nums">{count}</span>
            <Button variant="ghost" size="icon" onClick={increment} disabled={isCompleted} aria-label="زيادة العد">
              <PlusCircle className="h-7 w-7 text-primary/70 hover:text-primary transition-colors" />
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default SupplicationCard;
