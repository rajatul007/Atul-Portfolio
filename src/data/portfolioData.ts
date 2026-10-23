export interface ProjectItem {
  id: string;
  number: string;
  subtitle: string;
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  glowColor: string;
  iconType: 'sparkles' | 'utensils' | 'calendar' | 'users';
}

export interface SkillCategory {
  number: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  credentialId?: string;
  points: string[];
  technologies: string[];
  certificatePdfUrl: string;
  certificateTitle: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  boardOrSpecialization: string;
}

export interface AchievementItem {
  id: string;
  category: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  externalUrl?: string;
  certificatePdfUrl?: string;
}

export const PERSONAL_INFO = {
  fullName: 'Atul Raj',
  headline: 'Aspiring Software Engineer | Full Stack Developer',
  heroShortCopy:
    'a software developer & full stack engineer building responsive web & ai-powered applications',
  profession: 'Computer Science Engineering Student',
  specialization: 'Artificial Intelligence and Machine Learning',
  college: 'Galgotias College of Engineering and Technology',
  degree: 'B.Tech in Computer Science and Engineering (AI & ML)',
  graduation: '2023–2027',
  location: 'Greater Noida, Uttar Pradesh, India',
  phone: '+91 8252762590',
  phoneHref: 'tel:+918252762590',
  email: 'atulatul2590@gmail.com',
  emailHref: 'mailto:atulatul2590@gmail.com',
  resumePdfUrl: '/Atul_Raj_Resume.pdf',
  aboutParagraph:
    'I am a B.Tech Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Galgotias College of Engineering and Technology. I enjoy solving algorithmic problems and developing responsive full-stack websites and AI-powered applications. My technical interests include software development, data structures and algorithms, and building practical applications that solve real-world problems.',
  socials: {
    github: 'https://github.com/rajatul007',
    linkedin: 'https://www.linkedin.com/in/atul-raj-585b97288',
    leetcode: 'https://leetcode.com/u/Atulraj07',
  },
};

export const MARQUEE_ROW_1 = [
  { category: 'Language', name: 'C++' },
  { category: 'Language', name: 'Python' },
  { category: 'Language', name: 'JavaScript' },
  { category: 'Language', name: 'C' },
  { category: 'Language', name: 'SQL' },
  { category: 'Frontend', name: 'React.js' },
  { category: 'Frontend', name: 'HTML5 & CSS3' },
  { category: 'Backend', name: 'Node.js' },
  { category: 'Backend', name: 'Express.js' },
];

