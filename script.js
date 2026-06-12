/* ============================================================
   MUNIRAH ALMAHMOUD — Interior Design Portfolio — script.js
   ============================================================ */

'use strict';

/* ══════════════════════════════════════════════════
   1. TRANSLATIONS (EN / AR)
   ══════════════════════════════════════════════════ */
const translations = {
  en: {
    'nav-about':     'About',
    'nav-skills':    'Skills',
    'nav-process':   'Process',
    'nav-portfolio': 'Portfolio',
    'nav-services':  'Services',
    'nav-contact':   'Contact',

    'hero-eyebrow':  'Interior Designer',
    'hero-name1':    'Munirah',
    'hero-name2':    'Almahmoud',
    'hero-tagline':  'Crafting spaces that are modern, elegant & deeply personal',
    'hero-cta1':     'View Projects',
    'hero-cta2':     'Get in Touch',
    'hero-scroll':   'Scroll',

    'about-num':     '01 — About',
    'about-name1':   'Munirah Bader',
    'about-name2':   'Almahmoud',
    'about-quote':   '"Creating spaces that are modern, elegant, and deeply comfortable — through calm colours, natural materials, and simple details."',
    'about-bio1':    'I am Munirah Almahmoud, an interior designer specialising in residential and commercial spaces. I strive to deliver design solutions that unite beauty and function — creating a comfortable and distinctive experience for every user.',
    'about-bio2':    'My approach centres on making the most of every space, offering practical solutions that are carefully tailored to meet the unique needs of each project.',
    'about-bio3':    '',
    'stat-label-1':  'Projects Completed',
    'stat-label-2':  'Software Tools',
    'stat-label-3':  'Project Types',

    'skills-num':       '02 — Expertise',
    'skills-heading':   'Skills & Software',
    'skills-col1':      'Design Competencies',
    'skills-col2':      'Software Proficiency',
    'skill-1':          'Space Planning & Arrangement',
    'skill-2':          'Interior Design Concepts',
    'skill-3':          'Mood Boards & Colour Palettes',
    'skill-4':          'Material & Finish Selection',
    'skill-5':          'Lighting Design',
    'skill-6':          'Furniture Layout & Coordination',

    'process-num':      '03 — Approach',
    'process-heading':  'The Design Process',
    'process-sub':      'A thoughtful, collaborative journey from first conversation to final reveal.',
    'step-1-title':     'Understanding the Client',
    'step-1-desc':      'Deep listening to understand needs, lifestyle aspirations, and functional requirements.',
    'step-2-title':     'Concept Development',
    'step-2-desc':      'Translating ideas into a cohesive design narrative — mood boards, palettes, and spatial concepts.',
    'step-3-title':     'Space Planning',
    'step-3-desc':      'Precise floor plans and furniture layouts that maximise flow, function, and beauty.',
    'step-4-title':     'Material & Colour Selection',
    'step-4-desc':      'Curating every surface, texture, and finish to align perfectly with the design concept.',
    'step-5-title':     'Details & Coordination',
    'step-5-desc':      'Overseeing procurement, lighting, styling, and the art direction of every final detail.',

    'portfolio-num':     '04 — Work',
    'portfolio-heading': 'Selected Projects',
    'filter-all':        'All Projects',
    'filter-res':        'Residential',
    'filter-com':        'Commercial',
    'filter-hos':        'Hospitality & Spa',

    'services-num':     '05 — What I Offer',
    'services-heading': 'Services',
    'svc-1-title':      'Interior Design',
    'svc-1-desc':       'Comprehensive design solutions — from concept to completion — tailored to your personality and spatial requirements.',
    'svc-2-title':      'Space Planning',
    'svc-2-desc':       'Intelligent floor plan layouts that maximise every square metre while ensuring intuitive flow and functional comfort.',
    'svc-3-title':      'Furniture Layout',
    'svc-3-desc':       'Expert furniture selection and placement — balancing scale, proportion, and style to bring the design concept to life.',
    'svc-4-title':      'Material Selection',
    'svc-4-desc':       'Curating materials, surfaces, and finishes that are beautiful and enduring — aligned with concept and budget.',
    'svc-5-title':      'Mood Board Curation',
    'svc-5-desc':       'Visual storytelling through carefully composed mood boards that capture the soul of your project before a wall is touched.',
    'svc-6-title':      'Lighting Design',
    'svc-6-desc':       'Layered lighting strategies that enhance atmosphere, accentuate architecture, and create the perfect ambience.',

    'contact-num':      '06 — Let\'s Connect',
    'contact-heading':  'Get in Touch',
    'contact-sub':      'Whether you have a project in mind or simply want to say hello — I\'d love to hear from you.',
    'contact-email-label':   'Email',
    'contact-phone-label':   'Phone',
    'contact-loc-label':     'Based In',
    'contact-loc-value':     'Saudi Arabia',
    'contact-dl-cv':         'Download CV',
    'contact-dl-pdf':        'Portfolio PDF',
    'form-name-label':       'Full Name',
    'form-name-ph':          'Your name',
    'form-email-label':      'Email Address',
    'form-email-ph':         'your@email.com',
    'form-subject-label':    'Subject',
    'form-subject-ph':       'Project inquiry, collaboration…',
    'form-msg-label':        'Message',
    'form-msg-ph':           'Tell me about your project…',
    'form-submit':           'Send Message',

    'footer-copy':      'Every space tells a story. My role is to shape it.',
    'footer-about':     'About',
    'footer-work':      'Work',
    'footer-contact':   'Contact',
  },

  ar: {
    'nav-about':     'نبذة عني',
    'nav-skills':    'المهارات',
    'nav-process':   'المنهجية',
    'nav-portfolio': 'الأعمال',
    'nav-services':  'الخدمات',
    'nav-contact':   'تواصل معي',

    'hero-eyebrow':  'مصممة داخلية',
    'hero-name1':    'منيرة',
    'hero-name2':    'المحمود',
    'hero-tagline':  'أصنع فراغات عصرية وأنيقة تعكس شخصيتك',
    'hero-cta1':     'استعرض الأعمال',
    'hero-cta2':     'تواصل معي',
    'hero-scroll':   'تمرير',

    'about-num':     '01 — نبذة',
    'about-name1':   'منيرة بدر',
    'about-name2':   'المحمود',
    'about-quote':   '"خلق فراغات عصرية وأنيقة ومريحة — من خلال الألوان الهادئة والمواد الطبيعية والتفاصيل البسيطة."',
    'about-bio1':    'أنا منيرة المحمود، مصممة داخلية متخصصة في تصميم المساحات السكنية والتجارية، أسعى إلى تقديم حلول تصميمية تجمع بين الجمال والوظيفة وتحقق تجربة مريحة ومميزة للمستخدم.',
    'about-bio2':    'مع الاستفادة المثلى من المساحات وتقديم حلول تصميمية عملية تلبي احتياجات المشروع.',
    'about-bio3':    '',
    'stat-label-1':  'مشاريع منجزة',
    'stat-label-2':  'برامج تصميم',
    'stat-label-3':  'أنواع المشاريع',

    'skills-num':       '02 — الخبرات',
    'skills-heading':   'المهارات والبرامج',
    'skills-col1':      'الكفاءات التصميمية',
    'skills-col2':      'إتقان البرامج',
    'skill-1':          'تخطيط الفراغ وترتيبه',
    'skill-2':          'مفاهيم التصميم الداخلي',
    'skill-3':          'لوحات الإلهام وتنسيق الألوان',
    'skill-4':          'اختيار المواد والتشطيبات',
    'skill-5':          'تصميم الإضاءة',
    'skill-6':          'تنسيق الأثاث وتوزيعه',

    'process-num':      '03 — المنهجية',
    'process-heading':  'منهجية التصميم',
    'process-sub':      'رحلة متأنية وتشاركية من أول حوار وحتى اللحظة النهائية.',
    'step-1-title':     'فهم العميل',
    'step-1-desc':      'الاستماع العميق لفهم الاحتياجات وأسلوب الحياة والمتطلبات الوظيفية.',
    'step-2-title':     'تطوير المفهوم',
    'step-2-desc':      'تحويل الأفكار إلى سردية تصميمية متماسكة — لوحات إلهام وألوان ومفاهيم مكانية.',
    'step-3-title':     'تخطيط الفراغ',
    'step-3-desc':      'مخططات دقيقة وتوزيع أثاث يعظّم الحركة والوظيفة والجمال.',
    'step-4-title':     'اختيار المواد والألوان',
    'step-4-desc':      'انتقاء كل سطح وملمس وتشطيب ليتوافق تماماً مع رؤية التصميم.',
    'step-5-title':     'التفاصيل والتنسيق',
    'step-5-desc':      'الإشراف على التوريد والإضاءة والتصميم الفني لكل تفصيل نهائي.',

    'portfolio-num':     '04 — الأعمال',
    'portfolio-heading': 'مشاريع مختارة',
    'filter-all':        'جميع المشاريع',
    'filter-res':        'سكني',
    'filter-com':        'تجاري',
    'filter-hos':        'ضيافة وسبا',

    'services-num':     '05 — خدماتي',
    'services-heading': 'الخدمات',
    'svc-1-title':      'التصميم الداخلي',
    'svc-1-desc':       'حلول تصميمية شاملة — من المفهوم إلى الإنجاز — مصممة خصيصاً لشخصيتك ومتطلباتك.',
    'svc-2-title':      'تخطيط الفراغ',
    'svc-2-desc':       'تصاميم مخططات ذكية تستثمر كل متر مربع مع ضمان انسيابية الحركة والراحة الوظيفية.',
    'svc-3-title':      'تنسيق الأثاث',
    'svc-3-desc':       'اختيار واستثمار الأثاث باحترافية — موازناً بين الحجم والتناسب والأسلوب.',
    'svc-4-title':      'اختيار المواد',
    'svc-4-desc':       'انتقاء المواد والأسطح والتشطيبات الجميلة والمتينة بما يتوافق مع المفهوم والميزانية.',
    'svc-5-title':      'لوحات الإلهام',
    'svc-5-desc':       'سرد بصري من خلال لوحات إلهام دقيقة تجسّد روح مشروعك قبل أن تُلمس الجدران.',
    'svc-6-title':      'تصميم الإضاءة',
    'svc-6-desc':       'استراتيجيات إضاءة متعددة الطبقات تعزز الجو وتبرز العمارة وتخلق الأجواء المثالية.',

    'contact-num':      '06 — تواصل',
    'contact-heading':  'تواصل معي',
    'contact-sub':      'سواء كان لديك مشروع في ذهنك أو تودّ فقط أن تقول مرحباً — يسعدني الاستماع إليك.',
    'contact-email-label':   'البريد الإلكتروني',
    'contact-phone-label':   'الهاتف',
    'contact-loc-label':     'الموقع',
    'contact-loc-value':     'المملكة العربية السعودية',
    'contact-dl-cv':         'تحميل السيرة الذاتية',
    'contact-dl-pdf':        'تحميل البورتفوليو',
    'form-name-label':       'الاسم الكامل',
    'form-name-ph':          'اسمك',
    'form-email-label':      'البريد الإلكتروني',
    'form-email-ph':         'your@email.com',
    'form-subject-label':    'الموضوع',
    'form-subject-ph':       'استفسار عن مشروع، تعاون…',
    'form-msg-label':        'الرسالة',
    'form-msg-ph':           'أخبرني عن مشروعك…',
    'form-submit':           'إرسال الرسالة',

    'footer-copy':      'كل مساحة تحكي قصة. دوري هو أن أصنعها.',
    'footer-about':     'نبذة',
    'footer-work':      'الأعمال',
    'footer-contact':   'تواصل',
  }
};

