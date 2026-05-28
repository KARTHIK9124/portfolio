// ===================================
// Portfolio Data Configuration
// Update this file with your LinkedIn information
// ===================================

export const personalInfo = {
  name: "Karthik Raju",
  title: "Software Developer",
  tagline: "Backend-focused Software Developer specializing in Python & AWS",
  bio: "Backend-focused Software Developer with 2 years of experience building scalable Python-based applications in healthcare and enterprise domains. Specialized in designing and deploying AWS Lambda functions, RESTful APIs, and serverless architectures.",
  location: "Karaikudi, Tamil Nadu",
  email: "rajukarthik158@gmail.com",
  phone: "+91 6382435343",
  languages: ["Tamil (Native)", "English (Professional)", "Kannada (Professional)"],
  availability: "Open to opportunities",
  
  // Social Links
  social: {
    github: "https://github.com/KARTHIK9124/",
    linkedin: "https://www.linkedin.com/in/karthik--r/",
    portfolio: "https://karthik9124.github.io/portfolio/",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    email: "mailto:rajukarthik158@gmail.com"
  },
  
  // Resume
  resume: "/Karthik's Resume.pdf"
};

// Typing animation texts
export const roles = [
  "Software Developer",
  "Backend Developer",
  "Python Developer",
  "AWS Specialist",
  "API Developer",
  "Full Stack Developer"
];

// About Section
export const about = {
  description: [
    "Backend-focused Software Developer with 2 years of experience building scalable Python-based applications in healthcare and enterprise domains. I specialize in designing and deploying AWS Lambda functions, RESTful APIs (FastAPI, Flask), and serverless architectures.",
    "I've contributed to comprehensive hospital management systems with modules for patient management, billing, pharmacy, lab operations, and inpatient tracking. Proficient in full-stack development with React Native and Flutter, database optimization (MySQL, DynamoDB), and implementing CI/CD pipelines with Jenkins."
  ],
  
  features: [
    {
      icon: "fas fa-server",
      title: "Backend & API Development",
      description: "Building scalable RESTful APIs with Python, FastAPI, Flask, and AWS Lambda"
    },
    {
      icon: "fas fa-cloud",
      title: "AWS Cloud Architecture",
      description: "Designing serverless solutions with Lambda, DynamoDB, API Gateway, and more"
    },
    {
      icon: "fas fa-database",
      title: "Database Optimization",
      description: "Expert in MySQL, DynamoDB, and database performance tuning"
    }
  ],
  
  stats: [
    { icon: "fas fa-briefcase", number: 2, label: "Years Experience" },
    { icon: "fas fa-code", number: 300, label: "APIs Developed" },
    { icon: "fas fa-project-diagram", number: 50, label: "Lambda Functions" },
    { icon: "fas fa-cloud", number: 10, label: "AWS Services" }
  ]
};

// Skills Section
export const skills = {
  frontend: [
    { name: "React.js", level: 85 },
    { name: "React Native", level: 80 },
    { name: "Flutter", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "HTML & CSS", level: 85 },
    { name: "Tailwind CSS", level: 75 }
  ],
  
  backend: [
    { name: "Python", level: 95 },
    { name: "FastAPI", level: 90 },
    { name: "Flask", level: 90 },
    { name: "AWS Lambda", level: 90 },
    { name: "RESTful APIs", level: 95 },
    { name: "Serverless Architecture", level: 85 }
  ],
  
  tools: [
    "AWS Lambda",
    "DynamoDB",
    "AWS Cognito",
    "API Gateway",
    "S3",
    "EC2",
    "Step Functions",
    "Docker",
    "Jenkins",
    "Git & GitHub",
    "Postman",
    "MySQL",
    "SQLite",
    "Microservices",
    "CI/CD"
  ]
};

// Work Experience
export const workExperience = [
  {
    company: "MaGa Tech Gramam Pvt Ltd",
    position: "Software Developer",
    location: "Karaikudi, Tamil Nadu",
    duration: "Feb 2025 - Present",
    type: "Full-time",
    description: "Developed backend APIs using Python Flask and AWS Lambda functions for AroCord App and AroCord Insights hospital management platform. Built React Native mobile features and frontend integrations.",
    achievements: [
      "Implemented AWS Cognito authentication for secure user management",
      "Managed EC2 deployments and automated workflows using Lambda and Step Functions",
      "Established Jenkins CI/CD pipelines for continuous deployment",
      "Built comprehensive hospital management modules including patient management, billing, pharmacy, and lab operations"
    ],
    technologies: ["Python", "Flask", "AWS Lambda", "React Native", "AWS Cognito", "EC2", "Step Functions", "Jenkins", "MySQL"]
  },
  {
    company: "Qicpic Innovations Pvt Ltd",
    position: "Software Developer",
    location: "Mangalore, Karnataka",
    duration: "May 2024 - Dec 2024",
    type: "Full-time",
    description: "Designed and implemented 300+ FastAPI endpoints for production applications, managed data consistency, optimized database queries, and handled seamless production deployments.",
    achievements: [
      "Developed 300+ FastAPI endpoints for production applications",
      "Optimized database queries for improved performance",
      "Managed data consistency across distributed systems",
      "Handled seamless production deployments focusing on scalability and reliability"
    ],
    technologies: ["Python", "FastAPI", "MySQL", "API Development", "Database Optimization"]
  }
];

