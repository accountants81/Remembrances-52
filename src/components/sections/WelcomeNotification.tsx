import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Info } from "lucide-react";

const WelcomeNotification: React.FC = () => {
  return (
    <section id="welcome-section" className="py-6 bg-primary/10 scroll-mt-16">
      <div className="container mx-auto px-4">
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          <AccordionItem value="item-1" className="border bg-card rounded-lg shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-primary hover:no-underline">
              <div className="flex items-center gap-2">
                <Info className="h-6 w-6 text-primary" />
                <span>إشعار الموقع (اضغط للتوسيع/التصغير)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-base text-foreground">
              <p className="mb-2">
                مرحباً بكم في <strong>نَجَاتُكَ بِيَدِكَ</strong>، بوابتكم اليومية للأذكار والأدعية والفوائد الإسلامية.
              </p>
              <p className="mb-2">
                يمكنكم تصفح الأذكار والأدعية حسب الأقسام المختلفة. اضغط على أي قسم في القائمة للانتقال إليه مباشرة.
              </p>
              <p>
                نسأل الله أن ينفع بهذا العمل ويجعله خالصاً لوجهه الكريم.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default WelcomeNotification;
