import React from 'react';
import { SocialLinks } from './SocialLinks';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect bg-white/80 dark:bg-gray-800/80 border-b border-gray-200/50 dark:border-gray-800/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="/" 
            className="text-2xl font-bold text-blue-600 dark:text-white"
          >
            JK
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <SocialLinks />
        </div>
      </nav>
    </header>
  );
}
