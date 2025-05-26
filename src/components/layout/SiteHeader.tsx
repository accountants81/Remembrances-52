'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Link from 'next/link';
import { navItems } from '@/data/navigation';
import type { NavItem } from '@/data/types';
import { usePathname } from 'next/navigation'; // Hook to close sheet on nav
import { useState } from 'react'; // Hook to manage sheet state

const SiteHeader: React.FC = () => {
  // const pathname = usePathname(); // No longer needed here, SheetTrigger handles close
  const [isSheetOpen, setIsSheetOpen] = useState(false);


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-bold text-xl sm:text-2xl text-primary">نَجَاتُكَ بِيَدِكَ</span>
        </Link>
        
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
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
            <nav className="flex flex-col space-y-1 p-4">
              {navItems.map((item: NavItem) => (
                <Button 
                  key={item.id} 
                  variant="ghost" 
                  asChild 
                  className="justify-start text-lg rtl:justify-end"
                  onClick={() => setIsSheetOpen(false)} // Close sheet on click
                >
                  <Link href={item.href} passHref>
                     {item.icon && <item.icon className="ml-2 h-5 w-5 rtl:mr-2 rtl:ml-0" />}
                     {item.label}
                  </Link>
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <nav className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
          {navItems.filter(item => ['home', 'morning-adhkar', 'evening-adhkar', 'tasbih'].includes(item.id)).map((item: NavItem) => (
             <Button key={item.id} variant="ghost" asChild size="sm">
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
