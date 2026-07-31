export interface Learning {
  id: number;
  title: string;
  description: string;
  status: "Learning" | "Practicing" | "Building" | "Exploring";
  icon: string;
  technologies: string[];
}