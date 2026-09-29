export type ProjectCategory = 'AI / Machine Learning' | 'Full-Stack Web App';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  metrics?: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number;
    iconName?: string;
  }[];
}

export interface TimelineItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  type: 'work' | 'education';
}

export const PERSONAL_INFO = {
  name: 'Teja Santosh',
  displayName: 'Teja',
  title: 'CSE (AI & ML) Student & Project Coordinator',
  tagline: 'Results-oriented professional in project coordination, community outreach, Python, SQL, and Machine Learning.',
  location: 'Rajanagaram, Andhra Pradesh, India',
  email: 'tejasantosh88@gmail.com',
  phone: '+91 9392360033',
  github: 'https://github.com/teja3856',
  linkedin: 'https://www.linkedin.com/in/teja-santosh-668695311',
  twitter: 'https://twitter.com',
  resumeUrl: '/Teja_Santosh_Resume.pdf',
  bio: 'I am Teja Santosh, pursuing CSE (AIML) Software Engineering at GITAM University, Bangalore. Skilled in Python, SQL, Machine Learning, project coordination, and community outreach.',
  availability: 'Available for AI/ML engineering roles, internships & project collaborations',
  stats: [
    { label: 'Degree', value: 'B.Tech CSE (AIML)' },
    { label: 'University', value: 'GITAM Bangalore' },
    { label: 'Core Skills', value: 'Python, SQL & ML' },
    { label: 'Hackathon', value: 'Smart India' }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'AI & Technical Skills',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'SQL & Database Queries', level: 90 },
      { name: 'Machine Learning', level: 92 },
      { name: 'Problem Solving & Logic', level: 94 },
      { name: 'Analytical Thinking', level: 92 }
    ]
  },
  {
    category: 'Professional & Management',
    skills: [
      { name: 'Project Coordination', level: 95 },
      { name: 'Community Outreach', level: 92 },
      { name: 'Volunteer Engagement', level: 90 },
      { name: 'Microsoft Office', level: 88 },
      { name: 'Adaptability', level: 92 }
    ]
  },
  {
    category: 'Soft Skills & Collaboration',
    skills: [
      { name: 'Team Collaboration', level: 95 },
      { name: 'Communication Skills', level: 94 },
      { name: 'Stakeholder Engagement', level: 90 },
      { name: 'Leadership & Initiatives', level: 88 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn & Revenue Forecasting',
    category: 'AI / Machine Learning',
    description: 'Supervised machine learning pipeline for predicting customer attrition, identifying key churn drivers, and forecasting revenue metrics.',
    longDescription: 'Developed a comprehensive supervised learning model using Python, Scikit-Learn, Pandas, and XGBoost to analyze user behavior patterns, evaluate attrition risks, and optimize revenue forecasting accuracy.',
    tags: ['Python', 'Scikit-Learn', 'Pandas', 'XGBoost', 'Supervised Learning'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    liveUrl: 'https://github.com/teja3856/intership',
    githubUrl: 'https://github.com/teja3856/intership',
    featured: true,
    metrics: 'ML Model & Forecasting',
    highlights: [
      'Engineered feature selection and data preprocessing pipeline for churn classification',
      'Evaluated precision, recall, and ROC-AUC metrics using supervised learning algorithms',
      'Identified top revenue loss indicators to support business decision-making'
    ]
  },
  {
    id: 'resumecraft-ai',
    title: 'ResumeCraft AI - Smart Resume Generator',
    category: 'AI / Machine Learning',
    description: 'An intelligent web application that helps users build professional, ATS-optimized resumes using generative AI capabilities.',
    longDescription: 'ResumeCraft AI streamlines job application preparation by providing real-time AI assistance, content optimization, and automated formatting to maximize ATS match rates.',
    tags: ['Python', 'Generative AI', 'React', 'TypeScript', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1000&q=80',
    liveUrl: 'https://resumecraft-ai-789.web.app/',
    githubUrl: 'https://github.com/teja3856',
    featured: true,
    metrics: 'Live AI Web Application',
    highlights: [
      'Built intelligent resume content generation powered by generative AI APIs',
      'Implemented real-time live preview and structured layout export options',
      'Deployed on Firebase for high availability and instant global response'
    ]
  },
  {
    id: 'punjabi-shiksha-setu',
    title: 'Punjabi Shiksha Setu - Educational Portal',
    category: 'Full-Stack Web App',
    description: 'An interactive digital learning platform designed for students to master language skills through structured modules and quizzes.',
    longDescription: 'Punjabi Shiksha Setu bridges language education gaps with an intuitive student interface, progress tracking, and interactive study materials.',
    tags: ['React', 'TypeScript', 'EdTech', 'Responsive UI', 'Interactive Web'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1000&q=80',
    liveUrl: 'https://punjabi-shiksha-setu.lovable.app/student',
    githubUrl: 'https://github.com/teja3856',
    featured: true,
    metrics: 'Interactive Learning Platform',
    highlights: [
      'Created student-focused dashboard with lesson navigation and quizzes',
      'Designed responsive UI/UX for seamless learning across mobile and desktop',
      'Integrated real-time progress indicators and intuitive feedback'
    ]
  },
  {
    id: 'railway-ai-block-planning',
    title: 'AI Automatic Block Planning - Indian Railways',
    category: 'AI / Machine Learning',
    description: 'Smart India Hackathon project delivering an AI-driven control room platform for automated train block planning and traffic optimization.',
    longDescription: 'Developed for the Smart India Hackathon (SIH26027), this AI-powered control room platform automates block planning, optimizes railway traffic scheduling, and minimizes section congestion for Indian Railways.',
    tags: ['AI / Machine Learning', 'React', 'TypeScript', 'Smart India Hackathon', 'Firebase', 'Automation'],
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1000&q=80',
    liveUrl: 'https://ai-resume-68ff7.web.app/',
    githubUrl: 'https://github.com/teja3856/sih26027-railway-planner',
    featured: true,
    metrics: 'Smart India Hackathon (SIH26027)',
    highlights: [
      'Automated train block allocation and scheduling to reduce line congestion',
      'AI-assisted decision-making dashboard for railway control room operations',
      'Real-time interactive monitoring and section conflict detection algorithms'
    ]
  },
  {
    id: 'personal-portfolio-react',
    title: 'Modern Developer Portfolio & Showcase',
    category: 'Full-Stack Web App',
    description: 'Modern, interactive personal developer portfolio website showcasing full-stack applications, AI projects, certifications, and experience.',
    longDescription: 'Engineered a modern, responsive personal portfolio with React 19, TypeScript, and Vite. Designed with glassmorphism aesthetics, dynamic project filtering, interactive modal showcases, certification viewers, and automated deployment on Firebase Hosting.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS3', 'Firebase Hosting', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    liveUrl: 'https://tejasantosh88-dev.web.app/',
    githubUrl: 'https://github.com/teja3856/portifolio',
    featured: true,
    metrics: 'Live Web App & Open Source',
    highlights: [
      'Built with React 19, TypeScript, and high-performance Vite architecture',
      'Designed responsive glassmorphism UI with real-time project search and filtering',
      'Deployed on Firebase Hosting with high availability and fast global CDN'
    ]
  }
];

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: 'Hackathons & Innovation' | 'AI & Machine Learning' | 'Industry Internship';
  issueDate: string;
  credentialId?: string;
  description: string;
  image: string;
  pdfUrl: string;
  badge: string;
  skills: string[];
}

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert-sih-2025',
    title: 'Smart India Hackathon 2025 - Certificate of Appreciation',
    issuer: 'GITAM Bengaluru & MoE Innovation Cell (Govt of India / AICTE)',
    category: 'Hackathons & Innovation',
    issueDate: 'September 25, 2025',
    description: 'Awarded to Teja Santosh of "Team Phantom" for outstanding participation in the Internal Smart India Hackathon 2025 held at GITAM (Deemed to be) University Bengaluru under Ministry of Education (MoE) Innovation Cell initiative.',
    image: '/certificates/smart_india_hackathon_2025.png',
    pdfUrl: '/certificates/smart_india_hackathon_2025.pdf',
    badge: 'National Hackathon',
    skills: ['AI/ML Problem Solving', 'Hackathon Pitching', 'Team Phantom', 'Innovation', 'System Design']
  },
  {
    id: 'cert-aenexz-internship',
    title: 'AI & Machine Learning Internship Certificate',
    issuer: 'Aenexz Tech Private Limited (#startupindia & MSME Recognized)',
    category: 'Industry Internship',
    issueDate: 'June 11, 2026',
    credentialId: 'AENEINT-260697',
    description: 'Certified that Teja Santosh successfully completed a 3-month professional internship in AI & ML (Feb 5 - May 5), demonstrating diligence, active participation, and technical innovation.',
    image: '/certificates/aenexz_aiml_internship.jpg',
    pdfUrl: '/certificates/aenexz_aiml_internship.jpg',
    badge: 'Verified Internship',
    skills: ['AI & ML Development', 'Supervised Learning', 'Python Engineering', 'Model Deployment']
  },
  {
    id: 'cert-aenexz-training',
    title: 'AI & ML Training Program Certificate of Completion',
    issuer: 'Aenexz Tech Private Limited',
    category: 'AI & Machine Learning',
    issueDate: 'June 12, 2026',
    description: 'Verified Certificate confirming successful completion of the intensive AI & ML training program conducted by Aenexz Tech Private Limited in February 2026.',
    image: '/certificates/aenexz_aiml_training.png',
    pdfUrl: '/certificates/aenexz_aiml_training.pdf',
    badge: 'Verified Completion',
    skills: ['Machine Learning', 'Neural Networks', 'Python & Pandas', 'Data Analysis']
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 'exp-1',
    period: 'May 2024 – Jul 2024',
    role: 'AI/ML INTERN',
    company: 'Aenexz Tech Private Limited',
    location: 'India',
    description: 'Built AI/ML models as part of real-world projects and contributed to model development and performance improvement.',
    achievements: [
      'Built AI/ML predictive and classification models for production workflows',
      'Contributed to machine learning model evaluation and performance optimization'
    ],
    type: 'work'
  },
  {
    id: 'exp-2',
    period: 'Ongoing',
    role: 'VOLUNTEER',
    company: 'GITAM University',
    location: 'Bangalore, Karnataka',
    description: 'Actively participated in community outreach and volunteer programs to promote engagement and social impact initiatives.',
    achievements: [
      'Led community outreach initiatives and volunteer team engagement',
      'Promoted social impact programs and stakeholder collaboration'
    ],
    type: 'work'
  },
  {
    id: 'edu-1',
    period: '2024 - Expected Apr 2028',
    role: 'B.Tech in Computer Science Engineering (AIML): Software Engineering',
    company: 'GITAM University',
    location: 'Bangalore, Karnataka',
    description: 'Pursuing B.Tech in Computer Science Engineering (AIML). Active participant in Smart India Hackathon 2025 at GITAM University Bangalore.',
    achievements: [
      'Smart India Hackathon participant at GITAM University – Bangalore',
      'Specializing in Python, SQL, Machine Learning, and Software Engineering'
    ],
    type: 'education'
  },
  {
    id: 'edu-2',
    period: 'Apr 2024',
    role: 'Pre Graduation',
    company: 'Shri Shiridi Sai Junior College',
    location: 'Rajanagaram, Andhra Pradesh',
    description: 'Completed Pre Graduation with strong analytical and mathematical foundation.',
    achievements: [
      'Analytical Thinking & Problem Solving'
    ],
    type: 'education'
  },
  {
    id: 'edu-3',
    period: 'May 2022',
    role: 'High School',
    company: 'Oakwood School',
    location: 'Diwancheruvu, Andhra Pradesh',
    description: 'Completed High School secondary education.',
    achievements: [
      'Active participation in academics and school activities'
    ],
    type: 'education'
  }
];
