export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  techStack: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'core' | 'framework' | 'tool';
}

export interface NavItem {
  name: string;
  href: string;
}