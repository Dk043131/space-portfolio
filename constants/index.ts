import { FaEnvelope, FaGraduationCap } from "react-icons/fa";
import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxExternalLink,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Python",
    image: "python.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "FastAPI",
    image: "fastapi.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Swift",
    image: "swift.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 45,
    height: 45,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 75,
    height: 75,
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "React",
    image: "react.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "HTML",
    image: "html.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 75,
    height: 75,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Python",
    image: "python.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "FastAPI",
    image: "fastapi.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 45,
    height: 45,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Swift & SwiftUI",
    image: "swift.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Pandas & Data Science",
    image: "pandas.png",
    width: 75,
    height: 75,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/deepakkumar-a-1759a2360",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Dk043131",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    link: "mailto:2k25it008@kiot.ac.in",
  },
] as const;

export const CANDIDATE_INFO = {
  name: "DEEPAKKUMAR A",
  location: "Salem, Tamil Nadu, India",
  phone: "9952145182",
  email: "2k25it008@kiot.ac.in",
  linkedin: "https://linkedin.com/in/deepakkumar-a-1759a2360",
  github: "https://github.com/Dk043131",
  education: "B.Tech — Information Technology (2nd Year, 2025–2029)",
  college: "Knowledge Institute of Technology, Salem",
  tagline: "Data Science & Full-Stack/AI Developer",
};

export const PROJECTS = [
  {
    title: "DK SYSTEM 3.0 — Autonomous AI Life OS",
    description:
      "Flagship autonomous multi-agent engine across Desktop (macOS), Web, and Mobile with dynamic tool orchestration, hybrid PostgreSQL/SQLite data layer, and multi-modal AI (Vision OCR, LLM cascades, TTS, wake-word).",
    image: "/projects/project-dk.png",
    link: "https://github.com/Dk043131",
    tags: ["Node.js", "Electron", "Capacitor", "PostgreSQL", "SQLite", "WebSocket", "LLM APIs"],
    flagship: true,
  },
  {
    title: "IRA — macOS Desktop AI Companion",
    description:
      "Autonomous multi-modal HUD assistant with a sub-400ms LLM cascade router (Groq/Qwen + Gemini Flash) and native Swift OS automation for Calendar, Reminders, WhatsApp, and screen OCR.",
    image: "/projects/project-ira.png",
    link: "https://github.com/Dk043131",
    tags: ["Node.js", "Electron", "Swift", "Python", "SQLite", "Gemini API", "Groq LPU"],
    flagship: true,
  },
  {
    title: "Tamil LLM — Gamified Learning PWA",
    description:
      "12-month Tamil script-to-fluency curriculum powered by 'Selvi,' a Claude AI tutor, an HTML5 Canvas stroke-tracing engine for script mastery, and Duolingo-style XP and streaks.",
    image: "/projects/project-tamil.png",
    link: "https://github.com/Dk043131",
    tags: ["React", "Node.js", "Express", "SQLite", "Claude API", "Tailwind CSS", "Canvas API"],
    flagship: true,
  },
  {
    title: "DUEO (iOS) — Offline-First Task Execution",
    description:
      "Offline-first native SwiftUI application with SwiftData persistence, real-time Server-Sent Events sync, on-device NLP task enrichment, and an advanced habit analytics engine.",
    image: "/projects/project-dueo.png",
    link: "https://github.com/Dk043131",
    tags: ["SwiftUI", "SwiftData", "Server-Sent Events", "On-Device NLP", "Combine", "iOS 18"],
    flagship: true,
  },
  {
    title: "Shelfwise (iOS) — Intelligent Reading Tracker",
    description:
      "iOS reading & habit tracker with OpenLibrary API integration, AVFoundation-based camera Visual Notes Vault, a 7-day analytics dashboard, and glassmorphic Liquid Glass dark UI.",
    image: "/projects/project-shelfwise.png",
    link: "https://github.com/Dk043131",
    tags: ["Swift", "SwiftUI", "Combine", "URLSession", "AVFoundation", "OpenLibrary API"],
    flagship: true,
  },
  {
    title: "Uzhavan 360 — Hyperlocal Agri Marketplace",
    description:
      "Geospatial farmer discovery marketplace with atomic inventory reservations and a Tamil/English/Tanglish voice-first AI assistant powered by Gemini API.",
    image: "/projects/project-uzhavan.png",
    link: "https://github.com/Dk043131",
    tags: ["React 19", "Express", "MongoDB", "Gemini API", "Geospatial Indexing"],
    flagship: false,
  },
  {
    title: "Cryptora — Zero-Knowledge Secure Chat",
    description:
      "Production-grade end-to-end encrypted chat infrastructure with zero-knowledge relay, client-side cryptographic serialization, and forward secrecy.",
    image: "/projects/project-cryptora.png",
    link: "https://github.com/Dk043131",
    tags: ["Node.js", "WebCrypto API", "WebSocket", "Zero-Knowledge Relay"],
    flagship: false,
  },
] as const;

