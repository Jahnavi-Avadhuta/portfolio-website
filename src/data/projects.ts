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
      "A full-stack ride-sharing web application with secure authentication, ride booking, REST APIs, and database-driven functionality.",
    image: "/projects/abhinow.png",
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "MySQL",
      "JWT",
    ],
    github: "https://github.com/Jahnavi-Avadhuta/AbhiNOW-SpringBoot",
    featured: true,
  },

  {
    id: 2,
    title: "BookSwapX",
    description:
      "A full-stack Java web application for buying, selling, and exchanging college textbooks with an automated book-matching mechanism.",
    image: "/projects/bookswapx.png",
    technologies: [
      "Java",
      "Jakarta Servlets",
      "JSP",
      "MySQL",
      "Bootstrap",
    ],
    github: "https://github.com/Jahnavi-Avadhuta/BookSwapX",
    featured: true,
  },

  {
    id: 3,
    title: "Bujji AI",
    description:
      "An AI-powered desktop voice assistant combining speech recognition, conversational AI, APIs, and desktop automation.",
    image: "/projects/bujji.png",
    technologies: [
      "Python",
      "OpenAI API",
      "Speech Recognition",
      "NewsAPI",
      "PyAutoGUI",
    ],
    github: "https://github.com/Jahnavi-Avadhuta/Bujji-AI-Voice-Assistant",
    featured: true,
  },

  {
    id: 4,
    title: "Personal Finance Manager",
    description:
      "A MERN-based personal finance application with authentication, expense tracking, and database-driven functionality developed during an AICTE internship.",
    image: "/projects/finance-manager.png",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
    ],
    github: "https://github.com/Jahnavi-Avadhuta/personal-finance-manager",
    featured: false,
  },

  {
    id: 5,
    title: "Expense Tracker",
    description:
      "A Java console application for recording, categorizing, and managing daily expenses using object-oriented programming and file handling.",
    image: "/projects/expense-tracker.png",
    technologies: [
      "Java",
      "OOP",
      "Collections",
      "File Handling",
      "Exception Handling",
    ],
    github: "https://github.com/Jahnavi-Avadhuta/expense-tracker-java",
    featured: false,
  },

  {
    id: 6,
    title: "Health Monitoring using Social Media",
    description:
      "An academic project exploring social media data to analyze health-related trends over time using machine learning and data analysis techniques.",
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

  {
    id: 7,
    title: "Red Wine Quality Prediction",
    description:
      "An academic machine learning project exploring the prediction of red wine quality using classification techniques.",
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
];