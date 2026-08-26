// Project case studies. Each entry carries a `slug` and `details`, which
// together drive the /work/:slug sub-pages.

export const projects = [
  {
    idx: '01',
    slug: 'fir-ai',
    seoDescription:
      'An AI investigation assistant that reads unstructured police FIR documents: entity extraction, cross-case intelligence, and multilingual natural-language Q&A, on a 100% custom-built NLP engine.',
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
      { src: '/assets/shots/gh-firai.png', caption: 'firai — repository' },
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
    seoDescription:
      'A hyperlocal agri-harvest marketplace for Kerala: four standalone Flutter apps built from one Melos monorepo and a shared core package, on a single Firebase backend with TypeScript Cloud Functions.',
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
    media: '/assets/proj-4.png',
    alt: 'ThengaPari — multi-screen Flutter app flow',
    link: 'https://github.com/Ahamedshakir02/Thengapari',
    linkLabel: 'View on GitHub',
    shots: [
      { src: '/assets/shots/gh-thengapari.png', caption: 'Thengapari — monorepo repository' },
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
    seoDescription:
      'ESP32 firmware reading a Neo-6M GPS and MPU6050 IMU, streaming over BLE and WebSocket into React Native, with automatic crash-detection SOS, geofencing, and offline microSD logging.',
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
      { src: '/assets/shots/gh-tailsafe.png', caption: 'TailSafe — repository' },
      { src: '/assets/shots/gh-trailsafeapp.png', caption: 'TrailSafeApp — React Native app repository' },
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
    slug: 'stroke-prediction',
    seoDescription:
      'Stroke prediction on a heavily imbalanced clinical dataset — SVM, Decision Tree and KNN compared with SMOTE resampling, where the highest-accuracy model turns out to be the worst one for catching strokes.',
    title: 'Stroke Prediction on Imbalanced Clinical Data',
    type: 'Machine Learning · Healthcare',
    desc: (
      <>Three classical models — SVM, Decision Tree, KNN — trained to predict stroke risk on a dataset where only <em>50 of 1,022</em> test cases are positive. The interesting result is the uncomfortable one: the model with the best accuracy (89.2%) catches the fewest strokes. Accuracy is the wrong metric here, and the project is about showing why.</>
    ),
    stack: ['Python', 'Scikit-learn', 'SMOTE', 'Pandas', 'NumPy', 'Google Colab'],
    feats: [
      { b: '89.2%', s: 'BEST ACCURACY · DECISION TREE' },
      { b: '3 models', s: 'SVM · DECISION TREE · KNN' },
      { b: '972:50', s: 'CLASS IMBALANCE HANDLED' },
    ],
    media: '/assets/proj-3.png',
    alt: 'Stroke prediction — model comparison on imbalanced clinical data',
    link: 'https://github.com/Ahamedshakir02/Strokeprediction-ML',
    linkLabel: 'View on GitHub',
    shots: [
      { src: '/assets/shots/gh-strokeprediction-ml.png', caption: 'Strokeprediction-ML — repository' },
    ],
    details: [
      {
        h: 'The problem with the data',
        ps: [
          'The stroke dataset is severely imbalanced: of 1,022 held-out cases, 972 are negative and 50 are positive. A model that predicts "no stroke" every single time scores 95% accuracy and is completely useless, which makes accuracy an actively misleading metric on this problem.',
          'The pipeline deals with that before any model runs: missing values imputed, features standardised with StandardScaler, and the training set rebalanced with SMOTE so the minority class is actually represented while the held-out test set stays untouched and honest.',
        ],
      },
      {
        h: 'Three models, compared',
        ps: [
          'Support Vector Machine, Decision Tree, and K-Nearest Neighbours were each trained and scored on the same split — 79.2%, 89.2% and 80.2% accuracy respectively, averaging 82.9%.',
          'Ranked on accuracy the Decision Tree wins. Ranked on the thing that matters — catching strokes — it is the worst of the three.',
        ],
      },
      {
        h: 'What the confusion matrices actually say',
        ps: [
          'The Decision Tree reaches 89.2% accuracy while recovering 8 of the 50 stroke cases: recall 0.16, F1 0.13. The SVM scores nearly ten points lower at 79.2% accuracy but recovers 24 of 50: recall 0.48, F1 0.18. In a screening context, where a missed stroke is far more expensive than a false alarm, the less accurate model is the better one.',
          'Precision on the positive class stays low across all three (around 0.11), which is the honest limit of this approach on this dataset — resampling raises recall but floods the positives with false alarms. Fixing that properly needs cost-sensitive learning or a threshold tuned against a clinical cost function, not a better classifier.',
          'That gap between a headline accuracy number and a model that is any use is the actual deliverable here.',
        ],
      },
    ],
  },
  {
    idx: '05',
    slug: 'holytouch',
    seoDescription:
      'A premium multi-page marketing site for a Kerala construction and design firm, with a branded preloader, page-transition curtain, Lenis smooth scroll, and fully reduced-motion-safe animation.',
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
    media: '/assets/shots/holytouch-home.jpg',
    alt: 'Holytouch — construction and design studio website',
    live: 'https://holytouch-website.vercel.app',
    link: 'https://github.com/Ahamedshakir02/holytouch-website',
    linkLabel: 'View on GitHub',
    shots: [
      { src: '/assets/shots/holytouch-home.jpg', caption: 'Home — hero' },
      { src: '/assets/shots/holytouch-services.jpg', caption: 'Services' },
      { src: '/assets/shots/holytouch-projects.jpg', caption: 'Projects' },
      { src: '/assets/shots/holytouch-contact.jpg', caption: 'Contact' },
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
    seoDescription:
      'A bilingual English/Arabic site for a government typing and document-services centre in Ajman, UAE: fifteen service detail pages, a WhatsApp-first zero-backend contact flow, and JSON-LD structured data.',
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
    media: '/assets/shots/safari-home.jpg',
    alt: 'Safari Typing Services — bilingual business website',
    live: 'https://www.safaritypingservices.com',
    link: 'https://github.com/Ahamedshakir02/safari-typing',
    linkLabel: 'View on GitHub',
    shots: [
      { src: '/assets/shots/safari-home.jpg', caption: 'Home — bilingual hero' },
      { src: '/assets/shots/safari-services.jpg', caption: 'All 15 service areas' },
      { src: '/assets/shots/safari-about.jpg', caption: 'About' },
      { src: '/assets/shots/safari-contact.jpg', caption: 'Contact — WhatsApp-first' },
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
