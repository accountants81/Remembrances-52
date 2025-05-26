
import type { AdhkarCategory, Supplication, TasbihOption } from './types';

const morningAdhkarSupplications: Supplication[] = [
  {
    id: 'morning_asbahna_wa_asbahal_mulk',
    categoryKey: 'morning_adhkar',
    arabicText: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "صحيح مسلم"
  },
  {
    id: 'morning_yahayyu_yaqayyum',
    categoryKey: 'morning_adhkar',
    arabicText: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "صحيح الترغيب والترهيب"
  },
  {
    id: 'morning_sayyidul_istighfar',
    categoryKey: 'morning_adhkar',
    arabicText: "اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "صحيح البخاري"
  },
  {
    id: 'morning_bika_asbahna',
    categoryKey: 'morning_adhkar',
    arabicText: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "سنن الترمذي"
  },
  {
    id: 'morning_la_ilaha_illallah_100',
    categoryKey: 'morning_adhkar',
    arabicText: "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
    repetition: "100 مرة",
    targetCount: 100,
    source: "متفق عليه"
  },
  {
    id: 'morning_askuka_alafiyah',
    categoryKey: 'morning_adhkar',
    arabicText: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "صحيح ابن ماجه"
  },
  {
    id: 'morning_aalim_alghayb',
    categoryKey: 'morning_adhkar',
    arabicText: "اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "صحيح الترمذي"
  },
  {
    id: 'morning_aafini_badani',
    categoryKey: 'morning_adhkar',
    arabicText: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ.",
    repetition: "3 مرات",
    targetCount: 3,
    source: "سنن أبي داود"
  },
  {
    id: 'morning_bismillah_alladhi_la_yadurr',
    categoryKey: 'morning_adhkar',
    arabicText: "بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
    repetition: "3 مرات",
    targetCount: 3,
    source: "سنن الترمذي"
  },
  {
    id: 'morning_subhanallah_alhamdulillah_allahuakbar_100',
    categoryKey: 'morning_adhkar',
    arabicText: "سُبْحَانَ اللَّهِ، الْحَمْدُ لِلَّهِ، اللَّهُ أَكْبَرُ.",
    repetition: "100 مرة لكل ذكر",
    targetCount: 100, // This implies counting each part separately, or 300 total. For simplicity, keeping it as a single entry counted 100 times.
    source: "أذكار الصباح"
  },
  {
    id: 'morning_ayatul_kursi',
    categoryKey: 'morning_adhkar',
    arabicText: "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "القرآن الكريم - سورة البقرة، الآية 255"
  },
  {
    id: 'morning_ikhlas',
    categoryKey: 'morning_adhkar',
    arabicText: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ.",
    repetition: "3 مرات",
    targetCount: 3,
    source: "القرآن الكريم - سورة الإخلاص"
  },
  {
    id: 'morning_falaq',
    categoryKey: 'morning_adhkar',
    arabicText: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.",
    repetition: "3 مرات",
    targetCount: 3,
    source: "القرآن الكريم - سورة الفلق"
  },
  {
    id: 'morning_nas',
    categoryKey: 'morning_adhkar',
    arabicText: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ.",
    repetition: "3 مرات",
    targetCount: 3,
    source: "القرآن الكريم - سورة الناس"
  },
  {
    id: 'morning_raditu_billahi_rabban',
    categoryKey: 'morning_adhkar',
    arabicText: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلاَمِ دِينًا، وَبِمُحَمَّدٍ صلى الله عليه وسلم نَبِيًّا.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "سنن أبي داود"
  },
  {
    id: 'morning_asbahna_ala_fitratil_islam',
    categoryKey: 'morning_adhkar',
    arabicText: "أَصْبَحْنَا عَلَى فِطْرَةِ الإِسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صلى الله عليه وسلم، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "مسند أحمد"
  },
  {
    id: 'morning_subhanallah_bihamdihi_adada_khalqihi',
    categoryKey: 'morning_adhkar',
    arabicText: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "صحيح مسلم"
  },
  {
    id: 'morning_astaghfirullah_100',
    categoryKey: 'morning_adhkar',
    arabicText: "أَسْتَغْفِرُ اللَّهَ.",
    repetition: "100 مرة",
    targetCount: 100,
    source: "صحيح البخاري"
  }
];

