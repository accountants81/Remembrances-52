import type { AdhkarCategory, Supplication, TasbihOption } from './types';

const morningAdhkarSupplications: Supplication[] = [
  {
    id: 'morning_ayatul_kursi',
    categoryKey: 'morning_adhkar',
    arabicText: "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    repetition: "مرة واحدة",
    targetCount: 1,
  },
  {
    id: 'morning_ikhlas',
    categoryKey: 'morning_adhkar',
    arabicText: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
    repetition: "ثلاث مرات",
    targetCount: 3,
  },
  {
    id: 'morning_falaq',
    categoryKey: 'morning_adhkar',
    arabicText: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.",
    repetition: "ثلاث مرات",
    targetCount: 3,
  },
  {
    id: 'morning_nas',
    categoryKey: 'morning_adhkar',
    arabicText: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ.",
    repetition: "ثلاث مرات",
    targetCount: 3,
  },
  {
    id: 'morning_asbahna_mulk',
    categoryKey: 'morning_adhkar',
    arabicText: "أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر",
    repetition: "مرة واحدة",
    targetCount: 1,
  },
  // Add more morning Adhkar here...
];

const eveningAdhkarSupplications: Supplication[] = [
  {
    id: 'evening_ayatul_kursi',
    categoryKey: 'evening_adhkar',
    arabicText: "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    repetition: "مرة واحدة",
    targetCount: 1,
  },
  {
    id: 'evening_amanarrasool',
    categoryKey: 'evening_adhkar',
    arabicText: "آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَّسِينَآ أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    repetition: "مرة واحدة",
    targetCount: 1,
  },
  // Add more evening Adhkar here...
];

const patientDuaSupplications: Supplication[] = [
  {
    id: 'patient_adhhibil_bas',
    categoryKey: 'patient_dua',
    arabicText: "اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَأْسَ، اشْفِهِ وَأَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا",
    repetition: "مرة واحدة",
    targetCount: 1,
  },
  // Add more patient Du'as here...
];

const deceasedDuaSupplications: Supplication[] = [
  {
    id: 'deceased_ighfir_lahu',
    categoryKey: 'deceased_dua',
    arabicText: "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ، وَعَافِهِ وَاعْفُ عَنْهُ، وَأَكْرِمْ نُزُلَهُ، وَوَسِّعْ مُدْخَلَهُ، وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ، وَنَقِّهِ مِنَ الْخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ",
    repetition: "مرة واحدة",
    targetCount: 1,
  },
  // Add more deceased Du'as here...
];

const variousDuaSupplications: Supplication[] = [
  {
    id: 'various_rizq_ilman_nafian',
    categoryKey: 'various_dua_rizq',
    arabicText: "اللهم إني أسألك علماً نافعاً، ورزقاً طيباً، وعملاً متقبلاً",
    repetition: "دعاء مأثور",
    targetCount: 1,
    source: "دعاء مأثور"
  },
  {
    id: 'various_hamm_la_ilaha_illa_allah_aladheem',
    categoryKey: 'various_dua_hamm',
    arabicText: "لا إله إلا الله العظيم الحليم، لا إله إلا الله رب العرش العظيم، لا إله إلا الله رب السماوات ورب الأرض ورب العرش الكريم",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "رواه البخاري ومسلم"
  },
  // Add more various Du'as here...
];


export const adhkarCategories: AdhkarCategory[] = [
  { id: 'morning_adhkar', title: 'أذكار الصباح', supplications: morningAdhkarSupplications },
  { id: 'evening_adhkar', title: 'أذكار المساء', supplications: eveningAdhkarSupplications },
  { id: 'patient_dua', title: 'دعاء للمريض', supplications: patientDuaSupplications },
  { id: 'deceased_dua', title: 'دعاء للميت', supplications: deceasedDuaSupplications },
  { id: 'various_dua_rizq', title: 'أدعية الرزق والغنى', supplications: variousDuaSupplications.filter(s => s.categoryKey === 'various_dua_rizq') },
  { id: 'various_dua_hamm', title: 'أدعية الهم والكرب', supplications: variousDuaSupplications.filter(s => s.categoryKey === 'various_dua_hamm') },
  // Define other categories like travel, waking up, entering/leaving home if data is added
];

export const allSupplications: Supplication[] = [
  ...morningAdhkarSupplications,
  ...eveningAdhkarSupplications,
  ...patientDuaSupplications,
  ...deceasedDuaSupplications,
  ...variousDuaSupplications,
];

export const tasbihOptions: TasbihOption[] = [
  { id: 'subhanallah', text: 'سبحان الله' },
  { id: 'alhamdulillah', text: 'الحمد لله' },
  { id: 'allahuakbar', text: 'الله أكبر' },
  { id: 'lailahaillallah', text: 'لا إله إلا الله' },
  { id: 'astaghfirullah', text: 'أستغفر الله' },
  { id: 'lahawla', text: 'لا حول ولا قوة إلا بالله' },
];
