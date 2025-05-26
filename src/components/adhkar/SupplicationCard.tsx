'use client';

import type { Supplication } from '@/data/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';
import { MinusCircle, PlusCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { virtueNarrator, VirtueNarratorInput } from '@/ai/flows/virtue-narrator';
import { VirtueModal } from './VirtueModal';
import { useToast } from "@/hooks/use-toast";

interface SupplicationCardProps {
  supplication: Supplication;
}

const SupplicationCard: React.FC<SupplicationCardProps> = ({ supplication }) => {
  const [count, setCount] = useState(0);
  const [isVirtueModalOpen, setIsVirtueModalOpen] = useState(false);
  const [virtueExplanation, setVirtueExplanation] = useState<string | null>(null);
  const [isLoadingVirtue, setIsLoadingVirtue] = useState(false);
  const { toast } = useToast();

  const isCompleted = count >= supplication.targetCount;

  const increment = () => {
    if (count < supplication.targetCount) {
      setCount(prev => prev + 1);
    } else {
       toast({
          title: "مكتمل",
          description: `لقد أكملت هذا الذكر ${supplication.targetCount} مرة.`,
        });
    }
  };
  const decrement = () => setCount(prev => Math.max(0, prev - 1));

  const handleShowVirtue = async () => {
    setIsVirtueModalOpen(true);
    if (virtueExplanation) return; // Already fetched

    setIsLoadingVirtue(true);
    try {
      const input: VirtueNarratorInput = { text: supplication.arabicText };
      const result = await virtueNarrator(input);
      setVirtueExplanation(result.explanation);
    } catch (error) {
      console.error("Error fetching virtue:", error);
      setVirtueExplanation("عفواً، حدث خطأ أثناء محاولة جلب شرح الفضائل.");
      toast({
        variant: "destructive",
        title: "خطأ",
        description: "لم نتمكن من تحميل شرح الفضائل. يرجى المحاولة مرة أخرى.",
      });
    } finally {
      setIsLoadingVirtue(false);
    }
  };
  
  // Reset count if supplication changes (though unlikely in this structure)
  useEffect(() => {
    setCount(0);
  }, [supplication.id]);

  return (
    <>
      <Card className={`shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl ${isCompleted ? 'border-green-500 border-2 bg-green-500/10' : 'border-border'}`}>
        <CardHeader className="pb-3">
           {supplication.source && <p className="text-xs text-muted-foreground mb-2">{supplication.source}</p>}
           <Badge variant={isCompleted ? "default" : "secondary"} className={`mb-2 w-fit ${isCompleted ? 'bg-green-600 text-white' : ''}`}>
             {isCompleted ? <CheckCircle2 className="inline-block ml-1 rtl:mr-1 h-4 w-4" /> : null}
             {supplication.repetition}
           </Badge>
        </CardHeader>
        <CardContent className="pb-4">
          <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line font-arabic" lang="ar">
            {supplication.arabicText}
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-2">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={decrement} disabled={count === 0}>
              <MinusCircle className="h-6 w-6 text-destructive/80 hover:text-destructive" />
            </Button>
            <span className="text-2xl font-bold w-12 text-center text-primary tabular-nums">{count}</span>
            <Button variant="ghost" size="icon" onClick={increment} disabled={isCompleted}>
              <PlusCircle className="h-6 w-6 text-primary/80 hover:text-primary" />
            </Button>
          </div>
          <Button variant="outline" onClick={handleShowVirtue} className="gap-2 w-full sm:w-auto">
            <Sparkles className="h-4 w-4 text-accent" />
            شرح الفضائل
          </Button>
        </CardFooter>
      </Card>
      <VirtueModal
        isOpen={isVirtueModalOpen}
        onClose={() => setIsVirtueModalOpen(false)}
        title={`فضائل: ${supplication.arabicText.substring(0, 30)}...`}
        content={virtueExplanation}
        isLoading={isLoadingVirtue}
      />
    </>
  );
};

export default SupplicationCard;
