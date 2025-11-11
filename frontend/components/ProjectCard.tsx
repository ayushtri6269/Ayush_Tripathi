import React from 'react';
import type { Project } from '../types';
import { GitHub, ExternalLink } from './icons/Icons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-teal-500/20 transition-all duration-300 group flex flex-col">
      <div className="relative overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2 text-gray-100">{project.title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-teal-500/20 text-teal-300 text-sm font-medium px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-700">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-teal-400 transition-colors duration-300">
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-teal-400 transition-colors duration-300">
              <GitHub className="w-5 h-5" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};