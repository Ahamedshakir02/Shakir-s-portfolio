// Content for the portfolio, lifted from the design's portfolio-minimal.html.

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#path', label: 'Path' },
  { href: '#mulearn', label: 'µLearn' },
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
  { idx: '04', name: 'Web & Mobile', chips: ['React Native', 'HTML', 'CSS', 'REST APIs'] },
  { idx: '05', name: 'Cloud & Tools', chips: ['Firebase RTDB', 'MongoDB', 'Google Colab', 'Git', 'GitHub', 'VS Code'] },
  { idx: '06', name: 'Hardware / IoT', chips: ['ESP32', 'Neo-6M GPS', 'MPU6050 IMU', 'BLE', 'WebSocket', 'microSD'] },
  { idx: '07', name: 'Design & UX', chips: ['Figma', 'Wireframing', 'UX Prototyping', 'User Flow Design'] },
]

export const projects = [
  {
    idx: '01',
    title: 'AI-Based FIR Document Analysis & Information Extraction',
    type: 'Document Intelligence · NLP Pipeline',
    desc: (
      <>Police FIR documents are a mess of unstructured text. This system reads them so humans don't have to — a full NLP pipeline that pulls out the names, locations, dates, and incidents, parses the PDFs, tokenizes, and pattern-matches with regex. Then I bolted on an LLM-powered Q&amp;A layer, so an officer can just <em>ask</em> a case a question in plain English and get an answer.</>
    ),
    stack: ['Python', 'NLP', 'Regex', 'PDF Processing', 'LLMs'],
    feats: [
      { b: 'Entities', s: 'NAMES · DATES · LOCATIONS' },
      { b: 'LLM Q&A', s: 'NATURAL-LANGUAGE SEARCH' },
      { b: 'At scale', s: 'SEARCH · FILTER · ANALYZE' },
    ],
    media: '/assets/proj-1.png',
    alt: 'FIR document analysis — NLP entity extraction concept',
    link: 'https://github.com/Ahamedshakir02/firai',
    linkLabel: 'View on GitHub',
  },
  {
    idx: '02',
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
  },
  {
    idx: '03',
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
  },
  {
    idx: '04',
    title: 'µLearn Mobile App — Onboarding UX',
    type: 'Product Design · UX',
    desc: (
      <>Onboarding can make or break an app — so I rebuilt it for the µLearn mobile app, used by thousands of Kerala students. I designed the whole flow, welcome to profile setup to dashboard, 8 screens, going from scrappy low-fi wireframes to clickable high-fi prototypes with real transitions. Then I put it in front of actual users for a usability review before handoff. Fewer steps, less drop-off.</>
    ),
    stack: ['Figma', 'Wireframing', 'UX Prototyping'],
    feats: [
      { b: '−30%', s: 'FEWER ONBOARDING STEPS' },
      { b: '8 screens', s: 'END-TO-END FLOW' },
      { b: 'Tested', s: 'USABILITY-REVIEWED' },
    ],
    media: '/assets/proj-4.png',
    alt: 'µLearn onboarding UX — three-screen mobile flow concept',
    link: 'https://www.linkedin.com/in/ahamed-shakir',
    linkLabel: 'View on LinkedIn',
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
  { issuer: 'Google', yr: 'May 2024', title: 'Introduction to Generative AI' },
  { issuer: 'Google', yr: 'May 2024', title: 'Introduction to Large Language Models' },
  { issuer: 'Google', yr: 'Jun 2024', title: 'Introduction to Responsible AI' },
  { issuer: 'IBM', yr: 'Jun 2024', title: 'Getting Started with Enterprise-grade AI' },
  { issuer: 'IBM', yr: 'Jun 2024', title: 'Getting Started with Enterprise Data Science' },
  { issuer: 'Microsoft', yr: 'Jun 2024', title: 'Azure AI Fundamentals (AZ-900)' },
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
  { href: 'https://www.linkedin.com/in/ahamed-shakir', label: '↗ LinkedIn', external: true },
  { href: 'https://app.mulearn.org/profile/ahamedshakir@mulearn', label: '↗ µLearn', external: true },
]
