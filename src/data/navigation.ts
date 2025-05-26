import type { NavItem } from './types';
import { Sunrise, Sunset, HeartPulse, BedDouble, VenetianMask, BookOpen, Link, CalendarDays, MessageCircleQuestion, AlertTriangle, ListChecks } from 'lucide-react';

export const navItems: NavItem[] = [
  { id: 'welcome', label: 'مرحباً بكم', href: '#welcome-section' },
  { id: 'morning-adhkar', label: 'أذكار الصباح', href: '#morning-adhkar-section', icon: Sunrise },
  { id: 'evening-adhkar', label: 'أذكار المساء', href: '#evening-adhkar-section', icon: Sunset },
  { id: 'patient-dua', label: 'دعاء للمريض', href: '#patient-dua-section', icon: HeartPulse },
  { id: 'deceased-dua', label: 'دعاء للميت', href: '#deceased-dua-section', icon: BedDouble },
  { id: 'various-dua', label: 'أدعية متنوعة', href: '#various-dua-section', icon: ListChecks },
  { id: 'tasbih', label: 'السبحة الإلكترونية', href: '#tasbih-section', icon: VenetianMask }, // Using VenetianMask as a placeholder, consider a more fitting icon
  { id: 'daily-wisdom', label: 'فائدة اليوم', href: '#daily-wisdom-section', icon: CalendarDays },
  { id: 'sins-warning', label: 'محاذير شرعية', href: '#sins-warning-section', icon: AlertTriangle },
  { id: 'islamic-treasures', label: 'كنوز الإسلام', href: '#islamic-treasures-section', icon: BookOpen },
  { id: 'useful-links', label: 'روابط مفيدة', href: '#useful-links-section', icon: Link },
];
