import React from 'react';
import { MapPin } from 'lucide-react';

type WorkExperienceCardProps = {
  title: string;
  type: string;
  company: string;
  department?: string;
  location: string;
  period: string;
  skills: string[];
  achievements: string[];
};

export function WorkExperienceCard({
  title,
  type,
  company,
  department,
  location,
  period,
  skills,
  achievements
}: WorkExperienceCardProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-black dark:text-white">{title}</h3>
          <div className="text-black dark:text-white flex items-center gap-2">
            <span>{company}</span>
            {department && <span>• {department}</span>}
            <span className="bg-blue-500 dark:bg-blue-600 text-white px-2 py-0.5 rounded-full text-sm">
              {type}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end text-right">
          <div className="text-black dark:text-white text-sm mb-1">{period}</div>
          <div className="flex items-center gap-1 text-black dark:text-white text-sm">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-500 dark:bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-black dark:text-white"
          >
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}