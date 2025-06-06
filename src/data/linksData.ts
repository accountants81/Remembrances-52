
import type { LinkCategory } from './types';

export const linkCategories: LinkCategory[] = [
  {
    id: 'islamic_treasures',
    title: 'كنوز الإسلام',
    links: [
      { 
        id: 'link_quran_app_golden', 
        text: 'القرآن الكريم (تطبيق)', 
        url: 'https://play.google.com/store/apps/details?id=org.goldenquran.freesoft', 
        description: 'تطبيق شامل للقرآن الكريم (مصحف ذهبي)' 
      },
      { 
        id: 'link_seerah_youtube_playlist', 
        text: 'السيرة النبوية (يوتيوب)', 
        url: 'https://youtube.com/playlist?list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&si=IjvcVXmiuOHa4Hep', 
        description: 'قائمة تشغيل عن السيرة النبوية' 
      },
      { 
        id: 'link_podcast_eh_el_moshkla', 
        text: 'مجموعة من البودكاست الدينية (إيه المشكلة)', 
        url: 'https://youtube.com/@eh_el_moshkla?si=KSDeIg_Q32waEcFi', 
        description: 'بودكاست ديني متنوع' 
      },
      { 
        id: 'link_mp3_quran_bot',
        text: 'القرآن الكريم بأصوات متعددة (بوت تيليجرام)',
        url: 'https://t.me/AAAMO2_bot?start=33989d3de6fcecfeed109956ffdf83d4',
        description: 'بوت تيليجرام للاستماع للقرآن الكريم بأصوات مختلفة'
      },
      { 
        id: 'link_hijri_calendar_app', 
        text: 'التقويم الهجري (تطبيق)', 
        url: 'https://play.google.com/store/apps/details?id=com.ibrahim.hijricalendar', 
        description: 'تطبيق للتقويم الهجري' 
      },
      { 
        id: 'link_prayer_times_app_belal', 
        text: 'مواقيت الصلاة (تطبيق بلال)', 
        url: 'https://play.google.com/store/apps/details?id=com.arabiait.belal', 
        description: 'تطبيق لمعرفة مواقيت الصلاة' 
      },
    ],
  },
  {
    id: 'useful_islamic_links',
    title: 'روابط إسلامية مفيدة',
    links: [
      { 
        id: 'link_islamweb_tafsir',
        text: 'تفسير القرآن الشامل (إسلام ويب)', 
        url: 'https://islamweb.net/ar/library/index.php?page=bookcontents&id=51&bk_no=51&flag=1', 
        description: 'تفسير مفصل للقرآن الكريم من موقع إسلام ويب' 
      },
      { 
        id: 'link_islamqa', 
        text: 'فتاوى إسلامية موثوقة (سؤال وجواب)', 
        url: 'https://islamqa.info/ar', 
        description: 'فتاوى وأسئلة وأجوبة إسلامية شاملة' 
      },
      { 
        id: 'link_dorar_sunnah', 
        text: 'السنة النبوية الدرر السنية (أحاديث وأحكام)', 
        url: 'https://www.dorar.net/hadith', 
        description: 'موسوعة الحديث من الدرر السنية' 
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
      {
        id: 'link_telegram_aaamo2_group',
        text: 'مجموعة تيليجرام إسلامية',
        url: 'https://t.me/AAAMO2_bot',
        description: 'مجموعة تيليجرام لمحتوى إسلامي متنوع'
      }
    ],
  },
];
