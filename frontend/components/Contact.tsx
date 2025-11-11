import React from 'react';
import { Section } from './Section';
import { GitHub, Linkedin, Mail } from './icons/Icons';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-gray-300 mb-8">
          I'm currently open to new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out. My inbox is always open!
        </p>
        <a
          href="mailto:ayushtripathi2640@gmail.com"
          className="inline-block bg-teal-500 text-white font-bold text-xl py-4 px-10 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 mb-12"
        >
          Say Hello
        </a>
        <div className="flex justify-center space-x-8">
          <a href="https://github.com/ayushtripathi2640" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
            <GitHub className="w-10 h-10" />
          </a>
          <a href="https://www.linkedin.com/in/ayush-tripathi-b9249629b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
            <Linkedin className="w-10 h-10" />
          </a>
          <a href="mailto:ayushtripathi2640@gmail.com" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
            <Mail className="w-10 h-10" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;