/* ══════════════════════════════════════════════════
   2. PROJECT DATA
   All real project data extracted from PDF portfolio
   ══════════════════════════════════════════════════ */

const projectData = {

  /* ─── PROJECT 01 — Living Room (Munirah Project) ─── */
  'living-room': {
    title:    'Munirah Living Room',
    titleAr:  'غرفة معيشة منيرة',
    category: 'Residential',
    categoryAr: 'سكني',
    year:     '2024',
    location: 'Saudi Arabia',
    locationAr: 'المملكة العربية السعودية',
    area:     '—',
    style:    'Modern & Cozy Contemporary',
    styleAr:  'عصري ودافئ',
    software: '3ds Max',
    status:   'Completed',
    statusAr: 'منجز',

    heroImage: 'images/p1-render-1.jpg',

    overview: `This living room project — titled "Munirah Project" — explores the harmony
    between modern design and everyday comfort. The brief was clear: a space that is
    contemporary in form yet warm and inviting in feel.`,

    overviewAr: `هذا المشروع يستكشف التناغم بين التصميم العصري وراحة الحياة اليومية. كانت المهمة واضحة: مساحة عصرية في شكلها، دافئة ومرحبة في روحها.`,

    concept: `"The room has a modern and cozy vibe." The soft colours — beige and white —
    create a relaxing atmosphere, while the green rug and plants add a lively touch.
    Contemporary lighting and minimal décor bring beauty without overcomplicating the
    design. It is practical and perfect for relaxation or reading.`,

    conceptAr: `الألوان الهادئة من البيج والأبيض تخلق جواً مريحاً، بينما تضيف السجادة الخضراء والنباتات لمسة حيوية. الإضاءة العصرية والديكور البسيط يجلبان الجمال دون تعقيد.`,

    colors: [
      { hex: '#F5F0E8', name: 'Warm Cream' },
      { hex: '#B5A08A', name: 'Warm Taupe' },
      { hex: '#6B4E35', name: 'Walnut Brown' },
      { hex: '#7D8C5A', name: 'Sage Green' },
      { hex: '#9E4E4E', name: 'Dusty Rose' },
    ],

    materials: [
      { name: 'Warm Plaster Wall',   bg: 'linear-gradient(135deg,#E8DED3,#C4AD97)', label: 'Wall Finish' },
      { name: 'Oak Herringbone',     bg: 'linear-gradient(135deg,#C4A882,#8B6845)', label: 'Floor' },
      { name: 'White Bouclé Sofa',   bg: 'linear-gradient(135deg,#F5F0E8,#E0D6C8)', label: 'Upholstery' },
      { name: 'Walnut Joinery',      bg: 'linear-gradient(135deg,#8B6845,#6B4E3D)', label: 'Wood Detail' },
    ],

    renders: [
      'images/p1-render-1.jpg',
      'images/p1-render-2.jpg',
    ],

    moodboard: [
      'images/p1-render-1.jpg',
      'images/p1-render-2.jpg',
    ],

    floorPlan: null,
  },

  /* ─── PROJECT 02 — Master Bedroom ─── */
  'master-bedroom': {
    title:    'Master Bedroom',
    titleAr:  'غرفة النوم الرئيسية',
    category: 'Residential',
    categoryAr: 'سكني',
    year:     '2024',
    location: 'Saudi Arabia',
    locationAr: 'المملكة العربية السعودية',
    area:     '—',
    style:    'Luxury Dark Contemporary',
    styleAr:  'فاخر داكن عصري',
    software: '3ds Max',
    status:   'Completed',
    statusAr: 'منجز',

    heroImage: 'images/p2-hero.jpg',

    overview: `A master bedroom designed around the idea of a private sanctuary — a room that
    envelops you in warmth and quiet luxury the moment you step inside.`,

    overviewAr: `غرفة نوم رئيسية مصممة حول فكرة الملاذ الخاص — فضاء يلفّك بالدفء والفخامة الهادئة من اللحظة التي تدخل فيها.`,

    concept: `Dark, moody tones of deep charcoal and warm wood create a sophisticated backdrop.
    Vertical slatted timber screens divide zones with architectural precision, while layered
    lighting brings each corner to life. The dressing area is a study in functional luxury.`,

    conceptAr: `الألوان الداكنة الغنية مع الخشب الدافئ تخلق خلفية راقية. الشاشات الخشبية العمودية تقسم المناطق بدقة معمارية، بينما تضيء الطبقات الإضائية كل زاوية.`,

    colors: [
      { hex: '#2C2018', name: 'Dark Espresso' },
      { hex: '#5A4030', name: 'Warm Walnut' },
      { hex: '#C4A882', name: 'Antique Gold' },
      { hex: '#8B7A65', name: 'Greige' },
      { hex: '#E8DED3', name: 'Soft Cream' },
    ],

    materials: [
      { name: 'Slatted Timber Screen', bg: 'linear-gradient(135deg,#8B6845,#5A4030)', label: 'Wood Feature' },
      { name: 'Microcement Wall',      bg: 'linear-gradient(135deg,#8B7A65,#6B5C4A)', label: 'Wall Finish' },
      { name: 'Charcoal Linen',        bg: 'linear-gradient(135deg,#3D2E20,#2C2018)', label: 'Bedding' },
      { name: 'Brass Detail',          bg: 'linear-gradient(135deg,#C4A882,#A07840)', label: 'Metal Finish' },
    ],

    renders: [
      'images/p2-render-1.jpg',
      'images/p2-render-2.jpg',
      'images/p2-render-3.jpg',
      'images/p2-hero.jpg',
    ],

    moodboard: [
      'images/p2-render-1.jpg',
      'images/p2-render-2.jpg',
      'images/p2-render-3.jpg',
      'images/p2-hero.jpg',
    ],

    floorPlan: null,
  },

  /* ─── PROJECT 03 — Master Bathroom ─── */
  'master-bathroom': {
    title:    'Master Bathroom',
    titleAr:  'الحمام الرئيسي',
    category: 'Residential',
    categoryAr: 'سكني',
    year:     '2024',
    location: 'Saudi Arabia',
    locationAr: 'المملكة العربية السعودية',
    area:     '—',
    style:    'Modern Spa Residential',
    styleAr:  'سبا سكني حديث',
    software: '3ds Max',
    status:   'Completed',
    statusAr: 'منجز',

    heroImage: 'images/p3-hero.jpg',

    overview: `A master bathroom conceived as a private spa retreat — combining the
    functionality of a family bathroom with the atmospheric quality of a five-star wellness facility.`,

    overviewAr: `حمام رئيسي مُتصوَّر كملاذ سبا خاص — يجمع بين وظيفية الحمام العائلي والجودة الجوية لمرفق عافية خمس نجوم.`,

    concept: `Large-format blush stone tiles wrap walls and floors in a single continuous surface.
    Three floor-to-ceiling window bays flood the space with natural light. The freestanding
    soaking tub anchors the composition as a sculptural centrepiece.`,

    conceptAr: `بلاطات الحجر الوردي بالحجم الكبير تُغلّف الجدران والأرضيات في سطح متصل واحد. ثلاثة نوافذ من السقف للأرضية تملأ الفضاء بالضوء الطبيعي. البانيو الحر يرسّخ التكوين كمحور نحتي.`,

    colors: [
      { hex: '#D9BFB5', name: 'Blush Stone' },
      { hex: '#C4A898', name: 'Warm Mauve' },
      { hex: '#3D2B20', name: 'Dark Bronze' },
      { hex: '#F0E8E2', name: 'Pale Rose' },
      { hex: '#8B6858', name: 'Dusty Copper' },
    ],

    materials: [
      { name: 'Large Format Stone Tile', bg: 'linear-gradient(135deg,#D9BFB5,#C4A898)', label: 'Floor & Wall' },
      { name: 'Matte Black Steel Frame',  bg: 'linear-gradient(135deg,#2C2018,#3D2B20)', label: 'Glass Partition' },
      { name: 'Freestanding Resin Tub',   bg: 'linear-gradient(135deg,#F0E8E2,#E0D0C6)', label: 'Sanitary Ware' },
      { name: 'Floating Vanity',          bg: 'linear-gradient(135deg,#8B6858,#6B4840)', label: 'Cabinetry' },
    ],

    renders: [
      'images/p3-render-1.jpg',
      'images/p3-render-2.jpg',
      'images/p3-render-3.jpg',
      'images/p3-render-4.jpg',
      'images/p3-hero.jpg',
    ],

    moodboard: [
      'images/p3-render-1.jpg',
      'images/p3-render-2.jpg',
      'images/p3-render-3.jpg',
      'images/p3-render-4.jpg',
    ],

    floorPlan: null,
  },

  /* ─── PROJECT 04 — Nails Spa ─── */
  'nails-spa': {
    title:    'Nails Spa',
    titleAr:  'صالون الأظافر والسبا',
    category: 'Hospitality & Spa',
    categoryAr: 'ضيافة وسبا',
    year:     '2024',
    location: 'Saudi Arabia',
    locationAr: 'المملكة العربية السعودية',
    area:     '—',
    style:    'Contemporary Wellness',
    styleAr:  'عافية عصرية',
    software: 'AutoCAD & Photoshop',
    status:   'Completed',
    statusAr: 'منجز',

    heroImage: 'images/p4-moodboard.jpg',

    overview: `A thoughtfully designed nail spa that balances beauty, function and quiet indulgence.
    The floor plan was developed in AutoCAD and visualised with Photoshop mood boards.`,

    overviewAr: `صالون أظافر مصمم بعناية يوازن بين الجمال والوظيفة والمتعة الهادئة. المخطط طُوِّر في AutoCAD وصُوِّر بلوحات إلهام في Photoshop.`,

    concept: `The design concept is rooted in a natural, botanical warmth. Terrazzo floors,
    dark walnut joinery, arched cabinetry details, and brass pendant lighting add depth.
    A central olive tree anchors the reception.`,

    conceptAr: `مفهوم التصميم متجذّر في الدفء النباتي الطبيعي. أرضيات تيرازو، خشب جوز داكن، تفاصيل معقودة، وإضاءة نحاسية. شجرة زيتون مركزية ترسّخ مدخل الاستقبال.`,

    colors: [
      { hex: '#EDE8E0', name: 'Terrazzo Cream' },
      { hex: '#6B4E35', name: 'Dark Walnut' },
      { hex: '#B89164', name: 'Brass Gold' },
      { hex: '#7D8C5A', name: 'Olive Green' },
      { hex: '#9B7B9B', name: 'Dusty Purple' },
    ],

    materials: [
      { name: 'Terrazzo Floor',       bg: 'linear-gradient(135deg,#EDE8E0,#D4C9B8)', label: 'Flooring' },
      { name: 'Dark Walnut Joinery',  bg: 'linear-gradient(135deg,#6B4E35,#4A3225)', label: 'Cabinetry' },
      { name: 'Brass Lattice Screen', bg: 'linear-gradient(135deg,#C9A96E,#A07840)', label: 'Feature Screen' },
      { name: 'Linen Wall Texture',   bg: 'linear-gradient(135deg,#E8E0D4,#D4C9B8)', label: 'Wall Finish' },
    ],

    renders: [
      'images/p4-moodboard.jpg',
      'images/p4-mood-1.jpg',
      'images/p4-mood-2.jpg',
      'images/p4-mood-3.jpg',
      'images/p4-mood-4.jpg',
    ],

    moodboard: [
      'images/p4-mood-1.jpg',
      'images/p4-mood-2.jpg',
      'images/p4-mood-3.jpg',
      'images/p4-mood-4.jpg',
    ],

    floorPlan: 'images/p4-floorplan.jpg',
  },

  /* ─── PROJECT 05 — Villa Floor Plan ─── */
  'villa-plan': {
    title:    'Villa Floor Plan',
    titleAr:  'مخطط فيلا سكنية',
    category: 'Residential',
    categoryAr: 'سكني',
    year:     '2023',
    location: 'Saudi Arabia',
    locationAr: 'المملكة العربية السعودية',
    area:     '—',
    style:    'Contemporary Villa — Training Project',
    styleAr:  'فيلا عصرية — مشروع تدريبي',
    software: 'AutoCAD',
    status:   'Training Project',
    statusAr: 'مشروع تدريبي',

    heroImage: 'images/p5-floor-ground.jpg',

    overview: `A comprehensive two-storey villa floor plan developed as a training project
    to demonstrate proficiency in AutoCAD and spatial planning principles.`,

    overviewAr: `مخطط شامل لفيلا من طابقين طُوِّر كمشروع تدريبي لإثبات الكفاءة في AutoCAD ومبادئ التخطيط المكاني.`,

    concept: `The ground floor organises public and semi-public spaces around a central
    circulation spine. The upper floor dedicates itself to the private programme.
    Cyan circulation highlights emphasise the intuitive flow.`,

    conceptAr: `الطابق الأرضي ينظم الفراغات العامة وشبه العامة حول محور حركة مركزي. الطابق العلوي مخصص للبرنامج الخاص. التمييز السيان يُبرز سهولة الحركة.`,

    colors: [
      { hex: '#F6F1EA', name: 'Soft Cream' },
      { hex: '#E8DED3', name: 'Warm Beige' },
      { hex: '#5A4334', name: 'Coffee Brown' },
      { hex: '#00C8D4', name: 'Cyan Highlight' },
      { hex: '#B8D48C', name: 'Garden Green' },
    ],

    materials: [
      { name: 'Polished Marble Floor',    bg: 'linear-gradient(135deg,#F0EAE0,#E0D6CA)', label: 'Living Floor' },
      { name: 'Timber Parquet',           bg: 'linear-gradient(135deg,#C4A882,#8B6845)', label: 'Bedroom Floor' },
      { name: 'Rendered Exterior',        bg: 'linear-gradient(135deg,#E8DED3,#D0C4B0)', label: 'Facade' },
      { name: 'Landscaped Garden',        bg: 'linear-gradient(135deg,#7D9A5A,#5A7A3A)', label: 'Exterior' },
    ],

    renders: [
      'images/p5-floor-ground.jpg',
      'images/p5-floor-upper.jpg',
    ],

    moodboard: [
      'images/p5-floor-ground.jpg',
      'images/p5-floor-upper.jpg',
      'images/p5-floor-ground.jpg',
      'images/p5-floor-upper.jpg',
    ],

    floorPlan: 'images/p5-floor-ground.jpg',
    floorPlanUpper: 'images/p5-floor-upper.jpg',
  },

  /* ─── PROJECT 06 — Ayaf Coffee Canopy ─── */
  'ayaf-coffee': {
    title:    'Ayaf Coffee Canopy',
    titleAr:  'مظلة أياف للقهوة',
    category: 'Commercial',
    categoryAr: 'تجاري',
    year:     '2024',
    location: 'Saudi Arabia',
    locationAr: 'المملكة العربية السعودية',
    area:     '—',
    style:    'Contemporary Commercial',
    styleAr:  'تجاري عصري',
    software: '3ds Max & AutoCAD',
    status:   'Completed',
    statusAr: 'منجز',

    heroImage: 'images/p6-hero.jpg',

    overview: `The Ayaf Coffee Canopy project is a contemporary commercial concept for
    a coffee corner space, designed to create a welcoming and stylish ambience.
    The design integrates architectural canopy elements with a warm, inviting interior palette.`,

    overviewAr: `مشروع مظلة أياف للقهوة هو مفهوم تجاري عصري لركن قهوة، مصمم لخلق أجواء ترحيبية وأنيقة. يدمج التصميم عناصر المظلة المعمارية مع لوحة داخلية دافئة ومرحّبة.`,

    concept: `The concept centres around a striking canopy structure that serves as both
    a functional shade element and a defining architectural feature. Warm timber tones,
    natural stone surfaces, and curated greenery bring life and texture to the space,
    creating an inviting coffee experience.`,

    conceptAr: `يتمحور المفهوم حول هيكل مظلة لافت يعمل كعنصر تظليل وظيفي وسمة معمارية مميزة. ألوان الخشب الدافئة وأسطح الحجر الطبيعي والخضرة المنتقاة تُضفي الحياة والملمس على الفضاء.`,

    colors: [
      { hex: '#3D2B1A', name: 'Dark Espresso' },
      { hex: '#C4A882', name: 'Warm Sand' },
      { hex: '#8B7A65', name: 'Stone Taupe' },
      { hex: '#5A7A3A', name: 'Leaf Green' },
      { hex: '#F0E8D8', name: 'Cream White' },
    ],

    materials: [
      { name: 'Timber Canopy Structure', bg: 'linear-gradient(135deg,#8B6845,#5A4030)', label: 'Canopy' },
      { name: 'Natural Stone Surface',   bg: 'linear-gradient(135deg,#C4A882,#A08060)', label: 'Counter' },
      { name: 'Warm Plaster Wall',       bg: 'linear-gradient(135deg,#E8DED3,#C4AD97)', label: 'Wall Finish' },
      { name: 'Curated Greenery',        bg: 'linear-gradient(135deg,#7D9A5A,#5A7A3A)', label: 'Landscaping' },
    ],

    renders: [
      'images/p6-hero.jpg',
    ],
  },

  /* ─── PROJECT 07 — Private Farm Al-Kharj ─── */
  'farm-alkharj': {
    title:    'Private Farm · Al-Kharj',
    titleAr:  'مزرعة خاصة · الخرج',
    category: 'Residential',
    categoryAr: 'سكني',
    year:     '2024',
    location: 'Al-Kharj, Saudi Arabia',
    locationAr: 'الخرج، المملكة العربية السعودية',
    area:     '—',
    style:    'Organic Rural Contemporary',
    styleAr:  'ريفي عضوي عصري',
    software: '3ds Max & AutoCAD',
    status:   'Completed',
    statusAr: 'منجز',

    heroImage: 'images/p7-render-1.jpg',

    overview: `A private farm interior and exterior design in Al-Kharj — blending rustic
    organic materials with contemporary spatial planning to create a serene rural retreat
    that feels connected to the land.`,

    overviewAr: `تصميم داخلي وخارجي لمزرعة خاصة في الخرج — يمزج المواد العضوية الريفية مع التخطيط المكاني المعاصر لخلق ملاذ ريفي هادئ متصل بالأرض.`,

    concept: `Earth tones dominate — raw plaster, rammed earth walls, and weathered timber
    create an authentically grounded aesthetic. The interior spaces open generously to
    outdoor terraces and planted courtyards, dissolving the boundary between inside and out.`,

    conceptAr: `تهيمن ألوان الأرض — الجص الخام وجدران الطين المدكوك والخشب المعتّق تخلق جمالية متجذّرة أصيلة. الفراغات الداخلية تنفتح بسخاء على التراسات الخارجية والأفنية المزروعة.`,

    colors: [
      { hex: '#8B6845', name: 'Weathered Oak' },
      { hex: '#C4A882', name: 'Rammed Earth' },
      { hex: '#7D9A5A', name: 'Sage Garden' },
      { hex: '#E8DED3', name: 'Raw Plaster' },
      { hex: '#4A3225', name: 'Dark Timber' },
    ],

    materials: [
      { name: 'Rammed Earth Wall',    bg: 'linear-gradient(135deg,#C4A882,#A08060)', label: 'Wall' },
      { name: 'Weathered Timber',     bg: 'linear-gradient(135deg,#8B6845,#5A4030)', label: 'Joinery' },
      { name: 'Natural Stone Floor',  bg: 'linear-gradient(135deg,#D4C4B0,#B8A890)', label: 'Flooring' },
      { name: 'Woven Linen Textile',  bg: 'linear-gradient(135deg,#E8DED3,#C4B8A8)', label: 'Textiles' },
    ],

    renders: [
      'images/p7-render-1.jpg',
      'images/p7-render-2.jpg',
    ],

    floorPlan: null,
  },

  /* ─── PROJECT 08 — Apartment Redesign (Before/After) ─── */
  'apartment-redesign': {
    title:    'Apartment Redesign',
    titleAr:  'إعادة تصميم شقة',
    category: 'Residential',
    categoryAr: 'سكني',
    year:     '2024',
    location: 'Saudi Arabia',
    locationAr: 'المملكة العربية السعودية',
    area:     '—',
    style:    'Contemporary Transformation',
    styleAr:  'تحول عصري',
    software: 'AutoCAD & Photoshop',
    status:   'Completed',
    statusAr: 'منجز',

    heroImage: 'images/p8-after-1.jpg',

    overview: `A complete apartment redesign — transforming an existing space through thoughtful
    design intervention. The before/after comparison documents the dramatic transformation
    achieved through considered material, colour, and layout changes.`,

    overviewAr: `إعادة تصميم شاملة لشقة — تحويل فضاء قائم من خلال تدخل تصميمي مدروس. تُوثّق مقارنة قبل/بعد التحول الدراماتيكي الذي تحقق من خلال تغييرات مدروسة في المواد والألوان والتخطيط.`,

    concept: `The redesign strips away the dated and replaces it with a timeless contemporary
    language. New material selections — warm stone flooring, textured wall finishes, and
    curated furniture — elevate the spatial quality dramatically, proving that thoughtful
    redesign can entirely transform the experience of a space.`,

    conceptAr: `إعادة التصميم تتخلص من القديم وتستبدله بلغة عصرية خالدة. اختيارات المواد الجديدة — أرضيات حجرية دافئة وتشطيبات جدارية ذات ملمس وأثاث منتقى — ترفع الجودة المكانية بشكل ملحوظ.`,

    colors: [
      { hex: '#E8DED3', name: 'Warm Cream' },
      { hex: '#B89164', name: 'Honey Oak' },
      { hex: '#5A4334', name: 'Walnut' },
      { hex: '#C4A882', name: 'Warm Sand' },
      { hex: '#8B7A65', name: 'Stone Grey' },
    ],

    materials: [
      { name: 'Warm Stone Floor',      bg: 'linear-gradient(135deg,#D4C4B0,#B8A890)', label: 'Flooring' },
      { name: 'Textured Plaster Wall', bg: 'linear-gradient(135deg,#E8DED3,#C4AD97)', label: 'Wall Finish' },
      { name: 'Oak Cabinetry',         bg: 'linear-gradient(135deg,#C4A882,#8B6845)', label: 'Joinery' },
      { name: 'Brushed Brass',         bg: 'linear-gradient(135deg,#C9A96E,#A07840)', label: 'Hardware' },
    ],

    renders: [
      'images/p8-after-1.jpg',
      'images/p8-after-2.jpg',
      'images/p8-after-3.jpg',
    ],

    moodboard: [
      'images/p8-after-1.jpg',
      'images/p8-after-2.jpg',
      'images/p8-after-3.jpg',
      'images/p8-before-1.jpg',
    ],

    floorPlan: null,

    // Before/After data
    beforeImages: [
      'images/p8-before-1.jpg',
      'images/p8-before-2.jpg',
    ],
    afterImages: [
      'images/p8-after-1.jpg',
      'images/p8-after-2.jpg',
    ],

    videoSrc: null,
  },

  /* ─── PROJECT 09 — 60m² Apartment ─── */
  'apartment-60m': {
    title:    '60m² Apartment Design',
    titleAr:  'تصميم شقة 60م²',
    category: 'Residential',
    categoryAr: 'سكني',
    year:     '2024',
    location: 'Saudi Arabia',
    locationAr: 'المملكة العربية السعودية',
    area:     '60 m²',
    areaAr:   '60 م²',
    style:    'Smart Compact Contemporary',
    styleAr:  'عصري مدمج ذكي',
    software: '3ds Max & AutoCAD',
    status:   'Completed',
    statusAr: 'منجز',

    heroImage: 'images/p9-render-1.jpg',

    overview: `A compact 60m² apartment designed to maximise every square metre without
    compromising on style or comfort. The challenge was to create a space that feels
    generous, open, and beautifully considered despite its modest footprint.`,

    overviewAr: `شقة مدمجة بمساحة 60م² مصممة لاستثمار كل متر مربع دون التنازل عن الأناقة أو الراحة. التحدي كان خلق فضاء يبدو سخياً ومفتوحاً وجميل التفكير رغم مساحته المتواضعة.`,

    concept: `Smart zoning and multifunctional furniture are the heroes of this design.
    A seamless palette of warm neutrals makes the space feel larger, while considered
    storage solutions keep everything beautifully organised. Natural light is maximised
    through careful placement of mirrors and light-reflective surfaces.`,

    conceptAr: `التخطيط الذكي للمناطق والأثاث متعدد الاستخدام هما أبطال هذا التصميم. لوحة متجانسة من الألوان الدافئة المحايدة تجعل الفضاء يبدو أكبر، بينما تُبقي حلول التخزين المدروسة كل شيء منظماً بجمال.`,

    colors: [
      { hex: '#F6F1EA', name: 'Light Cream' },
      { hex: '#E8DED3', name: 'Warm Linen' },
      { hex: '#C4A882', name: 'Honey Oak' },
      { hex: '#8B7A65', name: 'Warm Greige' },
      { hex: '#5A4334', name: 'Walnut Brown' },
    ],

    materials: [
      { name: 'Light Oak Floor',       bg: 'linear-gradient(135deg,#D4B896,#B89870)', label: 'Flooring' },
      { name: 'Warm White Walls',      bg: 'linear-gradient(135deg,#F6F1EA,#E8DED3)', label: 'Wall Finish' },
      { name: 'Multifunctional Sofa',  bg: 'linear-gradient(135deg,#C4A882,#A08060)', label: 'Key Furniture' },
      { name: 'Integrated Storage',    bg: 'linear-gradient(135deg,#8B7A65,#6B5C4A)', label: 'Joinery' },
    ],

    renders: [
      'images/p9-render-1.jpg',
      'images/p9-render-2.jpg',
      'images/p9-render-3.jpg',
      'images/p9-sheet.jpg',
    ],

    floorPlan: null,
    videoSrc: 'videos/p8-video.mp4',
    videoLabel: 'Project Walkthrough',
    videoLabelAr: 'جولة المشروع',
  },

};

