
'use client';

import Link from 'next/link';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { navItems } from '@/data/navigation';
import type { NavItem } from '@/data/types';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function DesktopSideNav() {
  const pathname = usePathname();
  
  return (
    <aside className="hidden md:block sticky top-16 h-[calc(100vh-4rem)] w-64 border-l border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 rtl:border-r rtl:border-l-0">
      <ScrollArea className="h-full">
        <nav className="flex flex-col space-y-1">
          <h3 className="px-3 py-2 text-lg font-semibold text-primary">أقسام الموقع</h3>
          {navItems.map((item: NavItem) => (
            <Button
              key={item.id}
              variant="ghost"
              asChild
              className={cn(
                "w-full justify-start text-base hover:bg-accent hover:text-accent-foreground rtl:justify-end",
                pathname === item.href ? "bg-accent text-accent-foreground font-semibold" : "text-muted-foreground"
              )}
            >
              <Link href={item.href}>
                {item.icon && <item.icon className="ml-2 h-5 w-5 rtl:mr-2 rtl:ml-0" />}
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
}
