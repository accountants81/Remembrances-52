
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RefreshCcw, VenetianMask, Plus, Target } from 'lucide-react'; 
import { tasbihOptions } from '@/data/adhkarData';
import type { TasbihOption } from '@/data/types';

const DigitalTasbih: React.FC = () => {
  const [count, setCount] = useState(0);
  const [selectedTasbih, setSelectedTasbih] = useState<TasbihOption>(tasbihOptions[0]);
  const [goal, setGoal] = useState<number>(33); 
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
    if (typeof window !== 'undefined') {
      const savedCount = localStorage.getItem(`tasbihCount_${selectedTasbih.id}`);
      const savedGoal = localStorage.getItem(`tasbihGoal_${selectedTasbih.id}`);
      if (savedCount) setCount(parseInt(savedCount, 10));
      if (savedGoal) setGoal(parseInt(savedGoal, 10)); else setGoal(33); 
    }
  }, [selectedTasbih.id]);

  useEffect(() => {
    if (isClient && typeof window !== 'undefined') {
      localStorage.setItem(`tasbihCount_${selectedTasbih.id}`, count.toString());
      localStorage.setItem(`tasbihGoal_${selectedTasbih.id}`, goal.toString());
    }
  }, [count, goal, selectedTasbih.id, isClient]);

  const increment = () => setCount(prev => prev + 1);
  const reset = () => setCount(0);

  const handleTasbihChange = (value: string) => {
    const newSelected = tasbihOptions.find(opt => opt.id === value) || tasbihOptions[0];
    setSelectedTasbih(newSelected);
    setCount(0); 
    const savedGoal = localStorage.getItem(`tasbihGoal_${newSelected.id}`);
    setGoal(savedGoal ? parseInt(savedGoal, 10) : 33);
  };

  const handleGoalChange = (value: string) => {
    const newGoal = parseInt(value, 10);
    if (!isNaN(newGoal) && newGoal > 0) {
      setGoal(newGoal);
    }
  };
  
  const progressPercentage = goal > 0 ? Math.min((count / goal) * 100, 100) : 0;

  if (!isClient) {
    return (
      <section id="tasbih-section" className="py-8 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="main-section-title">السبحة الإلكترونية</h2>
           <Card className="max-w-md mx-auto shadow-xl p-6 text-center bg-card">
            <CardHeader><CardTitle className="text-primary">جاري التحميل...</CardTitle></CardHeader>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="tasbih-section" className="py-8 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="main-section-title">
          السبحة الإلكترونية
        </h2>
        <Card className="max-w-md mx-auto shadow-xl p-6 bg-card">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center items-center mb-4">
              <VenetianMask className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-2xl text-primary">التسبيح الحالي: {selectedTasbih.text}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-7xl font-bold my-8 text-primary tabular-nums" dir="ltr">{count}</div>
            
            <div className="mb-6">
              <label htmlFor="tasbih-select" className="block text-sm font-medium text-muted-foreground mb-1">اختر نوع التسبيح:</label>
              <Select value={selectedTasbih.id} onValueChange={handleTasbihChange}>
                <SelectTrigger id="tasbih-select" className="w-full">
                  <SelectValue placeholder="اختر نوع التسبيح" />
                </SelectTrigger>
                <SelectContent>
                  {tasbihOptions.map(option => (
                    <SelectItem key={option.id} value={option.id}>{option.text}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mb-6">
              <label htmlFor="goal-select" className="block text-sm font-medium text-muted-foreground mb-1">الهدف:</label>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-muted-foreground" />
                <Select value={goal.toString()} onValueChange={handleGoalChange}>
                  <SelectTrigger id="goal-select" className="w-full">
                    <SelectValue placeholder="اختر الهدف" />
                  </SelectTrigger>
                  <SelectContent>
                    {[33, 100, 500, 1000].map(g => (
                      <SelectItem key={g} value={g.toString()}>{g}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="w-full bg-muted rounded-full h-2.5 mb-6">
              <div className="bg-primary h-2.5 rounded-full transition-all duration-300 ease-linear" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">التقدم: {count} / {goal}</p>


            <Button onClick={increment} size="lg" className="w-full text-2xl py-8 mb-4 gap-2 shadow-md hover:shadow-lg transition-shadow">
              <Plus className="h-8 w-8" />
              <span>سبح</span>
            </Button>
          </CardContent>
          <CardFooter>
            <Button variant="outline" onClick={reset} className="w-full gap-2">
              <RefreshCcw className="h-5 w-5" />
              إعادة الضبط
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default DigitalTasbih;
