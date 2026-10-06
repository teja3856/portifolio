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
  title: 'AI/ML Student | Software Developer | Project Coordinator',
  tagline: 'B.Tech CSE (AI & ML) student at GITAM University with practical experience in Python, SQL, Machine Learning, and software development.',
  location: 'Rajanagaram, Andhra Pradesh, India',
  email: 'tejasantosh88@gmail.com',
  phone: '+91 9392360033',
  github: 'https://github.com/teja3856',
  linkedin: 'https://www.linkedin.com/in/teja-santosh-668695311',
  twitter: 'https://twitter.com',
  resumeUrl: '/Teja_Santosh_Resume.pdf',
  bio: 'I am Teja Santosh, pursuing B.Tech in Computer Science Engineering with specialization in AI & ML at GITAM University, Bangalore. Skilled in Python, SQL, Machine Learning algorithms, and full-stack software development, with active leadership in student project coordination and hackathons.',
  availability: 'Available for AI/ML roles, internships & project collaborations',
  stats: [
    { label: 'Degree', value: 'B.Tech CSE (AIML)' },
    { label: 'University', value: 'GITAM Bangalore' },
    { label: 'Core Skills', value: 'Python, SQL & ML' },
    { label: 'Hackathons', value: 'Smart India' }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'AI & Technical Skills',
    skills: [
      {
        name: 'Python',
        tags: ['Data Analysis', 'NumPy', 'Pandas', 'Machine Learning', 'Automation']
      },
      {
        name: 'SQL & Databases',
        tags: ['SQL Queries', 'Joins', 'Data Filtering', 'Relational Databases']
      },
      {
        name: 'Machine Learning',
        tags: ['Supervised Learning', 'Classification', 'Regression', 'Model Evaluation', 'Scikit-Learn']
      },
      {
        name: 'Problem Solving & Logic',
        tags: ['Data Structures', 'Algorithms', 'Debugging', 'Logical Thinking']
      },
      {
        name: 'Analytical Thinking',
        tags: ['Data Interpretation', 'Pattern Recognition', 'Problem Analysis', 'Insights']
      }
    ]
  },
  {
    category: 'Professional & Management',
    skills: [
      {
        name: 'Project Coordination',
        tags: ['Planning', 'Execution', 'Team Alignment', 'Task Prioritization', 'Milestone Tracking']
      },
      {
        name: 'Community Outreach',
        tags: ['Student Engagement', 'Event Organizing', 'Public Outreach', 'Campaigns']
      },
      {
        name: 'Technical Writing',
        tags: ['Documentation', 'Project Reports', 'Content Strategy', 'Technical Communication']
      },
      {
        name: 'Volunteer Engagement',
        tags: ['Team Support', 'Activity Coordination', 'Peer Mentorship', 'Workshops']
      },
      {
        name: 'Adaptability & Learning',
        tags: ['Rapid Prototyping', 'Continuous Growth', 'Tool Adoption', 'Fast Learning']
      }
    ]
  },
  {
    category: 'Soft Skills & Collaboration',
    skills: [
      {
        name: 'Team Collaboration',
        tags: ['Cross-Functional Teamwork', 'Hackathon Teams', 'Peer Programming', 'Active Feedback']
      },
      {
        name: 'Communication Skills',
        tags: ['Articulating Ideas', 'Technical Discussions', 'Presentations', 'Active Listening']
      },
      {
        name: 'Stakeholder Engagement',
        tags: ['Campus Initiatives', 'Student Relations', 'Community Building', 'Coordination']
      },
      {
        name: 'Leadership & Initiative',
        tags: ['Club Activities', 'Event Management', 'GUSAC Content Lead', 'Team Motivation']
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn & Revenue Forecasting',
    category: 'AI / Machine Learning',
    description: 'Supervised machine learning pipeline built with Python, Scikit-Learn, and XGBoost to predict customer churn risk and analyze factors driving revenue loss.',
    longDescription: 'Developed an end-to-end machine learning project to identify customer churn patterns and forecast revenue impact. The pipeline preprocesses customer behavioral data, trains multiple supervised classification models, evaluates precision and recall metrics, and extracts feature importances to highlight key churn indicators.',
    problem: 'Businesses face customer attrition without clear visibility into behavioral risk factors and potential recurring revenue loss.',
    solution: 'Built an automated supervised classification pipeline comparing models (Logistic Regression, Random Forest, XGBoost) to classify churn risk and highlight top indicators.',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'XGBoost', 'Supervised Learning', 'Matplotlib'],
    contribution: [
      'Engineered data preprocessing and feature encoding pipeline using Pandas',
      'Trained and compared classification algorithms with cross-validation',
      'Evaluated precision, recall, and ROC-AUC metrics to optimize churn detection',
      'Extracted feature importances to identify actionable churn drivers'
    ],
    tags: ['Python', 'Scikit-Learn', 'Pandas', 'XGBoost', 'Supervised Learning'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    liveUrl: 'https://github.com/teja3856/intership',
    githubUrl: 'https://github.com/teja3856/intership',
    featured: true,
    metrics: 'Supervised ML Pipeline',
    highlights: [
      'Problem: Identifying customer attrition risk and understanding factors behind revenue decline',
      'Solution: Supervised classification pipeline utilizing Python, Scikit-Learn, and XGBoost',
      'Technologies: Python, Scikit-Learn, Pandas, XGBoost, Matplotlib, Seaborn',
      'Contribution: End-to-end data cleaning, model training, evaluation, and feature importance analysis'
    ]
  },
  {
    id: 'resumecraft-ai',
    title: 'ResumeCraft AI – Smart Resume Generator',
    category: 'AI / Machine Learning',
    description: 'An AI-powered web application that helps students and professionals generate structured, ATS-friendly resumes with intelligent content suggestions.',
    longDescription: 'Developed ResumeCraft AI to address common resume structuring and ATS-compatibility hurdles. Built with React and TypeScript on the frontend and integrated with generative AI APIs, the application offers structured inputs, real-time live preview, and export-ready formatting.',
    problem: 'Job seekers often face difficulty structuring bullet points and formatting resumes cleanly for ATS screening.',
    solution: 'An interactive web tool providing guided inputs, AI-assisted content optimization, and instant structured preview.',
    technologies: ['React', 'TypeScript', 'Generative AI APIs', 'Python', 'Firebase Hosting'],
    contribution: [
      'Built modular React components for resume sections, skills, and experience',
      'Integrated AI generation workflows to produce structured role descriptions',
      'Implemented real-time live preview and structured layout formatting',
      'Configured Firebase deployment for accessible web hosting'
    ],
    tags: ['React', 'TypeScript', 'Generative AI', 'Python', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1000&q=80',
    liveUrl: 'https://resumecraft-ai-789.web.app/',
    githubUrl: 'https://github.com/teja3856',
    featured: true,
    metrics: 'Live AI Web Application',
    highlights: [
      'Problem: Inconsistent resume formatting and difficulty tailoring experience for ATS systems',
      'Solution: Interactive web application offering AI-guided content suggestions and structured formatting',
      'Technologies: React, TypeScript, Generative AI APIs, Python, Firebase',
      'Contribution: Dynamic UI development, AI API integration, real-time preview, and cloud deployment'
    ]
  },
  {
    id: 'punjabi-shiksha-setu',
    title: 'Punjabi Shiksha Setu – Educational Portal',
    category: 'Full-Stack Web App',
    description: 'An interactive language learning web portal featuring structured lesson modules, student progress tracking, and interactive quizzes.',
    longDescription: 'Created an accessible digital learning environment for Punjabi language students. The platform organizes learning material into progressive modules, accompanied by interactive practice quizzes and student dashboard analytics.',
    problem: 'Need for structured digital learning resources and self-paced assessment tools for language learners.',
    solution: 'A responsive educational web application with categorized study modules, interactive quizzes, and visual progress tracking.',
    technologies: ['React', 'TypeScript', 'Responsive CSS', 'Interactive UI Components'],
    contribution: [
      'Designed student dashboard interface with modular lesson navigation',
      'Created interactive quiz components with instant scoring feedback',
      'Implemented responsive design for accessible learning on mobile and desktop devices'
    ],
    tags: ['React', 'TypeScript', 'EdTech', 'Responsive UI', 'Interactive Web'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1000&q=80',
    liveUrl: 'https://punjabi-shiksha-setu.lovable.app/student',
    githubUrl: 'https://github.com/teja3856',
    featured: true,
    metrics: 'Interactive Learning Platform',
    highlights: [
      'Problem: Limited interactive digital tools for structured language study and self-assessment',
      'Solution: Clean educational portal with module navigation, practice tests, and progress tracking',
      'Technologies: React, TypeScript, CSS, Interactive State Management',
      'Contribution: Dashboard UI architecture, quiz interaction logic, and cross-device responsiveness'
    ]
  },
  {
    id: 'railway-ai-block-planning',
    title: 'AI Automatic Block Planning – Indian Railways',
    category: 'AI / Machine Learning',
    description: 'Smart India Hackathon project delivering a control room dashboard prototype for automated train block scheduling and traffic optimization.',
    longDescription: 'Developed for the Smart India Hackathon (SIH26027), this project provides a prototype AI-assisted control room interface to help railway section controllers plan maintenance blocks and manage train schedules with reduced conflict risk.',
    problem: 'Manual section block planning in railway control rooms is time-consuming and prone to scheduling conflicts during maintenance windows.',
    solution: 'A prototype control room dashboard that automates block allocation and highlights train section conflicts.',
    technologies: ['React', 'TypeScript', 'AI Scheduling Algorithms', 'Smart India Hackathon', 'Firebase'],
    contribution: [
      'Designed control room dashboard views for section occupancy and maintenance blocks',
      'Implemented scheduling conflict detection logic for train paths',
      'Collaborated on problem analysis, system workflow design, and hackathon presentation'
    ],
    tags: ['AI / Machine Learning', 'React', 'TypeScript', 'Smart India Hackathon', 'Firebase', 'Automation'],
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1000&q=80',
    liveUrl: 'https://ai-resume-68ff7.web.app/',
    githubUrl: 'https://github.com/teja3856/sih26027-railway-planner',
    featured: true,
    metrics: 'Smart India Hackathon (SIH26027)',
    highlights: [
      'Problem: Manual train block planning and maintenance scheduling causing potential line congestion',
      'Solution: Control room dashboard prototype automating block allocation and conflict visualization',
      'Technologies: React, TypeScript, Scheduling Algorithms, Firebase',
      'Contribution: UI dashboard layout, conflict detection workflows, and hackathon prototype presentation'
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
    description: 'Completed a 3-month AI/ML internship focused on practical machine learning pipelines, data preprocessing, and model evaluation.',
    achievements: [
      'Built and tested supervised learning models for data classification and prediction workflows',
      'Performed exploratory data analysis (EDA), data cleaning, and feature engineering using Python and Pandas',
      'Evaluated model classification metrics and documented implementation findings'
    ],
    type: 'work',
    featured: true
  },
  {
    id: 'exp-2',
    period: '2026 – Present',
    role: 'Content Lead',
    company: 'GUSAC Club, GITAM University',
    location: 'Bangalore, Karnataka',
    description: 'Leading technical writing, digital communication, and event storytelling for the GITAM University Science and Activity Center (GUSAC).',
    achievements: [
      'Coordinating content strategy, technical documentation, and announcements for club events and technical activities',
      'Collaborating with student teams to promote club initiatives, workshops, and student participation'
    ],
    type: 'work'
  },
  {
    id: 'edu-1',
    period: '2024 – Expected 2028',
    role: 'B.Tech in Computer Science Engineering (AI & ML)',
    company: 'GITAM University',
    location: 'Bangalore, Karnataka',
    description: 'Pursuing B.Tech in CSE with specialization in Artificial Intelligence & Machine Learning. Active participant in Smart India Hackathon.',
    achievements: [
      'Smart India Hackathon participant at GITAM University Bangalore',
      'Focusing on Python, SQL, Machine Learning foundations, and Software Engineering'
    ],
    type: 'education'
  },
  {
    id: 'edu-2',
    period: '2022 – 2024',
    role: 'Pre-Graduation (Intermediate / Class XII)',
    company: 'Shri Shiridi Sai Junior College',
    location: 'Rajanagaram, Andhra Pradesh',
    description: 'Completed higher secondary education with a focus on Mathematics, Physics, and Chemistry.',
    achievements: [
      'Strong academic foundation in analytical thinking, mathematics, and science'
    ],
    type: 'education'
  },
  {
    id: 'edu-3',
    period: 'Completed May 2022',
    role: 'High School (Class X)',
    company: 'Oakwood School',
    location: 'Diwancheruvu, Andhra Pradesh',
    description: 'Completed secondary school education with active participation in academics.',
    achievements: [
      'Active participation in school academic coursework and activities'
    ],
    type: 'education'
  }
];

