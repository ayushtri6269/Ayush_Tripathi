import React from 'react';
import type { Experience } from '../types';

interface ExperienceItemProps {
  experience: Experience;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="relative">
      <div className="absolute -left-[3.2rem] top-1.5 w-6 h-6 bg-teal-500 rounded-full border-4 border-gray-900"></div>
      <p className="text-sm text-gray-400 mb-1">{experience.period}</p>
      <h3 className="text-xl font-bold text-gray-100">{experience.role}</h3>
      <h4 className="text-lg font-semibold text-teal-400 mb-3">{experience.company}</h4>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        {experience.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};