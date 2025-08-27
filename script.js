// Bible books in different languages (removed Chinese, Japanese, German, Portuguese, Fulfulde, Kanuri, Tiv, Ibibio, Ijaw, Edo, Urhobo)
const bibleBooks = {
    en: [
        'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 
        'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', 
        '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 
        'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs', 
        'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 
        'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 
        'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 
        'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 
        'Matthew', 'Mark', 'Luke', 'John', 'Acts', 
        'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 
        'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', 
        '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', 
        '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 
        'Jude', 'Revelation'
    ],
    fr: [
        'Genese', 'Exode', 'Levitique', 'Nombres', 'Deuteronome',
        'Josue', 'Juges', 'Ruth', '1 Samuel', '2 Samuel',
        '1 Rois', '2 Rois', '1 Chroniques', '2 Chroniques', 'Esdras',
        'Nehemie', 'Esther', 'Job', 'Psaumes', 'Proverbes',
        'Ecclesiaste', 'Cantique', 'Esaie', 'Jeremie', 'Lamentations',
        'Ezechiel', 'Daniel', 'Osee', 'Joel', 'Amos',
        'Abdias', 'Jonas', 'Michee', 'Nahum', 'Habacuc',
        'Sophonie', 'Aggee', 'Zacharie', 'Malachie',
        'Matthieu', 'Marc', 'Luc', 'Jean', 'Actes',
        'Romains', '1 Corinthiens', '2 Corinthiens', 'Galates', 'Ephesiens',
        'Philippiens', 'Colossiens', '1 Thessaloniciens', '2 Thessaloniciens', '1 Timothee',
        '2 Timothee', 'Tite', 'Philemon', 'Hebreux', 'Jacques',
        '1 Pierre', '2 Pierre', '1 Jean', '2 Jean', '3 Jean',
        'Jude', 'Apocalypse'
    ],
    es: [
        'Genesis', 'Exodo', 'Levitico', 'Numeros', 'Deuteronomio',
        'Josue', 'Jueces', 'Rut', '1 Samuel', '2 Samuel',
        '1 Reyes', '2 Reyes', '1 Cronicas', '2 Cronicas', 'Esdras',
        'Nehemias', 'Ester', 'Job', 'Salmos', 'Proverbios',
        'Eclesiastes', 'Cantares', 'Isaias', 'Jeremias', 'Lamentaciones',
        'Ezequiel', 'Daniel', 'Oseas', 'Joel', 'Amos',
        'Abdias', 'Jonas', 'Miqueas', 'Nahum', 'Habacuc',
        'Sofonias', 'Hageo', 'Zacarias', 'Malaquias',
        'Mateo', 'Marcos', 'Lucas', 'Juan', 'Hechos',
        'Romanos', '1 Corintios', '2 Corintios', 'Galatas', 'Efesios',
        'Filipenses', 'Colosenses', '1 Tesalonicenses', '2 Tesalonicenses', '1 Timoteo',
        '2 Timoteo', 'Tito', 'Filemon', 'Hebreos', 'Santiago',
        '1 Pedro', '2 Pedro', '1 Juan', '2 Juan', '3 Juan',
        'Judas', 'Apocalipsis'
    ],
    ig: [
        'Jenesis', 'Eksodus', 'Levitikus', 'Onu', 'Duteronomy',
        'Joshua', 'Ndi ikpe', 'Rut', '1 Samuel', '2 Samuel',
        '1 Ndi Eze', '2 Ndi Eze', '1 Ihe mere eme', '2 Ihe mere eme', 'Ezra',
        'Nehemaya', 'Esta', 'Job', 'Abu Oma', 'Ilu',
        'Nkuzi', 'Abu Nke Solomon', 'Aizaya', 'Jeremaya', 'Akwa',
        'Izikiel', 'Daniel', 'Hosea', 'Juel', 'Emos',
        'Obadaya', 'Jona', 'Maika', 'Nahum', 'Habakuk',
        'Zefenya', 'Hagai', 'Zekaraya', 'Malaki',
        'Matiu', 'Mak', 'Luk', 'Jon', 'Oru',
        'Rom', '1 Ndi Korint', '2 Ndi Korint', 'Ndi Galeshia', 'Ndi Efesos',
        'Ndi Filipai', 'Ndi Kolosi', '1 Ndi Tesalonaika', '2 Ndi Tesalonaika', '1 Timoti',
        '2 Timoti', 'Taitus', 'Filemon', 'Ndi Hibru', 'Jems',
        '1 Pita', '2 Pita', '1 Jon', '2 Jon', '3 Jon',
        'Jud', 'Mkpughe'
    ],
    yo: [
        'Genesis', 'Eksodu', 'Lefitiku', 'Nomba', 'Deuteronomi',
        'Josua', 'Awon Onidajo', 'Rutu', '1 Samueli', '2 Samueli',
        '1 Awon Oba', '2 Awon Oba', '1 Kronika', '2 Kronika', 'Esra',
        'Nehemiai', 'Esta', 'Jobu', 'Saamu', 'Owe',
        'Oniwaasu', 'Orin Solomoni', 'Isaiah', 'Jeremiai', 'Aronu',
        'Esekielu', 'Danieli', 'Hosea', 'Joeli', 'Amosi',
        'Obadiah', 'Jona', 'Mika', 'Nahumu', 'Habakuku',
        'Sefaniah', 'Hagai', 'Sekariah', 'Malaki',
        'Matiu', 'Marku', 'Luku', 'Johanu', 'Ise',
        'Romu', '1 Korinti', '2 Korinti', 'Galatia', 'Efeso',
        'Filipi', 'Kolose', '1 Tesalonika', '2 Tesalonika', '1 Timoteo',
        '2 Timoteo', 'Titu', 'Filemoni', 'Heberu', 'Jakobu',
        '1 Peteru', '2 Peteru', '1 Johanu', '2 Johanu', '3 Johanu',
        'Juda', 'Ifihan'
    ],
    ha: [
        'Farawa', 'Fitar', 'Firgit', 'Kidaya', 'Maimako',
        'Yoshuwa', 'Alkalai', 'Rut', '1 Samaila', '2 Samaila',
        '1 Sarakuna', '2 Sarakuna', '1 Tarihi', '2 Tarihi', 'Izra',
        'Nehemiya', 'Esta', 'Ayuba', 'Zabura', 'Karin Magana',
        'Waazi', 'Wakar Sulemanu', 'Ishaya', 'Irmiya', 'Kuka',
        'Ezekiel', 'Daniyel', 'Hosiya', 'Yuwel', 'Amos',
        'Obadiya', 'Yunusa', 'Mika', 'Nahum', 'Habakkuk',
        'Zafariya', 'Hagai', 'Zakariya', 'Malaki',
        'Matta', 'Markus', 'Luka', 'Yahaya', 'Ayyukan Manzanni',
        'Romawa', '1 Korintiyawa', '2 Korintiyawa', 'Galatiyawa', 'Afasawa',
        'Filipiyawa', 'Kolossawa', '1 Tasloniyawa', '2 Tasloniyawa', '1 Timoti',
        '2 Timoti', 'Titus', 'Filemona', 'Ibraniyawa', 'Yakubu',
        '1 Bitrus', '2 Bitrus', '1 Yahaya', '2 Yahaya', '3 Yahaya',
        'Yahuda', 'Ruuya'
    ],
    tw: [
        'Mfitiase', 'Tu Fi Mu', 'Asofope Ho Mmara', 'Nkan', 'Mmara A Eto So Abien',
        'Yosua', 'Atemmufo', 'Rut', '1 Samuel', '2 Samuel',
        '1 Ahemfo', '2 Ahemfo', '1 Abakosem', '2 Abakosem', 'Esra',
        'Nehemia', 'Ester', 'Yob', 'Nnwom', 'Mmebusem',
        'Esenkani', 'Solomon Nnwom', 'Yesaia', 'Yeremia', 'Kwadwom',
        'Hesekiel', 'Daniel', 'Hosea', 'Yoel', 'Amos',
        'Obadia', 'Yona', 'Mika', 'Nahum', 'Habakuk',
        'Sefania', 'Hagai', 'Sakaria', 'Malaki',
        'Mateo', 'Marko', 'Luka', 'Yohane', 'Nneyee',
        'Romafo', '1 Korintofo', '2 Korintofo', 'Galatifo', 'Efesofo',
        'Filipifo', 'Kolosaifo', '1 Tesalonikafo', '2 Tesalonikafo', '1 Timoteo',
        '2 Timoteo', 'Tito', 'Filemon', 'Hebrifo', 'Yakobo',
        '1 Petro', '2 Petro', '1 Yohane', '2 Yohane', '3 Yohane',
        'Yuda', 'Adwenkyere'
    ],
    ak: [
        'AhyeasiE', 'Firi Mu Ba', 'AsoRedan NhyehyeeE', 'Nkantokan', 'Mmara Nkyerase',
        'Yosua', 'Atemmufo', 'Rut', '1 Samuel', '2 Samuel',
        '1 AhemfoE', '2 AhemfoE', '1 AbakOsEm', '2 AbakOsEm', 'Esra',
        'Nehemia', 'Ester', 'Yob', 'Nnwom', 'MmEbusEm',
        'EsEnkafoE', 'Solomon Nnwom', 'Yesaia', 'Yeremia', 'Kwadwom',
        'Hesekiel', 'Daniel', 'Hosea', 'Yoel', 'Amos',
        'Obadia', 'Yona', 'Mika', 'Nahum', 'Habakuk',
        'Sefania', 'Hagai', 'Sakaria', 'Malaki',
        'Mateo', 'Marko', 'Luka', 'Yohane', 'NneyEE',
        'RomafoE', '1 KorintofoE', '2 KorintofoE', 'GalatifoE', 'EfesofoE',
        'FilipifoE', 'KolosaifoE', '1 TesalonikafoE', '2 TesalonikafoE', '1 Timoteo',
        '2 Timoteo', 'Tito', 'Filemon', 'HebrifoE', 'Yakobo',
        '1 Petro', '2 Petro', '1 Yohane', '2 Yohane', '3 Yohane',
        'Yuda', 'Adwenkyere'
    ],
    ga: [
        'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
        'Joshua', 'Atemmufo', 'Ruth', '1 Samuel', '2 Samuel',
        '1 Ahemfo', '2 Ahemfo', '1 Chronika', '2 Chronika', 'Ezra',
        'Nehemiah', 'Esther', 'Job', 'Psalms', 'Mmere',
        'Preacher', 'Solomon Songs', 'Isaiah', 'Jeremiah', 'Kwadwom',
        'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos',
        'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk',
        'Zephaniah', 'Haggai', 'Zechariah', 'Malachi',
        'Matthew', 'Mark', 'Luke', 'John', 'Acts',
        'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians',
        'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy',
        '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James',
        '1 Peter', '2 Peter', '1 John', '2 John', '3 John',
        'Jude', 'Revelation'
    ],
    sw: [
        'Mwanzo', 'Kutoka', 'Mambo ya Walawi', 'Hesabu', 'Torati',
        'Yoshua', 'Waamuzi', 'Ruthu', '1 Samweli', '2 Samweli',
        '1 Wafalme', '2 Wafalme', '1 Mambo ya Nyakati', '2 Mambo ya Nyakati', 'Ezra',
        'Nehemia', 'Esta', 'Ayubu', 'Zaburi', 'Mithali',
        'Mhubiri', 'Wimbo wa Sulemani', 'Isaya', 'Yeremia', 'Maombolezo',
        'Ezekieli', 'Danieli', 'Hosea', 'Yoeli', 'Amosi',
        'Obadia', 'Yona', 'Mika', 'Nahumu', 'Habakuki',
        'Sefania', 'Hagai', 'Zekaria', 'Malaki',
        'Mathayo', 'Marko', 'Luka', 'Yohana', 'Matendo',
        'Warumi', '1 Wakorintho', '2 Wakorintho', 'Wagalatia', 'Waefeso',
        'Wafilipi', 'Wakolosai', '1 Wathesalonike', '2 Wathesalonike', '1 Timotheo',
        '2 Timotheo', 'Tito', 'Filemoni', 'Waebrania', 'Yakobo',
        '1 Petro', '2 Petro', '1 Yohana', '2 Yohana', '3 Yohana',
        'Yuda', 'Ufunuo'
    ],
    ki: [
        'Kiambiria', 'Kuuma', 'Alawii', 'Ndathabu', 'Utaari wa Riua',
        'Joshua', 'Atuaniri', 'Ruthu', '1 Samuel', '2 Samuel',
        '1 Athamaki', '2 Athamaki', '1 MaUndu', '2 MaUndu', 'Ezra',
        'Nehemia', 'Esta', 'Ayubu', 'Thaburi', 'Thimo',
        'Muhunjia', 'RwiMbo rwa Solomoni', 'Isaia', 'Jeremia', 'Macakaya',
        'Ezekieli', 'Danieli', 'Hosea', 'Yoeli', 'Amosi',
        'Obadia', 'Jona', 'Mika', 'Nahumu', 'Habakuki',
        'Sefania', 'Hagai', 'Zakaria', 'Malaki',
        'Mathayo', 'Mariko', 'Luka', 'Johana', 'CiIko',
        'Arumi', '1 Akorintho', '2 Akorintho', 'Agalatia', 'Aefeso',
        'Afilipi', 'Akolosai', '1 Athesalonike', '2 Athesalonike', '1 Timotheo',
        '2 Timotheo', 'Tito', 'Filemoni', 'Ahibirania', 'Jakubu',
        '1 Petero', '2 Petero', '1 Johana', '2 Johana', '3 Johana',
        'Juda', 'GucukUrio'
    ],
    luo: [
        'Chakruok', 'Wuok', 'Jowawi', 'Kwan', 'Weche Mag Chik',
        'Joshua', 'Jongad Bura', 'Ruth', '1 Samuel', '2 Samuel',
        '1 Ruodhi', '2 Ruodhi', '1 Weche', '2 Weche', 'Ezra',
        'Nehemia', 'Esta', 'Ayub', 'Zaburi', 'Ngero',
        'Jahudi', 'Wend Solomon', 'Isaya', 'Jeremia', 'Dengo',
        'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos',
        'Obadia', 'Jona', 'Mika', 'Nahum', 'Habakuk',
        'Zefania', 'Hagai', 'Zekaria', 'Malaki',
        'Mathayo', 'Marko', 'Luka', 'Johana', 'Tije',
        'Jo-Roma', '1 Jo-Korintho', '2 Jo-Korintho', 'Jo-Galatia', 'Jo-Efeso',
        'Jo-Filipi', 'Jo-Kolosai', '1 Jo-Thesalonike', '2 Jo-Thesalonike', '1 Timotheo',
        '2 Timotheo', 'Tito', 'Filemon', 'Jo-Hibrania', 'Jakobo',
        '1 Petro', '2 Petro', '1 Johana', '2 Johana', '3 Johana',
        'Juda', 'Fweny'
    ],
    ar: [
        'التكوين', 'الخروج', 'اللاويين', 'العدد', 'التثنية',
        'يشوع', 'القضاة', 'راعوث', '1 صموئيل', '2 صموئيل',
        '1 الملوك', '2 الملوك', '1 أخبار', '2 أخبار', 'عزرا',
        'نحميا', 'أستير', 'أيوب', 'المزامير', 'الأمثال',
        'الجامعة', 'نشيد الأنشاد', 'إشعياء', 'إرميا', 'المراثي',
        'حزقيال', 'دانيال', 'هوشع', 'يوئيل', 'عاموس',
        'عوبديا', 'يونان', 'ميخا', 'ناحوم', 'حبقوق',
        'صفنيا', 'حجي', 'زكريا', 'ملاخي',
        'متى', 'مرقس', 'لوقا', 'يوحنا', 'أعمال',
        'رومية', '1 كورنثوس', '2 كورنثوس', 'غلاطية', 'أفسس',
        'فيلبي', 'كولوسي', '1 تسالونيكي', '2 تسالونيكي', '1 تيموثاوس',
        '2 تيموثاوس', 'تيطس', 'فليمون', 'عبرانيين', 'يعقوب',
        '1 بطرس', '2 بطرس', '1 يوحنا', '2 يوحنا', '3 يوحنا',
        'يهوذا', 'رؤيا'
    ],
    am: [
        'ዘፍጥረት', 'ዘጸአት', 'ዘሌዋውያን', 'ወከመ', 'ዘደአግመ ሕግ',
        'ኢያሱ', 'መሣፍንት', 'ሩት', '1 ሳሙኤል', '2 ሳሙኤል',
        '1 ነገሥት', '2 ነገሥት', '1 ዜና', '2 ዜና', 'ዕዝራ',
        'ነህምያ', 'አስቴር', 'ኢዮብ', 'መዝሙር', 'ምሳሌ',
        'መክብብ', 'ዘሰሎሞን መዝሙር', 'ኢሳይያስ', 'ኢረምያስ', 'ሰቅዋት',
        'ሕዝቅኤል', 'ዳንኤል', 'ሆሴዕ', 'ኢዮኤል', 'አሞጽ',
        'ዖባድያ', 'ዮናስ', 'ሚክያስ', 'ናሆም', 'ሃባቁቅ',
        'ሶፎንያ', 'ሃጌ', 'ዛካርያስ', 'ማላክያ',
        'ማቴዎስ', 'ማርቆስ', 'ሉቃስ', 'ዮሐንስ', 'ሐዋርያት',
        'ሮመ', '1 ቆሮንቶስ', '2 ቆሮንቶስ', 'ገላትያ', 'ኤፌሶን',
        'ፊልጵስዩስ', 'ቆላስይስ', '1 ተሰሎንቄ', '2 ተሰሎንቄ', '1 ጢሞቴዎስ',
        '2 ጢሞቴዎስ', 'ቲቶስ', 'ፊሌሞና', 'ዕብራውያን', 'ያዕቆብ',
        '1 ጴጥሮስ', '2 ጴጥሮስ', '1 ዮሐንስ', '2 ዮሐንስ', '3 ዮሐንስ',
        'ይሁዳ', 'ራዕይ'
    ],
    zu: [
        'UGenesise', 'UEksodusi', 'ULevitikusi', 'Izinombolo', 'UDutheronomi',
        'UJoshuwa', 'Abahluleli', 'URuthe', '1 USamuyeli', '2 USamuyeli',
        '1 Amakhosi', '2 Amakhosi', '1 Imilando', '2 Imilando', 'U-Ezra',
        'UNehemiya', 'U-Esta', 'UJobe', 'Amahubo', 'Izaga',
        'UmTshumayeli', 'Ingoma kaSholomoni', 'U-Isaya', 'UJeremiya', 'Isililo',
        'U-Ezekiyeli', 'UDaniyeli', 'UHoseya', 'UJoweli', 'U-Amosi',
        'U-Obhadiya', 'UJona', 'UMikha', 'UNahumi', 'UHabakhukhi',
        'UZefaniya', 'UHagayi', 'UZekhariya', 'UMalakhi',
        'UMathewu', 'UMarko', 'ULuka', 'UJohane', 'Izenzo',
        'AmaRoma', '1 AmaKorinte', '2 AmaKorinte', 'AmaGalathiya', 'Ama-Efesu',
        'AmaFilipi', 'AmaKolose', '1 AmaThesalonika', '2 AmaThesalonika', '1 uTimothewu',
        '2 uTimothewu', 'UThitosi', 'UFilemoni', 'AmaHebheru', 'UJakobe',
        '1 uPetro', '2 uPetro', '1 kaJohane', '2 kaJohane', '3 kaJohane',
        'UJuda', 'Isambulo'
    ],
    xh: [
        'UGenesise', 'UEksoduse', 'ULevitikuse', 'Amanani', 'UDutheronomi',
        'UJoshua', 'Abagwebi', 'URuthe', '1 USamuweli', '2 USamuweli',
        '1 Ookumkani', '2 Ookumkani', '1 Iimbali', '2 Iimbali', 'U-Ezra',
        'UNehemiya', 'U-Esther', 'UJobe', 'Iindumiso', 'Izaci',
        'UmVangeli', 'Ingoma kaSolomon', 'U-Isaya', 'UJeremiya', 'Isililo',
        'U-Ezekiele', 'UDaniele', 'UHoseya', 'UJoweli', 'U-Amose',
        'U-Obhadiya', 'UJona', 'UMikha', 'UNahume', 'UHabakhukhe',
        'UZefaniya', 'UHagayi', 'UZekariya', 'UMalakhi',
        'UMatheyu', 'UMarko', 'ULuka', 'UJohane', 'Izenzo',
        'AbaRoma', '1 AmaKorinthe', '2 AmaKorinthe', 'AmaGalatiya', 'Ama-Efesu',
        'AmaFilipi', 'AmaKolose', '1 AmaThesalonika', '2 AmaThesalonika', '1 uTimotheyu',
        '2 uTimotheyu', 'UThitose', 'UFilemoni', 'AmaHebhere', 'UYakobi',
        '1 uPetro', '2 uPetro', '1 kaJohane', '2 kaJohane', '3 kaJohane',
        'UYuda', 'Isityhilelo'
    ],
    af: [
        'Genesis', 'Eksodus', 'Levitikus', 'Numeri', 'Deuteronomium',
        'Josua', 'Rigters', 'Rut', '1 Samuel', '2 Samuel',
        '1 Konings', '2 Konings', '1 Kronieke', '2 Kronieke', 'Esra',
        'Nehemia', 'Ester', 'Job', 'Psalms', 'Spreuke',
        'Prediker', 'Hooglied', 'Jesaja', 'Jeremia', 'Klaagliedere',
        'Esegiel', 'Daniel', 'Hosea', 'Joel', 'Amos',
        'Obadja', 'Jona', 'Miga', 'Nahum', 'Habakuk',
        'Sefanja', 'Haggai', 'Sagaria', 'Maleagi',
        'Matteus', 'Markus', 'Lukas', 'Johannes', 'Handelinge',
        'Romeine', '1 Korintiers', '2 Korintiers', 'Galasiers', 'Efesiers',
        'Filippense', 'Kolossense', '1 Tessalonisense', '2 Tessalonisense', '1 Timoteus',
        '2 Timoteus', 'Titus', 'Filemon', 'Hebreers', 'Jakobus',
        '1 Petrus', '2 Petrus', '1 Johannes', '2 Johannes', '3 Johannes',
        'Judas', 'Openbaring'
    ],
    sn: [
        'Genesisi', 'Eksodusi', 'Revitikusi', 'Nhamba', 'Dhuteronomi',
        'Joshua', 'Vatongi', 'Rute', '1 Samueri', '2 Samueri',
        '1 Madzimambo', '2 Madzimambo', '1 Makoronike', '2 Makoronike', 'Ezra',
        'Nehemiya', 'Esteri', 'Jobho', 'Mapisarema', 'Zvirevo',
        'Muparidzi', 'Rwiyo rwaSoromoni', 'Isaya', 'Jeremia', 'Mariro',
        'Ezekieri', 'Danieri', 'Hosea', 'Joeri', 'Amosi',
        'Obadhiya', 'Jona', 'Mikha', 'Nahumi', 'Habhakuki',
        'Zefaniya', 'Hagai', 'Zekariya', 'Maraki',
        'Mateu', 'Mariko', 'Ruka', 'Johane', 'Mabasa',
        'VaRoma', '1 VaKorinde', '2 VaKorinde', 'VaGaratiya', 'VaEfeso',
        'VaFiripi', 'VaKorose', '1 VaTesaronika', '2 VaTesaronika', '1 Timotio',
        '2 Timotio', 'Titosi', 'Firemoni', 'VaHebheru', 'Jakobho',
        '1 Petro', '2 Petro', '1 Johane', '2 Johane', '3 Johane',
        'Judha', 'Zvakazarurwa'
    ],
    ny: [
        'Genesi', 'Eksodo', 'Levitiko', 'Manambala', 'Deuteronomi',
        'Yoswa', 'Oweruza', 'Rute', '1 Samueli', '2 Samueli',
        '1 Mafumu', '2 Mafumu', '1 Mbiri', '2 Mbiri', 'Ezra',
        'Nehemiya', 'Esitere', 'Yobu', 'Minyimbo', 'Miyambi',
        'Mphunzitsi', 'Nyimbo ya Solomoni', 'Yesaya', 'Yeremiya', 'Madandawulo',
        'Ezekieli', 'Danieli', 'Hoseya', 'Yoeli', 'Amosi',
        'Obadiya', 'Yona', 'Mika', 'Nahumu', 'Habakuki',
        'Zefaniya', 'Hagai', 'Zekariya', 'Malaki',
        'Mateyu', 'Marko', 'Luka', 'Yohane', 'Machitidwe',
        'Aroma', '1 Akorinto', '2 Akorinto', 'Agalatiya', 'Aefeso',
        'Afilipi', 'Akolose', '1 Atesalonika', '2 Atesalonika', '1 Timoteyo',
        '2 Timoteyo', 'Tito', 'Filemoni', 'Ahebri', 'Yakobo',
        '1 Petro', '2 Petro', '1 Yohane', '2 Yohane', '3 Yohane',
        'Yuda', 'Masomphenya'
    ],
    rw: [
        'Itangiriro', 'Kuva', 'Aba Levi', 'Imibare', 'Kuvugurura',
        'Yoswe', 'Abacamanza', 'Rute', '1 Samweli', '2 Samweli',
        '1 Abami', '2 Abami', '1 Ibyakozwe', '2 Ibyakozwe', 'Ezira',
        'Nehemiya', 'Esiteri', 'Yobo', 'Zaburi', 'Imigani',
        'Umuvugizi', 'Indirimbo za Salomoni', 'Izaya', 'Yeremiya', 'Imirelo',
        'Ezekiyeli', 'Daniyeli', 'Hoseya', 'Yoweli', 'Amosi',
        'Obadiyo', 'Yona', 'Mika', 'Nahumu', 'Habakuki',
        'Sefoniya', 'Haggayi', 'Zekariya', 'Malaki',
        'Mateyo', 'Mariko', 'Luka', 'Yohana', 'Ibikorwa',
        'Abaroma', '1 Abakorinto', '2 Abakorinto', 'Abagalatiya', 'Abanyefeso',
        'Abafilipi', 'Abakolose', '1 Abatesalonika', '2 Abatesalonika', '1 Timoteyo',
        '2 Timoteyo', 'Tito', 'Filemoni', 'Abaheburiyo', 'Yakobo',
        '1 Petero', '2 Petero', '1 Yohana', '2 Yohana', '3 Yohana',
        'Yuda', 'Icyubahiro'
    ],
    wo: [
        'Genesis', 'Exodus', 'Levitique', 'Nimre', 'Deuteronome',
        'Yusuf', 'Juge yi', 'Ruth', '1 Samuel', '2 Samuel',
        '1 Buur yi', '2 Buur yi', '1 Chronique', '2 Chronique', 'Ezra',
        'Nehemie', 'Esther', 'Job', 'Psaume yi', 'Proverbe yi',
        'Ecclesiaste', 'Woy u Solomon', 'Esaie', 'Jeremie', 'Lamentations',
        'Ezechiel', 'Daniel', 'Osee', 'Joel', 'Amos',
        'Abdias', 'Jonas', 'Michee', 'Nahum', 'Habacuc',
        'Sophonie', 'Aggee', 'Zacharie', 'Malachie',
        'Matthieu', 'Marc', 'Luc', 'Jean', 'Actes',
        'Romains', '1 Corinthiens', '2 Corinthiens', 'Galates', 'Ephesiens',
        'Philippiens', 'Colossiens', '1 Thessaloniciens', '2 Thessaloniciens', '1 Timothee',
        '2 Timothee', 'Tite', 'Philemon', 'Hebreux', 'Jacques',
        '1 Pierre', '2 Pierre', '1 Jean', '2 Jean', '3 Jean',
        'Jude', 'Apocalypse'
    ],
};

