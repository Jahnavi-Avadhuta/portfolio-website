import type { LucideIcon } from "lucide-react";

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  current?: boolean;
}