import type { Learning } from "../types/learning";

export const learningItems: Learning[] = [
  {
    id: 1,
    title: "Spring Security",
    description: "Implementing JWT authentication, role-based authorization and secure REST APIs.",
    status: "Practicing",
    icon: "🔒",
    technologies: ["Spring Boot", "JWT", "OAuth2"],
  },
  {
    id: 2,
    title: "Docker",
    description: "Containerizing Spring Boot and React applications for deployment.",
    status: "Learning",
    icon: "🐳",
    technologies: ["Docker", "Docker Compose"],
  },
  {
    id: 3,
    title: "AWS Cloud",
    description: "Learning cloud deployment, EC2, S3 and hosting full-stack applications.",
    status: "Learning",
    icon: "☁️",
    technologies: ["AWS", "EC2", "S3"],
  },
  {
    id: 4,
    title: "System Design",
    description: "Understanding scalable application architecture and backend design principles.",
    status: "Building",
    icon: "🏗️",
    technologies: ["REST APIs", "Microservices", "Scalability"],
  },
];