/* ══════════════════════════════════════════════════
   3. LANGUAGE TOGGLE
   ══════════════════════════════════════════════════ */
let currentLang = localStorage.getItem('lang') || 'en';

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
  // Placeholders via data-i18n-ph
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  // Labels for inputs
  document.querySelectorAll('[data-i18n-label]').forEach(el => {
    const key = el.dataset.i18nLabel;
    if (t[key] !== undefined) el.textContent = t[key];
  });
}

function initLanguage() {
  const btn  = document.getElementById('langToggle');
  const html = document.documentElement;

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    html.setAttribute('lang', lang);
    if (btn) btn.textContent = lang === 'en' ? 'ع' : 'EN';
    applyTranslations(lang);
  }

  // Apply saved language on load
  setLang(currentLang);

  btn?.addEventListener('click', () => {
    setLang(currentLang === 'en' ? 'ar' : 'en');
  });
}

/* ══════════════════════════════════════════════════
   4. CUSTOM CURSOR
   ══════════════════════════════════════════════════ */
function initCursor() {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring || !window.matchMedia('(hover: hover)').matches) return;

  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  (function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  })();

  const hoverTargets = 'a,button,.project-card,.filter-btn,.software-card,.service-card,.gallery-nav,.lightbox-nav';
  document.addEventListener('mouseover', e => { if (e.target.closest(hoverTargets)) ring.classList.add('hovered'); });
  document.addEventListener('mouseout',  e => { if (e.target.closest(hoverTargets)) ring.classList.remove('hovered'); });
  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
}

