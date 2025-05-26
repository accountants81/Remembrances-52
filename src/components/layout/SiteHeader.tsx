import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Link from 'next/link';
import { navItems } from '@/data/navigation';
import type { NavItem } from '@/data/types';

interface SiteHeaderProps {
  // Props if any
}

const SiteHeader: React.FC<SiteHeaderProps> = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          {/* Optional: Add a simple SVG logo here if desired */}
          <span className="font-bold text-xl sm:text-2xl text-primary">نور الذكر</span> {/* Updated Site Name */}
        </Link>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">فتح القائمة</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[340px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 p-0">
            <SheetHeader className="p-6 border-b">
              <SheetTitle className="text-primary">القائمة</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-2 p-6">
              {navItems.map((item: NavItem) => (
                <Button key={item.id} variant="ghost" asChild className="justify-start text-lg">
                  <Link href={item.href} passHref>
                    {/* It seems SheetClose is not working as expected within Link or Button for closing after click.
                        Manual close or a different pattern might be needed if auto-close on nav is critical.
                        For now, users will manually close the sheet.
                     */}
                     <SheetTrigger> {/* Wrap link text in SheetTrigger to close on click */}
                       {item.icon && <item.icon className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />}
                       {item.label}
                     </SheetTrigger>
                  </Link>
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          {navItems.slice(0, 4).map((item: NavItem) => ( // Show a few items in header on desktop
             <Button key={item.id} variant="ghost" asChild>
                <Link href={item.href}>
                 {item.label}
                </Link>
             </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
