
import { sinsData } from '@/data/sinsData';
import type { SinEntry } from '@/data/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

const SinCard: React.FC<{ sin: SinEntry }> = ({ sin }) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-destructive rtl:border-r-4 rtl:border-l-0 bg-card hover:border-destructive/70">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl text-destructive flex items-center gap-2">
          <AlertTriangle className="h-6 w-6" />
          {sin.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {sin.quranVerse && (
          <blockquote className="border-r-2 border-accent pr-3 rtl:border-l-2 rtl:border-r-0 rtl:pl-3">
            <p className="text-md font-arabic leading-relaxed text-foreground" lang="ar">{sin.quranVerse}</p>
            {sin.quranSource && <footer className="text-xs text-muted-foreground mt-1">{sin.quranSource}</footer>}
          </blockquote>
        )}
        {sin.hadith && (
           <blockquote className="border-r-2 border-primary pr-3 rtl:border-l-2 rtl:border-r-0 rtl:pl-3">
            <p className="text-md font-arabic leading-relaxed text-foreground" lang="ar">{sin.hadith}</p>
            {sin.hadithSource && <footer className="text-xs text-muted-foreground mt-1">{sin.hadithSource}</footer>}
          </blockquote>
        )}
      </CardContent>
    </Card>
  );
};

const SinsWarning: React.FC = () => {
  return (
    <section id="sins-warning-section" className="py-8 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-destructive relative pb-2
                       after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 
                       after:w-full sm:after:w-3/4 md:after:w-1/2 lg:after:w-1/3 after:max-w-xs after:h-1 after:bg-destructive after:rounded-full">
          أكثر 10 ذنوب شائعة بين المسلمين في هذا الزمان
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sinsData.map(sin => (
            <SinCard key={sin.id} sin={sin} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SinsWarning;
