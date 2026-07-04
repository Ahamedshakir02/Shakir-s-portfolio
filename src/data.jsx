// Content for the portfolio. Projects include `slug` + `details` for the
// /work/:slug case-study sub-pages.

export const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#work', label: 'Work' },
  { href: '/#path', label: 'Path' },
  { href: '/#mulearn', label: 'µLearn' },
]

export const roles = ['AI & Prompt Engineer', 'IoT Developer', 'Mobile Developer', 'Photographer']

export const stats = [
  { count: 40, suffix: '%', label: 'growth I drove on campus' },
  { count: 10, suffix: '+', label: 'workshops I actually ran' },
  { count: 98, suffix: '%', label: 'model accuracy, no rounding up' },
  { count: 3, suffix: ' langs', label: 'spoken, give or take a verb tense' },
]

export const aboutTags = [
  'Edge AI', 'Applied NLP', 'IoT Systems', 'Public Safety', 'Healthcare', 'Design Systems',
]

export const skills = [
  { idx: '01', name: 'Languages', chips: ['Python', 'Java', 'JavaScript', 'C'] },
  { idx: '02', name: 'AI / ML', chips: ['NLP', 'Text Extraction', 'Scikit-learn', 'Pandas', 'NumPy', 'ANN / Deep Learning', 'LLMs', 'Generative AI'] },
  { idx: '03', name: 'Prompt Engineering', chips: ['Prompt Design', 'System Prompts', 'Few-shot & CoT', 'LLM App Building', 'RAG Workflows', 'Evals & Iteration', 'Coding with LLMs'] },
  { idx: '04', name: 'Web & Mobile', chips: ['React', 'React Native', 'Flutter', 'Dart', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'HTML', 'CSS', 'REST APIs'] },
  { idx: '05', name: 'Cloud & Tools', chips: ['Firebase', 'Cloud Functions', 'Razorpay', 'MongoDB', 'Google Colab', 'Git', 'GitHub', 'VS Code'] },
  { idx: '06', name: 'Hardware / IoT', chips: ['ESP32', 'Neo-6M GPS', 'MPU6050 IMU', 'BLE', 'WebSocket', 'microSD'] },
  { idx: '07', name: 'Design & UX', chips: ['Figma', 'Wireframing', 'UX Prototyping', 'User Flow Design'] },
]

