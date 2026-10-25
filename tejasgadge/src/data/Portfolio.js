import {
    AlignEndVerticalIcon,
  BotIcon,
  Clock3,
  FireExtinguisher,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  LayoutDashboard,
  LeafIcon,
  Puzzle,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
  Trophy,
  ShieldCheck,
  Bot,
  Cloud,
  Heart,
  Wallet,
  Brain,
  Users,
  BookOpen,
  BriefcaseBusiness,
  Truck
} from "lucide-react";

import { FaAws, FaC, FaDocker, FaFire, FaFlask, FaFlutter, FaGit, FaGithub, FaGoogle, FaInstagram, FaJava, FaLinkedin, FaMedium, FaNodeJs, FaNs8, FaReact, FaWindows, FaXTwitter } from "react-icons/fa6";
import { href } from "react-router-dom";

// Profile information
export const PROFILE = {
  name: "Tejas Gadge",
  role: "Computer Engineer",
  location: "Maharashtra, India",
  email: "tejasgadgeinternships@gmail.com",
  resume: "https://drive.google.com/drive/folders/150WReePqBEwUpgVVSRLu0smmbhMe5PpD",
  photo: "/PassportPIC.jpg",
  bio: "I build AI-powered applications, data-driven solutions, and cross-platform mobile apps that solve real-world problems through practical, user-focused engineering.",
};

//Email
export const EMAIL = "tejasgadgeinternships@gmail.com";


// Social media links
export const SOCIALS = [
  {
    icon: FaGithub,
    href: "https://github.com/tejasgadge2504",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/tejas-gadge-8a395b258",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/tejas.gadge.108",
    label: "Instagram",
  },
  {
    icon: FaXTwitter,
    href:"https://x.com/TEJASGADGE2504",
    label:"X",
  },
  {
    icon: FaMedium,
    href:"https://medium.com/@tejasgadge903",
    label:"Medium",
  }
];

// Profile statistics
export const STATS = [
  { icon: Trophy, value: "15x", label: "Hackathon winner" },
  { icon: Clock3, value: "100+", label: "Hackathons Hacked" },
  { icon: Layers, value: "15+", label: "Stacks used" },
];


//Experience
export const EXPERIENCE = [
  {
    role: "Junior Software Engineer",
    company: "Network Marvels (INDIA) Pvt. Ltd.",
    period: "Jun 2026 - Present",
    present:true,
    description:
      "Working on ",
  },
    {
    role: "Agentic AI Intern",
    company: "qRaptor",
    period: "Jan 2026 - Apr 2026",
    description:
      "Configured the AgenticAI workflows in various domains like healthcare, transport, fintech and configuring theworkflows using the QRaptor platform.",
  },
  {
    role: "Full Stack AI Developer",
    company: "FyreGig",
    period: "Jun 2025 - Aug 2025",
    description:
      "Built web scraping workflows using n8n, Docker-based ai-agents, multi-agent API integrations and integrated in their customer onboarding flow.",
  },
  {
    role: "GenAI Open Source Intern",
    company: "VESIT",
    period: "Jul 2024",
    description:
      "Contributed to open-source generative AI projects, including RightsQuest and Heartistry.",
  },{
    role: "Web Developer (Freelance)",
    company: "Genius Academy",
    period: "Jan 2024 - Jul 2024",
    description:
      "Redesigned the academy's platform with a lightweight, mobile-friendly interface and added features like a chatbot, boosting user experience and increasing mobile traffic.",
  },
];


// Services and technologies
export const BUILDS = [
  { label: "React Vite (jsx,tsx)", icon: FaReact, color: "#7c6cf0" },
  { label: "Flutter", icon: FaFlutter, color: "#3b82f6" },
  { label: "Docker", icon: FaDocker, color: "#f59e0b" },
  { label: "Java", icon: FaJava, color: "#10b981" },
  { label: "Git - GitHub", icon: FaGithub, color: "#7c6cf0" },
  { label: "MongoDB", icon: LeafIcon, color: "#3b82f6" },
  { label: "AgenticAI (n8n, Agno)", icon:BotIcon, color: "#f59e0b" },

  { label: "FireBase", icon: FaFire, color: "#06b6d4" },
  { label: "Windows Installers", icon: FaWindows, color: "#7c6cf0" },
  { label: "Flask", icon: FaFlask, color: "#3b82f6" },
  { label: "Node.js", icon: FaNodeJs, color: "#06b6d4" },
  { label: "AWS", icon: FaAws, color: "#7c6cf0" },
  { label: "GCP", icon: FaGoogle, color: "#3b82f6" },

  { label: "C & C++", icon: FaC, color: "#f59e0b" },

];