// Translation texts for UI elements
const translations = {
    en: {
        gameTitle: "Kamsi's Bible Game",
        startButton: "Start Game",
        playAgainButton: "Play Again",
        selectedBooksTitle: "Selected Books:",
        congratulations: "🎉 Congratulations! 🎉",
        welcomeHeaven: "Welcome to Heaven!",
        finalScore: "Final Score:",
        timeCompleted: "Time Completed:",
        timeLabel: "Time:",
        progressLabel: "Progress:",
        scoreLabel: "Score:",
        findFirstBook: "🎯 Find the first book:",
        greatNowFind: "✅ Great! Now find:",
        oopsWrong: "❌ Oops! Try again. Look for:"
    },
    fr: {
        gameTitle: "Jeu Biblique de Kamsi",
        startButton: "Commencer le Jeu",
        playAgainButton: "Rejouer",
        selectedBooksTitle: "Livres Selectionnes:",
        congratulations: "🎉 Felicitations! 🎉",
        welcomeHeaven: "Bienvenue au Paradis!",
        finalScore: "Score Final:",
        timeCompleted: "Temps Ecoule:",
        timeLabel: "Temps:",
        progressLabel: "Progres:",
        scoreLabel: "Score:",
        findFirstBook: "🎯 Trouvez le premier livre:",
        greatNowFind: "✅ Excellent! Maintenant trouvez:",
        oopsWrong: "❌ Oops! Reessayez. Cherchez:"
    },
    es: {
        gameTitle: "Juego Biblico de Kamsi",
        startButton: "Empezar Juego",
        playAgainButton: "Jugar de Nuevo",
        selectedBooksTitle: "Libros Seleccionados:",
        congratulations: "🎉 Felicidades! 🎉",
        welcomeHeaven: "Bienvenido al Cielo!",
        finalScore: "Puntuacion Final:",
        timeCompleted: "Tiempo Completado:",
        timeLabel: "Tiempo:",
        progressLabel: "Progreso:",
        scoreLabel: "Puntuacion:",
        findFirstBook: "🎯 Encuentra el primer libro:",
        greatNowFind: "✅ Genial! Ahora encuentra:",
        oopsWrong: "❌ Ups! Intentalo de nuevo. Busca:"
    },
    ig: {
        gameTitle: "Egwuregwu Baibul nke Kamsi",
        startButton: "Malite Egwuregwu",
        playAgainButton: "Gwuokwa",
        selectedBooksTitle: "Akwukwo Ahoputa:",
        congratulations: "🎉 Ndewo! 🎉",
        welcomeHeaven: "Nabata na Eluigwe!",
        finalScore: "Akara Ikpeazu:",
        timeCompleted: "Oge Emechara:",
        timeLabel: "Oge:",
        progressLabel: "Oganihu:",
        scoreLabel: "Akara:",
        findFirstBook: "🎯 Chota akwukwo mbu:",
        greatNowFind: "✅ Nnukwu! Ugbu a chota:",
        oopsWrong: "❌ Ehee! Nwalee ozo. Choo:"
    },
    yo: {
        gameTitle: "Ere Bibeli ti Kamsi",
        startButton: "Bere Ere",
        playAgainButton: "Tun Se",
        selectedBooksTitle: "Awon Iwe Ti A Yan:",
        congratulations: "🎉 Oriire! 🎉",
        welcomeHeaven: "Kaabo si Orun!",
        finalScore: "Abajade Ikehin:",
        timeCompleted: "Akoko Ti O Pari:",
        timeLabel: "Akoko:",
        progressLabel: "Ilosiwaju:",
        scoreLabel: "Abajade:",
        findFirstBook: "🎯 Wa iwe akoko:",
        greatNowFind: "✅ O dara! Bayi wa:",
        oopsWrong: "❌ Yiya! Gbiyanju leekansi. Wa:"
    },
    ha: {
        gameTitle: "Wasan Littafi Mai Tsarki na Kamsi",
        startButton: "Fara Wasa",
        playAgainButton: "Sake Wasa",
        selectedBooksTitle: "Littattafai Da Aka Zaba:",
        congratulations: "🎉 Mabruk! 🎉",
        welcomeHeaven: "Maraba zuwa Aljanna!",
        finalScore: "Maki Na Karshe:",
        timeCompleted: "Lokacin Da Ya Kare:",
        timeLabel: "Lokaci:",
        progressLabel: "Ci Gaba:",
        scoreLabel: "Maki:",
        findFirstBook: "🎯 Nemo littafi na farko:",
        greatNowFind: "✅ Kyakkyawa! Yanzu nemo:",
        oopsWrong: "❌ Kai! Sake gwadawa. Nemo:"
    },
    tw: {
        gameTitle: "Kamsi Bible Agoro",
        startButton: "Fi Agoro No Ase",
        playAgainButton: "San Bio",
        selectedBooksTitle: "Nhoma a Woayi:",
        congratulations: "🎉 Ayeyi! 🎉",
        welcomeHeaven: "Akwaaba Soro!",
        finalScore: "Mfaso a Eto So:",
        timeCompleted: "Bere a Ewiee:",
        timeLabel: "Bere:",
        progressLabel: "Nkosoo:",
        scoreLabel: "Mfaso:",
        findFirstBook: "🎯 Hwehwe nhoma a edi kan:",
        greatNowFind: "✅ Eye papa! Seesei hwehwe:",
        oopsWrong: "❌ Aane! San ye bio. Hwehwe:"
    },
    ak: {
        gameTitle: "Kamsi Nyame Asem Agoro",
        startButton: "Hye Agoro no Asee",
        playAgainButton: "Sane Di",
        selectedBooksTitle: "Nhoma a Woayie:",
        congratulations: "🎉 Nkamfo! 🎉",
        welcomeHeaven: "Akwaaba Soro!",
        finalScore: "Gyidie Awiee:",
        timeCompleted: "Bere a Ewiee:",
        timeLabel: "Bere:",
        progressLabel: "Ko Anim:",
        scoreLabel: "Gyidie:",
        findFirstBook: "🎯 Hwehwe nhoma a edi kan:",
        greatNowFind: "✅ Eye fe! Seesei hwehwe:",
        oopsWrong: "❌ Aane! San ye bio. Hwehwe:"
    },
    ga: {
        gameTitle: "Kamsi Bible Game",
        startButton: "Start Game",
        playAgainButton: "Play Again",
        selectedBooksTitle: "Books Chosen:",
        congratulations: "🎉 Congratulations! 🎉",
        welcomeHeaven: "Welcome to Heaven!",
        finalScore: "Final Score:",
        timeCompleted: "Time Finished:",
        timeLabel: "Time:",
        progressLabel: "Progress:",
        scoreLabel: "Score:",
        findFirstBook: "🎯 Find first book:",
        greatNowFind: "✅ Great! Now find:",
        oopsWrong: "❌ Wrong! Try again. Find:"
    },
    sw: {
        gameTitle: "Mchezo wa Biblia wa Kamsi",
        startButton: "Anza Mchezo",
        playAgainButton: "Cheza Tena",
        selectedBooksTitle: "Vitabu Vilivyochaguliwa:",
        congratulations: "🎉 Hongera! 🎉",
        welcomeHeaven: "Karibu Mbinguni!",
        finalScore: "Alama za Mwisho:",
        timeCompleted: "Muda Uliomaliza:",
        timeLabel: "Muda:",
        progressLabel: "Maendeleo:",
        scoreLabel: "Alama:",
        findFirstBook: "🎯 Tafuta kitabu cha kwanza:",
        greatNowFind: "✅ Vizuri! Sasa tafuta:",
        oopsWrong: "❌ Makosa! Jaribu tena. Tafuta:"
    },
    ki: {
        gameTitle: "Mchezo wa Biblia wa Kamsi",
        startButton: "Ambiria Mchezo",
        playAgainButton: "Ina Ringi",
        selectedBooksTitle: "Ibuku Cia Guthuurwo:",
        congratulations: "🎉 Ni kwega! 🎉",
        welcomeHeaven: "Wamukire Iguru!",
        finalScore: "Mahit Ma Kirikaniro:",
        timeCompleted: "Ihinda Ria Kurika:",
        timeLabel: "Ihinda:",
        progressLabel: "Guthii Mbere:",
        scoreLabel: "Mahit:",
        findFirstBook: "🎯 Caria ibuku ria mbere:",
        greatNowFind: "✅ Ni kwega! Riu caria:",
        oopsWrong: "❌ Ihitia! Geria ringi. Caria:"
    },
    luo: {
        gameTitle: "Chon Baibul mar Kamsi",
        startButton: "Chak Chon",
        playAgainButton: "Chon Kendo",
        selectedBooksTitle: "Kitabu Moyier:",
        congratulations: "🎉 Apaka! 🎉",
        welcomeHeaven: "Mwakruok Polo!",
        finalScore: "Ranyisi Mar Giko:",
        timeCompleted: "Kinde Motieko:",
        timeLabel: "Kinde:",
        progressLabel: "Dongruok:",
        scoreLabel: "Ranyisi:",
        findFirstBook: "🎯 Manye kitabu mokwongo:",
        greatNowFind: "✅ Ber ahinya! Koro manye:",
        oopsWrong: "❌ Rach! Tem kendo. Manye:"
    },
    ar: {
        gameTitle: "لعبة الكتاب المقدس لكامسي",
        startButton: "ابدأ اللعبة",
        playAgainButton: "العب مرة أخرى",
        selectedBooksTitle: "الكتب المختارة:",
        congratulations: "🎉 تهانينا! 🎉",
        welcomeHeaven: "أهلاً بك في الجنة!",
        finalScore: "النتيجة النهائية:",
        timeCompleted: "الوقت المكتمل:",
        timeLabel: "الوقت:",
        progressLabel: "التقدم:",
        scoreLabel: "النتيجة:",
        findFirstBook: "🎯 ابحث عن الكتاب الأول:",
        greatNowFind: "✅ عظيم! الآن ابحث عن:",
        oopsWrong: "❌ خطأ! حاول مرة أخرى. ابحث عن:"
    },
    am: {
        gameTitle: "የካምሲ መጽሀፍ ቅዱስ ጨዋታ",
        startButton: "ጨዋታ ጀምር",
        playAgainButton: "እንደገና ተጫወት",
        selectedBooksTitle: "የተመረጡ መጻሕፍት:",
        congratulations: "🎉 እንኳን ደስ አለዎት! 🎉",
        welcomeHeaven: "ወደ ሰማይ እንኳን በደኅና መጡ!",
        finalScore: "የመጨረሻ ውጤት:",
        timeCompleted: "የተፈጸመ ጊዜ:",
        timeLabel: "ጊዜ:",
        progressLabel: "ሂደት:",
        scoreLabel: "ውጤት:",
        findFirstBook: "🎯 የመጀመርያውን መጽሐፍ ፈልግ:",
        greatNowFind: "✅ በጣም ጥሩ! አሁን ፈልግ:",
        oopsWrong: "❌ ስህተት! እንደገና ሞክር። ፈልግ:"
    },
    zu: {
        gameTitle: "Umdlalo weBhayibheli kaKamsi",
        startButton: "Qala Umdlalo",
        playAgainButton: "Dlala Futhi",
        selectedBooksTitle: "Izincwadi Ezikhethiwe:",
        congratulations: "🎉 Siyakuhalalisela! 🎉",
        welcomeHeaven: "Siyakwamukela Ezulwini!",
        finalScore: "Amaphuzu Okugcina:",
        timeCompleted: "Isikhathi Esiphelele:",
        timeLabel: "Isikhathi:",
        progressLabel: "Inqubekela:",
        scoreLabel: "Amaphuzu:",
        findFirstBook: "🎯 Thola incwadi yokuqala:",
        greatNowFind: "✅ Kuhle! Manje thola:",
        oopsWrong: "❌ Iphutha! Zama futhi. Thola:"
    },
    xh: {
        gameTitle: "Umdlalo weBhayibhile kaKamsi",
        startButton: "Qala Umdlalo",
        playAgainButton: "Dlala Kwakhona",
        selectedBooksTitle: "Iincwadi Ezikhethiweyo:",
        congratulations: "🎉 Sivuyisana nawe! 🎉",
        welcomeHeaven: "Wamkelekile Ezulwini!",
        finalScore: "Amanqaku Okugqibela:",
        timeCompleted: "Ixesha Eligqityiweyo:",
        timeLabel: "Ixesha:",
        progressLabel: "Inkqubela:",
        scoreLabel: "Amanqaku:",
        findFirstBook: "🎯 Fumana incwadi yokuqala:",
        greatNowFind: "✅ Kulungile! Ngoku fumana:",
        oopsWrong: "❌ Impazamo! Zama kwakhona. Fumana:"
    },
    af: {
        gameTitle: "Kamsi se Bybel Spel",
        startButton: "Begin Spel",
        playAgainButton: "Speel Weer",
        selectedBooksTitle: "Gekose Boeke:",
        congratulations: "🎉 Baie Geluk! 🎉",
        welcomeHeaven: "Welkom in die Hemel!",
        finalScore: "Finale Telling:",
        timeCompleted: "Voltooide Tyd:",
        timeLabel: "Tyd:",
        progressLabel: "Vordering:",
        scoreLabel: "Telling:",
        findFirstBook: "🎯 Vind die eerste boek:",
        greatNowFind: "✅ Uitstekend! Nou vind:",
        oopsWrong: "❌ Verkeerd! Probeer weer. Vind:"
    },
    sn: {
        gameTitle: "Mutambo weBhaibheri waKamsi",
        startButton: "Tanga Mutambo",
        playAgainButton: "Tamba Zvakare",
        selectedBooksTitle: "Mabhuku Akasarudzwa:",
        congratulations: "🎉 Makorokoto! 🎉",
        welcomeHeaven: "Mauya kuDenga!",
        finalScore: "Zvibvumirano Zvekupedzisira:",
        timeCompleted: "Nguva Yakapera:",
        timeLabel: "Nguva:",
        progressLabel: "Kufambira Mberi:",
        scoreLabel: "Zvibvumirano:",
        findFirstBook: "🎯 Tsvaka bhuku rekutanga:",
        greatNowFind: "✅ Zvakanaka! Zvino tsvaka:",
        oopsWrong: "❌ Zvakakanganisa! Edza zvakare. Tsvaka:"
    },
    ny: {
        gameTitle: "Masewera a Baibulo a Kamsi",
        startButton: "Yambitsani Masewera",
        playAgainButton: "Seweranso",
        selectedBooksTitle: "Mabuku Osankhidwa:",
        congratulations: "🎉 Zikomo Kwambiri! 🎉",
        welcomeHeaven: "Mwalandiridwa Kumwamba!",
        finalScore: "Mapointi Omaliza:",
        timeCompleted: "Nthawi Yotha:",
        timeLabel: "Nthawi:",
        progressLabel: "Kupita Patsogolo:",
        scoreLabel: "Mapointi:",
        findFirstBook: "🎯 Pezani bukuli loyamba:",
        greatNowFind: "✅ Zabwino! Tsopano pezani:",
        oopsWrong: "❌ Cholakwika! Yesaninso. Pezani:"
    },
    rw: {
        gameTitle: "Umukino wa Bibiliya wa Kamsi",
        startButton: "Tangira Umukino",
        playAgainButton: "Kina Kindi",
        selectedBooksTitle: "Ibitabo Byahiswemo:",
        congratulations: "🎉 Twishimiye! 🎉",
        welcomeHeaven: "Murakaza neza mu Ijuru!",
        finalScore: "Amanota yo Kurangiza:",
        timeCompleted: "Igihe Cyarangiye:",
        timeLabel: "Igihe:",
        progressLabel: "Iterambere:",
        scoreLabel: "Amanota:",
        findFirstBook: "🎯 Shakisha igitabo cya mbere:",
        greatNowFind: "✅ Ni byiza! Ubu shakisha:",
        oopsWrong: "❌ Sibyo! Gerageza kandi. Shakisha:"
    },
    wo: {
        gameTitle: "Xeex BiibEl bi Kamsi",
        startButton: "Tambali Xeex",
        playAgainButton: "Tambali Kenn",
        selectedBooksTitle: "Teere yi nu tann:",
        congratulations: "🎉 Jerejef! 🎉",
        welcomeHeaven: "Dalaal ci Asamaan!",
        finalScore: "Point yu mujj:",
        timeCompleted: "Waxtu bu jeex:",
        timeLabel: "Waxtu:",
        progressLabel: "Yagguwaat:",
        scoreLabel: "Point:",
        findFirstBook: "🎯 Wut teere bu njekk:",
        greatNowFind: "✅ Baax na! Leegi wut:",
        oopsWrong: "❌ Jaar! Jeemaat kenn. Wut:"
    },
};

