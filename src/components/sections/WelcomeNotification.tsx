import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Info } from "lucide-react";

const WelcomeNotification: React.FC = () => {
  return (
    <section id="welcome-section" className="py-6 bg-primary/10 scroll-mt-16">
      <div className="container mx-auto px-4">
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full max-w-3xl mx-auto">
          <AccordionItem value="item-1" className="border bg-card rounded-lg shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-primary hover:no-underline">
              <div className="flex items-center gap-2">
                <Info className="h-6 w-6 text-primary" />
                <span>إشعار الموقع (اضغط للتوسيع/التصغير)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-base text-foreground">
              <p className="mb-2">
                أهلاً وسهلاً بك في موقع <strong>نَجَاتُكَ بِيَدِكَ</strong>، وجهتك الروحانية اليومية لاستكشاف كنوز الأذكار والأدعية.
              </p>
              <p className="mb-2">
                نحن هنا لنرافقك في رحلتك نحو الطمأنينة والقرب من الله. تصفح أقسامنا المتنوعة بسهولة، واجعل ذكر الله رفيق دربك.
              </p>
              <p>
                استكشف، تعلم، وتذكر. نسأل الله أن يكون هذا العمل خالصاً لوجهه الكريم وأن ينفع به، وأن تجد فيه ما يعينك على الخير والتقوى.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default WelcomeNotification;