const eveningAdhkarSupplications: Supplication[] = [
  {
    id: 'evening_amsaina_wa_amsal_mulk',
    categoryKey: 'evening_adhkar',
    arabicText: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "صحيح مسلم"
  },
  {
    id: 'evening_yahayyu_yaqayyum',
    categoryKey: 'evening_adhkar',
    arabicText: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "صحيح الترغيب والترهيب"
  },
  {
    id: 'evening_sayyidul_istighfar',
    categoryKey: 'evening_adhkar',
    arabicText: "اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "صحيح البخاري"
  },
  {
    id: 'evening_bika_amsaina',
    categoryKey: 'evening_adhkar',
    arabicText: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "سنن الترمذي"
  },
  {
    id: 'evening_la_ilaha_illallah_100',
    categoryKey: 'evening_adhkar',
    arabicText: "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
    repetition: "100 مرة",
    targetCount: 100,
    source: "متفق عليه"
  },
  {
    id: 'evening_askuka_alafiyah',
    categoryKey: 'evening_adhkar',
    arabicText: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "صحيح ابن ماجه"
  },
  {
    id: 'evening_aalim_alghayb',
    categoryKey: 'evening_adhkar',
    arabicText: "اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "صحيح الترمذي"
  },
  {
    id: 'evening_aafini_badani',
    categoryKey: 'evening_adhkar',
    arabicText: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ.",
    repetition: "3 مرات",
    targetCount: 3,
    source: "سنن أبي داود"
  },
  {
    id: 'evening_bismillah_alladhi_la_yadurr',
    categoryKey: 'evening_adhkar',
    arabicText: "بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
    repetition: "3 مرات",
    targetCount: 3,
    source: "سنن الترمذي"
  },
  {
    id: 'evening_subhanallah_alhamdulillah_allahuakbar_100',
    categoryKey: 'evening_adhkar',
    arabicText: "سُبْحَانَ اللَّهِ، الْحَمْدُ لِلَّهِ، اللَّهُ أَكْبَرُ.",
    repetition: "100 مرة لكل ذكر",
    targetCount: 100,
    source: "أذكار المساء"
  },
  {
    id: 'evening_ayatul_kursi',
    categoryKey: 'evening_adhkar',
    arabicText: "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "القرآن الكريم - سورة البقرة، الآية 255 (من قرأها حين يمسي أجير من الجن حتى يصبح)"
  },
  {
    id: 'evening_ikhlas',
    categoryKey: 'evening_adhkar',
    arabicText: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ.",
    repetition: "3 مرات",
    targetCount: 3,
    source: "القرآن الكريم - سورة الإخلاص (من قرأهن حين يمسي وحين يصبح كفته من كل شيء)"
  },
  {
    id: 'evening_falaq',
    categoryKey: 'evening_adhkar',
    arabicText: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.",
    repetition: "3 مرات",
    targetCount: 3,
    source: "القرآن الكريم - سورة الفلق (من قرأهن حين يمسي وحين يصبح كفته من كل شيء)"
  },
  {
    id: 'evening_nas',
    categoryKey: 'evening_adhkar',
    arabicText: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ.",
    repetition: "3 مرات",
    targetCount: 3,
    source: "القرآن الكريم - سورة الناس (من قرأهن حين يمسي وحين يصبح كفته من كل شيء)"
  },
  {
    id: 'evening_audhu_bikalimatillah',
    categoryKey: 'evening_adhkar',
    arabicText: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",
    repetition: "3 مرات",
    targetCount: 3,
    source: "صحيح مسلم"
  },
  {
    id: 'evening_amanarrasool',
    categoryKey: 'evening_adhkar',
    arabicText: "آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُsعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَّسِينَآ أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "القرآن الكريم - سورة البقرة، الآيات 285-286 (من قرأهما في ليلة كفتاه)"
  }
];

