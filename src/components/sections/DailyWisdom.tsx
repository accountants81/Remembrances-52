
'use client';

import { dailyWisdomData } from '@/data/dailyWisdomData';
import type { DailyWisdomEntry } from '@/data/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';

const DailyWisdom: React.FC = () => {
  const [currentWisdom, setCurrentWisdom] = useState<DailyWisdomEntry | undefined>(undefined);

  const getRandomWisdom = () => {
    if (dailyWisdomData.length === 0) return undefined;
    const randomIndex = Math.floor(Math.random() * dailyWisdomData.length);
    return dailyWisdomData[randomIndex];
  };

  useEffect(() => {
    setCurrentWisdom(getRandomWisdom());
  }, []);

  const handleNewWisdom = () => {
    setCurrentWisdom(getRandomWisdom());
  };

  if (!currentWisdom) {
    return (
      <section id="daily-wisdom-section" className="py-8 bg-accent/10 scroll-mt-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto shadow-lg text-center bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">فائدة اليوم</CardTitle>
            </CardHeader>
            <CardContent>
              <p>لا توجد فائدة متاحة حالياً.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="daily-wisdom-section" className="py-8 bg-accent/10 scroll-mt-20">
      <div className="container mx-auto px-4">
         <h2 className="main-section-title">
          فائدة اليوم
        </h2>
        <Card className="max-w-2xl mx-auto shadow-lg text-center bg-card">
          <CardHeader>
            <div className="flex justify-center items-center mb-2">
                <Lightbulb className="h-10 w-10 text-accent"/>
            </div>
            <CardTitle className="text-2xl text-primary">{currentWisdom.type === 'hadith' ? 'حديث شريف' : currentWisdom.type === 'quran' ? 'آية كريمة' : 'قول مأثور'}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl md:text-2xl leading-relaxed font-arabic text-foreground" lang="ar">
              {currentWisdom.arabicText}
            </p>
            {currentWisdom.source && (
              <p className="mt-3 text-sm text-muted-foreground">
                المصدر: {currentWisdom.source}
              </p>
            )}
          </CardContent>
          <CardFooter className="justify-center pt-4">
            <Button variant="outline" onClick={handleNewWisdom} className="gap-2">
              <RefreshCw className="h-4 w-4"/>
              فائدة أخرى
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default DailyWisdom;
