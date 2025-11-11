import React from 'react';
import { GitHub, Linkedin, Mail } from './icons/Icons';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Ayush Tripathi</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
          A results-driven MERN Stack Developer with hands-on experience in designing and developing scalable, responsive, and user-centric web applications.
        </p>
        <div className="flex justify-center space-x-6 pt-4">
          <a href="https://github.com/ayushtripathi2640" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
            <GitHub className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/ayush-tripathi-b9249629b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="mailto:ayushtripathi2640@gmail.com" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
            <Mail className="w-8 h-8" />
          </a>
        </div>
        <div className="pt-8">
          <a
            href="#projects"
            className="inline-block bg-teal-500 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;