let currentLanguage = 'en';
let currentBookIndex = 0;
let score = 0;
let wrongAttempts = 0;
let startTime = 0;
let gameTimer = null;
const circles = [];

function changeLanguage(lang) {
    currentLanguage = lang;
    updateUILanguage();
    
    // If game is currently active (circles are loaded), reload them with new language
    if (document.getElementById('game-container').style.display === 'block') {
        loadGame(); // Reload circles with new language
        updateMessage(); // Update the current message with new language
    }
}

function updateUILanguage() {
    const t = translations[currentLanguage];
    
    document.getElementById('game-title').textContent = t.gameTitle;
    document.getElementById('start-button').textContent = t.startButton;
    document.getElementById('selected-books-title').textContent = t.selectedBooksTitle;
    document.getElementById('congratulations-text').textContent = t.congratulations;
    document.getElementById('heaven-text').textContent = t.welcomeHeaven;
    document.getElementById('final-score-text').innerHTML = `${t.finalScore} <span id="final-score">${document.getElementById('final-score').textContent}</span>`;
    document.getElementById('final-time-text').innerHTML = `${t.timeCompleted} <span id="final-time">${document.getElementById('final-time').textContent}</span>`;
    document.getElementById('play-again-button').textContent = t.playAgainButton;
    
    // Update score container labels
    document.getElementById('time-label').innerHTML = `${t.timeLabel} <span id="game-time">${document.getElementById('game-time').textContent}</span>`;
    document.getElementById('progress-label').innerHTML = `${t.progressLabel} <span id="current-book">${document.getElementById('current-book').textContent}</span>/<span id="total-books">${document.getElementById('total-books').textContent}</span>`;
    document.getElementById('score-label').innerHTML = `${t.scoreLabel} <span id="score">${document.getElementById('score').textContent}</span>`;
}

