
import type { LinkCategory } from './types';

export const linkCategories: LinkCategory[] = [
  {
    id: 'islamic_treasures',
    title: 'كنوز الإسلام',
    links: [
      { id: 'link_quran_app', text: 'القرآن الكريم (تطبيق)', url: '#', description: 'تطبيق شامل للقرآن الكريم' },
      { id: 'link_seerah_youtube', text: 'السيرة النبوية (يوتيوب)', url: '#', description: 'قناة يوتيوب عن السيرة النبوية' },
      { id: 'link_podcast_problem', text: 'مجموعة من البودكاست الدينية (إيه المشكلة)', url: '#', description: 'بودكاست ديني' },
      { id: 'link_quran_audio', text: 'صوتيات القران الكريم', url: '#', description: 'موقع للاستماع إلى القرآن الكريم' },
      { id: 'link_hijri_calendar', text: 'برنامج التقويم الهجري', url: '#', description: 'تطبيق أو موقع للتقويم الهجري' },
      { id: 'link_prayer_times', text: 'برنامج مواقيت الصلاة', url: '#', description: 'تطبيق أو موقع لمواقيت الصلاة' },
    ],
  },
  {
    id: 'useful_islamic_links',
    title: 'روابط إسلامية مفيدة',
    links: [
      // Swapped IslamQA and IslamWeb, and updated their texts
      { 
        id: 'link_islamqa', // Kept original ID for IslamQA content
        text: 'فتاوى إسلامية موثوقة (سؤال وجواب)', 
        url: 'https://islamqa.info/ar', 
        description: 'فتاوى وأسئلة وأجوبة إسلامية شاملة' 
      },
      { 
        id: 'link_alukah_tafsir', 
        text: 'تفسير القرآن الكريم (موقع آلوكة)', 
        url: 'https://www.alukah.net/library/0/76937/', 
        description: 'تفسير القرآن من موقع آلوكة' 
      },
      { 
        id: 'link_dorar_sunnah', 
        text: 'السنة النبوية الدرر السنية (أحاديث وأحكام)', 
        url: 'https://www.dorar.net/hadith', 
        description: 'موسوعة الحديث من الدرر السنية' 
      },
      { 
        id: 'link_encyclopedia_hadith', 
        text: 'موسوعة الحديث النبوي (بالإنجليزية والعربية)', 
        url: 'https://sunnah.com/', 
        description: 'موسوعة الحديث النبوي الشريف' 
      },
      { 
        id: 'link_islamweb_tafsir', // Kept original ID for IslamWeb content
        text: 'تفسير القرآن الشامل (إسلام ويب)', 
        url: 'https://islamweb.net/ar/library/index.php?page=bookcontents&id=51&bk_no=51&flag=1', 
        description: 'تفسير مفصل للقرآن الكريم من موقع إسلام ويب' 
      },
      { 
        id: 'link_ibn_baz', 
        text: 'موقع الشيخ ابن باز', 
        url: 'https://binbaz.org.sa/', 
        description: 'موقع الشيخ عبد العزيز بن باز رحمه الله' 
      },
      { 
        id: 'link_islamway', 
        text: 'طريق الإسلام (دروس ومحاضرات)', 
        url: 'https://ar.islamway.net/', 
        description: 'دروس ومحاضرات إسلامية' 
      },
    ],
  },
];
