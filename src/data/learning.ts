import type { Learning } from "../types/learning";

export const learningItems: Learning[] = [
  {
    id: 1,
    title: "Machine Learning",
    description:
      "Building a strong foundation in supervised learning, feature engineering, model evaluation, and predictive modeling through hands-on projects.",
    status: "Practicing",
    icon: "🧠",
    technologies: ["Python", "Scikit-learn", "Pandas"],
  },
  {
    id: 2,
    title: "Deep Learning",
    description:
      "Learning neural networks, TensorFlow, and PyTorch to build intelligent computer vision and natural language processing applications.",
    status: "Learning",
    icon: "🧩",
    technologies: ["TensorFlow", "PyTorch", "Neural Networks"],
  },
  {
    id: 3,
    title: "Generative AI",
    description:
      "Exploring Large Language Models, Prompt Engineering, LangChain, Retrieval-Augmented Generation (RAG), and AI agent development.",
    status: "Learning",
    icon: "🤖",
    technologies: ["LLMs", "LangChain", "RAG"],
  },
  {
    id: 4,
    title: "Cloud & MLOps",
    description:
      "Learning Docker, AWS, CI/CD, and MLOps practices for deploying scalable AI and software applications.",
    status: "Learning",
    icon: "☁️",
    technologies: ["Docker", "AWS", "CI/CD"],
  },
];