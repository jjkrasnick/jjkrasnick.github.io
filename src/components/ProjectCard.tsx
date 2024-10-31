import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export function ProjectCard({ title, description, image, tech, github, demo }: ProjectCardProps) {
  return (
    <motion.div
      className="relative group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 h-full"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-lg font-semibold">View Live Demo</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{title}</h3>
        <p className="text-black dark:text-white mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span
              key={item}
              className="bg-blue-500 dark:bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>Code Repository</span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors ml-auto"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}