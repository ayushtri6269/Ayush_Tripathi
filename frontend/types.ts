// FIX: Import `ReactNode` type from 'react' to resolve 'Cannot find namespace React' error.
import type { ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
    name: string;
    // FIX: Use the imported `ReactNode` type instead of `React.ReactNode`.
    icon: ReactNode;
}