function startGame() {
    console.log("Game started in language:", currentLanguage);

    // Hide the home screen and game over screen, show the game container
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('selected-books').style.display = 'block';
    document.getElementById('score-container').style.display = 'block';
    document.getElementById('restart-button').style.display = 'block';

    // Clear the list of selected books and reset counters
    document.getElementById('book-list').innerHTML = '';
    currentBookIndex = 0;
    score = 0;
    wrongAttempts = 0;
    circles.length = 0;

    // Start the timer
    startTime = Date.now();
    startGameTimer();

    updateScore();
    updateProgress();
    loadGame();
    animateCircles();
}

function restartGame() {
    // Stop any running timer
    if (gameTimer) {
        clearInterval(gameTimer);
        gameTimer = null;
    }
    
    // Hide all game elements
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('selected-books').style.display = 'none';
    document.getElementById('score-container').style.display = 'none';
    document.getElementById('restart-button').style.display = 'none';
    document.getElementById('message').textContent = '';
    
    // Show start button
    document.querySelector('.start-button').style.display = 'block';
    
    // Reset game variables
    currentBookIndex = 0;
    score = 0;
    wrongAttempts = 0;
    circles.length = 0;
    document.getElementById('book-list').innerHTML = '';
    
    // Reset score displays
    document.getElementById('score').textContent = '0';
    document.getElementById('current-book').textContent = '0';
    document.getElementById('game-time').textContent = '0:00';
    document.getElementById('progress-fill').style.width = '0%';
}

