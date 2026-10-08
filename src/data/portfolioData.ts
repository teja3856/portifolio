export type ProjectCategory = 'AI / Machine Learning' | 'Full-Stack Web App';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  contribution: string[];
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  metrics?: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface LanguageItem {
  language: string;
  proficiency: string;
}

export interface HonorItem {
  title: string;
  organization: string;
  year?: string;
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
  featured?: boolean;
}

export const PERSONAL_INFO = {
  name: 'Teja Santosh',
  displayName: 'Teja',
  title: 'Computer Science Engineering (AIML) Student',
  tagline: 'Results-oriented CSE (AIML) student at GITAM University with hands-on experience in Python, SQL, Machine Learning, React and TypeScript.',
  location: 'Rajanagaram, Andhra Pradesh 533294, India',
  email: 'tejasantosh88@gmail.com',
  phone: '+91 9392360033',
  github: 'https://github.com/teja3856',
  linkedin: 'https://www.linkedin.com/in/teja-santosh-668695311',
  twitter: 'https://twitter.com',
  portfolio: 'https://tejasantosh88-dev.web.app',
  resumeUrl: '/Teja_Santosh_Resume.pdf',
  bio: 'Results-oriented Computer Science Engineering (AIML) student with hands-on experience in Python, SQL, Machine Learning, React and TypeScript. Built AI/ML and full-stack projects and gained industry exposure through an AI/ML internship. Strong in problem-solving, analytical thinking, teamwork and communication.',
  availability: 'Available for AI/ML roles, internships & project collaborations',
  stats: [
    { label: 'Degree', value: 'B.Tech CSE (AIML)' },
    { label: 'University', value: 'GITAM Bangalore' },
    { label: 'Core Skills', value: 'Python, ML & React' },
    { label: 'Hackathons', value: 'Smart India Hackathon' }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Technical Skills',
    skills: [
      {
        name: 'Python',
        tags: ['Pandas', 'NumPy', 'Data Analysis', 'Scikit-learn', 'Automation']
      },
      {
        name: 'Machine Learning',
        tags: ['Scikit-learn', 'Pandas', 'XGBoost', 'Supervised Learning', 'Model Evaluation']
      },
      {
        name: 'Web & Frontend Development',
        tags: ['React', 'TypeScript', 'Responsive UI', 'Interactive Web', 'Component Architecture']
      },
      {
        name: 'Databases & Cloud',
        tags: ['SQL', 'Relational Databases', 'Firebase', 'Data Filtering']
      },
      {
        name: 'Tools & Version Control',
        tags: ['Git/GitHub', 'Microsoft Office', 'VS Code', 'CI/CD Basics']
      }
    ]
  },
  {
    category: 'Professional Skills',
    skills: [
      {
        name: 'Team Collaboration',
        tags: ['Cross-Functional Teamwork', 'Hackathon Teams', 'Peer Programming', 'Active Feedback']
      },
      {
        name: 'Problem Solving',
        tags: ['Analytical Thinking', 'Algorithms', 'Debugging', 'Logical Reasoning']
      },
      {
        name: 'Project Coordination',
        tags: ['Planning', 'Execution', 'Task Prioritization', 'Milestone Tracking']
      },
      {
        name: 'Volunteer Engagement',
        tags: ['Community Outreach', 'Student Engagement', 'Peer Mentorship', 'Event Organizing']
      },
      {
        name: 'Adaptability & Learning',
        tags: ['Continuous Growth', 'Tool Adoption', 'Rapid Prototyping', 'Fast Learning']
      },
      {
        name: 'Communication',
        tags: ['Articulating Ideas', 'Technical Discussions', 'Presentations', 'Content Strategy']
      }
    ]
  },
  {
    category: 'Languages',
    skills: [
      {
        name: 'English',
        tags: ['Upper Intermediate', 'Professional Working Proficiency']
      },
      {
        name: 'Hindi',
        tags: ['Upper Intermediate', 'Professional Working Proficiency']
      },
      {
        name: 'Telugu',
        tags: ['Native / Bilingual Proficiency']
      }
    ]
  }
];

