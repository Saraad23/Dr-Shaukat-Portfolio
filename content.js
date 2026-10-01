// All page content and links live here, so text can be edited without touching the layout.
// Lists are small arrays; the comment above each one gives the column order.
// Photos are [file in /public, description for screen readers]; set one to null to hide it.
// Icon names refer to the set in components/Icon.js.

export const site = {
  name: 'Dr. Shaukat Hussain',
  title: 'Consultant Physician (Homeo)',
  initials: 'SH',
  avatar: '/images/dr-shaukat-hussain-avatar.jpg', // round headshot in the header, menu and footer; null shows the initials
  photo: ['/images/dr-shaukat-hussain.jpg', 'Dr. Shaukat Hussain at his desk'], // null shows an "SH" monogram instead
  clinic: 'Care Well Clinic',
  city: 'Lahore',
  address: ['22 Ali Block, Awan Town', 'Multan Road, Lahore, Pakistan'],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=22+Ali+Block%2C+Awan+Town%2C+Multan+Road%2C+Lahore%2C+Pakistan',
  whatsapp: 'https://wa.me/923004219345',
  phone: '0300 4219345',
  phoneHref: 'tel:+923004219345',
  disclaimer: 'Information on this site is educational and does not replace individual medical advice.',
};

// [network, link, icon]
export const socials = [
  ['Instagram', 'https://www.instagram.com/carewellmedia/', 'instagram'],
  ['YouTube', 'https://www.youtube.com/@CareWell-media', 'youtube'],
  ['Facebook', 'https://www.facebook.com/share/1CE2X6qrCF/', 'facebook'],
  ['TikTok', 'https://www.tiktok.com/@care.well.media', 'tiktok'],
  ['X', 'https://x.com/CAREWELLMEDIA', 'x'],
];

// [label, section link]
export const nav = [['About', '/#about'], ['Journey', '/#journey'], ['Education', '/#education'], ['Focus', '/#focus'], ['Research', '/#research'], ['Care Well', '/#carewell'], ['Contact', '/#contact']];

export const hero = {
  kicker: 'Dr. Shaukat Hussain · Consultant Physician (Homeo)',
  title: 'A research-minded journey',
  accent: 'from science to healthcare',
  lead: 'A professional path shaped by scientific experience, academic teaching, international exposure, health education and practical clinical work.',
  tags: ['Chronic case consultation', 'Health education', 'Research and clinical learning'],
  // [label, text, icon] for the card overlapping the bottom of the portrait
  badge: ['Qualifications', 'PGD (TCM) · BHMS · DHMS · FTJ', 'graduation-cap'],
};

export const about = {
  label: 'Profile',
  title: 'About Dr. Shaukat Hussain',
  photo: ['/images/consultation.jpg', 'Dr. Shaukat Hussain in consultation with a patient'],
  lead: 'Dr. Shaukat Hussain is a healthcare professional with a multidisciplinary background across scientific and research-related business, laboratory and diagnostic sectors, academic teaching, Herbal and Unani Medicine, Homeopathic education and clinical practice.',
  text: [
    'His earlier work put him in contact with universities, laboratories, research organizations and scientists. That environment built a lasting interest in scientific inquiry and real-world health challenges.',
    'He later moved into healthcare, starting with Herbal and Unani Medicine and progressing to formal education and clinical learning in Homeopathy.',
  ],
};

export const why = {
  label: 'Motivation',
  title: 'Why healthcare? Why this field?',
  text: [
    'The decision to enter natural, traditional and complementary healthcare grew gradually from scientific curiosity, research experience, historical study and practical observation.',
    'The long history of medicinal plants, together with the prolonged course and quality-of-life challenges of chronic conditions, encouraged further study of additional healthcare perspectives.',
    'The continuing aim is to understand health problems, keep learning and explore practical, responsible and accessible approaches that may support better health and quality of life.',
  ],
};

export const journey = {
  label: 'Journey',
  title: 'Professional journey',
  steps: [
    'Scientific and research-related business experience in laboratory, diagnostic and research supplies.',
    'Worked with universities, laboratories, research organizations, scientists and technical professionals.',
    'Exposure to human diagnostics, food and nutrition, veterinary and livestock research, agriculture, dairy, poultry, fisheries, wildlife research and animal nutrition.',
    'International professional and cultural exposure across Europe, Asia and the Middle East.',
    'Formal education in Herbal and Unani Medicine, then Homeopathy.',
    'Two years teaching Physiology and Medicine at a Homeopathic Medical College.',
    'Clinical practice focused on chronic case consultation and patient education.',
    'Development of Care Well as a healthcare, education and community platform.',
  ],
};

export const education = {
  label: 'Education',
  title: 'Education & teaching',
  // [qualification, institution, year]
  degrees: [
    ['PGD (TCM)', 'The Islamia University of Bahawalpur (IUB)', '2023–2024'],
    ['BHMS', 'Abbottabad University of Science & Technology (AUST)', '2022'],
    ['DHMS', 'RHMP', '2020'],
    ['FTJ', 'Herbal Unani Medicine', '2018'],
  ],
  teaching: {
    title: 'Lecturer, Physiology & Medicine',
    text: 'Homeopathic Medical College. Two years of teaching, contributing to the education and professional development of homeopathic medical students.',
  },
};

