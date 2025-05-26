
import type { AdhkarCategory, Supplication, TasbihOption } from './types';

const morningAdhkarSupplications: Supplication[] = [
  {
    id: 'morning_ayatul_kursi',
    categoryKey: 'morning_adhkar',
    arabicText: "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "القرآن الكريم - سورة البقرة، الآية 255"
  },
  {
    id: 'morning_ikhlas',
    categoryKey: 'morning_adhkar',
    arabicText: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
    repetition: "ثلاث مرات",
    targetCount: 3,
    source: "القرآن الكريم - سورة الإخلاص"
  },
  {
    id: 'morning_falaq',
    categoryKey: 'morning_adhkar',
    arabicText: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.",
    repetition: "ثلاث مرات",
    targetCount: 3,
    source: "القرآن الكريم - سورة الفلق"
  },
  {
    id: 'morning_nas',
    categoryKey: 'morning_adhkar',
    arabicText: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ.",
    repetition: "ثلاث مرات",
    targetCount: 3,
    source: "القرآن الكريم - سورة الناس"
  },
  {
    id: 'morning_asbahna_mulk',
    categoryKey: 'morning_adhkar',
    arabicText: "أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "صحيح مسلم"
  },
  {
    id: 'morning_sayyidul_istighfar',
    categoryKey: 'morning_adhkar',
    arabicText: "اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لا يَغْفِرُ الذُّنُوبَ إِلا أَنْتَ.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "صحيح البخاري"
  }
];

const eveningAdhkarSupplications: Supplication[] = [
  {
    id: 'evening_ayatul_kursi',
    categoryKey: 'evening_adhkar',
    arabicText: "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "القرآن الكريم - سورة البقرة، الآية 255"
  },
  {
    id: 'evening_amanarrasool',
    categoryKey: 'evening_adhkar',
    arabicText: "آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَّسِينَآ أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "القرآن الكريم - سورة البقرة، الآيات 285-286"
  },
  {
    id: 'evening_ikhlas_falaq_nas',
    categoryKey: 'evening_adhkar',
    arabicText: "قُلْ هُوَ ٱللَّهُ أَحَدٌ... (الإخلاص) / قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ... (الفلق) / قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ... (الناس)",
    repetition: "ثلاث مرات لكل سورة",
    targetCount: 3, // User repeats each of the three surahs
    source: "القرآن الكريم - الإخلاص، الفلق، الناس"
  },
];

const patientDuaSupplications: Supplication[] = [
  {
    id: 'patient_adhhibil_bas',
    categoryKey: 'patient_dua',
    arabicText: "اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَأْسَ، اشْفِهِ وَأَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا",
    repetition: "سبع مرات",
    targetCount: 7,
    source: "صحيح البخاري"
  },
  {
    id: 'patient_bismillah_turbatu_ardina',
    categoryKey: 'patient_dua',
    arabicText: "بِسْمِ اللهِ، تُرْبَةُ أَرْضِنَا، بِرِيقَةِ بَعْضِنَا، يُشْفَى سَقِيمُنَا، بِإِذْنِ رَبِّنَا",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "متفق عليه"
  }
];

const deceasedDuaSupplications: Supplication[] = [
  {
    id: 'deceased_ighfir_lahu',
    categoryKey: 'deceased_dua',
    arabicText: "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ، وَعَافِهِ وَاعْفُ عَنْهُ، وَأَكْرِمْ نُزُلَهُ، وَوَسِّعْ مُدْخَلَهُ، وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ، وَنَقِّهِ مِنَ الْخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ، وَأَبْدِلْهُ دَارًا خَيْرًا مِنْ دَارِهِ، وَأَهْلًا خَيْرًا مِنْ أَهْلِهِ، وَزَوْجًا خَيْرًا مِنْ زَوْجِهِ، وَأَدْخِلْهُ الْجَنَّةَ، وَأَعِذْهُ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابِ النَّارِ",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "صحيح مسلم"
  },
];

const travelDuaSupplications: Supplication[] = [
  {
    id: 'travel_subhanalladhi',
    categoryKey: 'travel_dua',
    arabicText: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ. اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى، اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ، اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ، وَالْخَلِيفَةُ فِي الْأَهْلِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ، وَكَآبَةِ الْمَنْظَرِ، وَسُوءِ الْمُنْقَلَبِ فِي الْمَالِ وَالْأَهْلِ",
    repetition: "مرة واحدة عند بدء السفر",
    targetCount: 1,
    source: "صحيح مسلم"
  },
  {
    id: 'travel_return',
    categoryKey: 'travel_dua',
    arabicText: "آيِبُونَ، تائِبُونَ، عابِدُونَ، لِرَبِّنا حامِدُونَ",
    repetition: "عند العودة من السفر",
    targetCount: 1,
    source: "صحيح مسلم"
  }
];

