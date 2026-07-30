export interface Certificate {
  id: number;

  title: string;

  issuer: string;

  organization: string;

  issued: string;

  duration?: string;

  score?: string;

  credentialId?: string;

  verification?: string;

  category:
    | "NPTEL"
    | "Infosys"
    | "Internship"
    | "Professional"
    | "Assessment"
    | "Project";

  skills: string[];

  thumbnail: string;

  pdf: string;

  featured: boolean;
}