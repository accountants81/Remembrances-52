
import type { NavItem } from './types';
import { Sunrise, Sunset, HeartPulse, BedDouble, VenetianMask, BookOpen, Link as LinkIconLucide, CalendarDays, AlertTriangle, Plane, SearchCheck, Home } from 'lucide-react';

export const navItems: NavItem[] = [
  { id: 'home', label: 'الرئيسية', href: '/', icon: Home },
  { id: 'morning-adhkar', label: 'أذكار الصباح', href: '/adhkar/morning_adhkar', icon: Sunrise },
  { id: 'evening-adhkar', label: 'أذكار المساء', href: '/adhkar/evening_adhkar', icon: Sunset },
  { id: 'travel-dua', label: 'دعاء السفر', href: '/adhkar/travel_dua', icon: Plane },
  { id: 'istikhara-dua', label: 'دعاء الاستخارة', href: '/adhkar/istikhara_dua', icon: SearchCheck },
  { id: 'patient-dua', label: 'دعاء للمريض', href: '/adhkar/patient_dua', icon: HeartPulse },
  { id: 'deceased-dua', label: 'دعاء للميت', href: '/adhkar/deceased_dua', icon: BedDouble },
  { id: 'tasbih', label: 'السبحة الإلكترونية', href: '/tasbih', icon: VenetianMask },
  { id: 'daily-wisdom', label: 'فائدة اليوم', href: '/daily-wisdom', icon: CalendarDays },
  { id: 'sins-warning', label: 'محاذير شرعية', href: '/sins-warning', icon: AlertTriangle },
  { id: 'islamic-treasures', label: 'كنوز الإسلام', href: '/islamic-resources/treasures', icon: BookOpen },
  { id: 'useful-links', label: 'روابط مفيدة', href: '/islamic-resources/links', icon: LinkIconLucide },
];