const istikharaDuaSupplications: Supplication[] = [
  {
    id: 'istikhara_main',
    categoryKey: 'istikhara_dua',
    arabicText: "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلا أَقْدِرُ، وَتَعْلَمُ وَلا أَعْلَمُ، وَأَنْتَ عَلامُ الْغُيُوبِ. اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ - وَيُسَمِّي حَاجَتَهُ - خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي، فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي، ثُمَّ بَارِكْ لِي فِيهِ. وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي، فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ، وَاقْدُرْ لِي الْخَيْرَ حَيْثُ كَانَ، ثُمَّ أَرْضِنِي بِهِ.",
    repetition: "مرة واحدة عند الحاجة للاستخارة",
    targetCount: 1,
    source: "صحيح البخاري"
  }
];

const variousDuaSupplications: Supplication[] = [
  {
    id: 'various_rizq_ilman_nafian',
    categoryKey: 'various_dua_rizq',
    arabicText: "اللهم إني أسألك علماً نافعاً، ورزقاً طيباً، وعملاً متقبلاً",
    repetition: "دعاء مأثور",
    targetCount: 1,
    source: "ابن ماجه، وأحمد"
  },
  {
    id: 'various_hamm_la_ilaha_illa_allah_aladheem',
    categoryKey: 'various_dua_hamm',
    arabicText: "لا إله إلا الله العظيم الحليم، لا إله إلا الله رب العرش العظيم، لا إله إلا الله رب السماوات ورب الأرض ورب العرش الكريم",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "رواه البخاري ومسلم"
  },
  {
    id: 'various_istighfar_general',
    categoryKey: 'various_dua_general',
    arabicText: "أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ",
    repetition: "حسب الرغبة",
    targetCount: 1, 
    source: "أبو داود والترمذي"
  },
  {
    id: 'various_dua_protection_comprehensive',
    categoryKey: 'various_dua_general',
    arabicText: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ.",
    repetition: "مرة واحدة أو أكثر",
    targetCount: 1,
    source: "صحيح البخاري"
  },
  {
    id: 'various_dua_rabbana_atina',
    categoryKey: 'various_dua_general',
    arabicText: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.",
    repetition: "مرة واحدة أو أكثر",
    targetCount: 1,
    source: "القرآن الكريم - سورة البقرة، الآية 201"
  },
];


export const adhkarCategories: AdhkarCategory[] = [
  { id: 'morning_adhkar', title: 'أذكار الصباح', supplications: morningAdhkarSupplications },
  { id: 'evening_adhkar', title: 'أذكار المساء', supplications: eveningAdhkarSupplications },
  { id: 'travel_dua', title: 'دعاء السفر', supplications: travelDuaSupplications },
  { id: 'istikhara_dua', title: 'دعاء الاستخارة', supplications: istikharaDuaSupplications },
  { id: 'patient_dua', title: 'دعاء للمريض', supplications: patientDuaSupplications },
  { id: 'deceased_dua', title: 'دعاء للميت', supplications: deceasedDuaSupplications },
  { id: 'various_dua_rizq', title: 'أدعية الرزق والغنى', supplications: variousDuaSupplications.filter(s => s.categoryKey === 'various_dua_rizq') },
  { id: 'various_dua_hamm', title: 'أدعية الهم والكرب', supplications: variousDuaSupplications.filter(s => s.categoryKey === 'various_dua_hamm') },
  { id: 'various_dua_general', title: 'أدعية عامة واستغفار', supplications: variousDuaSupplications.filter(s => s.categoryKey === 'various_dua_general') },
];

export const allSupplications: Supplication[] = [
  ...morningAdhkarSupplications,
  ...eveningAdhkarSupplications,
  ...patientDuaSupplications,
  ...deceasedDuaSupplications,
  ...travelDuaSupplications,
  ...istikharaDuaSupplications,
  ...variousDuaSupplications,
];

export const tasbihOptions: TasbihOption[] = [
  { id: 'subhanallah', text: 'سبحان الله' },
  { id: 'alhamdulillah', text: 'الحمد لله' },
  { id: 'allahuakbar', text: 'الله أكبر' },
  { id: 'lailahaillallah', text: 'لا إله إلا الله' },
  { id: 'astaghfirullah', text: 'أستغفر الله' },
  { id: 'lahawla', text: 'لا حول ولا قوة إلا بالله' },
  { id: 'salawat', text: 'اللهم صل على محمد وعلى آل محمد' },
];
