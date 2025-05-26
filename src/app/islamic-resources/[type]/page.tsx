'use client';
import { useParams } from 'next/navigation';
import { linkCategories } from '@/data/linksData';
import type { LinkCategory as LinkCategoryType } from '@/data/types'; // Renamed to avoid conflict
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link as LinkIcon, BookOpen, ArrowRightCircle } from 'lucide-react'; // LinkIcon from lucide
import NextLink from 'next/link'; // Renamed to avoid conflict with lucide's Link

export default function IslamicResourcesPage() {
  const params = useParams();
  const resourceType = typeof params.type === 'string' ? params.type : '';

  let category: LinkCategoryType | undefined;
  if (resourceType === 'treasures') {
    category = linkCategories.find(cat => cat.id === 'islamic_treasures');
  } else if (resourceType === 'links') {
    category = linkCategories.find(cat => cat.id === 'useful_islamic_links');
  }

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
              <NextLink href="/">العودة إلى الرئيسية</NextLink>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
  
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
            <NextLink href="/" className="flex items-center gap-2">
              <ArrowRightCircle className="h-5 w-5" />
              العودة للرئيسية
            </NextLink>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.links.map(link => (
            <Card key={link.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col bg-card hover:border-primary/50">
              <CardHeader>
                <CardTitle className="text-xl text-accent flex items-center gap-2 rtl:gap-3">
                   {category.id === 'islamic_treasures' ? <BookOpen className="h-6 w-6"/> : <LinkIcon className="h-6 w-6"/>}
                   {link.text}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                {link.description && <p className="text-sm text-muted-foreground mb-4">{link.description}</p>}
              </CardContent>
              <div className="p-4 pt-0 mt-auto">
                <Button asChild variant="outline" className="w-full">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    زيارة الرابط
                    <LinkIcon className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
