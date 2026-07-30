import { Briefcase, Code2 } from "lucide-react";
import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Java Full Stack Trainee",
    company: "V Cube Software Solutions",
    duration: "2025 – Present",
    location: "Hyderabad, India",
    description:
      "Undergoing intensive training in Java Full Stack Development with hands-on implementation of enterprise applications using modern backend and frontend technologies.",
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
    current: true,
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