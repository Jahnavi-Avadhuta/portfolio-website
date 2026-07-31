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
      "Successfully completed comprehensive Java Full Stack training with hands-on experience in developing enterprise-grade web applications using Java, Spring Boot, React, MySQL, REST APIs, Hibernate, and Git. Built multiple real-world full-stack projects while strengthening backend development, database design, authentication, and API integration skills.",
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "MySQL",
      "React",
      "Git",
      "Hibernate",
      "JPA",
    ],
    icon: Code2,
    current: false,
  },
  {
    id: 2,
    role: "AICTE Edunet Foundation Virtual Intern",
    company: "Edunet Foundation",
    duration: "Feb 2025 – Mar 2025",
    location: "Remote",
    description:
      "Developed a Personal Finance Manager using the MERN stack with secure JWT authentication, MongoDB database integration and responsive UI.",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "JWT",
      "Socket.io",
    ],
    icon: Briefcase,
  },
];