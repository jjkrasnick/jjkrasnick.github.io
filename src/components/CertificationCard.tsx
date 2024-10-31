import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

type CertificationCardProps = {
  title: string;
  organization: string;
  date: string;
  image: string;
  link: string;
};

export function CertificationCard({ title, organization, date, image, link }: CertificationCardProps) {
  return (
    <motion.a
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 h-full"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-blue-500 dark:text-blue-400 font-medium mb-1">{organization}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">{date}</span>
          <motion.div
            whileHover={{ x: 2 }}
            className="text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
}