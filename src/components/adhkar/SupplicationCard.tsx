'use client';

import type { Supplication } from '@/data/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';
import { MinusCircle, PlusCircle, CheckCircle2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface SupplicationCardProps {
  supplication: Supplication;
}

const SupplicationCard: React.FC<SupplicationCardProps> = ({ supplication }) => {
  const [count, setCount] = useState(0);
  const { toast } = useToast();

  const isCompleted = count >= supplication.targetCount;

  const increment = () => {
    if (count < supplication.targetCount) {
      setCount(prev => prev + 1);
    } else {
       toast({
          title: "مكتمل",
          description: `لقد أكملت هذا الذكر ${supplication.targetCount} مرة.`,
          variant: "default", // Or a success variant if you define one
        });
    }
  };
  const decrement = () => setCount(prev => Math.max(0, prev - 1));
  
  useEffect(() => {
    setCount(0); // Reset count if supplication changes
  }, [supplication.id]);

  return (
    <Card className={`shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl group ${isCompleted ? 'border-green-500 border-2 bg-green-500/10 ring-2 ring-green-400' : 'border-border hover:border-primary/50'}`}>
      <CardHeader className="pb-3">
         {supplication.source && <p className="text-xs text-muted-foreground mb-2">{supplication.source}</p>}
         <Badge 
           variant={isCompleted ? "default" : "secondary"} 
           className={`mb-2 w-fit transition-colors ${isCompleted ? 'bg-green-600 hover:bg-green-700 text-white' : 'group-hover:bg-accent group-hover:text-accent-foreground'}`}
         >
           {isCompleted ? <CheckCircle2 className="inline-block ml-1 rtl:mr-1 h-4 w-4" /> : null}
           {supplication.repetition}
         </Badge>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line font-arabic text-foreground/90 group-hover:text-foreground" lang="ar">
          {supplication.arabicText}
        </p>
        {supplication.translation && (
          <p className="mt-2 text-sm text-muted-foreground italic" lang="en">
            {supplication.translation}
          </p>
        )}
      </CardContent>
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
        {/* Placeholder for potential future actions if needed */}
        {/* For example, a "Mark as Favorite" button could go here */}
        {/* <Button variant="outline" size="sm">
          <Heart className="h-4 w-4 text-rose-500/70"/>
        </Button> */}
      </CardFooter>
    </Card>
  );
};

export default SupplicationCard;