export const ALL_PROJECTS_LIST = [
  {
    id: 1,
    name: "DK SYSTEM 3.0",
    role: "Flagship ★",
    category: "AI & Autonomous OS",
    stack: "Node.js, Electron, Capacitor, PostgreSQL/SQLite, WebSocket, LLM APIs",
    desc: "Multi-step autonomous agent engine running on macOS & Cloud across Desktop/Web/Mobile with tool orchestration, hybrid cloud/local data layer, multi-modal AI (Vision OCR, LLM cascades, TTS, wake-word).",
  },
  {
    id: 2,
    name: "IRA",
    role: "Flagship ★",
    category: "Autonomous HUD & OS Control",
    stack: "Node.js, Electron, Swift, Python, SQLite, Gemini API, Groq",
    desc: "Multi-modal HUD assistant with a sub-400ms LLM cascade router (Groq/Qwen + Gemini Flash) and native Swift OS automation for Calendar, Reminders, WhatsApp, and screen OCR.",
  },
  {
    id: 3,
    name: "Tamil LLM",
    role: "Flagship ★",
    category: "EdTech & Vernacular AI",
    stack: "React, Node.js, Express, SQLite, Claude API, Tailwind CSS, Canvas API",
    desc: "12-month Tamil script-to-fluency curriculum with 'Selvi,' a Claude-powered AI tutor, Canvas stroke-tracing engine, and Duolingo-style gamification (skill trees, streaks, XP).",
  },
  {
    id: 4,
    name: "DUEO (iOS)",
    role: "Flagship ★",
    category: "Native iOS / Offline-First",
    stack: "SwiftUI, SwiftData, Server-Sent Events, On-Device NLP",
    desc: "Offline-first SwiftUI app with SwiftData persistence, real-time SSE sync, on-device NLP task enrichment, and an advanced notification & habit analytics engine.",
  },
  {
    id: 5,
    name: "Shelfwise (iOS)",
    role: "Flagship ★",
    category: "Native iOS / Computer Vision",
    stack: "Swift, SwiftUI, Combine, URLSession, AVFoundation, OpenLibrary API",
    desc: "iOS reading & habit tracker with OpenLibrary API integration, an AVFoundation-based Visual Notes Vault, a 7-day analytics dashboard, and a custom glassmorphic Liquid Glass dark-mode UI.",
  },
  {
    id: 6,
    name: "Uzhavan 360",
    role: "Full Platform",
    category: "AgriTech & Voice AI",
    stack: "React 19, Express, MongoDB, Gemini API",
    desc: "Hyperlocal agri marketplace with geospatial farmer discovery, atomic inventory reservations, and a Tamil/English/Tanglish voice-first AI assistant.",
  },
  {
    id: 7,
    name: "Cryptora",
    role: "Security Infrastructure",
    category: "Cryptography & Security",
    stack: "Node.js, WebCrypto, WebSocket, Zero-Knowledge",
    desc: "Production-grade end-to-end encrypted secure chat & zero-knowledge relay with forward secrecy.",
  },
  {
    id: 8,
    name: "Smart Campus Transport",
    role: "Mobile App",
    category: "Transit Systems",
    stack: "React Native, Firebase, GPS Telemetry",
    desc: "Live GPS bus tracking and automated transit dispatch with arrival ETAs.",
  },
  {
    id: 9,
    name: "Autonomous IoT Waiter Robot",
    role: "Robotics Hardware",
    category: "IoT & Embedded Systems",
    stack: "ESP32, React, C++ Embedded, Sensors",
    desc: "Voice ordering & kitchen dispatch with autonomous obstacle navigation.",
  },
  {
    id: 10,
    name: "Amogham",
    role: "Web Application",
    category: "Web Engineering",
    stack: "HTML5, CSS3, JavaScript",
    desc: "High-performance restaurant web platform with interactive menu and digital reservations.",
  },
  {
    id: 11,
    name: "AssetFlow",
    role: "Enterprise Software",
    category: "Enterprise ERP",
    stack: "React, NestJS, PostgreSQL, Prisma",
    desc: "Enterprise asset ERP with lifecycle tracking, depreciation auditing & QR workflows.",
  },
  {
    id: 12,
    name: "StudyAI Companion",
    role: "Physical AI Device",
    category: "IoT / Generative AI",
    stack: "ESP32, Gemini API, Python",
    desc: "Hardware-integrated AI focus coach with ambient bio-feedback and voice tutoring.",
  },
  {
    id: 13,
    name: "MED-CLAIM",
    role: "Healthcare Automation",
    category: "Vision AI & HealthTech",
    stack: "FastAPI, Gemini Vision, Python OCR",
    desc: "AI claims adjudication with multimodal document OCR and policy verification.",
  },
  {
    id: 14,
    name: "SmartHealth Nexus",
    role: "Hospital Platform",
    category: "Healthcare ERP",
    stack: "React, FastAPI, PostgreSQL, Docker",
    desc: "Comprehensive hospital management and clinical workflow orchestration platform.",
  },
  {
    id: 15,
    name: "ClinScribe",
    role: "Clinical NLP",
    category: "Healthcare / NLP",
    stack: "FastAPI, FHIR Standards, NLP, Python",
    desc: "Clinical SOAP documentation pipeline transforming ambient doctor-patient consultations.",
  },
  {
    id: 16,
    name: "Namma Kalam",
    role: "Civic Platform",
    category: "CivicTech & Spatial AI",
    stack: "Node.js, PostGIS, Spatial Clustering",
    desc: "AI civic reporting platform with geospatial triage and municipality routing.",
  },
  {
    id: 17,
    name: "KURAL",
    role: "SIH Legal Terminal",
    category: "LegalTech & RAG",
    stack: "ESP32, RAG Pipeline, Vector DB",
    desc: "SIH legal kiosk providing vernacular legal aid via retrieval-augmented generation.",
  },
  {
    id: 18,
    name: "Dcode",
    role: "Developer IDE",
    category: "DevTools & Agentic IDE",
    stack: "TypeScript, Monaco Editor, LLMs",
    desc: "Agentic coding IDE with autonomous code generation, diff inspection and refactoring.",
  },
  {
    id: 19,
    name: "Algorithmic Trading System",
    role: "Quant Engine",
    category: "FinTech & Quantitative ML",
    stack: "Python, FastAPI, Pandas, NumPy",
    desc: "Multi-agent trading engine with backtesting, technical indicators and risk limits.",
  },
  {
    id: 20,
    name: "Titanic Survival Prediction",
    role: "Data Science Model",
    category: "Data Science & ML",
    stack: "Python, Scikit-learn, Pandas, Seaborn",
    desc: "Comprehensive ML survival analysis with exploratory data engineering and ensemble modeling.",
  },
] as const;

