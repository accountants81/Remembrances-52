import SiteHeader from '@/components/layout/SiteHeader';
import { DesktopSideNav } from '@/components/layout/DesktopSideNav';
import Footer from '@/components/layout/Footer';
import WelcomeNotification from '@/components/sections/WelcomeNotification';
import SupplicationList from '@/components/adhkar/SupplicationList';
import DigitalTasbih from '@/components/tasbih/DigitalTasbih';
import DailyWisdom from '@/components/sections/DailyWisdom';
import SinsWarning from '@/components/sections/SinsWarning';
import IslamicResources from '@/components/sections/IslamicResources';
import ShareButtons from '@/components/core/ShareButtons';

import { adhkarCategories } from '@/data/adhkarData';

export default function Home() {
  const morningAdhkar = adhkarCategories.find(cat => cat.id === 'morning_adhkar');
  const eveningAdhkar = adhkarCategories.find(cat => cat.id === 'evening_adhkar');
  const travelDua = adhkarCategories.find(cat => cat.id === 'travel_dua');
  const istikharaDua = adhkarCategories.find(cat => cat.id === 'istikhara_dua');
  const patientDua = adhkarCategories.find(cat => cat.id === 'patient_dua');
  const deceasedDua = adhkarCategories.find(cat => cat.id === 'deceased_dua');
  
  // For "أدعية متنوعة" section, we can group them or list them.
  const rizqDua = adhkarCategories.find(cat => cat.id === 'various_dua_rizq');
  const hammDua = adhkarCategories.find(cat => cat.id === 'various_dua_hamm');
  const generalDua = adhkarCategories.find(cat => cat.id === 'various_dua_general');


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <div className="flex flex-1 container mx-auto">
        <main className="flex-1 py-6 px-0 md:px-4 lg:px-6">
          <WelcomeNotification />
          
          {morningAdhkar && <SupplicationList category={morningAdhkar} />}
          {eveningAdhkar && <SupplicationList category={eveningAdhkar} />}
          {travelDua && <SupplicationList category={travelDua} />}
          {istikharaDua && <SupplicationList category={istikharaDua} />}
          {patientDua && <SupplicationList category={patientDua} />}
          {deceasedDua && <SupplicationList category={deceasedDua} />}

          {/* Combined "Various Du'as" Section Title */}
          {(rizqDua || hammDua || generalDua) && (
            <section id="various-dua-section" className="py-8 scroll-mt-20">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary relative pb-2
                              after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 
                              after:w-24 after:h-1 after:bg-accent after:rounded-full">
                  أدعية متنوعة
                </h2>
              </div>
            </section>
          )}
          {/* Sub-sections for various duas */}
          {rizqDua && <SupplicationList category={rizqDua} />}
          {hammDua && <SupplicationList category={hammDua} />}
          {generalDua && <SupplicationList category={generalDua} />}
          {/* Add other various dua categories here as needed */}


          <DigitalTasbih />
          <DailyWisdom />
          <SinsWarning />
          <IslamicResources />
          <ShareButtons />
        </main>
        <DesktopSideNav />
      </div>
      <Footer />
    </div>
  );
}