const patientDuaSupplications: Supplication[] = [
  {
    id: 'patient_adhhibil_bas_shifa',
    categoryKey: 'patient_dua',
    arabicText: "أَذْهِبِ البَاسَ، رَبَّ النَّاسِ، اشْفِ وَأَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا.",
    repetition: "مرة واحدة أو أكثر",
    targetCount: 1,
    source: "متفق عليه"
  },
  {
    id: 'patient_ruqyah_sharعية',
    categoryKey: 'patient_dua',
    arabicText: "بِسْمِ اللهِ أَرْقِيكَ، مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ، مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ، اللهُ يَشْفِيكَ.",
    repetition: "مرة واحدة أو أكثر",
    targetCount: 1,
    source: "رواه مسلم"
  },
  {
    id: 'patient_visit_dua',
    categoryKey: 'patient_dua',
    arabicText: "لَا بَأْسَ، طَهُورٌ إِنْ شَاءَ اللهُ.",
    repetition: "عند زيارة المريض",
    targetCount: 1,
    source: "رواه البخاري"
  },
  {
    id: 'patient_allahumma_rabba_nas_mudhhibal_bas',
    categoryKey: 'patient_dua',
    arabicText: "اللَّهُمَّ رَبَّ النَّاسِ، مُذْهِبَ الْبَاسِ، اشْفِهِ وَأَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ.",
    repetition: "مرة واحدة أو أكثر",
    targetCount: 1,
    source: "رواه البخاري ومسلم"
  },
  {
    id: 'patient_protection_from_disease',
    categoryKey: 'patient_dua',
    arabicText: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبَرَصِ، وَالْجُنُونِ، وَالْجُذَامِ، وَمِنْ سَيِّئِ الْأَسْقَامِ.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "رواه أبو داود وصححه الألباني"
  },
  {
    id: 'patient_hand_on_forehead_dua',
    categoryKey: 'patient_dua',
    arabicText: "اللَّهُمَّ اشْفِ عَبْدَكَ، يَنْكَأُ لَكَ عَدُوًّا، أَوْ يَمْشِي لَكَ إِلَى صَلَاةٍ.",
    repetition: "عند وضع اليد",
    targetCount: 1,
    source: "رواه أبو داود وحسنه الألباني"
  },
  {
    id: 'patient_quran_ayat_shifa_1',
    categoryKey: 'patient_dua',
    arabicText: "وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ",
    repetition: "قراءة مع التدبر",
    targetCount: 0, // No counter needed
    source: "سورة الشعراء: 80"
  },
  {
    id: 'patient_quran_ayat_shifa_2',
    categoryKey: 'patient_dua',
    arabicText: "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ",
    repetition: "قراءة مع التدبر",
    targetCount: 0, // No counter needed
    source: "سورة الإسراء: 82"
  },
  {
    id: 'patient_general_shifa_dua',
    categoryKey: 'patient_dua',
    arabicText: "اللَّهُمَّ اشْفِهِ شِفَاءً لَا يُغَادِرُ سَقَمًا، وَعَافِهِ عَافِيَةً لَا تُنْزِعُ صِحَّةً، وَارْزُقْهُ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ.",
    repetition: "مرة واحدة أو أكثر",
    targetCount: 1,
    source: "دعاء عام"
  }
];

const deceasedDuaSupplications: Supplication[] = [
  {
    id: 'deceased_hearing_news_dua',
    categoryKey: 'deceased_dua',
    arabicText: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي، وَاخْلُفْ لِي خَيْرًا مِنْهَا.",
    repetition: "عند سماع خبر الوفاة",
    targetCount: 1,
    source: "رواه مسلم"
  },
  {
    id: 'deceased_after_burial_dua',
    categoryKey: 'deceased_dua',
    arabicText: "اللَّهُمَّ اغْفِرْ لَهُ، وَارْفَعْ دَرَجَتَهُ فِي الْمَهْدِيِّينَ، وَاخْلُفْهُ فِي عَقِبِهِ فِي الْغَابِرِينَ، وَاغْفِرْ لَنَا وَلَهُ يَا رَبَّ الْعَالَمِينَ.",
    repetition: "بعد الدفن",
    targetCount: 1,
    source: "رواه مسلم"
  },
  {
    id: 'deceased_prayer_dua',
    categoryKey: 'deceased_dua',
    arabicText: "اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا، وَشَاهِدِنَا وَغَائِبِنَا، وَصَغِيرِنَا وَكَبِيرِنَا، وَذَكَرِنَا وَأُنْثَانَا.",
    repetition: "في الصلاة على الميت",
    targetCount: 1,
    source: "رواه أبو داود"
  },
  {
    id: 'deceased_visiting_graves_dua',
    categoryKey: 'deceased_dua',
    arabicText: "السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ، وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَلَاحِقُونَ، اللَّهُمَّ اغْفِرْ لِأَهْلِ بَقِيعِ الْغَرْقَدِ.",
    repetition: "عند زيارة القبور",
    targetCount: 1,
    source: "رواه مسلم"
  },
  {
    id: 'deceased_general_dua_for_deceased',
    categoryKey: 'deceased_dua',
    arabicText: "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ، وَعَافِهِ وَاعْفُ عَنْهُ، وَأَكْرِمْ نُزُلَهُ، وَوَسِّعْ مُدْخَلَهُ، وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ، وَنَقِّهِ مِنَ الْخَطَايَا كَمَا نَقَّيْتَ الثَّوْبَ الْأَبْيَضَ مِنَ الدَّنَسِ.",
    repetition: "دعاء عام للميت",
    targetCount: 1,
    source: "متفق عليه"
  },
  {
    id: 'deceased_dua_for_tathbeet',
    categoryKey: 'deceased_dua',
    arabicText: "اللَّهُمَّ ثَبِّتْهُ عِنْدَ السُّؤَالِ، وَاجْعَلْ قَبْرَهُ رَوْضَةً مِنْ رِيَاضِ الْجَنَّةِ، وَلَا تَجْعَلْهُ حُفْرَةً مِنْ حُفَرِ النَّارِ.",
    repetition: "للتثبيت عند السؤال",
    targetCount: 1,
    source: "دعاء مأثور"
  },
  {
    id: 'deceased_dua_for_rahmah_maghfirah_specific',
    categoryKey: 'deceased_dua',
    arabicText: "اللَّهُمَّ إِنَّ فُلَانَ بْنَ فُلَانٍ فِي ذِمَّتِكَ وَحَبْلِ جِوَارِكَ، فَقِهِ مِنْ فِتْنَةِ الْقَبْرِ وَعَذَابِ النَّارِ، وَأَنْتَ أَهْلُ الْوَفَاءِ وَالْحَقِّ، فَاغْفِرْ لَهُ وَارْحَمْهُ، إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ.",
    repetition: "يذكر اسم المتوفى",
    targetCount: 1,
    source: "دعاء مأثور"
  },
  {
    id: 'deceased_dua_general_for_all_muslims',
    categoryKey: 'deceased_dua',
    arabicText: "اللَّهُمَّ اغْفِرْ لِأَمْوَاتِنَا وَأَمْوَاتِ الْمُسْلِمِينَ، وَارْحَمْهُمْ، وَعَافِهِمْ، وَاعْفُ عَنْهُمْ، وَأَكْرِمْ نُزُلَهُمْ، وَوَسِّعْ مُدْخَلَهُمْ.",
    repetition: "دعاء عام لجميع موتى المسلمين",
    targetCount: 1,
    source: "دعاء عام"
  }
];