function loadGame() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = '';

    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;

    const currentBooks = bibleBooks[currentLanguage];
    const shuffledBooks = shuffleArray([...currentBooks]);
    const colors = [
        'linear-gradient(135deg, #ff9a9e, #fecfef)',
        'linear-gradient(135deg, #a8edea, #fed6e3)',
        'linear-gradient(135deg, #d299c2, #fef9d7)',
        'linear-gradient(135deg, #89f7fe, #66a6ff)',
        'linear-gradient(135deg, #fdbb2d, #22c1c3)',
        'linear-gradient(135deg, #ff9a9e, #fad0c4)',
        'linear-gradient(135deg, #a18cd1, #fbc2eb)'
    ];

    shuffledBooks.forEach((book, index) => {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.textContent = book;
        
        // Random color for each circle
        circle.style.background = colors[Math.floor(Math.random() * colors.length)];

        circle.addEventListener('click', () => checkAnswer(circle, book));

        const circleObj = {
            element: circle,
            x: Math.random() * (containerWidth - 120),
            y: Math.random() * (containerHeight - 120),
            dx: (Math.random() * 2 - 1) * 2,
            dy: (Math.random() * 2 - 1) * 2,
        };

        circle.style.left = `${circleObj.x}px`;
        circle.style.top = `${circleObj.y}px`;

        circles.push(circleObj);
        gameContainer.appendChild(circle);
    });

    updateMessage();
}