export const projects = [
  {
    idx: '01',
    slug: 'fir-ai',
    title: 'FIR-AI — Investigation Assistant for Kerala Police',
    type: 'Applied AI · Document Intelligence',
    desc: (
      <>Police FIR documents are a mess of unstructured text — so I built an AI investigation assistant that reads them. A <em>100% custom-built AI engine</em> does real-time FIR analysis: entity extraction (names, dates, locations, incidents), case intelligence across files, and legal guidance, with multilingual support for officers on the ground. Ask a case a question in plain English (or Malayalam) and get an answer.</>
    ),
    stack: ['Python', 'NLP', 'Custom AI Engine', 'LLMs', 'PDF Processing'],
    feats: [
      { b: 'Custom', s: '100% CUSTOM-BUILT AI ENGINE' },
      { b: 'Realtime', s: 'LIVE FIR ANALYSIS' },
      { b: 'Multilingual', s: 'CASE Q&A · LEGAL GUIDANCE' },
    ],
    media: '/assets/proj-1.png',
    alt: 'FIR-AI — police document intelligence concept',
    link: 'https://github.com/Ahamedshakir02/firai',
    linkLabel: 'View on GitHub',
    shots: [
      { src: 'https://opengraph.githubassets.com/1/Ahamedshakir02/firai', caption: 'firai — repository' },
    ],
    details: [
      {
        h: 'The problem',
        ps: [
          "A First Information Report is where every criminal case in India begins — and it's a wall of unstructured, often handwritten-then-scanned text. Officers spend hours reading, cross-referencing, and manually extracting the facts that matter: who, where, when, what. At scale, across thousands of cases, that time adds up to slower investigations.",
        ],
      },
      {
        h: 'What it does',
        ps: [
          'FIR-AI ingests FIR documents and turns them into structured, queryable case intelligence in real time. The engine extracts entities — names, dates, locations, incident types — parses the underlying PDFs, and links related information across files.',
          'On top of that sits a natural-language layer: an officer can ask a case a question in plain English or Malayalam and get a direct answer, along with relevant legal guidance for the sections involved. No query syntax, no training required.',
        ],
      },
      {
        h: 'How it is built',
        ps: [
          'The core is a 100% custom-built AI engine in Python: a full NLP pipeline covering PDF parsing, tokenization, pattern matching, and entity extraction, with an LLM-powered Q&A layer for conversational access. Building the engine rather than renting one keeps sensitive police data controllable and the system auditable.',
        ],
      },
    ],
  },
  {
    idx: '02',
    slug: 'thengapari',
    title: 'ThengaPari — Agri-Harvest Marketplace',
    type: 'Product · Flutter Monorepo',
    desc: (
      <>A hyperlocal agri-harvest marketplace for Kerala — and a real exercise in product architecture. One Melos monorepo, one shared core package, and <em>four</em> standalone Flutter apps (Homeowner, Worker, Site Manager, B2B buyer), all talking to a single Firebase backend with TypeScript Cloud Functions. Payments run through Razorpay, state through Riverpod, and every app runs on its own with seeded demo data.</>
    ),
    stack: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'TypeScript Cloud Functions', 'Razorpay', 'Melos'],
    feats: [
      { b: '4 apps', s: 'ONE SHARED CORE PACKAGE' },
      { b: '1 backend', s: 'FIREBASE + TS FUNCTIONS' },
      { b: 'Payments', s: 'RAZORPAY INTEGRATION' },
    ],
    media: null,
    alt: 'ThengaPari — four-app Flutter marketplace',
    link: 'https://github.com/Ahamedshakir02/Thengapari',
    linkLabel: 'View on GitHub',
    shots: [
      { src: 'https://opengraph.githubassets.com/1/Ahamedshakir02/Thengapari', caption: 'Thengapari — monorepo repository' },
    ],
    details: [
      {
        h: 'The idea',
        ps: [
          "Kerala's homesteads produce more than their owners can harvest — coconuts being the classic case. ThengaPari connects the people who own the trees with the workers who climb them, the site managers who coordinate jobs, and the B2B buyers who purchase the harvest. Four very different users, one marketplace.",
        ],
      },
      {
        h: 'The architecture',
        ps: [
          'Instead of one bloated app with role switches, each role gets its own standalone Flutter app — Homeowner, Worker, Site Manager, and B2B buyer — chosen at install, with no role-gate friction. All four are built from a single Melos monorepo and share one core package: models, services, providers, theme, widgets, and auth screens.',
          'The backend is one shared Firebase project (Auth, Firestore, Storage, Messaging) with TypeScript Cloud Functions. Razorpay handles payments, with keys living only in function secrets — never on the client. State management is Riverpod throughout, and every app boots with seeded demo data so the full UI runs without a live backend.',
        ],
      },
      {
        h: 'Why it matters',
        ps: [
          'One codebase shipping four products is the whole point: a fix in the core package lands in every app, each app stays small and focused for its user, and the platform can grow a fifth role without touching the other four. It is the kind of architecture decision that pays rent every week of development.',
        ],
      },
    ],
  },
  {
    idx: '03',
    slug: 'tailsafe',
    title: 'Real-Time GPS & IMU Safety Monitoring App',
    type: 'IoT · Embedded + Mobile',
    desc: (
      <>Hardware and an app, talking to each other in real time. ESP32 firmware reads a Neo-6M GPS module and an MPU6050 IMU at once, streaming over BLE and WebSocket into React Native. If the acceleration numbers say "that was a crash," it fires an automatic SOS — no tapping required. Geofencing, live maps, and offline microSD logging mean it keeps working even when the signal doesn't.</>
    ),
    stack: ['React Native', 'Firebase', 'ESP32', 'Neo-6M GPS', 'MPU6050', 'WebSocket', 'BLE'],
    feats: [
      { b: 'Live', s: 'REALTIME CLOUD SYNC' },
      { b: 'SOS', s: 'AUTO ACCIDENT ALERTS' },
      { b: 'Offline', s: 'microSD FALLBACK LOGGING' },
    ],
    media: '/assets/proj-2.png',
    alt: 'GPS and IMU safety monitoring — live route and impact detection concept',
    link: 'https://github.com/Ahamedshakir02/TailSafe',
    linkLabel: 'View on GitHub',
    shots: [
      { src: 'https://opengraph.githubassets.com/1/Ahamedshakir02/TailSafe', caption: 'TailSafe — repository' },
      { src: 'https://opengraph.githubassets.com/1/Ahamedshakir02/TrailSafeApp', caption: 'TrailSafeApp — React Native app repository' },
    ],
    details: [
      {
        h: 'The problem',
        ps: [
          'In a serious road accident, the victim often cannot call for help — and the minutes before someone else does are the ones that decide outcomes. The goal: a system that notices the crash by itself and raises the alarm with a live location, no human tap required.',
        ],
      },
      {
        h: 'The hardware',
        ps: [
          'An ESP32 reads a Neo-6M GPS module and an MPU6050 accelerometer/gyroscope simultaneously, fusing position and motion into one telemetry stream. The firmware speaks both BLE (for the paired phone) and WebSocket (for cloud sync), and when connectivity drops, it logs everything to a microSD card so no data is lost between signal pockets.',
        ],
      },
      {
        h: 'The app',
        ps: [
          'The React Native app renders the live map, manages geofences, and syncs telemetry through Firebase in real time. Impact detection watches the IMU stream for crash signatures — a sudden deceleration spike beyond normal riding dynamics — and fires an automatic SOS with coordinates to emergency contacts. Geofencing alerts when the vehicle leaves a defined zone, which doubles as theft detection.',
        ],
      },
    ],
  },
  {
    idx: '04',
    slug: 'disease-ann',
    title: 'Disease Diagnosis Prediction with an ANN',
    type: 'Machine Learning · Healthcare',
    desc: (
      <>An Artificial Neural Network that predicts disease diagnoses from patient data — and actually earns its accuracy. I did the unglamorous bits properly: cleaning the data, wrangling class imbalance, normalizing, scaling features, encoding labels. Then designed and tuned a multi-layer ANN and held it accountable with a confusion matrix, precision, recall, and F1. No cherry-picked metrics.</>
    ),
    stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Google Colab'],
    feats: [
      { b: '98%+', s: 'TEST ACCURACY' },
      { b: 'Multi-layer', s: 'TUNED HYPERPARAMETERS' },
      { b: 'F1 · Recall', s: 'RIGOROUS EVALUATION' },
    ],
    media: '/assets/proj-3.png',
    alt: 'Disease diagnosis ANN — neural network and signal concept',
    link: 'https://github.com/Ahamedshakir02/Strokeprediction-ML',
    linkLabel: 'View on GitHub',
    shots: [
      { src: 'https://opengraph.githubassets.com/1/Ahamedshakir02/Strokeprediction-ML', caption: 'Strokeprediction-ML — repository' },
    ],
    details: [
      {
        h: 'The data work',
        ps: [
          'Medical datasets are messy and imbalanced — far more healthy records than positive diagnoses, which lets a lazy model score high accuracy by always predicting "healthy." The pipeline addresses that head-on: cleaning, handling class imbalance, normalizing and scaling features, and encoding labels before a single epoch runs. Most of the final accuracy was earned here, not in the model.',
        ],
      },
      {
        h: 'The model',
        ps: [
          'A multi-layer artificial neural network, designed and tuned by hand: layer sizes, activation functions, learning rate, and regularization all iterated against validation performance rather than copied from a tutorial. Built with Scikit-learn, Pandas, and NumPy in Google Colab.',
        ],
      },
      {
        h: 'Honest evaluation',
        ps: [
          'A 98%+ test accuracy means nothing on imbalanced medical data unless recall holds up — a missed diagnosis is the expensive error. So the model is held accountable with a full confusion matrix, precision, recall, and F1, and it clears them without cherry-picking. That evaluation discipline is the actual deliverable of this project.',
        ],
      },
    ],
  },
  {
    idx: '05',
    slug: 'holytouch',
    title: 'Holytouch — Construction & Design Studio Site',
    type: 'Client Work · Web',
    desc: (
      <>A premium multi-page marketing site for a Kerala construction &amp; design firm. Deep teal and brass, a branded preloader, a "dip-to-teal" page-transition curtain, Lenis smooth scroll, fluid clamp() typography, and a scroll-aware WhatsApp button — all fully gated behind prefers-reduced-motion. Restrained motion, premium feel, real client, real deadline.</>
    ),
    stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lenis'],
    feats: [
      { b: 'Branded', s: 'PRELOADER + PAGE CURTAIN' },
      { b: 'Fluid', s: 'CLAMP() TYPE SYSTEM' },
      { b: 'A11y', s: 'REDUCED-MOTION SAFE' },
    ],
    media: null,
    alt: 'Holytouch — construction company website',
    live: 'https://holytouch-website.vercel.app',
    link: 'https://github.com/Ahamedshakir02/holytouch-website',
    linkLabel: 'View on GitHub',
    shots: [
      { src: 'https://image.thum.io/get/width/1400/crop/875/noanimate/https://holytouch-website.vercel.app/', caption: 'Home — hero' },
      { src: 'https://image.thum.io/get/width/1400/crop/875/noanimate/https://holytouch-website.vercel.app/services', caption: 'Services' },
      { src: 'https://image.thum.io/get/width/1400/crop/875/noanimate/https://holytouch-website.vercel.app/projects', caption: 'Projects' },
      { src: 'https://image.thum.io/get/width/1400/crop/875/noanimate/https://holytouch-website.vercel.app/contact', caption: 'Contact' },
    ],
    details: [
      {
        h: 'The brief',
        ps: [
          '"Your Perfect Builder" — an end-to-end construction and design firm in Kerala that needed a web presence to match the quality of its builds: premium, trustworthy, and unmistakably theirs. Multi-page, mobile-first, and fast.',
        ],
      },
      {
        h: 'The design system',
        ps: [
          "Deep teal-green surfaces with a brass/gold accent and warm cream paper — pulled down from near-white to cut glare. Outfit for display type echoing the geometric logo mark, Inter for body. The architectural language runs throughout: hairline 1px dividers, numeric section indices, fluid clamp()-based display sizes so headings scale without breakpoint jumps, and one shared vertical-rhythm utility driving spacing everywhere.",
        ],
      },
      {
        h: 'The motion',
        ps: [
          'Intentionally restrained: a once-per-session brand preloader, a "dip-to-teal" page-transition curtain that covers route swaps so there is never a flash of cream, Lenis smooth scrolling, scroll-reveal fades, count-up stats, and a scroll-aware WhatsApp button that hides on the hero and reappears after it. Every effect falls back to a static state under prefers-reduced-motion.',
        ],
      },
    ],
  },
  {
    idx: '06',
    slug: 'safari-typing',
    title: 'Safari Typing Services — Bilingual Business Site',
    type: 'Client Work · Web',
    desc: (
      <>A bilingual English/Arabic site for a government typing &amp; document-services centre in Ajman, UAE — live at safaritypingservices.com. Fifteen service areas each with their own detail page, a WhatsApp-first contact flow with zero backend, self-hosted fonts including IBM Plex Sans Arabic, JSON-LD structured data, and deliberately honest trust claims — accurate beats impressive.</>
    ),
    stack: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
    feats: [
      { b: 'EN · AR', s: 'BILINGUAL BRAND' },
      { b: '15', s: 'SERVICE DETAIL PAGES' },
      { b: 'WhatsApp', s: 'ZERO-BACKEND CONTACT' },
    ],
    media: 'https://www.safaritypingservices.com/og-image.jpg',
    alt: 'Safari Typing Services — bilingual business website',
    live: 'https://www.safaritypingservices.com',
    link: 'https://github.com/Ahamedshakir02/safari-typing',
    linkLabel: 'View on GitHub',
    shots: [
      { src: 'https://image.thum.io/get/width/1400/crop/875/noanimate/https://www.safaritypingservices.com/', caption: 'Home — bilingual hero' },
      { src: 'https://image.thum.io/get/width/1400/crop/875/noanimate/https://www.safaritypingservices.com/services', caption: 'All 15 service areas' },
      { src: 'https://image.thum.io/get/width/1400/crop/875/noanimate/https://www.safaritypingservices.com/about', caption: 'About' },
      { src: 'https://image.thum.io/get/width/1400/crop/875/noanimate/https://www.safaritypingservices.com/contact', caption: 'Contact — WhatsApp-first' },
    ],
    details: [
      {
        h: 'The brief',
        ps: [
          'Safari Typing Services (سفاري لخدمات الطباعة) is a government typing and document-services centre in Ajman, UAE. Its customers search in two languages and mostly on phones — the site had to be bilingual in brand, mobile-first, fast on cheap devices, and easy to act on: find the service, message the shop.',
        ],
      },
      {
        h: 'The build',
        ps: [
          'React + Vite + Tailwind with React Router: home, about, FAQ, contact, and fifteen individual service detail pages — from business setup and PRO services to visas, Emirates ID, attestation, and tax — each with its own SEO metadata. Brand colours are sampled straight from the logo; fonts are self-hosted — Space Grotesk for display, Inter for body, and IBM Plex Sans Arabic for the Arabic brand accents.',
          'There is deliberately no backend: the contact form opens a pre-filled WhatsApp message (with an email fallback), which is exactly how the business already talks to its customers. Motion is light CSS and IntersectionObserver only, fully disabled under prefers-reduced-motion.',
        ],
      },
      {
        h: 'The details',
        ps: [
          'Trust claims on the site are intentionally accurate — "ICP e-Channel Submissions" rather than an unqualified "Government Authorised" — because in the document-services business, precision is the brand. JSON-LD structured data, Open Graph tags, and Ajman-accurate service terminology round out the package. The site is live in production at safaritypingservices.com, serving a real business and its customers in five languages.',
        ],
      },
    ],
  },
]

