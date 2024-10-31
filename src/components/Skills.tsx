import React from 'react';
import { motion } from 'framer-motion';
import { SkillCard } from './SkillCard';

export function Skills() {
  const skillCategories = [
    {
      name: 'Machine Learning',
      skills: [
        {
          name: 'PyTorch',
          logo: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg'
        },
        {
          name: 'TensorFlow',
          logo: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg'
        },
        {
          name: 'scikit-learn',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg'
        },
        {
          name: 'OpenCV',
          logo: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg'
        }
      ]
    },
    {
      name: 'Programming',
      skills: [
        {
          name: 'Python',
          logo: 'https://www.vectorlogo.zone/logos/python/python-icon.svg'
        },
        {
          name: 'JavaScript',
          logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg'
        },
        {
          name: 'TypeScript',
          logo: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg'
        },
        {
          name: 'C++',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg'
        }
      ]
    },
    {
      name: 'Data & Analytics',
      skills: [
        {
          name: 'Pandas',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Pandas_mark.svg'
        },
        {
          name: 'MySQL',
          logo: 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg'
        },
        {
          name: 'Tableau',
          logo: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg'
        },
        {
          name: 'Power BI',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg'
        }
      ]
    },
    {
      name: 'DevOps & Cloud',
      skills: [
        {
          name: 'Docker',
          logo: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg'
        },
        {
          name: 'AWS',
          logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg'
        },
        {
          name: 'Git',
          logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
        },
        {
          name: 'Redis',
          logo: 'https://www.vectorlogo.zone/logos/redis/redis-icon.svg'
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-light dark:bg-gradient-dark">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-white"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillCard {...category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}