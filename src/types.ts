export type Page = 'home' | 'about' | 'services' | 'case-studies' | 'contact';

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  problem: string;
  approach: string;
  whatWeBuilt: string;
  results: {
    value: string;
    label: string;
  }[];
  tools: string[];
  metrics: string[];
}

export interface ContactSubmission {
  id: string;
  name: string;
  business: string;
  email: string;
  problem: string;
  createdAt: string;
}
