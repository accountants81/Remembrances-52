
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
    repetition: "مائة مرة",
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
    repetition: "ثلاث مرات",
    targetCount: 3,
    source: "سنن أبي داود"
  },
  {
    id: 'morning_bismillah_alladhi_la_yadurr',
    categoryKey: 'morning_adhkar',
    arabicText: "بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
    repetition: "ثلاث مرات",
    targetCount: 3,
    source: "سنن الترمذي"
  },
  { // Combined "سبحان الله، الحمد لله، الله أكبر" into one card
    id: 'morning_tasbih_tahmid_takbir_100',
    categoryKey: 'morning_adhkar',
    arabicText: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ (مائة مرة)، الْحَمْدُ لِلَّهِ (مائة مرة)، اللَّهُ أَكْبَرُ (مائة مرة).", // Text adjusted for clarity, though practically these might be done separately
    repetition: "مائة مرة لكل ذكر",
    targetCount: 100, // This could be 300 if counted per phrase, or 100 if it implies 100 cycles of all three. User likely meant 100 of each.
    source: "حديث: 'من قال سبحان الله وبحمده مائة مرة...' (متفق عليه) - تم تجميعها هنا للتسبيح والتحميد والتكبير"
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
    id: 'morning_raditu_billahi_rabban',
    categoryKey: 'morning_adhkar',
    arabicText: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلاَمِ دِينًا، وَبِمُحَمَّدٍ صلى الله عليه وسلم نَبِيًّا.",
    repetition: "ثلاث مرات", // As per common understanding, though user input was ambiguous
    targetCount: 3,
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
    repetition: "ثلاث مرات",
    targetCount: 3,
    source: "صحيح مسلم"
  },
  {
    id: 'morning_astaghfirullah_100',
    categoryKey: 'morning_adhkar',
    arabicText: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.", // Often "أستغفر الله" but adding "وأتوب إليه" is common
    repetition: "مائة مرة",
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
    repetition: "مائة مرة", // Or 10 times if that's the intended Sunnah for evening
    targetCount: 100,
    source: "متفق عليه (لفضل الذكر بشكل عام، وتوجد روايات بعشر مرات للمساء)"
  },
  {
    id: 'evening_askuka_alafiyah', // Same as morning
    categoryKey: 'evening_adhkar',
    arabicText: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "صحيح ابن ماجه"
  },
  {
    id: 'evening_aalim_alghayb', // Same as morning
    categoryKey: 'evening_adhkar',
    arabicText: "اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "صحيح الترمذي"
  },
  {
    id: 'evening_aafini_badani', // Same as morning
    categoryKey: 'evening_adhkar',
    arabicText: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ.",
    repetition: "ثلاث مرات",
    targetCount: 3,
    source: "سنن أبي داود"
  },
  {
    id: 'evening_bismillah_alladhi_la_yadurr', // Same as morning
    categoryKey: 'evening_adhkar',
    arabicText: "بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
    repetition: "ثلاث مرات",
    targetCount: 3,
    source: "سنن الترمذي"
  },
   { // Combined "سبحان الله، الحمد لله، الله أكبر" into one card for evening too
    id: 'evening_tasbih_tahmid_takbir_100',
    categoryKey: 'evening_adhkar',
    arabicText: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ (مائة مرة)، الْحَمْدُ لِلَّهِ (مائة مرة)، اللَّهُ أَكْبَرُ (مائة مرة).",
    repetition: "مائة مرة لكل ذكر",
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
    repetition: "ثلاث مرات",
    targetCount: 3,
    source: "القرآن الكريم - سورة الإخلاص (من قرأهن حين يمسي وحين يصبح كفته من كل شيء)"
  },
  {
    id: 'evening_falaq',
    categoryKey: 'evening_adhkar',
    arabicText: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.",
    repetition: "ثلاث مرات",
    targetCount: 3,
    source: "القرآن الكريم - سورة الفلق (من قرأهن حين يمسي وحين يصبح كفته من كل شيء)"
  },
  {
    id: 'evening_nas',
    categoryKey: 'evening_adhkar',
    arabicText: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ.",
    repetition: "ثلاث مرات",
    targetCount: 3,
    source: "القرآن الكريم - سورة الناس (من قرأهن حين يمسي وحين يصبح كفته من كل شيء)"
  },
  {
    id: 'evening_amanarrasool',
    categoryKey: 'evening_adhkar',
    arabicText: "آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَّسِينَآ أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "القرآن الكريم - سورة البقرة، الآيات 285-286 (من قرأهما في ليلة كفتاه)"
  },
  {
    id: 'evening_audhu_bikalimatillah',
    categoryKey: 'evening_adhkar',
    arabicText: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",
    repetition: "ثلاث مرات",
    targetCount: 3,
    source: "صحيح مسلم"
  }
];

