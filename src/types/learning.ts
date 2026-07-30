export interface Learning {
  id: number;
  title: string;
  description: string;
  status: "Learning" | "Practicing" | "Building";
  icon: string;
  technologies: string[];
}