export const MARQUEE_ROW_2 = [
  { category: 'Backend', name: 'REST APIs' },
  { category: 'Database', name: 'MongoDB' },
  { category: 'Database', name: 'MySQL' },
  { category: 'Core CS', name: 'DSA (120+ LC)' },
  { category: 'Core CS', name: 'DBMS' },
  { category: 'Core CS', name: 'Operating Systems' },
  { category: 'Core CS', name: 'Computer Networks' },
  { category: 'Tools', name: 'Git & GitHub' },
  { category: 'Tools', name: 'VS Code' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    number: '01',
    title: 'Languages & DSA',
    description:
      'C++, C, Python, JavaScript, and SQL, with a solid grip on arrays, linked lists, stacks, queues, trees, searching and sorting (120+ problems solved on LeetCode).',
    skills: ['C++', 'C', 'Python', 'JavaScript', 'SQL', 'Data Structures & Algorithms'],
  },
  {
    number: '02',
    title: 'Frontend Development',
    description:
      'Responsive, modern, accessible UI development with React.js, HTML5, CSS3, Tailwind CSS, and mobile-friendly component layouts.',
    skills: ['HTML5', 'CSS3', 'React.js', 'Responsive Design'],
  },
  {
    number: '03',
    title: 'Backend & REST APIs',
    description:
      'Node.js and Express.js for scalable backend services, RESTful API development, JWT user authentication, and prompt data workflows.',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'],
  },
  {
    number: '04',
    title: 'Databases',
    description:
      'MongoDB for dynamic NoSQL documents and MySQL for relational data modeling, query design, and persistent storage.',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    number: '05',
    title: 'Core Computer Science',
    description:
      'Strong theoretical and practical knowledge in Data Structures and Algorithms, Database Management Systems (DBMS), Operating Systems, and Computer Networks.',
    skills: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
  {
    number: '06',
    title: 'Tools & Workflow',
    description:
      'Git and GitHub for version control and open source collaboration, and VS Code for efficient, modular full-stack development.',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'imagify',
    number: '01',
    subtitle: 'React.js · Node.js · Express.js · MongoDB · AI APIs',
    title: 'Imagify — AI Text-to-Image Generator',
    description:
      'An AI-powered text-to-image generation application. Built with a responsive React.js frontend, Express/Node.js REST APIs, JWT authentication, user prompt history, a dashboard, and instant image download functionality backed by MongoDB.',
    highlights: [
      'Developed an AI-powered text-to-image generation application.',
      'Built a responsive frontend and REST APIs.',
      'Implemented JWT authentication, prompt history, and a user dashboard.',
      'Added image download functionality.',
      'Used MongoDB for user and prompt data management.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI APIs', 'JWT'],
    githubUrl: 'https://github.com/rajatul007/Text-to-image-Generator-Imagify.git',
    glowColor: '#B600A8',
    iconType: 'sparkles',
  },
  {
    id: 'taste-of-heaven',
    number: '02',
    subtitle: 'HTML · CSS · JavaScript · Responsive UI',
    title: 'Taste of Heaven — Online Restaurant Website',
    description:
      'A responsive restaurant website with an attractive culinary homepage. Features a categorized food menu of dishes and prices, mobile-friendly layouts, and interactive navigation.',
    highlights: [
      'Developed a responsive restaurant website with an attractive homepage.',
      'Created a food menu featuring dishes, categories, and prices.',
      'Designed mobile-friendly layouts and interactive navigation.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://tasteof-heaven.netlify.app/',
    githubUrl: 'https://github.com/rajatul007/Taste-of-Heaven.git',
    glowColor: '#E0A21B',
    iconType: 'utensils',
  },
  {
    id: 'eventhive',
    number: '03',
    subtitle: 'HTML · CSS · JavaScript · IBI Internship',
    title: 'EventHive — Event Booking and Management',
    description:
      'An event booking and management website developed during my internship at IBI. Features a responsive user interface, event catalogs, and streamlined ticket booking workflows.',
    highlights: [
      'Developed an event booking and management website during my internship.',
      'Created a responsive user interface and booking workflows.',
      'Implemented event filtering and registration forms.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Booking UI'],
    liveUrl: 'https://eventhives.ai.studio',
    githubUrl: 'https://github.com/rajatul007/EventHive.git',
    glowColor: '#3A6BFF',
    iconType: 'calendar',
  },
  {
    id: 'social-media-platform',
    number: '04',
    subtitle: 'HTML · CSS · JavaScript · Code Alpha Internship',
    title: 'Social Media Platform (Connectly)',
    description:
      'A responsive social media platform built during my Code Alpha internship. Added interactive user-facing features including dynamic posts, profile interactions, and mobile navigation.',
    highlights: [
      'Built a responsive social media platform.',
      'Added interactive user-facing features and state management.',
      'Designed clean multi-device UI and feed layouts.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Social UI'],
    liveUrl: 'https://connectly-social-media1.ai.studio/',
    githubUrl: 'https://github.com/rajatul007/connectly-social-media-platform_codealpha_tasks_2.git',
    glowColor: '#2F9E4A',
    iconType: 'users',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'code-alpha',
    company: 'Code Alpha',
    role: 'Full Stack Development Intern',
    period: '20th Sept 2026 – 20th Oct 2026',
    credentialId: 'Student ID: CA/DF1/300930',
    points: [
      'Developed a responsive E-Commerce Store using HTML, CSS, and JavaScript with product listings and details.',
      'Built a responsive Social Media Platform (Connectly) with interactive user features.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Full Stack Development'],
    certificatePdfUrl: '/assets/aistudio/Certificate_Atul_Raj_94b4cb94.pdf',
    certificateTitle: 'CodeAlpha Virtual Internship Program — Certificate of Completion',
  },
  {
    id: 'ibi',
    company: 'IBI (Info Bharat Interns)',
    role: 'Web Development Intern',
    period: '15th Sept 2026 – 15th Oct 2026',
    points: [
      'Developed EventHive, an event booking and management website.',
      'Implemented responsive UI and booking workflows.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    certificatePdfUrl: '/assets/aistudio/Atul_Raj_5a041311.pdf',
    certificateTitle: 'Info Bharat Interns (IBI) — Web Development Completion Certificate',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'gcet',
    institution: 'Galgotias College of Engineering and Technology',
    degree: 'B.Tech in Computer Science and Engineering',
    boardOrSpecialization: 'Artificial Intelligence & Machine Learning',
    period: '2023–2027',
    location: 'Greater Noida, Uttar Pradesh',
  },
  {
    id: 'sk-college',
    institution: 'S.K College, Samastipur, Bihar',
    degree: 'Class XII — PCM',
    boardOrSpecialization: 'BSEB',
    period: '2021–2023',
    location: 'Samastipur, Bihar',
  },
  {
    id: 'vv-pub',
    institution: 'VV PUB SCH KAINA BELA RD SINGHIA, Samastipur, Bihar',
    degree: 'Class X',
    boardOrSpecialization: 'CBSE',
    period: '2020–2021',
    location: 'Samastipur, Bihar',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'leetcode',
    category: 'Achievement',
    title: 'Solved 120+ Coding Problems on LeetCode',
    issuer: 'LeetCode',
    date: 'Active Profile',
    description:
      'Consistent algorithmic problem solving in C++ and Python across data structures, dynamic programming, trees, and graphs.',
    externalUrl: 'https://leetcode.com/u/Atulraj07',
  },
  {
    id: 'infosys-python',
    category: 'Certification',
    title: 'Basics of Python — Course Completion',
    issuer: 'Infosys Springboard',
    date: 'September 2025 / Dec 2024',
    description:
      'Course completion certification awarded by Infosys Springboard for mastering Python programming and data handling fundamentals.',
    certificatePdfUrl: '/assets/aistudio/Atul_raj__CS_AIML_A__2f21c277.pdf',
  },
  {
    id: 'hackdays-2026',
    category: 'Hackathon',
    title: 'HACKDAYS-2026 — Team CivicMind AI',
    issuer: 'HackBase Society in collaboration with GCET',
    date: '11th April 2026',
    description:
      'Certificate of Appreciation for Team CivicMind AI in HACKDAYS-2026 organized by HackBase Society with GCET, Greater Noida.',
    certificatePdfUrl: '/assets/aistudio/Atul_Raj_71b48dba.pdf',
  },
];