export const travel = {
  label: 'Global',
  title: 'International exposure',
  // [country, details, year]
  visits: [
    ['Germany', 'Cologne, professional visit', '2006'],
    ['Türkiye', 'Professional visit', '2007'],
    ['South Korea', 'Seoul, professional visit', '2011'],
  ],
  alsoLabel: 'Also documented',
  also: ['France', 'Belgium', 'Thailand', 'Hong Kong', 'United Arab Emirates', 'Saudi Arabia'],
};

export const focus = {
  label: 'Practice',
  title: 'Clinical practice & areas of focus',
  lead: 'Areas of professional consultation, clinical experience and health education.',
  areas: ['Chronic case consultation', 'Digestive and gastrointestinal health', 'Anorectal health', 'ENT and allergy-related concerns', 'Metabolic and lifestyle-related health', 'Patient education and health awareness'],
  note: 'This portfolio separates professional experience and clinical approach from documented patient outcomes. Case studies and testimonials are shared only with patient consent and privacy protection.',
};

export const approach = {
  quote: 'Research-minded. Practical. Patient-focused.',
  text: "Each case is approached with attention to the person's history, presenting concerns, individual circumstances and ongoing response. Continuous learning, appropriate evaluation and responsible referral are part of careful practice.",
};

export const research = {
  label: 'Research',
  title: 'Research & continuous learning',
  lead: 'Health and healing examined from several perspectives, with intellectual openness, methodological discipline and critical appraisal. Observation, tradition, hypothesis and evidence are kept distinct.',
  // [topic, description]
  topics: [
    ['Homeopathy', 'Individualized approaches and the principle of similarity.'],
    ['Herbal, Unani & traditional medicine', 'Traditional therapeutic principles and their contemporary interpretation.'],
    ['Traditional Chinese Medicine', 'Balance, Yin–Yang, Qi and related therapeutic frameworks.'],
    ['Prophetic Medicine ﷺ', 'Health practices and foods reported in Islamic sources, distinguishing source, interpretation and modern application.'],
    ['Hijama / Cupping', 'Traditional practice and contemporary clinical applications.'],
    ['Apitherapy', 'Honey and other bee-derived products in therapeutic and wellness contexts.'],
    ['Nutrition, lifestyle & natural products', 'Their relationship with health and chronic conditions.'],
    ['Clinical observation', 'Structured learning from cases, investigations, follow-up and documented outcomes.'],
  ],
  note: 'Each interest is examined within its own conceptual framework and is not assumed equivalent to the others. Research interests are not clinical evidence or professional qualification.',
};

export const knowledge = {
  label: 'Knowledge',
  title: 'Health education & knowledge centre',
  // [topic, icon]
  topics: [
    ['Health Awareness', 'heart-pulse'],
    ['Chronic Disease Education', 'activity'],
    ['Homeopathic Education', 'graduation-cap'],
    ['Herbal & Traditional Medicine', 'leaf'],
    ['Urdu Health Education', 'languages'],
    ['Research & Clinical Learning', 'microscope'],
    ['Articles & Videos', 'newspaper'],
    ['Frequently Asked Questions', 'circle-help'],
  ],
};

export const recognition = {
  label: 'Recognition',
  title: 'Professional recognition',
  award: { title: 'First Prize', text: 'Beaks & Wings Birds Show, Islamabad, 2008.' },
  text: 'Appreciation from government, research, livestock, nutrition and professional institutions. A certificate gallery will be added after document verification.',
};

export const careWell = {
  label: 'Platform',
  title: 'Care Well',
  photo: ['/images/care-well-clinic.jpg', 'Dr. Shaukat Hussain at Care Well Homeopathic Clinic'],
  lead: 'The master platform bringing together healthcare, education, wellness, community and welfare, research-oriented learning, products and responsible commercial activity, serving Pakistan and international audiences.',
  // [pillar, description, icon]
  pillars: [
    ['Care Well Clinic', 'Clinical and healthcare services.', 'stethoscope'],
    ['Education & Knowledge', 'Health education and learning.', 'book-open'],
    ['Community & Welfare', 'Community and welfare initiatives.', 'hand-heart'],
    ['Wellness & Future Projects', 'Wellness initiatives in development.', 'sprout'],
    ['Products & Online Store', 'Care Well-branded products and future e-commerce.', 'shopping-bag'],
    ['Business & Commercial', 'Responsible activities that fund the wider Care Well mission.', 'briefcase'],
  ],
  url: '', // TODO: Care Well main website; the button below the pillars appears once this is set
  cta: 'Visit the Care Well website',
};

export const consultation = {
  label: 'Consultation',
  title: 'International consultation',
  text: 'An online consultation pathway will support patients and communities in Pakistan and, progressively, international audiences, in English and Urdu, with more languages to follow.',
};

export const contact = {
  label: 'Get in touch',
  title: 'Contact',
  focus: 'Professional focus: chronic case consultation.',
};
