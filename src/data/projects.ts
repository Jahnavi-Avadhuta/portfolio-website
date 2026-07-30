export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AbhiNOW",
    description:
      "A full-stack ride-sharing platform with secure authentication, real-time communication, and modern backend architecture.",
    image: "/projects/abhinow.png",
    technologies: [
      "Spring Boot",
      "React",
      "MySQL",
      "JWT",
      "WebSocket",
      "Docker",
    ],
    github: "https://github.com/Jahnavi-Avadhuta/AbhiNOW-SpringBoot",
    featured: true,
  },

  {
    id: 2,
    title: "Bujji AI",
    description:
      "An AI-powered voice assistant capable of answering questions and assisting users with intelligent conversations.",
    image: "/projects/bujji.png",
    technologies: [
      "Python",
      "GenAI",
      "Speech Recognition",
      "LLM",
    ],
    github: "https://github.com/Jahnavi-Avadhuta/Bujji-AI-Voice-Assistant",
    featured: true,
  },

  {
    id: 3,
    title: "BookSwapX",
    description:
      "Book exchange platform developed using Java EE and MySQL with automatic book matching.",
    image: "/projects/bookswapx.png",
    technologies: [
      "Java",
      "Servlets",
      "JSP",
      "Bootstrap",
      "MySQL",
    ],
    github: "https://github.com/Jahnavi-Avadhuta/BookSwapX",
    featured: true,
  },

  {
    id: 4,
    title: "Personal Finance Manager",
    description:
      "MERN application with authentication and expense tracking developed during AICTE internship.",
    image: "/projects/finance-manager.png",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "JWT",
    ],
    github: "https://github.com/Jahnavi-Avadhuta/personal-finance-manager",
    featured: false,
  },

  {
    id: 5,
    title: "Red Wine Quality Prediction",
    description:
      "Machine learning model that predicts wine quality using multiple classification techniques.",
    image: "/projects/redwine.png",
    technologies: [
      "Python",
      "Machine Learning",
      "Pandas",
      "Scikit-learn",
    ],
    github: "",
    featured: false,
  },

  {
    id: 6,
    title: "Health Monitoring using Social Media",
    description:
      "AI/ML project that analyzes Twitter data to identify health trends over time.",
    image: "/projects/health-monitoring.png",
    technologies: [
      "Python",
      "Machine Learning",
      "NLP",
      "Data Analysis",
    ],
    github: "",
    featured: false,
  },
];