/* ══════════════════════════════════════════════════
   5. NAVIGATION
   ══════════════════════════════════════════════════ */
function initNav() {
  const nav       = document.getElementById('mainNav');
  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('navDrawer');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  function toggleDrawer(open) {
    hamburger.classList.toggle('open', open);
    drawer.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => toggleDrawer(!drawer.classList.contains('open')));
  document.querySelectorAll('[data-drawer-link]').forEach(l => l.addEventListener('click', () => toggleDrawer(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && drawer.classList.contains('open')) toggleDrawer(false); });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

/* ══════════════════════════════════════════════════
   6. SCROLL REVEAL
   ══════════════════════════════════════════════════ */
function initScrollReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

/* ══════════════════════════════════════════════════
   7. SKILL BARS
   ══════════════════════════════════════════════════ */
function initSkillBars() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => { e.target.style.width = e.target.dataset.pct + '%'; }, 200);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.skill-fill').forEach(b => obs.observe(b));
}

/* ══════════════════════════════════════════════════
   8. PROGRESS BAR
   ══════════════════════════════════════════════════ */
function initProgressBar() {
  const bar = document.getElementById('progressBar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });
}

/* ══════════════════════════════════════════════════
   9. BACK TO TOP
   ══════════════════════════════════════════════════ */
function initBackTop() {
  const btn = document.getElementById('backTop');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 600), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ══════════════════════════════════════════════════
   10. PROJECT FILTER
   ══════════════════════════════════════════════════ */
function initFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards   = document.querySelectorAll('.project-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        if (show) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ══════════════════════════════════════════════════
   11. PROJECT MODAL
   ══════════════════════════════════════════════════ */
let currentGalleryIndex = 0;
let currentGalleryRenders = [];

function buildModalHTML(data) {
  const lang = currentLang;
  const isAr = lang === 'ar';

  // ── Title & details
  const title    = isAr && data.titleAr    ? data.titleAr    : data.title;
  const category = isAr && data.categoryAr ? data.categoryAr : data.category;
  const location = isAr && data.locationAr ? data.locationAr : (data.location || '—');
  const style    = isAr && data.styleAr    ? data.styleAr    : (data.style || '—');
  const status   = isAr && data.statusAr   ? data.statusAr   : (data.status || '—');
  const area     = isAr && data.areaAr     ? data.areaAr     : (data.area || '—');
  const overview = isAr && data.overviewAr ? data.overviewAr : (data.overview || '');
  const concept  = isAr && data.conceptAr  ? data.conceptAr  : (data.concept || '');

  // ── Color swatches
  const swatches = (data.colors || []).map(c => `
    <div class="color-swatch">
      <div class="swatch-block" style="background:${c.hex}" title="${c.name}"></div>
      <div class="swatch-hex">${c.hex}</div>
      <div class="swatch-hex">${c.name}</div>
    </div>`).join('');

  // ── Materials
  const materials = (data.materials || []).map(m => `
    <div class="material-card">
      <div class="material-img" style="background:${m.bg}">
        <span style="color:rgba(246,241,234,0.5);font-family:var(--font-display);font-size:0.7rem">${m.label}</span>
      </div>
      <div class="material-label">${m.name}</div>
    </div>`).join('');

  // ── Mood board
  const moodItems = (data.moodboard || []).map((src, i) => `
    <div class="mood-img">
      <img src="${src}" alt="Mood board ${i+1}" loading="lazy" data-lightbox />
    </div>`).join('');

  // ── Gallery slides
  const slides = (data.renders || []).map((src, i) => `
    <div class="gallery-slide">
      <img src="${src}" alt="${title} — Render ${i+1}" loading="lazy" data-lightbox />
    </div>`).join('');

  const dots = (data.renders || []).map((_, i) =>
    `<button class="gallery-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Slide ${i+1}"></button>`
  ).join('');

  // ── Floor plans (only shown if available)
  const floorPlanHTML = data.floorPlan
    ? `<div class="modal-section"><h3 class="modal-section-title">${isAr ? 'المخطط' : 'Floor Plan'}</h3>
        <div class="floor-plan-wrap"><img src="${data.floorPlan}" alt="Floor plan — ${title}" style="width:100%;height:auto;display:block" /></div></div>`
    : '';

  const upperFloorHTML = data.floorPlanUpper
    ? `<div class="modal-section"><h3 class="modal-section-title">${isAr ? 'مخطط الطابق العلوي' : 'Upper Floor Plan'}</h3>
        <div class="floor-plan-wrap"><img src="${data.floorPlanUpper}" alt="Upper floor plan" style="width:100%;height:auto;display:block" /></div></div>`
    : '';

  // ── Video section (if videoSrc defined)
  const videoLabel = isAr && data.videoLabelAr ? data.videoLabelAr : (data.videoLabel || 'Project Video');
  const videoHTML = data.videoSrc ? `
    <div class="modal-section">
      <h3 class="modal-section-title">${videoLabel}</h3>
      <div class="video-container" id="modalVideo">
        <video controls preload="metadata" style="width:100%;height:100%;object-fit:cover">
          <source src="${data.videoSrc}" type="video/mp4" />
          ${isAr ? 'متصفحك لا يدعم تشغيل الفيديو.' : 'Your browser does not support the video tag.'}
        </video>
        <div class="video-placeholder" id="videoPlaceholder" onclick="document.getElementById('modalVideo').querySelector('video').play();this.style.display='none'">
          <div class="video-play-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <p class="video-label">${isAr ? 'انقر لتشغيل الفيديو' : 'Click to play video'}</p>
        </div>
      </div>
    </div>` : '';

  // ── Before/After section
  let beforeAfterHTML = '';
  if (data.beforeImages && data.afterImages) {
    const beforeItems = data.beforeImages.map((src, i) => `
      <div class="before-after-item">
        <img src="${src}" alt="Before ${i+1}" loading="lazy" data-lightbox />
        <span class="ba-label">${isAr ? 'قبل' : 'Before'}</span>
      </div>`).join('');
    const afterItems = data.afterImages.map((src, i) => `
      <div class="before-after-item">
        <img src="${src}" alt="After ${i+1}" loading="lazy" data-lightbox />
        <span class="ba-label after">${isAr ? 'بعد' : 'After'}</span>
      </div>`).join('');

    beforeAfterHTML = `
      <div class="modal-section">
        <h3 class="modal-section-title">${isAr ? 'قبل وبعد' : 'Before & After'}</h3>
        <div class="before-after-grid">
          ${beforeItems}
          ${afterItems}
        </div>
      </div>`;
  }

  return `
    <div class="modal-hero">
      <img class="modal-hero-img" src="${data.heroImage}" alt="${title}" style="width:100%;height:100%;object-fit:cover" data-lightbox />
    </div>
    <div class="modal-body">

      <div class="modal-header">
        <div>
          <span class="label text-gold" style="display:block;margin-bottom:0.75rem">${category}</span>
          <h2 class="modal-title">${title}</h2>
        </div>
        <div class="modal-details">
          <div class="detail-row"><span class="detail-label">${isAr ? 'الموقع' : 'Location'}</span><span class="detail-value">${location}</span></div>
          <div class="detail-row"><span class="detail-label">${isAr ? 'المساحة' : 'Area'}</span><span class="detail-value">${area}</span></div>
          <div class="detail-row"><span class="detail-label">${isAr ? 'الأسلوب' : 'Style'}</span><span class="detail-value">${style}</span></div>
          <div class="detail-row"><span class="detail-label">${isAr ? 'البرامج' : 'Software'}</span><span class="detail-value" style="font-size:0.72rem">${data.software || '—'}</span></div>
        </div>
      </div>

      <div class="modal-section">
        <h3 class="modal-section-title">${isAr ? 'نظرة عامة' : 'Project Overview'}</h3>
        <p class="body-lg">${overview}</p>
        ${concept ? `<p class="body-lg" style="margin-top:1rem">${concept}</p>` : ''}
      </div>

      ${swatches   ? `<div class="modal-section"><h3 class="modal-section-title">${isAr ? 'لوحة الألوان' : 'Colour Palette'}</h3><div class="color-palette">${swatches}</div></div>` : ''}
      ${materials  ? `<div class="modal-section"><h3 class="modal-section-title">${isAr ? 'لوحة المواد' : 'Material Palette'}</h3><div class="material-palette">${materials}</div></div>` : ''}
      ${moodItems  ? `<div class="modal-section"><h3 class="modal-section-title">${isAr ? 'لوحة الإلهام' : 'Mood Board'}</h3><div class="mood-grid">${moodItems}</div></div>` : ''}

      ${floorPlanHTML}

      ${upperFloorHTML}

      ${beforeAfterHTML}

      ${videoHTML}

      ${slides ? `
      <div class="modal-section">
        <h3 class="modal-section-title">${isAr ? 'المرئيات ثلاثية الأبعاد' : '3D Renders & Visuals'}</h3>
        <div class="gallery-wrap" id="modalGallery">
          <div class="gallery-track" id="galleryTrack">${slides}</div>
          <button class="gallery-nav gallery-prev" id="galleryPrev" aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button class="gallery-nav gallery-next" id="galleryNext" aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
        <div class="gallery-dots" id="galleryDots">${dots}</div>
      </div>` : ''}

    </div>`;
}

function openModal(projectId) {
  const data     = projectData[projectId];
  const backdrop = document.getElementById('modalBackdrop');
  const content  = document.getElementById('modalContent');
  const modal    = document.getElementById('projectModal');
  if (!data || !backdrop || !content) return;

  content.innerHTML = buildModalHTML(data);
  backdrop.classList.add('open');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal.scrollTop = 0;

  setTimeout(() => {
    initModalGallery(data.renders || []);
    initLightboxTriggers(modal);
  }, 50);
}

function closeModal() {
  const backdrop = document.getElementById('modalBackdrop');
  if (!backdrop) return;
  // Pause any playing video
  const video = document.querySelector('#modalContent video');
  if (video) video.pause();
  backdrop.classList.remove('open');
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initModal() {
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalClose');
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.project));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card.dataset.project); } });
  });
  closeBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

