// Project case studies. Each entry carries a `slug` and `details`, which
// together drive the /work/:slug sub-pages.

export const projects = [
  {
    idx: '01',
    slug: 'fir-ai',
    seoDescription:
      'A four-person final-year project for Kerala Police: an AI investigation assistant that reads FIR documents, with an offline BiLSTM + Attention classifier at 98.8% accuracy, Malayalam OCR, Bhashini translation, and legal retrieval.',
    title: 'FIR-AI — Investigation Assistant for Kerala Police',
    type: 'Applied AI · Document Intelligence',
    desc: (
      <>An AI assistant that turns unstructured police FIRs into structured case data. A four-person final-year project on a problem statement from Kerala Startup Mission and the Kerala AI Mission (K-AI). I built the offline BiLSTM + Attention model that classifies crime type and severity at <em>98.8% accuracy</em>, and designed the architecture, schemas and workflows for Malayalam OCR, Bhashini translation and legal retrieval.</>
    ),
    stack: ['Python', 'NLP', 'BiLSTM + Attention', 'OCR', 'Bhashini API'],
    feats: [
      { b: '98.8%', s: 'Crime classification accuracy' },
      { b: 'Offline', s: 'BiLSTM + Attention on CPU' },
      { b: 'Team of 4', s: 'K-AI · Kerala Startup Mission' },
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
          'Every criminal case in India starts with a First Information Report: unstructured, often scanned text. Officers spend hours pulling out who, where, when and what, and across thousands of cases that slows investigations.',
          'The problem statement came through Kerala Startup Mission and the Kerala AI Mission (K-AI). We took it on as a final-year project, in a team of four.',
        ],
      },
      {
        h: 'What it does',
        ps: [
          'FIR-AI reads FIRs (PDFs or images, in Malayalam or English) and returns structured case data: crime type and severity, entities such as names, locations, vehicles and amounts, the applicable IPC/BNS sections, and similar past cases.',
          'The Bhashini API translates between Malayalam and English, and a legal assistant answers questions from a built-in knowledge base of Indian law.',
        ],
      },
      {
        h: 'My part',
        ps: [
          'I built the core model: a BiLSTM with attention that reaches 98.8% accuracy on crime classification and runs on a CPU with no internet connection, which matters for police records.',
          'I also designed the system architecture, data schemas and workflow diagrams, and wrote the UI prompts for the OCR, translation and legal retrieval flows. The rest of the build was shared across the team.',
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
      <>A hyperlocal harvest marketplace for Kerala. One Melos monorepo and shared core package power <em>four</em> standalone Flutter apps (Homeowner, Worker, Site Manager, B2B buyer) on a single Firebase backend with TypeScript Cloud Functions. Razorpay for payments, Riverpod for state, and seeded demo data in every app.</>
    ),
    stack: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'TypeScript Cloud Functions', 'Razorpay', 'Melos'],
    feats: [
      { b: '4 apps', s: 'One shared core package' },
      { b: '1 backend', s: 'Firebase + TS functions' },
      { b: 'Payments', s: 'Razorpay integration' },
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
          "Kerala's homesteads grow more coconuts than their owners can harvest. ThengaPari connects tree owners with the workers who climb, the site managers who coordinate jobs, and the B2B buyers who purchase the harvest.",
        ],
      },
      {
        h: 'The architecture',
        ps: [
          'Each role gets its own standalone Flutter app instead of one app with role switches. All four build from a single Melos monorepo and share one core package: models, services, providers, theme, widgets and auth screens.',
          'The backend is one Firebase project (Auth, Firestore, Storage, Messaging) with TypeScript Cloud Functions. Razorpay keys live only in function secrets, never on the client. State is Riverpod throughout, and every app runs on seeded demo data without a live backend.',
        ],
      },
      {
        h: 'Why it matters',
        ps: [
          'A fix in the core package lands in every app, each app stays focused on its user, and a fifth role can be added without touching the other four.',
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
      <>ESP32 firmware reads a Neo-6M GPS and an MPU6050 IMU and streams over BLE and WebSocket to a React Native app. When the motion data looks like a crash, it sends an SOS automatically. Geofencing, live maps and offline microSD logging keep it working without signal.</>
    ),
    stack: ['React Native', 'Firebase', 'ESP32', 'Neo-6M GPS', 'MPU6050', 'WebSocket', 'BLE'],
    feats: [
      { b: 'Live', s: 'Real-time cloud sync' },
      { b: 'SOS', s: 'Automatic accident alerts' },
      { b: 'Offline', s: 'microSD fallback logging' },
    ],
    media: '/assets/proj-2.png',
    alt: 'GPS and IMU safety monitoring — live route and impact detection concept',
    link: 'https://github.com/Ahamedshakir02/TrailSafe',
    linkLabel: 'View on GitHub',
    shots: [
      { src: '/assets/shots/gh-tailsafe.png', caption: 'TrailSafe — repository' },
      { src: '/assets/shots/gh-trailsafeapp.png', caption: 'TrailSafeApp — React Native app repository' },
    ],
    details: [
      {
        h: 'The problem',
        ps: [
          'After a serious road accident, the victim often cannot call for help. The goal: detect the crash automatically and send an alert with a live location.',
        ],
      },
      {
        h: 'The hardware',
        ps: [
          'An ESP32 reads a Neo-6M GPS and an MPU6050 accelerometer/gyroscope together and fuses them into one telemetry stream. The firmware talks BLE to the phone and WebSocket to the cloud, and logs to a microSD card when connectivity drops.',
        ],
      },
      {
        h: 'The app',
        ps: [
          'The React Native app shows a live map, manages geofences and syncs telemetry through Firebase in real time. Impact detection watches for sudden deceleration beyond normal riding and sends an SOS with coordinates to emergency contacts. Geofence alerts double as theft detection.',
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
      <>SVM, Decision Tree and KNN compared on stroke prediction, where only <em>50 of 1,022</em> test cases are positive. The model with the best accuracy (89.2%) catches the fewest strokes. The project shows why accuracy is the wrong metric here.</>
    ),
    stack: ['Python', 'Scikit-learn', 'SMOTE', 'Pandas', 'NumPy', 'Google Colab'],
    feats: [
      { b: '89.2%', s: 'Best accuracy · Decision Tree' },
      { b: '3 models', s: 'SVM · Decision Tree · KNN' },
      { b: '972:50', s: 'Class imbalance handled' },
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
        h: 'The data',
        ps: [
          'Of 1,022 held-out cases, 972 are negative and 50 positive. Predicting "no stroke" every time scores 95% accuracy and is useless.',
          'Missing values are imputed, features scaled with StandardScaler, and the training set rebalanced with SMOTE. The test set stays untouched.',
        ],
      },
      {
        h: 'Three models',
        ps: [
          'SVM, Decision Tree and KNN were trained on the same split: 79.2%, 89.2% and 80.2% accuracy, averaging 82.9%.',
          'On accuracy the Decision Tree wins. On catching strokes, it is the worst of the three.',
        ],
      },
      {
        h: 'What the confusion matrices show',
        ps: [
          'The Decision Tree finds 8 of 50 strokes (recall 0.16, F1 0.13). The SVM, ten points lower on accuracy, finds 24 of 50 (recall 0.48, F1 0.18). In screening, where a missed stroke costs far more than a false alarm, the less accurate model is the better one.',
          'Positive-class precision stays around 0.11 for all three: resampling raises recall but adds false alarms. Fixing that needs cost-sensitive learning or a threshold tuned to clinical cost, not a different classifier.',
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
      <>A multi-page marketing site for a construction and design firm in Kerala. Deep teal and brass, a branded preloader, a page-transition curtain, Lenis smooth scroll, fluid clamp() type and a scroll-aware WhatsApp button, all respecting prefers-reduced-motion.</>
    ),
    stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lenis'],
    feats: [
      { b: 'Branded', s: 'Preloader + page curtain' },
      { b: 'Fluid', s: 'clamp() type system' },
      { b: 'A11y', s: 'Reduced-motion safe' },
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
          'Holytouch ("Your Perfect Builder") is a construction and design firm in Kerala. It needed a multi-page, mobile-first site that matched the quality of its builds.',
        ],
      },
      {
        h: 'The design system',
        ps: [
          'Deep teal-green with a brass accent on warm cream, toned down to cut glare. Outfit for display type to echo the logo, Inter for body. Hairline dividers, numbered sections, fluid clamp() headings, and one shared spacing utility.',
        ],
      },
      {
        h: 'The motion',
        ps: [
          'Kept restrained: a once-per-session preloader, a teal page-transition curtain that hides route swaps, Lenis smooth scroll, scroll-reveal fades, count-up stats, and a WhatsApp button that appears after the hero. Every effect falls back to a static state under prefers-reduced-motion.',
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
      <>A bilingual English/Arabic site for a government typing and document-services centre in Ajman, UAE, live at safaritypingservices.com. Fifteen service pages, a WhatsApp-first contact flow with no backend, self-hosted fonts including IBM Plex Sans Arabic, JSON-LD structured data, and trust claims kept accurate.</>
    ),
    stack: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
    feats: [
      { b: 'EN · AR', s: 'Bilingual brand' },
      { b: '15', s: 'Service detail pages' },
      { b: 'WhatsApp', s: 'Zero-backend contact' },
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
          'Safari Typing Services (سفاري لخدمات الطباعة) is a government typing and document-services centre in Ajman, UAE. Its customers search in two languages, mostly on phones, so the site had to be bilingual, mobile-first, fast on cheap devices, and quick to act on: find the service, message the shop.',
        ],
      },
      {
        h: 'The build',
        ps: [
          'React, Vite, Tailwind and React Router: home, about, FAQ, contact, and fifteen service pages (business setup, PRO services, visas, Emirates ID, attestation, tax and more), each with its own SEO metadata. Colours come from the logo; fonts are self-hosted: Space Grotesk, Inter and IBM Plex Sans Arabic.',
          'There is no backend. The contact form opens a pre-filled WhatsApp message, with an email fallback, which is how the business already talks to customers. Motion is light CSS and IntersectionObserver, off under prefers-reduced-motion.',
        ],
      },
      {
        h: 'The details',
        ps: [
          'Trust claims are kept precise: "ICP e-Channel Submissions" rather than an unqualified "Government Authorised". JSON-LD structured data, Open Graph tags and Ajman-accurate service terms complete it. The site is live at safaritypingservices.com, serving customers in five languages.',
        ],
      },
    ],
  },
]
