import { Briefcase, Code2 } from "lucide-react";

import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Java Full Stack Trainee",
    company: "V Cube Software Solutions",
    duration: "2025 – 2026",
    location: "Hyderabad, India",
    description:
      "Completed comprehensive Java Full Stack training with hands-on development across backend, frontend, databases, and web technologies. Developed full-stack applications using Java, Spring Boot, React, MySQL, and REST APIs while working with Hibernate/JPA for database persistence. Strengthened skills in backend development, API integration, authentication, database design, and software development practices.",
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "MySQL",
      "React",
      "Hibernate",
      "JPA",
      "Git",
    ],
    icon: Code2,
    current: false,
  },

  {
    id: 2,
    role: "MERN Stack Intern",
    company: "Edunet Foundation",
    duration: "Feb 2025 – Mar 2025",
    location: "Remote",
    description:
      "Completed a 6-week internship under the Next Gen Employability Program, developing a Personal Finance Manager using the MERN stack. Worked with React, Node.js, Express, and MongoDB while implementing JWT-based authentication and application features.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
    ],
    icon: Briefcase,
    current: false,
  },
];