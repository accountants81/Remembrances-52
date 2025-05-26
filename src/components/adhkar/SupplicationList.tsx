import type { AdhkarCategory } from '@/data/types';
import SupplicationCard from './SupplicationCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface SupplicationListProps {
  category: AdhkarCategory;
}

const SupplicationList: React.FC<SupplicationListProps> = ({ category }) => {
  return (
    <section id={`${category.id}-section`} className="py-8 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary relative pb-2
                       after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 
                       after:w-20 after:h-1 after:bg-accent after:rounded-full">
          {category.title}
        </h2>
        {category.supplications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6"> {/* Changed lg:grid-cols-2 to lg:grid-cols-1 to make cards full width on larger screens too as per common request */}
            {category.supplications.map(supplication => (
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
};

export default SupplicationList;