// Experience/Projects Highlights
export const experience = [
  {
    icon: "fas fa-hospital",
    title: "AroCord Insights Platform",
    description: "Comprehensive hospital management system with 25+ AWS Lambda functions",
    tags: "AWS Lambda • Python • MySQL • Jenkins"
  },
  {
    icon: "fas fa-mobile-alt",
    title: "AroCord App",
    description: "Medical practitioners platform with Flask backend and React Native frontend",
    tags: "Flask • React Native • AWS Cognito • EC2"
  },
  {
    icon: "fas fa-building",
    title: "StayBy - PG Management SaaS",
    description: "Multi-tenant SaaS platform with 50+ Lambda functions",
    tags: "Flutter • FastAPI • DynamoDB • AWS"
  }
];

// Projects Portfolio
export const projects = [
  {
    id: 1,
    title: "AroCord Insights - Hospital Management Platform",
    description: "Comprehensive hospital management system with 25+ AWS Lambda functions covering patient management, billing, pharmacy, lab operations, and inpatient tracking.",
    icon: "fas fa-hospital",
    color: "#6366f1",
    tags: ["AWS Lambda", "Python", "MySQL", "Jenkins", "Docker"],
    category: "Healthcare",
    featured: true,
    highlights: [
      "25+ AWS Lambda functions",
      "AWS Cognito + JWT authentication",
      "MySQL with connection pooling",
      "CI/CD pipeline with Jenkins",
      "Comprehensive hospital modules"
    ],
    link: "#"
  },
  {
    id: 2,
    title: "AroCord App - Medical Practitioners Platform",
    description: "Medical features application with Python Flask backend and React Native mobile frontend with secure AWS Cognito authentication.",
    icon: "fas fa-mobile-alt",
    color: "#ec4899",
    tags: ["Flask", "React Native", "AWS Cognito", "EC2", "Lambda"],
    category: "Healthcare",
    featured: true,
    highlights: [
      "Python Flask backend APIs",
      "React Native mobile app",
      "AWS Cognito authentication",
      "EC2 deployment",
      "Lambda & Step Functions automation"
    ],
    link: "#"
  },
  {
    id: 3,
    title: "StayBy - PG Management SaaS",
    description: "Multi-tenant SaaS platform with 50+ Lambda functions for room management, tenant tracking, payment processing, and real-time notifications.",
    icon: "fas fa-building",
    color: "#14b8a6",
    tags: ["Flutter", "FastAPI", "AWS Lambda", "DynamoDB", "Cognito"],
    category: "SaaS",
    featured: true,
    highlights: [
      "Multi-tenant architecture",
      "50+ AWS Lambda functions",
      "Clean architecture pattern",
      "Payment processing",
      "Real-time notifications"
    ],
    link: "#"
  },
  {
    id: 4,
    title: "Automated Surveillance System",
    description: "AI-powered vehicle monitoring system for forest areas using computer vision and machine learning to detect and track vehicles automatically.",
    icon: "fas fa-shield-alt",
    color: "#10b981",
    tags: ["Python", "OpenCV", "Machine Learning"],
    category: "AI / ML",
    featured: false,
    highlights: [
      "Computer vision based detection",
      "Real-time vehicle monitoring",
      "Forest area surveillance"
    ],
    link: "/report.pdf"
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    description: "Full-featured online shopping platform with product catalog, shopping cart, user authentication, and payment integration.",
    icon: "fas fa-shopping-cart",
    color: "#f59e0b",
    tags: ["Django", "JavaScript", "SQL"],
    category: "Web Development",
    featured: false,
    highlights: [
      "Full shopping cart system",
      "Payment integration",
      "User authentication"
    ],
    link: "https://github.com/KARTHIK9124"
  },
  {
    id: 6,
    title: "Flight Booking System",
    description: "Comprehensive flight ticket booking application with search, seat selection, booking management, and real-time availability.",
    icon: "fas fa-plane",
    color: "#3b82f6",
    tags: ["Django", "React", "Python"],
    category: "Web Development",
    featured: false,
    highlights: [
      "Flight search & filtering",
      "Seat selection system",
      "Booking management"
    ],
    link: "https://github.com/KARTHIK9124"
  },
  {
    id: 7,
    title: "Amazon Clone",
    description: "Full-featured e-commerce platform with shopping cart and product catalog",
    icon: "fas fa-shopping-cart",
    color: "#ff9900",
    image: "amazon.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
    highlights: [
      "Responsive shopping cart",
      "Product catalog",
      "Checkout flow"
    ],
    link: "https://karthik9124.github.io/amazon_clone/",
    github: "https://github.com/KARTHIK9124/amazon_clone"
  },
  {
    id: 8,
    title: "Flipkart Clone",
    description: "Modern e-commerce interface with responsive design and smooth animations",
    icon: "fas fa-store",
    color: "#1f42e9",
    image: "flipkart.png",
    tags: ["HTML", "CSS", "Bootstrap"],
    category: "Web Development",
    highlights: [
      "Responsive design",
      "Smooth animations",
      "Product filtering"
    ],
    link: "https://karthik9124.github.io/flipkart_clone/",
    github: "https://github.com/KARTHIK9124/flipkart_clone"
  },
  {
    id: 9,
    title: "Starbucks Clone",
    description: "Pixel-perfect recreation of Starbucks landing page with animations",
    icon: "fas fa-coffee",
    color: "#00704a",
    image: "starbucks.webp",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
    highlights: [
      "Pixel-perfect design",
      "Smooth animations",
      "Interactive elements"
    ],
    link: "https://karthik9124.github.io/Starbucks_clone/",
    github: "https://github.com/KARTHIK9124/Starbucks_clone"
  },
  {
    id: 10,
    title: "Restaurant Website",
    description: "Elegant restaurant website with menu showcase and reservation system",
    icon: "fas fa-utensils",
    color: "#d4a574",
    image: "restaurant.jpeg",
    tags: ["HTML", "CSS", "Responsive"],
    category: "Web Development",
    highlights: [
      "Menu showcase",
      "Reservation system",
      "Responsive layout"
    ],
    link: "https://karthik9124.github.io/Restaurent/",
    github: "https://github.com/KARTHIK9124/Restaurent"
  },
  {
    id: 11,
    title: "Tours & Travels",
    description: "Travel booking platform with destination galleries and tour packages",
    icon: "fas fa-plane",
    color: "#0066cc",
    image: "tours.webp",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
    highlights: [
      "Destination galleries",
      "Tour packages",
      "Booking system"
    ],
    link: "https://karthik9124.github.io/tours/",
    github: "https://github.com/KARTHIK9124/tours"
  },
  {
    id: 12,
    title: "MS Dhoni Tribute Page",
    description: "A tribute website dedicated to MS Dhoni, showcasing his legendary cricket career, achievements, records, and iconic moments.",
    icon: "fas fa-trophy",
    color: "#f59e0b",
    image: "Ms Dhoni.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
    highlights: [
      "Career highlights & stats",
      "Iconic moments gallery",
      "Responsive design"
    ],
    link: "https://github.com/KARTHIK9124",
    github: "https://github.com/KARTHIK9124"
  }
];

