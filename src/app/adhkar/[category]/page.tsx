'use client';

import { useParams } from 'next/navigation';
import SupplicationCard from '@/components/adhkar/SupplicationCard';
import { getSupplicationsByCategory, getCategoryById } from '@/data/adhkarData';
import type { Supplication, AdhkarCategory } from '@/data/types';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRightCircle, Info } from 'lucide-react'; // Using ArrowRightCircle for back button

export default function AdhkarCategoryPage() {
  const params = useParams();
  const categoryId = typeof params.category === 'string' ? params.category : '';
  
  const category: AdhkarCategory | undefined = getCategoryById(categoryId);
  const supplications: Supplication[] = getSupplicationsByCategory(categoryId);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <Card>
          <CardHeader>
            <CardTitle className="text-destructive">قسم غير موجود</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">عفواً، القسم الذي تبحث عنه غير موجود.</p>
            <Button asChild>
              <Link href="/">العودة إلى الرئيسية</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const generalAdvice = {
    deceased_dua: [
      "يُستحب قراءة القرآن (مثل سورة الفاتحة، الإخلاص، الفلق، الناس، آية الكرسي) وإهداء ثوابها للميت، والدعاء له بعدها."
    ],
    travel_dua: [
      "يُستحب الإكثار من التسبيح (سبحان الله)، التكبير (الله أكبر)، والتحميد (الحمد لله) أثناء السفر.",
      "قراءة آية الكرسي (البقرة: 255) وسورتي الفلق والناس عند النزول في مكان جديد.",
      "الصدقة قبل السفر تطرد البلاء وتجلب البركة."
    ]
  };
  
  const adviceForCategory = generalAdvice[categoryId as keyof typeof generalAdvice];


  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary relative pb-2
                       after:content-[''] after:absolute after:right-0 rtl:after:left-0 rtl:after:right-auto after:bottom-0 
                       after:w-24 after:h-1 after:bg-accent after:rounded-full">
            {category.title}
          </h1>
          <Button variant="outline" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowRightCircle className="h-5 w-5" />
              العودة للرئيسية
            </Link>
          </Button>
        </div>

        {adviceForCategory && adviceForCategory.length > 0 && (
          <Card className="mb-8 bg-accent/10 border-accent/30">
            <CardHeader>
              <CardTitle className="text-lg text-accent flex items-center gap-2">
                <Info className="h-5 w-5" />
                نصائح وإرشادات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
                {adviceForCategory.map((advice, index) => (
                  <li key={index}>{advice}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {supplications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supplications.map(supplication => (
              <SupplicationCard key={supplication.id} supplication={supplication} />
            ))}
          </div>
        ) : (
          <Card className="text-center">
            <CardHeader>
              <CardTitle>لا توجد أذكار</CardTitle>
            </CardHeader>
            <CardContent>
              <p>لا توجد أذكار متاحة في هذا القسم حاليًا.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
