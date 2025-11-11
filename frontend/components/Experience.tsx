import React from 'react';
import { Section } from './Section';
import { ExperienceItem } from './ExperienceItem';
import type { Experience } from '../types';

const experienceData: Experience[] = [
  {
    role: 'Bachelor of Computer Applications in Data Science & AI',
    company: 'Babu Banarasi Das University, Lucknow',
    period: '2023 - 2026 (Pursuing)',
    description: [],
  },
];

const Experience: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="relative border-l-2 border-teal-500/30 pl-8 space-y-12">
        {experienceData.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;