export const LANGUAGES: LanguageItem[] = [
  { language: 'English', proficiency: 'Upper Intermediate' },
  { language: 'Hindi', proficiency: 'Upper Intermediate' },
  { language: 'Telugu', proficiency: 'Native' }
];

export const HONORS: HonorItem[] = [
  { title: 'Smart India Hackathon 2025', organization: 'GITAM University, Bangalore', year: '2025' },
  { title: 'Hackathon 2026', organization: 'GITAM University, Bangalore', year: '2026' },
  { title: 'Certificate of Completion', organization: 'Aenexz Tech Private Limited', year: '2026' }
];

export const PROJECTS: Project[] = [
  {
    id: 'railway-ai-block-planning',
    title: 'AI Automatic Block Planning – Indian Railways',
    category: 'AI / Machine Learning',
    description: 'Smart India Hackathon project delivering a control-room dashboard prototype for automated train block scheduling and traffic optimization.',
    longDescription: 'Developed for the Smart India Hackathon (SIH26027), this project delivers a control-room dashboard prototype for automated train block scheduling and traffic optimization, helping railway section controllers plan maintenance blocks with minimized disruption.',
    problem: 'Manual train block planning in railway control rooms is time-consuming and prone to scheduling conflicts during maintenance windows.',
    solution: 'A control-room dashboard prototype automating train block scheduling and traffic optimization with real-time conflict identification.',
    technologies: ['AI/ML', 'React', 'TypeScript', 'Firebase', 'Automation'],
    contribution: [
      'Designed control-room dashboard prototype for automated train block scheduling',
      'Implemented conflict detection algorithms for train paths and maintenance windows',
      'Integrated Firebase backend and real-time status monitoring for railway section control'
    ],
    tags: ['AI/ML', 'React', 'TypeScript', 'Firebase', 'Automation'],
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1000&q=80',
    liveUrl: 'https://ai-resume-68ff7.web.app/',
    githubUrl: 'https://github.com/teja3856/sih26027-railway-planner',
    featured: true,
    metrics: 'Smart India Hackathon Project',
    highlights: [
      'Problem: Manual train block planning and maintenance scheduling causing potential line congestion',
      'Solution: Control-room dashboard prototype automating block scheduling and traffic optimization',
      'Technologies: AI/ML, React, TypeScript, Firebase, Automation',
      'Contribution: Control-room UI design, scheduling logic, and hackathon presentation'
    ]
  },
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn & Revenue Forecasting',
    category: 'AI / Machine Learning',
    description: 'Supervised machine-learning pipeline built to predict customer churn risk and analyze factors driving revenue loss.',
    longDescription: 'Developed an end-to-end supervised machine learning pipeline to predict customer churn risk and analyze factors driving revenue loss. The system cleans behavioral customer datasets, evaluates multiple classification models, and provides actionable feature importance analysis.',
    problem: 'Businesses face customer attrition without clear visibility into behavioral risk factors and potential recurring revenue loss.',
    solution: 'Built a supervised machine-learning pipeline with Scikit-learn and XGBoost to predict customer churn risk and uncover top revenue-loss indicators.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost', 'Supervised Learning'],
    contribution: [
      'Engineered data preprocessing and feature encoding pipeline using Pandas',
      'Trained and compared classification algorithms with cross-validation',
      'Evaluated precision, recall, and ROC-AUC metrics to optimize churn detection',
      'Extracted feature importances to identify key factors driving revenue loss'
    ],
    tags: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost', 'Supervised Learning'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    liveUrl: 'https://github.com/teja3856/intership',
    githubUrl: 'https://github.com/teja3856/intership',
    featured: true,
    metrics: 'Supervised ML Pipeline',
    highlights: [
      'Problem: Predicting customer churn risk and diagnosing factors driving revenue loss',
      'Solution: Supervised machine-learning pipeline utilizing Python, Scikit-learn, Pandas, and XGBoost',
      'Technologies: Python, Scikit-learn, Pandas, XGBoost, Supervised Learning',
      'Contribution: End-to-end data cleaning, model training, evaluation, and feature importance analysis'
    ]
  },
  {
    id: 'resumecraft-ai',
    title: 'ResumeCraft AI – Smart Resume Generator',
    category: 'AI / Machine Learning',
    description: 'AI-powered web application helping students and professionals generate structured, ATS-friendly resumes with intelligent content suggestions.',
    longDescription: 'Developed ResumeCraft AI to help students and professionals create structured, ATS-friendly resumes with intelligent content suggestions. Built with React and TypeScript on the frontend and integrated with Generative AI and Python backend services, hosted on Firebase.',
    problem: 'Job seekers often face difficulty structuring bullet points and formatting resumes cleanly for ATS screening.',
    solution: 'An AI-powered web application helping users generate structured, ATS-friendly resumes with intelligent content suggestions.',
    technologies: ['React', 'TypeScript', 'Generative AI', 'Python', 'Firebase'],
    contribution: [
      'Built modular React components for resume sections, skills, and experience',
      'Integrated Generative AI workflows to produce structured role descriptions and suggestions',
      'Implemented real-time live preview and structured ATS-friendly layout formatting',
      'Configured Firebase deployment for reliable web hosting'
    ],
    tags: ['React', 'TypeScript', 'Generative AI', 'Python', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1000&q=80',
    liveUrl: 'https://resumecraft-ai-789.web.app/',
    githubUrl: 'https://github.com/teja3856/resumebuilder',
    featured: true,
    metrics: 'Live AI Web Application',
    highlights: [
      'Problem: Inconsistent resume formatting and difficulty tailoring experience for ATS systems',
      'Solution: AI-powered web application for structured, ATS-friendly resumes with intelligent suggestions',
      'Technologies: React, TypeScript, Generative AI, Python, Firebase',
      'Contribution: UI development, Generative AI integration, live preview, and Firebase deployment'
    ]
  },
  {
    id: 'punjabi-shiksha-setu',
    title: 'Punjabi Shiksha Setu – Educational Portal',
    category: 'Full-Stack Web App',
    description: 'Interactive language-learning web portal featuring structured lesson modules, student progress tracking and interactive quizzes.',
    longDescription: 'Created an accessible digital learning environment for Punjabi language learners. The platform features structured lesson modules, student progress tracking, and interactive quizzes for self-paced study.',
    problem: 'Need for structured digital learning resources and self-paced assessment tools for language learners.',
    solution: 'An interactive language-learning web portal with structured lesson modules, student progress tracking, and interactive quizzes.',
    technologies: ['React', 'TypeScript', 'EdTech', 'Responsive UI', 'Interactive Web'],
    contribution: [
      'Designed student dashboard interface with modular lesson navigation',
      'Created interactive quiz components with instant scoring feedback',
      'Implemented responsive UI design for accessible learning on mobile and desktop devices'
    ],
    tags: ['React', 'TypeScript', 'EdTech', 'Responsive UI', 'Interactive Web'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1000&q=80',
    liveUrl: 'https://punjabi-shiksha-setu.lovable.app/student',
    githubUrl: 'https://github.com/teja3856',
    featured: true,
    metrics: 'Interactive Learning Platform',
    highlights: [
      'Problem: Limited interactive digital tools for structured language study and self-assessment',
      'Solution: Interactive educational portal with structured lesson modules, quizzes, and progress tracking',
      'Technologies: React, TypeScript, EdTech, Responsive UI, Interactive Web',
      'Contribution: Dashboard UI architecture, quiz interaction logic, and cross-device responsiveness'
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
    id: 'cert-sih-2026',
    title: 'Smart India Hackathon 2026 - Certificate of Participation',
    issuer: 'GITAM Bengaluru & MoE Innovation Cell (Govt of India / AICTE)',
    category: 'Hackathons & Innovation',
    issueDate: 'September 9, 2026',
    description: 'Awarded to Teja Santosh for participating in the Internal Smart India Hackathon 2026 held at GITAM (Deemed to be) University Bengaluru on 8th and 9th September 2026 under the Ministry of Education (MoE) Innovation Cell & Venture Development Center.',
    image: '/certificates/smart_india_hackathon_2026.png',
    pdfUrl: '/certificates/smart_india_hackathon_2026.pdf',
    badge: 'National Hackathon 2026',
    skills: ['AI Block Planning', 'Railway Automation', 'Hackathon Pitching', 'Innovation', 'System Design']
  },
  {
    id: 'cert-sih-2025',
    title: 'Smart India Hackathon 2025 - Certificate of Appreciation',
    issuer: 'GITAM Bengaluru & MoE Innovation Cell (Govt of India / AICTE)',
    category: 'Hackathons & Innovation',
    issueDate: 'September 25, 2025',
    description: 'Awarded to Teja Santosh of "Team Phantom" for participation in the Internal Smart India Hackathon 2025 held at GITAM (Deemed to be) University Bengaluru under Ministry of Education (MoE) Innovation Cell initiative.',
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
    description: 'Certificate confirming successful completion of the intensive AI & ML training program conducted by Aenexz Tech Private Limited in February 2026.',
    image: '/certificates/aenexz_aiml_training.png',
    pdfUrl: '/certificates/aenexz_aiml_training.pdf',
    badge: 'Verified Completion',
    skills: ['Machine Learning', 'Neural Networks', 'Python & Pandas', 'Data Analysis']
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 'exp-1',
    period: 'Feb 2026 – May 2026',
    role: 'AI/ML Intern',
    company: 'Aenexz Tech Private Limited',
    location: 'India',
    description: 'Completed a 3-month AI/ML internship focused on building and contributing to AI/ML models for real-world projects.',
    achievements: [
      'Built and contributed to AI/ML models for real-world projects.',
      'Worked on model development, implementation and performance improvement.',
      'Completed the AI/ML program and received a Certificate of Completion.'
    ],
    type: 'work',
    featured: true
  },
  {
    id: 'exp-2',
    period: 'Ongoing',
    role: 'Content Lead',
    company: 'GUSAC Club, GITAM University – Bangalore',
    location: 'Bangalore, Karnataka',
    description: 'Planned and created content for club activities, events and initiatives.',
    achievements: [
      'Planned and created content for club activities, events and initiatives.',
      'Supported student engagement and communication through content and promotional activities.'
    ],
    type: 'work'
  },
  {
    id: 'edu-1',
    period: 'Expected Apr 2028',
    role: 'B.Tech in Computer Science Engineering (AIML): Software Engineering',
    company: 'GITAM University, Bangalore, Karnataka',
    location: 'Bangalore, Karnataka',
    description: 'Pursuing B.Tech in CSE with specialization in AI & ML and Software Engineering.',
    achievements: [
      'Hands-on experience in Python, SQL, Machine Learning, React and TypeScript',
      'Smart India Hackathon 2025 & Hackathon 2026 participant'
    ],
    type: 'education'
  },
  {
    id: 'edu-2',
    period: 'Apr 2024',
    role: 'Pre Graduation',
    company: 'Shri Shiridi Sai Junior College, Rajanagaram, Andhra Pradesh',
    location: 'Rajanagaram, Andhra Pradesh',
    description: 'Completed higher secondary education with strong focus on mathematics and science.',
    achievements: [
      'Strong academic foundation in analytical problem solving and mathematics'
    ],
    type: 'education'
  },
  {
    id: 'edu-3',
    period: 'May 2022',
    role: 'High School',
    company: 'Oakwood School, Diwancheruvu, Andhra Pradesh',
    location: 'Diwancheruvu, Andhra Pradesh',
    description: 'Completed secondary school education.',
    achievements: [
      'Active participation in school academic coursework and activities'
    ],
    type: 'education'
  }
];