export const ACHIEVEMENTS = [
  {
    title: "1st Runner-Up",
    organization: "SYRUS Hackathon — UPTIQ Track",
    period: "2025",
    description:
      "Secured first runner-up for FinEase, an AI-powered financial assistant.",
  },
  {
    title: "1st Prize",
    organization: "Buzzpro — VESIT",
    period: "2025",
    description:
      "Won first prize for an innovative technology solution.",
  },
  {
    title: "Semi-Finalist",
    organization: "Project DeepBlue Season 10",
    period: "2025",
    description:
      "Reached the semi-finals with a tech-driven social innovation project.",
  },
  {
    title: "Top 11 Finalist",
    organization: "VES Hack It",
    period: "2025",
    description:
      "Ranked 11th among 370 participating teams.",
  },
  {
    title: "Finalist",
    organization: "Hire-a-thon — Hiremate",
    period: "2025",
    description:
      "Selected as a finalist in the national Hire-a-thon competition.",
  },
  {
    title: "1st Prize — ₹30,000",
    organization: "Hackaurora — VJTI Technovanza",
    period: "2024",
    description:
      "Won first prize for an AI-driven solution at Hackaurora.",
    link: "https://www.linkedin.com/posts/tejas-gadge-8a395b258_hackaurora2024-technovanza-ai-ugcPost-7280648554086305792-TpG8",
  },
  {
    title: "1st Rank",
    organization: "DSA Competition — CodeCell VESIT",
    period: "2024",
    description:
      "Secured first position in the Data Structures and Algorithms competition.",
  },
  {
    title: "Semi-Finalist",
    organization: "Aavishkar Research Convention",
    period: "2024",
    description:
      "Selected as a semi-finalist in the 19th Aavishkar Inter-Collegiate Research Convention.",
  },
  {
    title: "1st Prize — ₹50,000",
    organization: "KAINOS AI/ML National Hackathon — RAIT ACM",
    period: "2024",
    description:
      "Won first prize at the KAINOS AI/ML National Hackathon.",
    link: "https://www.linkedin.com/posts/anisha-shankar-_hackathonwin-kainos2024-ai-activity-7266814137098194944-uSiB",
  },
  {
    title: "2nd Prize",
    organization: "RightsQuest — Llama 3 Poster Presentation",
    period: "2024",
    description:
      "Won second prize for an educational LLM-based project.",
  },
  {
    title: "Open-Source Contributor",
    organization: "Hacktoberfest",
    period: "2024",
    description:
      "Successfully merged four pull requests and received official recognition.",
    link: "https://www.holopin.io/hacktoberfest2024/userbadge/cm367gfbm01980cl5eymz3kgh",
  },
  {
    title: "Qualified",
    organization: "Smart India Hackathon — Internal Round",
    period: "2024",
    description:
      "Qualified through the internal selection rounds of Smart India Hackathon.",
  },
  {
    title: "Participant",
    organization: "Google Developer Student Clubs Study Jam",
    period: "2024",
    description:
      "Participated in two Google Developer Student Clubs Study Jam events.",
  },
  {
    title: "Website Deployed",
    organization: "Genius Academy",
    period: "2024",
    description:
      "Developed and deployed a live educational platform website.",
    link: "https://www.geniusacademyonline.com/",
  },
  {
    title: "2nd Prize & Best Presenter",
    organization: "Buzzpro — VESIT",
    period: "2024",
    description:
      "Won second prize and Best Presenter for an AI-driven project.",
  },
  {
    title: "Research Paper Published",
    organization: "RAILEASE — International Journal of Computer Applications (IJCA)",
    period: "2024",
    description:
      "Published research on railway concession automation in the June 2024 edition of IJCA.",
  },
  {
    title: "Hackathon Participant",
    organization: "Multiple National Hackathons",
    period: "2024",
    description:
      "Participated in Sparkathon, Bid by Bid, Flipkart Grid, Google Gemini API Challenge, Tata Innovent, Prasunethon, Google Solution Challenge, Hackfrost, and Hackonomics.",
  },
];

