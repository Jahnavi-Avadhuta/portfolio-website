import type { Learning } from "../types/learning";

export const learningItems: Learning[] = [
  {
    id: 1,
    title: "Data Analytics",
    description:
      "Building practical skills in SQL, Python, Pandas, exploratory data analysis, and data-driven problem solving.",
    status: "Practicing",
    icon: "📊",
    technologies: ["SQL", "Python", "Pandas", "Data Analysis"],
  },

  {
    id: 2,
    title: "Data Visualization",
    description:
      "Learning to explore and communicate data through effective visualizations, dashboards, and meaningful insights.",
    status: "Learning",
    icon: "📈",
    technologies: ["Data Visualization", "Python", "Pandas"],
  },

  {
    id: 3,
    title: "Machine Learning",
    description:
      "Strengthening my understanding of supervised learning, feature engineering, model evaluation, and predictive modeling.",
    status: "Practicing",
    icon: "🧠",
    technologies: ["Python", "Scikit-learn", "Pandas"],
  },

  {
    id: 4,
    title: "Generative AI",
    description:
      "Exploring Large Language Models, prompt engineering, and practical applications of generative AI.",
    status: "Learning",
    icon: "🤖",
    technologies: ["LLMs", "Prompt Engineering", "Generative AI"],
  },
];