/* ══════════════════════════════════════════════════
   12. GALLERY SLIDER (inside modal)
   ══════════════════════════════════════════════════ */
function initModalGallery(renders) {
  const track   = document.getElementById('galleryTrack');
  const prevBtn = document.getElementById('galleryPrev');
  const nextBtn = document.getElementById('galleryNext');
  const dots    = document.querySelectorAll('.gallery-dot');
  if (!track) return;

  currentGalleryIndex  = 0;
  currentGalleryRenders = renders;
  const total = renders.length;

  function goTo(index) {
    currentGalleryIndex = (index + total) % total;
    track.style.transform = `translateX(-${currentGalleryIndex * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === currentGalleryIndex));
  }

  prevBtn?.addEventListener('click', () => goTo(currentGalleryIndex - 1));
  nextBtn?.addEventListener('click', () => goTo(currentGalleryIndex + 1));
  dots.forEach(d => d.addEventListener('click', () => goTo(parseInt(d.dataset.index, 10))));
}

/* ══════════════════════════════════════════════════
   13. LIGHTBOX
   ══════════════════════════════════════════════════ */
let lightboxImages = [];
let lightboxIndex  = 0;

function openLightbox(src, all, index) {
  const lb  = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  if (!lb || !img) return;
  lightboxImages = all;
  lightboxIndex  = index;
  img.src = src;
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb?.classList.remove('open');
  lb?.setAttribute('aria-hidden', 'true');
}

function lightboxNav(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
  const img = document.getElementById('lightboxImg');
  if (img) { img.style.opacity = '0'; setTimeout(() => { img.src = lightboxImages[lightboxIndex]; img.style.opacity = '1'; }, 180); }
}

function initLightboxTriggers(container) {
  const imgs = container.querySelectorAll('[data-lightbox]');
  const srcs = Array.from(imgs).map(i => i.src || i.style.backgroundImage.replace(/url\(["']?|["']?\)/g, ''));
  imgs.forEach((img, i) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(img.src, srcs, i));
  });
}

function initLightbox() {
  const lb  = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev')?.addEventListener('click', () => lightboxNav(-1));
  document.getElementById('lightboxNext')?.addEventListener('click', () => lightboxNav(1));
  lb?.addEventListener('click', e => { if (e.target === lb || e.target === img) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lb?.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft')  lightboxNav(-1);
    if (e.key === 'ArrowRight') lightboxNav(1);
  });
  if (img) img.style.transition = 'opacity 0.2s ease';
}

/* ══════════════════════════════════════════════════
   14. DARK MODE
   ══════════════════════════════════════════════════ */
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const html   = document.documentElement;
  if (localStorage.getItem('theme') === 'dark') html.setAttribute('data-theme', 'dark');
  toggle?.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  });
}

/* ══════════════════════════════════════════════════
   15. CONTACT FORM
   ══════════════════════════════════════════════════ */
function initContactForm() {
  const form   = document.getElementById('contactForm');
  const submit = document.getElementById('formSubmit');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const name    = form.querySelector('#formName')?.value.trim();
    const email   = form.querySelector('#formEmail')?.value.trim();
    const message = form.querySelector('#formMessage')?.value.trim();
    const isAr = currentLang === 'ar';

    if (!name || !email || !message) {
      showFormMsg(form, isAr ? 'يرجى ملء جميع الحقول المطلوبة.' : 'Please fill in all required fields.', 'error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFormMsg(form, isAr ? 'يرجى إدخال بريد إلكتروني صحيح.' : 'Please enter a valid email address.', 'error');
      return;
    }

    const submitSpan = submit.querySelector('span') || submit;
    submit.disabled = true;
    submitSpan.textContent = isAr ? 'جاري الإرسال…' : 'Sending…';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        showFormMsg(form, isAr ? 'شكراً! ستتواصل معك منيرة قريباً.' : 'Thank you! Munirah will be in touch soon.', 'success');
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      showFormMsg(form, isAr ? 'حدث خطأ. يرجى المحاولة مجدداً أو التواصل عبر البريد الإلكتروني.' : 'Something went wrong. Please try again or email directly.', 'error');
    }

    submit.disabled = false;
    submitSpan.textContent = isAr ? 'إرسال الرسالة' : 'Send Message';
  });
}

function showFormMsg(form, text, type) {
  let msg = form.querySelector('.form-message');
  if (!msg) { msg = document.createElement('p'); msg.className = 'form-message'; form.appendChild(msg); }
  msg.textContent = text;
  msg.style.cssText = `margin-top:.75rem;font-size:.8rem;letter-spacing:.05em;color:${type === 'success' ? 'var(--gold)' : '#c0705a'}`;
  setTimeout(() => msg.remove(), 5000);
}

/* ══════════════════════════════════════════════════
   16. INIT
   ══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initCursor();
  initNav();
  initScrollReveal();
  initSkillBars();
  initProgressBar();
  initBackTop();
  initFilter();
  initModal();
  initLightbox();
  initContactForm();

  // Stagger project card entrance
  document.querySelectorAll('.project-card').forEach((card, i) => {
    card.style.opacity  = '0';
    card.style.transform = 'translateY(28px)';
    card.style.transition = `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`;
    setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 400 + i * 120);
  });
});
// Updated: Mon Jun  8 22:23:49 +03 2026