function animateCircles() {
    const gameContainer = document.getElementById('game-container');
    const containerRect = gameContainer.getBoundingClientRect();

    function moveCircles() {
        circles.forEach((circleObj, index) => {
            let { x, y, dx, dy, element } = circleObj;

            // Update the position based on speed and direction
            x += dx;
            y += dy;

            // Check for collision with walls and bounce back
            if (x + element.clientWidth > containerRect.width || x < 0) {
                circleObj.dx = -dx;  // Reverse direction on X axis
            }
            if (y + element.clientHeight > containerRect.height || y < 0) {
                circleObj.dy = -dy;  // Reverse direction on Y axis
            }

            // Update the new position
            circleObj.x += circleObj.dx;
            circleObj.y += circleObj.dy;

            element.style.left = `${circleObj.x}px`;
            element.style.top = `${circleObj.y}px`;
        });

        if (circles.length > 0) {
            requestAnimationFrame(moveCircles);
        }
    }

    moveCircles();
}

function checkAnswer(circle, selectedBook) {
    const correctSound = document.getElementById('correct-sound');
    const wrongSound = document.getElementById('wrong-sound');
    const currentBooks = bibleBooks[currentLanguage];

    if (selectedBook === currentBooks[currentBookIndex]) {
        // Correct answer
        if (correctSound) correctSound.play();  // Play the correct sound
        circle.classList.add('correct');
        score += Math.max(100 - (wrongAttempts * 10), 10); // Bonus for fewer wrong attempts
        wrongAttempts = 0; // Reset wrong attempts for next book

        // Create particle effect
        createParticleEffect(circle);

        // Add the correct book to the list
        const bookList = document.getElementById('book-list');
        const listItem = document.createElement('li');
        listItem.textContent = selectedBook;
        bookList.appendChild(listItem);

        // Remove circle after animation
        setTimeout(() => {
            circle.style.display = 'none';
            const circleIndex = circles.findIndex(c => c.element === circle);
            if (circleIndex > -1) {
                circles.splice(circleIndex, 1);
            }
        }, 500);

        currentBookIndex++;
        updateScore();
        updateProgress();
        updateMessage();

        if (currentBookIndex === currentBooks.length) {
            // Stop the timer
            if (gameTimer) {
                clearInterval(gameTimer);
                gameTimer = null;
            }
            
            setTimeout(() => {
                const finalTime = Math.floor((Date.now() - startTime) / 1000);
                const minutes = Math.floor(finalTime / 60);
                const seconds = finalTime % 60;
                const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                
                document.getElementById('game-container').style.display = 'none';
                document.getElementById('final-score').textContent = score;
                document.getElementById('final-time').textContent = timeString;
                
                // Update final screen with current language
                const t = translations[currentLanguage];
                document.getElementById('final-score-text').innerHTML = `${t.finalScore} <span id="final-score">${score}</span>`;
                document.getElementById('final-time-text').innerHTML = `${t.timeCompleted} <span id="final-time">${timeString}</span>`;
                
                document.getElementById('game-over').style.display = 'block';
            }, 800);
        }
    } else {
        // Wrong answer
        if (wrongSound) wrongSound.play();  // Play the wrong sound
        circle.classList.add('wrong');
        wrongAttempts++;
        
        setTimeout(() => {
            circle.classList.remove('wrong');
        }, 500);
        
        updateMessage(true);
    }
}

