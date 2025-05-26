import { dailyWisdomData } from '@/data/dailyWisdomData';
import type { DailyWisdomEntry } from '@/data/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, RefreshCw } from 'lucide-react'; // Using Lightbulb icon for wisdom

const DailyWisdom: React.FC = () => {
  // For now, display the first wisdom. A "تحديث الفائدة" button could cycle through them if more are added.
  const wisdom: DailyWisdomEntry | undefined = dailyWisdomData[0];

  if (!wisdom) {
    return null; // Or some placeholder if no wisdom data
  }

  return (
    <section id="daily-wisdom-section" className="py-8 bg-accent/20 scroll-mt-20">
      <div className="container mx-auto px-4">
         <h2 className="text-3xl font-bold text-center mb-8 text-primary relative pb-2
                       after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 
                       after:w-20 after:h-1 after:bg-accent after:rounded-full">
          فائدة اليوم
        </h2>
        <Card className="max-w-2xl mx-auto shadow-lg text-center">
          <CardHeader>
            <div className="flex justify-center items-center mb-2">
                <Lightbulb className="h-10 w-10 text-accent"/>
            </div>
            <CardTitle className="text-2xl text-primary">{wisdom.type === 'hadith' ? 'حديث شريف' : wisdom.type === 'quran' ? 'آية كريمة' : 'قول مأثور'}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl md:text-2xl leading-relaxed font-arabic text-foreground" lang="ar">
              {wisdom.arabicText}
            </p>
            {wisdom.source && (
              <p className="mt-3 text-sm text-muted-foreground">
                المصدر: {wisdom.source}
              </p>
            )}
          </CardContent>
          <CardFooter className="justify-center">
            {/* Placeholder for "Update Wisdom" functionality if implemented later */}
            {/* <Button variant="outline">
              <RefreshCw className="ml-2 h-4 w-4 rtl:mr-2 rtl:ml-0"/>
              تحديث الفائدة
            </Button> */}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default DailyWisdom;