const patientDuaSupplications: Supplication[] = [
  {
    id: 'patient_adhhibil_bas',
    categoryKey: 'patient_dua',
    arabicText: "اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَأْسَ، اشْفِهِ وَأَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا.",
    repetition: "سبع مرات",
    targetCount: 7,
    source: "صحيح البخاري"
  },
  {
    id: 'patient_bismillah_turbatu_ardina',
    categoryKey: 'patient_dua',
    arabicText: "بِسْمِ اللهِ، تُرْبَةُ أَرْضِنَا، بِرِيقَةِ بَعْضِنَا، يُشْفَى سَقِيمُنَا، بِإِذْنِ رَبِّنَا.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "متفق عليه"
  }
];

const deceasedDuaSupplications: Supplication[] = [
  {
    id: 'deceased_ighfir_lahu',
    categoryKey: 'deceased_dua',
    arabicText: "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ، وَعَافِهِ وَاعْفُ عَنْهُ، وَأَكْرِمْ نُزُلَهُ، وَوَسِّعْ مُدْخَلَهُ، وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ، وَنَقِّهِ مِنَ الْخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ، وَأَبْدِلْهُ دَارًا خَيْرًا مِنْ دَارِهِ، وَأَهْلًا خَيْرًا مِنْ أَهْلِهِ، وَزَوْجًا خَيْرًا مِنْ زَوْجِهِ، وَأَدْخِلْهُ الْجَنَّةَ، وَأَعِذْهُ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابِ النَّارِ.",
    repetition: "مرة واحدة",
    targetCount: 1,
    source: "صحيح مسلم"
  },
];

const travelDuaSupplications: Supplication[] = [
  {
    id: 'travel_subhanalladhi',
    categoryKey: 'travel_dua',
    arabicText: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ. اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى، اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ، اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ، وَالْخَلِيفَةُ فِي الْأَهْلِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ، وَكَآبَةِ الْمَنْظَرِ، وَسُوءِ الْمُنْقَلَبِ فِي الْمَالِ وَالْأَهْلِ.",
    repetition: "مرة واحدة عند بدء السفر",
    targetCount: 1,
    source: "صحيح مسلم"
  },
  {
    id: 'travel_return',
    categoryKey: 'travel_dua',
    arabicText: "آيِبُونَ، تائِبُونَ، عابِدُونَ، لِرَبِّنا حامِدُونَ.",
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

// variousDuaSupplications array is removed as per user request to delete the section.
// If these duas need to be moved elsewhere, this should be handled.

export const adhkarCategories: AdhkarCategory[] = [
  { id: 'morning_adhkar', title: 'أذكار الصباح', supplications: morningAdhkarSupplications },
  { id: 'evening_adhkar', title: 'أذكار المساء', supplications: eveningAdhkarSupplications },
  { id: 'travel_dua', title: 'دعاء السفر', supplications: travelDuaSupplications },
  { id: 'istikhara_dua', title: 'دعاء الاستخارة', supplications: istikharaDuaSupplications },
  { id: 'patient_dua', title: 'دعاء للمريض', supplications: patientDuaSupplications },
  { id: 'deceased_dua', title: 'دعاء للميت', supplications: deceasedDuaSupplications },
  // The "various_dua" categories are removed
];

export const allSupplications: Supplication[] = [
  ...morningAdhkarSupplications,
  ...eveningAdhkarSupplications,
  ...patientDuaSupplications,
  ...deceasedDuaSupplications,
  ...travelDuaSupplications,
  ...istikharaDuaSupplications,
  // ...variousDuaSupplications, // This would now be empty or removed
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
