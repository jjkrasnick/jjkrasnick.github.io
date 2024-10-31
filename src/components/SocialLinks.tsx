import React from 'react';
import { Github, Linkedin, Mail, Instagram, Youtube } from 'lucide-react';

export function SocialLinks({ className = '' }: { className?: string }) {
  const socials = [
    {
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/jjkrasnick',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://linkedin.com/in/jjkrasnick',
      label: 'LinkedIn'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: 'https://instagram.com/jjkrasnick',
      label: 'Instagram'
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: 'https://x.com/jjkrasnick',
      label: 'X (Twitter)'
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      href: 'https://youtube.com/@jjkrasnick',
      label: 'YouTube'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:jj.krasnick@pepperdine.edu',
      label: 'Email'
    }
  ];

  return (
    <div className={`flex gap-4 ${className}`}>
      {socials.map(({ icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-150"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}