export const timeline = [
  {
    when: 'Jul 2025 – Apr 2026',
    where: ['GTech µLearn · MES College of Engineering', 'Kuttippuram, India'],
    title: 'Campus Lead',
    role: "GTech µLearn is Kerala's largest student developer community, backed by the Government of Kerala. I ran our chapter.",
    list: [
      <>Grew active student participation by <b>40%</b> — turns out structured learning tracks plus a bit of peer accountability actually works.</>,
      <>Ran <b>10+ technical workshops</b> across AI, Web Dev, Cybersecurity, and Open Source — 100+ students a semester showed up.</>,
      <>Wrangled <b>10+ mentors</b> and campus leads across institutions to pull off collaborative programs and hackathons.</>,
      <>Handled onboarding, tracked everyone's learning milestones, and kept cohorts actually finishing what they started.</>,
    ],
  },
  {
    when: '2022 – May 2026',
    where: ['APJ Abdul Kalam Technological University (KTU)', 'Kerala, India'],
    title: 'B.Tech — Computer Science & Engineering',
    role: "Four years of the deep end — from soldering logic gates to training neural nets. Here's what actually filled the timetable, and what I got up to between lectures.",
    list: [
      <>Built my capstone — the <b>FIR document-analysis NLP system</b> — straight out of the Machine Learning and DBMS coursework, and the IoT safety app off the back of Embedded Systems.</>,
      <>Ran <b>peer learning sessions</b> for juniors on DSA and Python — turns out the fastest way to actually learn a thing is to teach it badly first, then teach it well.</>,
      <>Represented the department in <b>hackathons and tech fests</b>, and helped onboard batchmates into the µLearn tracks I was leading.</>,
    ],
    sub: 'The full syllabus, by theme:',
    courses: [
      'Linear Algebra & Calculus', 'Discrete Mathematics', 'Probability & Statistics',
      'Programming in C', 'Object-Oriented Programming', 'Data Structures', 'Design & Analysis of Algorithms',
      'DBMS', 'Operating Systems', 'Computer Networks', 'Computer Organization & Architecture',
      'Digital Electronics', 'Microprocessors', 'Embedded Systems',
      'Theory of Computation', 'Compiler Design', 'Software Engineering',
      'Web Programming', 'Machine Learning', 'Artificial Intelligence', 'Data Science',
      'Cryptography & Network Security', 'Cloud Computing', 'Distributed Systems',
    ],
  },
]