export const AWARDS_DATA = [
  {
    medal: "🥇",
    title: "1st Prize — Paper Presentation",
    org: "Selvam College of Engineering",
    prize: "₹500 Cash Award",
  },
  {
    medal: "🥇",
    title: "1st Prize — Project Presentation",
    org: "Hat-Trick, Excel Engineering College",
    prize: "₹600 Cash Award",
  },
  {
    medal: "🥈",
    title: "2nd Prize + Shield — Project Expo",
    org: "Kings Engineering College",
    prize: "₹1,000 Cash Award + Trophy Shield",
  },
  {
    medal: "🥈",
    title: "2nd Prize — Project Exhibition",
    org: "Hat-Trick, Excel Engineering College",
    prize: "Project Exhibition Distinction",
  },
  {
    medal: "🥈",
    title: "2nd Prize — Paper Presentation",
    org: "Hat-Trick, Excel Engineering College",
    prize: "₹400 Cash Award",
  },
  {
    medal: "🥈",
    title: "2nd Prize — Project Expo",
    org: "Kongu Engineering College, Erode",
    prize: "State-Level Project Distinction",
  },
  {
    medal: "🥈",
    title: "2nd Prize — Project Expo & Quiz",
    org: "Muthayammal Engineering College",
    prize: "Technical Expo Honor",
  },
  {
    medal: "🏆",
    title: "Outstanding Student Award",
    org: "Department of IT, Knowledge Institute of Technology",
    prize: "Departmental Distinction",
  },
  {
    medal: "🎖️",
    title: "Premier Paper Presentation Award",
    org: "Annual Day 2026, KIOT",
    prize: "College Annual Honor",
  },
  {
    medal: "🌐",
    title: "International Conference Paper",
    org: "Emerging Trends in Quantum Computing (Intl. Conf. on Computing & BI)",
    prize: "Peer-Reviewed Paper",
  },
  {
    medal: "🏅",
    title: "4th Prize — MongoDB Hackathon",
    org: "Knowledge Institute of Technology",
    prize: "₹500 + Pendrive",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Direct Connect",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/deepakkumar-a-1759a2360",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Dk043131",
      },
      {
        name: "Email Official",
        icon: FaEnvelope,
        link: "mailto:2k25it008@kiot.ac.in",
      },
    ],
  },
  {
    title: "Credentials",
    data: [
      {
        name: "Python (Basic) — HackerRank (2025)",
        icon: null,
        link: "https://hackerrank.com",
      },
      {
        name: "Digital Marketing — HubSpot Academy",
        icon: null,
        link: "https://hubspot.com",
      },
      {
        name: "Data Science Intern — Thiranex",
        icon: null,
        link: "#about-me",
      },
    ],
  },
  {
    title: "Leadership",
    data: [
      {
        name: "R&D Committee Member — KIOT",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Placement Ambassador — KIOT",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Salem, Tamil Nadu, India",
        icon: null,
        link: "#contact",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "AI & Security",
    link: "#encryption",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Awards",
    link: "#awards",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Dk043131",
};
