export type Language = 'ar' | 'fr' | 'en';

export interface TranslationContent {
  dir: 'rtl' | 'ltr';
  langName: string;
  associationName: string;
  associationAcronym: string;
  tagline: string;
  statusBadge: string;
  maintenanceTitle: string;
  maintenanceMessage: string;
  expectedReturn: string;
  countdownDays: string;
  countdownHours: string;
  countdownMinutes: string;
  countdownSeconds: string;
  progressLabel: string;
  progressPercent: number;
  progressDetail: string;
  
  // Subscription Form
  subscribeHeading: string;
  subscribeSubheading: string;
  emailPlaceholder: string;
  interestLabel: string;
  interests: {
    general: string;
    volunteering: string;
    projects: string;
    events: string;
  };
  subscribeButton: string;
  submittingText: string;
  successMessage: string;
  alreadySubscribedMessage: string;

  // About Section
  aboutHeading: string;
  aboutDescription: string;
  pillarsHeading: string;
  pillars: Array<{
    title: string;
    desc: string;
    icon: string;
  }>;

  // Quick Contact / Inquiry Form
  inquiryTitle: string;
  inquirySubtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  sendButton: string;
  inquirySuccess: string;

  // Contact Info
  contactTitle: string;
  emailLabel: string;
  phoneLabel: string;
  locationLabel: string;
  locationValue: string;
  socialTitle: string;
  rightsReserved: string;

  // Admin / Test drawer
  viewSubscribersBtn: string;
  adminModalTitle: string;
  subscribersCount: string;
  noSubscribers: string;
  close: string;
}

