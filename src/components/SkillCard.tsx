import React from 'react';

type Skill = {
  name: string;
  logo: string;
};

type SkillCardProps = {
  name: string;
  skills: Skill[];
};

export function SkillCard({ name, skills }: SkillCardProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{name}</h3>
      <ul className="space-y-4">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center gap-3"
          >
            <img 
              src={skill.logo} 
              alt={skill.name} 
              className="w-6 h-6"
            />
            <span className="text-black dark:text-white">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}