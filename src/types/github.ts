export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  github: string;
  demo?: string;
}