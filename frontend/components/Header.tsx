import React, { useState } from 'react';
import { Code, Menu, X } from './icons/Icons';

const NavLinks = () => (
  <>
    <a href="#about" className="hover:text-teal-400 transition-colors duration-300">About</a>
    <a href="#projects" className="hover:text-teal-400 transition-colors duration-300">Projects</a>
    <a href="#education" className="hover:text-teal-400 transition-colors duration-300">Education</a>
    <a href="#contact" className="hover:text-teal-400 transition-colors duration-300">Contact</a>
  </>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm shadow-md shadow-gray-900/10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2 text-2xl font-bold hover:text-teal-400 transition-colors duration-300">
            <Code className="w-8 h-8 text-teal-400" />
            <span>Ayush Tripathi</span>
          </a>
          <nav className="hidden md:flex space-x-8 text-lg">
            <NavLinks />
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <nav className="flex flex-col items-center space-y-4 py-4 text-lg">
            <NavLinks />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;