// Education
export const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science and Engineering",
    institution: "Shanmuganathan Engineering College",
    location: "Pudukkottai, Tamil Nadu",
    year: "June 2019 - June 2023",
    cgpa: "7.74",
    description: "Focused on software development, data structures, algorithms, and cloud computing"
  }
];

// Certifications
export const certifications = [
  {
    title: "Python Full Stack Development Course",
    issuer: "Pyspiders",
    duration: "6 Months",
    description: "Comprehensive training in Python, web frameworks, and full-stack development"
  },
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    courses: ["Python for Data Science", "SQL and Relational Databases", "Machine Learning with Python"]
  },
  {
    title: "Walmart USA - Advanced Software Engineering Job Simulation",
    issuer: "Walmart",
    description: "Practical simulation of software engineering challenges"
  },
  {
    title: "Accenture - Data Analytics and Visualization Job Simulation",
    issuer: "Accenture",
    description: "Hands-on experience with data analytics and visualization tools"
  },
  {
    title: "Data Analytics Bootcamp",
    issuer: "Online Platform",
    description: "Intensive bootcamp covering data analysis techniques and tools"
  },
  {
    title: "Effective Ways to Improve Your Strategic Thinking Skills",
    issuer: "LinkedIn Learning",
    description: "Professional development in strategic thinking and problem-solving"
  }
];

// Testimonials (Optional - Add if you have recommendations on LinkedIn)
export const testimonials = [
  {
    name: "Client Name",
    position: "Position at Company",
    image: "avatar.jpg",
    text: "Karthik is an exceptional developer who delivers high-quality work on time. His attention to detail and problem-solving skills are outstanding."
  }
];

// Contact Information
export const contact = {
  title: "Let's work together!",
  description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!",
  
  details: [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "rajukarthik158@gmail.com",
      link: "mailto:rajukarthik158@gmail.com"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Karaikudi, Tamil Nadu, India"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+91 6382435343",
      link: "tel:+916382435343"
    },
    {
      icon: "fas fa-language",
      title: "Languages",
      value: "Tamil (Native), English (Professional), Kannada (Professional)"
    }
  ]
};

// SEO & Meta Information
export const seo = {
  title: "Karthik Raju - Software Developer Portfolio",
  description: "Backend-focused Software Developer with 2 years of experience in Python, AWS Lambda, FastAPI, Flask, and serverless architectures. Specialized in healthcare and enterprise applications.",
  keywords: "Software Developer, Backend Developer, Python, AWS Lambda, FastAPI, Flask, React Native, MySQL, DynamoDB, Docker, Jenkins, Karthik Raju",
  author: "Karthik Raju",
  image: "karthik.png"
};
