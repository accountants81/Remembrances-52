
export interface Supplication {
  id: string;
  categoryKey: string; // Key to link to a category
  arabicText: string;
  translation?: string; // Optional English translation
  repetition: string; // e.g., "مرة واحدة", "ثلاث مرات"
  targetCount: number;
  source?: string; // e.g., "رواه البخاري ومسلم"
  virtue?: string; // Pre-defined virtue, if any
}

export interface AdhkarCategory {
  id: string;
  title: string;
  supplications: Supplication[];
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
}

export interface LinkCategory {
  id: string;
  title: string;
  links: ExternalLink[];
}

export interface TasbihOption {
  id: string;
  text: string; // Arabic text of the Tasbih
}

export interface NavItem {
  id: string;
  label: string;
  href: string; // Usually an anchor link like #section-id
  icon?: React.ElementType;
}