const travelDuaSupplications: Supplication[] = [
  {
    id: 'travel_leaving_home',
    categoryKey: 'travel_dua',
    arabicText: "بِسْمِ اللهِ، تَوَكَّلْتُ عَلَى اللهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ.",
    repetition: "عند الخروج من المنزل",
    targetCount: 1,
    source: "رواه الترمذي وصححه الألباني"
  },
  {
    id: 'travel_riding_vehicle',
    categoryKey: 'travel_dua',
    arabicText: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ.",
    repetition: "عند ركوب وسيلة النقل",
    targetCount: 1,
    source: "القرآن الكريم - الزخرف: 13-14"
  },
  {
    id: 'travel_takbeer_ascending',
    categoryKey: 'travel_dua',
    arabicText: "اللهُ أَكْبَرُ، اللهُ أَكْبَرُ، اللهُ أَكْبَرُ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ.",
    repetition: "عند الصعود في المركبة",
    targetCount: 1,
    source: "رواه مسلم"
  },
  {
    id: 'travel_starting_journey',
    categoryKey: 'travel_dua',
    arabicText: "اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا، وَاطْوِ عَنَّا بُعْدَهُ، اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ، وَالْخَلِيفَةُ فِي الْأَهْلِ.",
    repetition: "عند التحرك للسفر",
    targetCount: 1,
    source: "رواه مسلم"
  },
  {
    id: 'travel_entering_place',
    categoryKey: 'travel_dua',
    arabicText: "أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",
    repetition: "عند نزول منزل أو بلد",
    targetCount: 1,
    source: "رواه مسلم"
  },
  {
    id: 'travel_returning_from_journey',
    categoryKey: 'travel_dua',
    arabicText: "آيِبُونَ، تَائِبُونَ، عَابِدُونَ، لِرَبِّنَا حَامِدُونَ.",
    repetition: "عند العودة من السفر",
    targetCount: 1,
    source: "رواه البخاري"
  },
  {
    id: 'travel_entering_village_city',
    categoryKey: 'travel_dua',
    arabicText: "اللَّهُمَّ رَبَّ السَّمَوَاتِ السَّبْعِ وَمَا أَظْلَلْنَ، وَرَبَّ الأَرَضِينَ السَّبْعِ وَمَا أَقْلَلْنَ، وَرَبَّ الشَّيَاطِينِ وَمَا أَضْلَلْنَ، وَرَبَّ الرِّيَاحِ وَمَا ذَرَيْنَ، أَسْأَلُكَ خَيْرَ هَذِهِ الْقَرْيَةِ، وَخَيْرَ أَهْلِهَا، وَخَيْرَ مَا فِيهَا، وَأَعُوذُ بِكَ مِنْ شَرِّهَا، وَشَرِّ أَهْلِهَا، وَشَرِّ مَا فِيهَا.",
    repetition: "عند دخول القرية أو المدينة",
    targetCount: 1,
    source: "رواه الحاكم وصححه ووافقه الذهبي"
  },
  {
    id: 'travel_fear_during_journey',
    categoryKey: 'travel_dua',
    arabicText: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ، وَكَآبَةِ الْمَنْظَرِ، وَسُوءِ الْمُنْقَلَبِ فِي الْمَالِ وَالْأَهْلِ.",
    repetition: "عند الخوف في السفر",
    targetCount: 1,
    source: "رواه مسلم"
  },
  {
    id: 'travel_night_dua',
    categoryKey: 'travel_dua',
    arabicText: "يَا أَرْضُ، رَبِّي وَرَبُّكِ اللهُ، أَعُوذُ بِاللهِ مِنْ شَرِّكِ وَشَرِّ مَا فِيكِ وَشَرِّ مَا خُلِقَ فِيكِ وَشَرِّ مَا يَدُبُّ عَلَيْكِ.",
    repetition: "دعاء الليل في السفر",
    targetCount: 1,
    source: "رواه أبو داود وصححه الألباني"
  },
  {
    id: 'travel_returning_to_family',
    categoryKey: 'travel_dua',
    arabicText: "اللَّهُمَّ اجْعَلْ لَنَا فِي سَفَرِنَا هَذَا بَرَكَةً وَتَقْوَىً، وَمِنَ الْعَمَلِ مَا تَرْضَى.",
    repetition: "عند العودة إلى الأهل",
    targetCount: 1,
    source: "من أدعية السفر"
  }
];

