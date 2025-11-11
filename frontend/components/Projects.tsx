import React from 'react';
import { Section } from './Section';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../types';

const projectData: Project[] = [
  {
    title: 'Unified Learning Lab',
    description: 'A comprehensive full-stack MERN educational platform with interactive visualizations, a smart quiz system, and an AI-powered chatbot to make learning data structures, algorithms, and machine learning engaging.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    liveUrl: 'https://unified-learning-lab.vercel.app/',
    repoUrl: 'https://github.com/ayushtripathi2640/Unified-Learning-Lab',
  },
  {
    title: 'Wander Lust',
    description: 'A modern accommodation booking platform that allows users to discover, list, and book unique stays around the world, built with Node.js and Express.',
    tags: ['Node.js', 'Express.js', 'Bootstrap', 'JavaScript', 'EJS'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    liveUrl: 'https://wanderlust-nbqd.onrender.com/listings',
    repoUrl: 'https://github.com/ayushtripathi2640/Wanderlust',
  },
  {
    title: 'Semon Says Game',
    description: 'An interactive memory game featuring progressive difficulty levels, sound effects, and visual feedback. Built with vanilla JavaScript to showcase core web development skills.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    liveUrl: 'https://ayushtripathi2640.github.io/Simon-Says-Game/',
    repoUrl: 'https://github.com/ayushtripathi2640/Simon-Says-Game',
  }
];

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;