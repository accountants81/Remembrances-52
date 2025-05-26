import WelcomeNotification from '@/components/sections/WelcomeNotification';
import DailyWisdom from '@/components/sections/DailyWisdom';
import SinsWarning from '@/components/sections/SinsWarning';
import IslamicResources from '@/components/sections/IslamicResources';
import ShareButtons from '@/components/core/ShareButtons';
import DigitalTasbih from '@/components/tasbih/DigitalTasbih';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeftCircle } from 'lucide-react';

// Data for quick links, can be expanded
const quickLinks = [
  { href: '/adhkar/morning', title: 'أذكار الصباح', description: 'ابدأ يومك بذكر الله وطمأنينة القلب.' },
  { href: '/adhkar/evening', title: 'أذكار المساء', description: 'اختم يومك بالدعاء والسكينة.' },
  { href: '/adhkar/travel', title: 'دعاء السفر', description: 'حصن نفسك وأهلك في سفرك.' },
  { href: '/adhkar/istikhara', title: 'دعاء الاستخارة', description: 'استخر الله في أمورك كلها.' },
  { href: '/adhkar/patient', title: 'دعاء للمريض', description: 'ادعُ بالشفاء لمن تحب.' },
  { href: '/adhkar/deceased', title: 'دعاء للميت', description: 'ترحم على موتى المسلمين.' },
];

export default function Home() {
  return (
    <>
      <WelcomeNotification />
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary relative pb-2
                       after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 
                       after:w-24 after:h-1 after:bg-accent after:rounded-full">
            الأقسام الرئيسية
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link) => (
              <Card key={link.href} className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-card hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{link.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{link.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={link.href}>
                      عرض الأدعية
                      <ArrowLeftCircle className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <DigitalTasbih />
      <DailyWisdom />
      <SinsWarning />
      <IslamicResources />
      <ShareButtons />
    </>
  );
}
