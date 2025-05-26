
'use client';

import Link from 'next/link';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { navItems } from '@/data/navigation';
import type { NavItem } from '@/data/types';
import { cn } from '@/lib/utils';

export function DesktopSideNav() {
  // Removed smooth scroll for faster navigation
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1); // remove #
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // targetElement.scrollIntoView({ behavior: 'smooth' }); // Removed smooth behavior
      targetElement.scrollIntoView();
    }
  };
  
  return (
    <aside className="hidden md:block sticky top-16 h-[calc(100vh-4rem)] w-64 border-l border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4">
      <ScrollArea className="h-full">
        <nav className="flex flex-col space-y-2">
          <h3 className="px-3 py-2 text-lg font-semibold text-primary">أقسام الموقع</h3>
          {navItems.map((item: NavItem) => (
            <Button
              key={item.id}
              variant="ghost"
              asChild
              className="w-full justify-start text-base hover:bg-accent/50 hover:text-accent-foreground"
            >
              <Link href={item.href} onClick={(e) => scrollToSection(e, item.href)}>
                {item.icon && <item.icon className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />}
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
}
