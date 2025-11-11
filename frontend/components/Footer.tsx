import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-center text-gray-500">
      <div className="container mx-auto px-6">
        <p>&copy; {currentYear} Ayush Tripathi. All rights reserved.</p>
        <p className="text-sm mt-1">Designed & Built by Ayush Tripathi</p>
      </div>
    </footer>
  );
};

export default Footer;