export const translations: Record<Language, TranslationContent> = {
  ar: {
    dir: 'rtl',
    langName: 'العربية',
    associationName: 'جمعية جذور للتنمية البشرية',
    associationAcronym: 'ARDH - جذور',
    tagline: 'نبني الإنسان، وننمي المجتمع',
    statusBadge: 'الموقع تحت الصيانة والتطوير',
    maintenanceTitle: 'قريباً بحلّة جديدة وجذابة',
    maintenanceMessage: 'موقع الجمعية قيد الصيانة حاليًا، نعمل على تطويره وتحديثه لنقدم لكم تجربة أفضل. شكرًا لتفهمكم.',
    expectedReturn: 'موعد التدشين المتوقع',
    countdownDays: 'يوم',
    countdownHours: 'ساعة',
    countdownMinutes: 'دقيقة',
    countdownSeconds: 'ثانية',
    progressLabel: 'نسبة إنجاز التطوير',
    progressPercent: 88,
    progressDetail: 'تحديث منصة الخدمات المباشرة وتطوير واجهات التبرع والتطوع الرقمي',

    subscribeHeading: 'كن أول من يعلم عند إطلاق الموقع',
    subscribeSubheading: 'أدخل بريدك الإلكتروني ليصلك إشعار فوري عند افتتاحه ومتابعة آخر مستجدات ومشاريع الجمعية.',
    emailPlaceholder: 'أدخل بريدك الإلكتروني هنا...',
    interestLabel: 'مجال الاهتمام الرئيسي',
    interests: {
      general: 'أخبار ومستجدات الجمعية العامة',
      volunteering: 'الفرص والمبادرات التطوعية',
      projects: 'مشاريع التنمية البشرية والتمكين',
      events: 'الندوات والفعاليات القادمة',
    },
    subscribeButton: 'اشترك الآن مجاناً',
    submittingText: 'جاري التسجيل...',
    successMessage: 'شكراً لاشتراكك بنجاح! تم حفظ بريدك الإلكتروني وسنخبرك فور افتتاحه.',
    alreadySubscribedMessage: 'هذا البريد الإلكتروني مسجل بالفعل في القائمة!',

    aboutHeading: 'عن جمعية جذور للتنمية البشرية (ARDH)',
    aboutDescription: 'جمعية مدنية نسعى من خلالها لترسيخ قيم التضامن، والنهوض بالتنمية البشرية المستدامة عبر برامج تعليمية، ومشاريع تضامنية، ومبادرات تمكين تعود بالنفع المباشر على المجتمع.',
    pillarsHeading: 'ركائز عملنا المستقبلي',
    pillars: [
      {
        title: 'التمكين والتنمية البشرية',
        desc: 'دعم القدرات الفردية والجماعية وصقل مهارات الشباب والنساء لبناء غد أفضل.',
        icon: 'UserCheck',
      },
      {
        title: 'التربية والتكوين المستمر',
        desc: 'تنظيم ورش عمل، دورات تدريبية وبرامج تعليمية متكاملة ترفع كفاءة العنصر البشري.',
        icon: 'GraduationCap',
      },
      {
        title: 'التكافل والدعم الاجتماعي',
        desc: 'تقديم المساعدات الإنسانية والاجتماعية للفئات الأكثر احتياجاً وتعزيز روح التضامن.',
        icon: 'HeartHandshake',
      },
      {
        title: 'المشاريع البيئية والمستدامة',
        desc: 'إطلاق مبادرات خضراء ومستدامة تحافظ على البيئة وترسخ الوعي المجتمعي.',
        icon: 'Sprout',
      },
    ],

    inquiryTitle: 'هل لديك استفسار عاجل؟',
    inquirySubtitle: 'يمكنك التواصل المباشر مع فريق الجمعية وسنقوم بالرد عليك في أقرب وقت.',
    nameLabel: 'الاسم الكامل',
    namePlaceholder: 'أدخل اسمك الكريم...',
    messageLabel: 'رسالتك أو استفسارك',
    messagePlaceholder: 'اكتب نص استفسارك هنا...',
    sendButton: 'إرسال الرسالة',
    inquirySuccess: 'تم إرسال رسالتك بنجاح! وسيتواصل معك مكتب الجمعية في أقرب وقت.',

    contactTitle: 'معلومات التواصل',
    emailLabel: 'البريد الإلكتروني',
    phoneLabel: 'الهاتف / الواتساب',
    locationLabel: 'المقر الرئيسي',
    locationValue: 'المملكة المغربية',
    socialTitle: 'تابعونا على شبكات التواصل الاجتماعي',
    rightsReserved: 'جميع الحقوق محفوظة لجمعية جذور للتنمية البشرية',

    viewSubscribersBtn: 'قائمة المشتركين (لوحة الإدارة)',
    adminModalTitle: 'قائمة الاشتراكات المسجلة (jodour.ma)',
    subscribersCount: 'إجمالي المشتركين المسجلين:',
    noSubscribers: 'لا يوجد مشتركون مسجلون حتى الآن.',
    close: 'إغلاق',
  },

  fr: {
    dir: 'ltr',
    langName: 'Français',
    associationName: 'Association Jodour pour le Développement Humain',
    associationAcronym: 'ARDH - Jodour',
    tagline: 'Développer l’Humain, Épanouir la Société',
    statusBadge: 'Site Web en cours de maintenance et développement',
    maintenanceTitle: 'Bientôt de retour avec une nouvelle expérience',
    maintenanceMessage: 'Le site de l’association est actuellement en maintenance. Nous travaillons à son amélioration afin de vous offrir une meilleure expérience. Merci de votre compréhension.',
    expectedReturn: 'Date de lancement prévue',
    countdownDays: 'Jours',
    countdownHours: 'Heures',
    countdownMinutes: 'Min',
    countdownSeconds: 'Sec',
    progressLabel: 'Progression des travaux',
    progressPercent: 88,
    progressDetail: 'Refonte de la plateforme digitale et optimisation des espaces de bénévolat',

    subscribeHeading: 'Soyez informé en premier du lancement',
    subscribeSubheading: 'Inscrivez votre adresse e-mail pour recevoir une notification dès l’ouverture officielle du nouveau site web.',
    emailPlaceholder: 'Entrez votre adresse email...',
    interestLabel: 'Centre d’intérêt principal',
    interests: {
      general: 'Actualités générales de l’association',
      volunteering: 'Opportunités et projets de bénévolat',
      projects: 'Projets de développement humain',
      events: 'Événements et conférences à venir',
    },
    subscribeButton: 'S’inscrire gratuitement',
    submittingText: 'Enregistrement...',
    successMessage: 'Merci pour votre inscription ! Votre e-mail a été enregistré et nous vous informerons dès le lancement.',
    alreadySubscribedMessage: 'Cet e-mail est déjà inscrit sur notre liste.',

    aboutHeading: 'À propos de l’Association Jodour (ARDH)',
    aboutDescription: 'L’Association Jodour pour le Développement Humain est une organisation civile dédiée à la promotion des valeurs de solidarité, de l’éducation et du développement communautaire durable au Maroc.',
    pillarsHeading: 'Nos piliers d’action',
    pillars: [
      {
        title: 'Développement & Autonomisation',
        desc: 'Renforcer les compétences individuelles et collectives des jeunes et des femmes.',
        icon: 'UserCheck',
      },
      {
        title: 'Éducation & Formation',
        desc: 'Organiser des ateliers, formations certifiantes et programmes éducatifs continus.',
        icon: 'GraduationCap',
      },
      {
        title: 'Solidarité & Entraide Sociale',
        desc: 'Apporter un soutien concret aux familles vulnérables et promouvoir la cohésion sociale.',
        icon: 'HeartHandshake',
      },
      {
        title: 'Projets Écologiques & Durables',
        desc: 'Lancer des initiatives environnementales responsables pour les générations futures.',
        icon: 'Sprout',
      },
    ],

    inquiryTitle: 'Une question urgente ?',
    inquirySubtitle: 'Contactez directement l’équipe de l’association et nous vous répondrons dans les plus brefs délais.',
    nameLabel: 'Nom complet',
    namePlaceholder: 'Votre nom...',
    messageLabel: 'Votre message',
    messagePlaceholder: 'Rédigez votre message ici...',
    sendButton: 'Envoyer le message',
    inquirySuccess: 'Votre message a été envoyé avec succès ! Nous vous recontacterons sous peu.',

    contactTitle: 'Coordonnées',
    emailLabel: 'Email officiel',
    phoneLabel: 'Téléphone / WhatsApp',
    locationLabel: 'Siège social',
    locationValue: 'Royaume du Maroc',
    socialTitle: 'Suivez-nous sur les réseaux sociaux',
    rightsReserved: 'Tous droits réservés © Association Jodour pour le Développement Humain',

    viewSubscribersBtn: 'Espace Administrateur (Abonnés)',
    adminModalTitle: 'Liste des abonnés inscrits (jodour.ma)',
    subscribersCount: 'Total des abonnés inscrits :',
    noSubscribers: 'Aucun abonné enregistré pour le moment.',
    close: 'Fermer',
  },

  en: {
    dir: 'ltr',
    langName: 'English',
    associationName: 'Jodour Association for Human Development',
    associationAcronym: 'ARDH - Jodour',
    tagline: 'Empowering People, Developing Communities',
    statusBadge: 'Website currently under maintenance & upgrades',
    maintenanceTitle: 'Coming Soon with a fresh & modern look',
    maintenanceMessage: 'Our association’s website is currently under maintenance. We are working to improve it and provide you with a better experience. Thank you for your understanding.',
    expectedReturn: 'Estimated Launch Date',
    countdownDays: 'Days',
    countdownHours: 'Hours',
    countdownMinutes: 'Mins',
    countdownSeconds: 'Secs',
    progressLabel: 'Development Progress',
    progressPercent: 88,
    progressDetail: 'Upgrading community platforms, donation modules, and digital volunteering portals',

    subscribeHeading: 'Be the first to know when we launch',
    subscribeSubheading: 'Enter your email address to get instant updates upon the official launch of the new website.',
    emailPlaceholder: 'Enter your email address...',
    interestLabel: 'Primary Area of Interest',
    interests: {
      general: 'General Association News',
      volunteering: 'Volunteering Opportunities',
      projects: 'Human Development Projects',
      events: 'Upcoming Seminars & Events',
    },
    subscribeButton: 'Subscribe Now Free',
    submittingText: 'Subscribing...',
    successMessage: 'Thank you for subscribing! Your email has been saved and we will notify you at launch.',
    alreadySubscribedMessage: 'This email is already registered in our notification list.',

    aboutHeading: 'About Jodour Association (ARDH)',
    aboutDescription: 'Jodour Association for Human Development is a civic organization committed to promoting solidarity, education, human empowerment, and sustainable community growth in Morocco.',
    pillarsHeading: 'Our Core Pillars',
    pillars: [
      {
        title: 'Human Empowerment',
        desc: 'Unlocking individual and community potential for youth and women.',
        icon: 'UserCheck',
      },
      {
        title: 'Education & Training',
        desc: 'Conducting skills development workshops, training courses, and learning programs.',
        icon: 'GraduationCap',
      },
      {
        title: 'Social Solidarity',
        desc: 'Providing assistance to vulnerable families and fostering social cohesion.',
        icon: 'HeartHandshake',
      },
      {
        title: 'Sustainable Initiatives',
        desc: 'Driving green projects and eco-friendly community development.',
        icon: 'Sprout',
      },
    ],

    inquiryTitle: 'Have an urgent inquiry?',
    inquirySubtitle: 'Reach out directly to the association team and we will reply as soon as possible.',
    nameLabel: 'Full Name',
    namePlaceholder: 'Your full name...',
    messageLabel: 'Message or Question',
    messagePlaceholder: 'Type your message here...',
    sendButton: 'Send Message',
    inquirySuccess: 'Your message was sent successfully! We will get back to you shortly.',

    contactTitle: 'Contact Details',
    emailLabel: 'Official Email',
    phoneLabel: 'Phone / WhatsApp',
    locationLabel: 'Headquarters',
    locationValue: 'Kingdom of Morocco',
    socialTitle: 'Follow us on social media',
    rightsReserved: 'All rights reserved © Jodour Association for Human Development',

    viewSubscribersBtn: 'Admin View (Subscribers)',
    adminModalTitle: 'Subscriber List (jodour.ma)',
    subscribersCount: 'Total Subscriptions Registered:',
    noSubscribers: 'No subscribers registered yet.',
    close: 'Close',
  },
};
