
export interface Supplication {
  id: string;
  categoryKey: string; // Key to link to a category
  arabicText: string;
  translation?: string; // Optional English translation
  repetition: string; // e.g., "مرة واحدة", "ثلاث مرات"
  targetCount: number; // 0 if no counter needed (like for Quran verses)
  source?: string; // e.g., "رواه البخاري ومسلم"
  virtue?: string; // Pre-defined virtue, if any
  iconName?: string; // Optional: For specific icon per supplication
}

export interface AdhkarCategory {
  id: string;
  title: string;
  supplications: Supplication[];
  iconName?: string; // Lucide icon name for the category
  description?: string; // Optional description for the category page
}

export interface SinEntry {
  id: string;
  title: string;
  quranVerse?: string;
  quranSource?: string;
  hadith?: string;
  hadithSource?: string;
  explanation?: string; // If any additional simple explanation is needed
}

export interface DailyWisdomEntry {
  id: string;
  type: 'quran' | 'hadith' | 'saying';
  arabicText: string;
  source?: string;
  translation?: string;
}

export interface ExternalLink {
  id: string;
  text: string;
  url: string;
  description?: string;
  iconName?: string; // Lucide icon name
}

export interface LinkCategory {
  id: string;
  title: string;
  links: ExternalLink[];
  iconName?: string; // Lucide icon name for the category
}

export interface TasbihOption {
  id: string;
  text: string; // Arabic text of the Tasbih
}

export interface NavItem {
  id: string;
  label: string;
  href: string; 
  icon?: React.ElementType;
  isExternal?: boolean; // For external links in nav if any
}
