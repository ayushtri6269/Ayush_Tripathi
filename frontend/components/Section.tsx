import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        {title}
        <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded"></div>
      </h2>
      {children}
    </section>
  );
};