export const CERTIFICATIONS = [
  {
    title: "MSI Packaging Essentials",
    issuer: "Advanced Installer | Engineering PacKit",
    description:
      "Foundational knowledge of MSI packaging and Windows installer creation.",
  },
  {
    title: "Advanced MSI Packaging",
    issuer: "Advanced Installer | Engineering PacKit",
    description:
      "Advanced concepts in MSI packaging and Windows software deployment.",
  },
  {
    title: "n8n Course Level 1",
    issuer: "n8n",
    description:
      "Fundamentals of workflow automation and building automated workflows with n8n.",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    description:
      "Foundational knowledge of cloud computing, AWS services, security, and cloud architecture.",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    description:
      "Introduction to Claude and its capabilities for AI-assisted tasks and productivity.",
  },
  {
    title: "Introduction to Claude Cowork",
    issuer: "Anthropic",
    description:
      "Introduction to Claude Cowork and using AI to assist with multi-step knowledge work.",
  },
  {
    title: "Google Cloud: Cloud Fundamentals",
    issuer: "Google Cloud",
    description:
      "Fundamentals of cloud infrastructure, computing concepts, and Google Cloud services.",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    description:
      "Core networking concepts, network devices, protocols, and connectivity fundamentals.",
  },
  {
    title: "Develop GenAI Apps with Gemini & Streamlit",
    issuer: "Google",
    description:
      "Hands-on experience building generative AI applications using Gemini and Streamlit.",
  },
  {
    title: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    description:
      "Fundamentals of prompt engineering and designing effective prompts with Vertex AI.",
  },
];

// Testimonials
export const TESTIMONIALS = [
  
  {
    title: "Ayush Suri",
    subtitle: "Assistant Vice President at Citi | Markets Technology",
    linkedin: "https://www.linkedin.com/in/ayushsuri1997/",
    desc: "Tejas impressed me with his AI/ML expertise, particularly in building innovative and effective AI agents using n8n. His technical skills, creativity, adaptability, and problem-solving mindset consistently helped him deliver impactful solutions. I highly recommend him to teams seeking a specialist who can bring both technical depth and fresh thinking to the table..",
  },
   {
    title: "Dr. Rohini Temkar",
    subtitle: "Assistant Professor, Computer Engineering, VESIT",
    linkedin: "https://www.linkedin.com/in/dr-rohini-temkar-929071122/",
    desc: "Tejas demonstrated strong leadership and technical expertise while developing INGRO, an Agentic AI-powered platform. He proactively coordinated with stakeholders, including a visit to CGWB Pune, to translate real-world requirements into effective solutions. His problem-solving, teamwork, and dedication make him a highly capable engineer.",
  },
  {
    title: "Sameer Naik (PMI-ACP)",
    subtitle: "Senior Project Manager / Delivery Manager at Mastek",
    linkedin: "https://www.linkedin.com/in/sameer-naik-pmi-acp-14a3617/",
    desc: "During Project Deep Blue Season 10, Tejas demonstrated strong ownership while developing FleetX, a logistics route-optimization system. He excelled at API and backend integration, breaking complex problems into actionable steps, and keeping the team aligned through effective communication and collaboration.Highly recommended.",
  },
  {
    title: "Mannat Doultani",
    subtitle: "Assistant Professor | Training & Placement In-charge",
    linkedin: "https://www.linkedin.com/in/mannat-doultani-563582140/",
    desc: "Tejas consistently demonstrated leadership, technical ability, and dedication throughout his second- and third-year engineering projects. He led teams in developing innovative solutions, contributed to published research, and earned recognition in hackathons and technology competitions. His creativity, execution, and collaborative mindset make him a capable engineer.",
  },
];