export const certs = [
  { issuer: 'Google', yr: 'May 2024', title: 'Introduction to Generative AI', href: 'https://www.coursera.org/account/accomplishments/verify/CREDENTIAL_ID' },
  { issuer: 'Google', yr: 'May 2024', title: 'Introduction to Large Language Models', href: 'https://www.coursera.org/account/accomplishments/verify/CREDENTIAL_ID' },
  { issuer: 'Google', yr: 'Jun 2024', title: 'Introduction to Responsible AI', href: 'https://www.coursera.org/account/accomplishments/verify/CREDENTIAL_ID' },
  { issuer: 'IBM', yr: 'Jun 2024', title: 'Getting Started with Enterprise-grade AI', href: 'https://www.youracclaim.com/credentials/CREDENTIAL_ID' },
  { issuer: 'IBM', yr: 'Jun 2024', title: 'Getting Started with Enterprise Data Science', href: 'https://www.youracclaim.com/credentials/CREDENTIAL_ID' },
  { issuer: 'Microsoft', yr: 'Jun 2024', title: 'Azure AI Fundamentals (AZ-900)', href: 'https://learn.microsoft.com/en-us/users/ahamed-shakir/credentials/CREDENTIAL_ID' },
]

export const mulearnMeta = [
  { b: 'Campus Lead', s: 'MES COLLEGE CHAPTER' },
  { b: '+40%', s: 'PARTICIPATION GROWTH' },
  { b: '100+', s: 'STUDENTS REACHED / SEM' },
]

export const languages = [
  { name: 'English', level: 'Professional working', lvl: 0.85 },
  { name: 'Malayalam', level: 'Native speaker', lvl: 1 },
  { name: 'Arabic', level: 'Basic conversational', lvl: 0.45 },
]

export const contactLinks = [
  { href: 'mailto:ahamedshakir02@gmail.com', label: '✉ ahamedshakir02@gmail.com' },
  { href: 'https://github.com/ahamedshakir02', label: '↗ GitHub', external: true },
  { href: 'https://g.dev/ahamedshakir', label: '↗ Google Developer', external: true },
  { href: 'https://www.linkedin.com/in/ahamed-shakir', label: '↗ LinkedIn', external: true },
  { href: 'https://app.mulearn.org/profile/ahamedshakir@mulearn', label: '↗ µLearn', external: true },
]
