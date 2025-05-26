
import WelcomeNotification from '@/components/sections/WelcomeNotification';
import DailyWisdom from '@/components/sections/DailyWisdom';
import SinsWarning from '@/components/sections/SinsWarning';
import IslamicResources from '@/components/sections/IslamicResources';
import ShareButtons from '@/components/core/ShareButtons';
import DigitalTasbih from '@/components/tasbih/DigitalTasbih';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <>
      <WelcomeNotification />
      
      <section className="py-8 text-center">
        <div className="container mx-auto px-4">
          <Card className="bg-card border-primary/30 shadow-lg inline-block">
            <CardContent className="p-6">
              <p className="text-xl md:text-2xl font-semibold text-primary">
                ستجد كل الأقسام في الشريط الجانبي
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                تصفح أذكار الصباح والمساء، الأدعية، والمزيد عبر القائمة.
              </p>
            </CardContent>
          </Card>
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
