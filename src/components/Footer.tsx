import React from 'react';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="py-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <SocialLinks />
          <p className="text-black dark:text-white text-sm">
            © {new Date().getFullYear()} JJ Krasnick. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}