
'use client';

import type { Supplication } from '@/data/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';
import { MinusCircle, PlusCircle, CheckCircle2, Zap, BookOpen, Coffee, CalendarHeart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface SupplicationCardProps {
  supplication: Supplication;
}

// Helper to choose an icon based on supplication ID or keywords
const getSupplicationIcon = (id: string) => {
  if (id.includes('shifa') || id.includes('patient')) return <HeartPulse className="inline-block ml-1 rtl:mr-1 h-4 w-4 text-primary" />;
  if (id.includes('rizq')) return <Zap className="inline-block ml-1 rtl:mr-1 h-4 w-4 text-yellow-500" />; // Example for Rizq
  if (id.includes('travel')) return <Plane className="inline-block ml-1 rtl:mr-1 h-4 w-4 text-blue-500" />;
  if (id.includes('istikhara')) return <SearchCheck className="inline-block ml-1 rtl:mr-1 h-4 w-4 text-purple-500" />;
  if (id.includes('deceased') || id.includes('mayyit')) return <BedDouble className="inline-block ml-1 rtl:mr-1 h-4 w-4 text-gray-500" />;
  if (id.includes('quran') || id.includes('ayat')) return <BookOpen className="inline-block ml-1 rtl:mr-1 h-4 w-4 text-green-600" />;
  if (id.includes('morning')) return <Sunrise className="inline-block ml-1 rtl:mr-1 h-4 w-4 text-orange-500" />;
  if (id.includes('evening')) return <Sunset className="inline-block ml-1 rtl:mr-1 h-4 w-4 text-indigo-500" />;
  // Add more specific icons based on keywords if needed
  return <CalendarHeart className="inline-block ml-1 rtl:mr-1 h-4 w-4 text-muted-foreground" />; // Default icon
};

const SupplicationCard: React.FC<SupplicationCardProps> = ({ supplication }) => {
  const [count, setCount] = useState(0);
  const { toast } = useToast();

  const isCompleted = supplication.targetCount > 0 && count >= supplication.targetCount;
  const SupplicationIcon = getSupplicationIcon(supplication.id);

  const increment = () => {
    if (supplication.targetCount === 0 || count < supplication.targetCount) { // Allow increment if no target count
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
    <Card className={`shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl group flex flex-col h-full ${isCompleted ? 'border-green-500 border-2 bg-green-500/10 ring-2 ring-green-400' : 'border-border hover:border-primary/50'}`}>
      <CardHeader className="pb-3">
         {supplication.source && <p className="text-xs text-muted-foreground mb-2">{supplication.source}</p>}
         <div className="flex items-center justify-between">
            <Badge 
            variant={isCompleted ? "default" : "secondary"} 
            className={`w-fit transition-colors ${isCompleted ? 'bg-green-600 hover:bg-green-700 text-white' : 'group-hover:bg-accent group-hover:text-accent-foreground'}`}
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
      {supplication.targetCount > 0 && ( // Only show counter if targetCount is defined and > 0
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

// Helper icons (can be moved to a separate file if they grow)
const Sunrise = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("lucide lucide-sunrise", className)}><path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m17.66 12.34 1.41-1.41"/><path d="M22 22H2"/><path d="M16 5l-4 4-4-4"/></svg>;
const Sunset = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("lucide lucide-sunset", className)}><path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m17.66 12.34 1.41-1.41"/><path d="M22 22H2"/><path d="M16 18l-4-4-4 4"/></svg>;
const Plane = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("lucide lucide-plane", className)}><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 5.2 5.2c.4.4 1 .5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>;
const SearchCheck = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("lucide lucide-search-check", className)}><path d="m8 11 2 2 4-4"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
const HeartPulse = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("lucide lucide-heart-pulse", className)}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.7-1.5L11.5 12H16"/></svg>;
const BedDouble = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("lucide lucide-bed-double", className)}><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6"/><path d="M20 10V6"/><path d="M12 4v6"/><path d="M2 14h20"/></svg>;

import { cn } from '@/lib/utils'; // Ensure cn is imported

export default SupplicationCard;
