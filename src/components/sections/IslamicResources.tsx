
import { linkCategories } from '@/data/linksData';
import type { LinkCategory, ExternalLink } from '@/data/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link as LinkIcon, BookOpen } from 'lucide-react';

const IslamicResources: React.FC = () => {
  return (
    <>
      {linkCategories.map(category => (
        <section key={category.id} id={`${category.id}-section`} className="py-8 scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2 className="main-section-title">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.links.map(link => (
                <Card key={link.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col bg-card hover:border-primary/50">
                  <CardHeader>
                    <CardTitle className="text-xl text-accent flex items-center gap-2">
                       {category.id === 'islamic_treasures' ? <BookOpen className="h-6 w-6"/> : <LinkIcon className="h-6 w-6"/>}
                       {link.text}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    {link.description && <p className="text-sm text-muted-foreground mb-4">{link.description}</p>}
                  </CardContent>
                  <div className="p-4 pt-0">
                    <Button asChild variant="outline" className="w-full">
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        زيارة الرابط
                        <LinkIcon className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default IslamicResources;