// Projects
export const PROJECTS = [
  {
    title: "SurakshaSaKey",
    desc: "Smart emergency keychain using audio, motion sensing, and machine learning to detect distress and alert emergency contacts with live location.",
    type: "mobile",
    tags: ["Arduino", "IoT", "Machine Learning", "Flutter", "Firebase", "Bluetooth"],
    icon: ShieldCheck,
    g1: "#22c55e",
    g2: "#bbf7d0",
    href: "https://github.com/tejasgadge2504/SurakshaSakhi-APP",
  },
  {
    title: "Placementor",
    desc: "Agentic AI interview preparation platform with resume analysis, personalized mock interviews, voice interaction, and automated feedback.",
    type: "web",
    tags: ["React", "Tailwind CSS", "Flask", "Python", "Agno", "Gemini"],
    icon: Bot,
    g1: "#8b5cf6",
    g2: "#ddd6fe",
    href: "https://place-mentor.vercel.app",
  },
  {
    title: "Genius Academy",
    desc: "Modern, responsive educational website featuring intuitive navigation and a chatbot for answering student queries.",
    type: "web",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Botpress"],
    icon: GraduationCap,
    g1: "#3b82f6",
    g2: "#bfdbfe",
    href: "https://www.geniusacademyonline.com",
  },
  {
    title: "DeDuper",
    desc: "Cloud-based file deduplication system using SHA-256 hashing and serverless AWS services to optimize storage and reduce duplicate uploads.",
    type: "web",
    tags: ["AWS Lambda", "Amazon S3", "DynamoDB", "FastAPI", "SHA-256", "AWS KMS"],
    icon: Cloud,
    g1: "#06b6d4",
    g2: "#a5f3fc",
    href: "https://github.com/tejasgadge2504/DeDuper",
  },
  {
    title: "DigiPal",
    desc: "Inclusive digital literacy app featuring multilingual voice guidance, AI assistance, and interactive simulations for first-time smartphone users.",
    type: "mobile",
    tags: ["Flutter", "Firebase", "Dialogflow", "Text-to-Speech", "Python"],
    icon: Smartphone,
    g1: "#f59e0b",
    g2: "#fde68a",
    href: "https://digipal.framer.website/",
  },
  {
    title: "Kawach",
    desc: "AI-powered women's safety application with real-time location tracking, voice-activated SOS, fake calls, and intelligent risk alerts.",
    type: "mobile",
    tags: ["Flutter", "Firebase", "Gemini API", "Dialogflow", "Google Maps API"],
    icon: ShieldCheck,
    g1: "#ec4899",
    g2: "#fbcfe8",
    href: "https://github.com/tejasgadge2504/Kawachapp/tree/main",
  },
  {
    title: "FinSight",
    desc: "Accessible, voice-enabled financial assistant helping visually impaired users access financial information and personalized guidance.",
    type: "mobile",
    tags: ["Flutter", "Firebase", "Gemini API", "UPI APIs", "Biometric Authentication"],
    icon: Wallet,
    g1: "#10b981",
    g2: "#a7f3d0",
    href: "https://fin-sight.netlify.app",
  },
  {
    title: "FinEase",
    desc: "AI-powered financial assistant for small businesses that automates invoice tracking, payment reminders, and predictive cash-flow analysis. First runner-up at SYRUS Hackathon 2025.",
    type: "web",
    tags: ["Uptiq", "Python", "Flask", "AI Agents", "QuickBooks API", "Webhook Automation"],
    icon: Wallet,
    g1: "#6366f1",
    g2: "#c7d2fe",
    href: "https://youtu.be/uTIHtUJe8ek",
  },
  {
    title: "Heartistry",
    desc: "AI-powered empathy journal using LLaMA 3 and scenario-based reflection to promote emotional intelligence, kindness, and anti-bullying awareness.",
    type: "mobile",
    tags: ["Flutter", "LLaMA 3", "Firebase", "FastAPI", "Hugging Face"],
    icon: Heart,
    g1: "#f43f5e",
    g2: "#fecdd3",
    href: "https://github.com/UHV-GenAI-Llama/Group-3-B-Heartistry",
  },
  {
    title: "RightsQuest",
    desc: "Gamified human rights education app featuring AI-generated stories, ethical scenarios, and interactive quizzes. Won second place at the internship showcase.",
    type: "mobile",
    tags: ["Flutter", "LLaMA 3", "Firebase", "Dart", "Hugging Face"],
    icon: BookOpen,
    g1: "#f97316",
    g2: "#fed7aa",
    href: "https://github.com/UHV-GenAI-Llama/Group-1-B-RightsQuest",
  },
  {
    title: "Recroot",
    desc: "AI-powered applicant tracking system that streamlines resume screening, job matching, interview scheduling, application tracking, and recruitment workflows.",
    type: "mobile",
    tags: ["Flutter", "Firebase", "Flask", "Python", "TF-IDF", "Cloudinary"],
    icon: BriefcaseBusiness,
    g1: "#0ea5e9",
    g2: "#bae6fd",
    href: "https://github.com/tejasgadge2504/Recroot",
  },
];

// Project filters
export const FILTERS = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile Apps" },
];



//page sections
export const PAGE_SECTIONS = {
  "/": [
    { label: "Home", id: "home" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Achievements", id: "achievements" },
    { label: "Certifications", id: "certifications" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ],

  "/aimers-academy": [
    // Replace these examples with Page 2's actual sections and IDs.
    { label: "Videos", id: "videos" },
    { label: "Notes", id: "notes" }
  ],

  "/blogs": [
    // Replace these examples with Page 3's actual sections and IDs.
    { label: "Overview", id: "overview" },
    { label: "Features", id: "features" },
    { label: "Contact", id: "contact" },
  ],
};

export function getPageSections(pathname) {
  return PAGE_SECTIONS[pathname] ?? [];
}