const istikharaDuaSupplications: Supplication[] = [
  {
    id: 'istikhara_main',
    categoryKey: 'istikhara_dua',
    arabicText: "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلا أَقْدِرُ، وَتَعْلَمُ وَلا أَعْلَمُ، وَأَنْتَ عَلامُ الْغُيُوبِ. اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ - وَيُسَمِّي حَاجَتَهُ - خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي (أَوْ قَالَ: عَاجِلِ أَمْرِي وَآجِلِهِ)، فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي، ثُمَّ بَارِكْ لِي فِيهِ. وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي (أَوْ قَالَ: عَاجِلِ أَمْرِي وَآجِلِهِ)، فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ، وَاقْدُرْ لِي الْخَيْرَ حَيْثُ كَانَ، ثُمَّ أَرْضِنِي بِهِ.",
    repetition: "مرة واحدة عند الحاجة للاستخارة",
    targetCount: 1,
    source: "صحيح البخاري"
  }
];


export const adhkarCategories: AdhkarCategory[] = [
  { id: 'morning_adhkar', title: 'أذكار الصباح', supplications: morningAdhkarSupplications, iconName: 'Sunrise' },
  { id: 'evening_adhkar', title: 'أذكار المساء', supplications: eveningAdhkarSupplications, iconName: 'Sunset' },
  { id: 'travel_dua', title: 'دعاء السفر', supplications: travelDuaSupplications, iconName: 'Plane' },
  { id: 'istikhara_dua', title: 'دعاء الاستخارة', supplications: istikharaDuaSupplications, iconName: 'SearchCheck' },
  { id: 'patient_dua', title: 'دعاء للمريض', supplications: patientDuaSupplications, iconName: 'HeartPulse' },
  { id: 'deceased_dua', title: 'دعاء للميت', supplications: deceasedDuaSupplications, iconName: 'BedDouble' },
];

export const getSupplicationsByCategory = (categoryId: string): Supplication[] => {
  const category = adhkarCategories.find(cat => cat.id === categoryId);
  return category ? category.supplications : [];
};

export const getCategoryById = (categoryId: string): AdhkarCategory | undefined => {
  return adhkarCategories.find(cat => cat.id === categoryId);
};


export const allSupplications: Supplication[] = adhkarCategories.reduce((acc, category) => {
  return acc.concat(category.supplications);
}, [] as Supplication[]);


export const tasbihOptions: TasbihOption[] = [
  { id: 'subhanallah', text: 'سبحان الله' },
  { id: 'alhamdulillah', text: 'الحمد لله' },
  { id: 'allahuakbar', text: 'الله أكبر' },
  { id: 'lailahaillallah', text: 'لا إله إلا الله' },
  { id: 'astaghfirullah', text: 'أستغفر الله' },
  { id: 'lahawla', text: 'لا حول ولا قوة إلا بالله' },
  { id: 'salawat', text: 'اللهم صل على محمد وعلى آل محمد' },
];
