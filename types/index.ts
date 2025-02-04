export interface Project {
  title: string;
  description: string;
  techStack: string[];
  color: string;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  credentialLink: string;
  image?: string;
}