function createParticleEffect(circle) {
    const rect = circle.getBoundingClientRect();
    const gameContainer = document.getElementById('game-container');
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = (rect.left - gameContainer.getBoundingClientRect().left + rect.width/2) + 'px';
        particle.style.top = (rect.top - gameContainer.getBoundingClientRect().top + rect.height/2) + 'px';
        particle.style.animationDelay = `${i * 0.1}s`;
        
        gameContainer.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 2000);
    }
}

function updateScore() {
    document.getElementById('score').textContent = score;
}

function updateProgress() {
    const currentBooks = bibleBooks[currentLanguage];
    const progressPercent = (currentBookIndex / currentBooks.length) * 100;
    document.getElementById('progress-fill').style.width = progressPercent + '%';
    document.getElementById('current-book').textContent = currentBookIndex;
    document.getElementById('total-books').textContent = currentBooks.length;
}

function updateMessage(isWrong = false) {
    const messageEl = document.getElementById('message');
    const currentBooks = bibleBooks[currentLanguage];
    const t = translations[currentLanguage];
    
    if (currentBookIndex >= currentBooks.length) return;
    
    if (isWrong) {
        messageEl.innerHTML = `${t.oopsWrong} <strong>${currentBooks[currentBookIndex]}</strong>`;
        messageEl.style.color = '#ff4757';
    } else if (currentBookIndex === 0) {
        messageEl.innerHTML = `${t.findFirstBook} <strong>${currentBooks[currentBookIndex]}</strong>`;
        messageEl.style.color = '#fff';
    } else {
        messageEl.innerHTML = `${t.greatNowFind} <strong>${currentBooks[currentBookIndex]}</strong>`;
        messageEl.style.color = '#2ed573';
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function retryGame() {
    // Stop any running timer
    if (gameTimer) {
        clearInterval(gameTimer);
        gameTimer = null;
    }
    
    document.getElementById('game-over').style.display = 'none';
    currentBookIndex = 0;
    score = 0;
    wrongAttempts = 0;
    circles.length = 0;
    document.getElementById('book-list').innerHTML = '';
    startGame();
}

// Responsive adjustments
window.addEventListener('resize', adjustGameLayout);
adjustGameLayout();

function adjustGameLayout() {
    const screenWidth = window.innerWidth;
    const selectedBooks = document.getElementById('selected-books');
    const circles = document.querySelectorAll('.circle');

    if (screenWidth < 480) {
        selectedBooks.style.width = '40%';
        circles.forEach(circle => {
            circle.style.width = '60px';
            circle.style.height = '60px';
        });
    } else if (screenWidth < 768) {
        selectedBooks.style.width = '30%';
        circles.forEach(circle => {
            circle.style.width = '80px';
            circle.style.height = '80px';
        });
    } else {
        selectedBooks.style.width = '20%';
        circles.forEach(circle => {
            circle.style.width = '120px';
            circle.style.height = '120px';
        });
    }
}

// Timer functions
function startGameTimer() {
    gameTimer = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsedTime / 60);
        const seconds = elapsedTime % 60;
        const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('game-time').textContent = timeString;
    }, 1000);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    updateUILanguage();
});