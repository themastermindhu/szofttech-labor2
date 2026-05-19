export interface Resource {
  id: string;
  title: string;
  type: 'book' | 'whitepaper' | 'tool';
  description: string;
  imageUrl?: string;
  downloadUrl?: string;
}

export interface Exercise {
  id: string;
  slug: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  duration: string;
  tags: string[];
  category: string;
  technologies: string[];
  objectives: string[];
  instructions: string[];
  appPath: string;
  previewImage?: string;
  icon?: string;
  scenario?: string;
  steps?: string[];
  inputs?: string[];
  expectedOutputs?: string[];
  hints?: string[];
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  features: string[];
  status: 'Available' | 'Coming Soon';
  longDescription?: string;
  howToUse?: string[];
  useCases?: string[];
  limitations?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  imageUrl?: string;
}
