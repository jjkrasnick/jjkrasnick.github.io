import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { WorkExperienceCard } from './WorkExperienceCard';

export function WorkExperience() {
  const experiences = [
    {
      id: 'ml-research-intern',
      title: 'Machine Learning Research',
      type: 'Internship',
      company: 'Pepperdine University',
      department: 'Department of Computer Science',
      location: 'Los Angeles, CA',
      period: 'January 2024 - Present',
      skills: ['Python', 'PyTorch', 'OpenCV', 'Git'],
      achievements: [
        'Developed CNN models achieving 94% accuracy in predicting PCH traffic accidents using 15K+ historical incidents',
        'Built real-time traffic flow analysis system processing 500K+ vehicle data points from Malibu traffic cameras',
        'Created ML pipeline analyzing weather impact on accidents, reducing prediction time from 30 to 8 minutes',
        'Implemented computer vision system detecting high-risk driving patterns with 91% accuracy across 20+ intersections',
        'Deployed RandomForest models predicting accident severity with 85% accuracy using 30+ environmental features'
      ]
    },
    {
      id: 'cs-teaching-assistant',
      title: 'Computer Science Teaching Assistant',
      type: 'Part-Time',
      company: 'Pepperdine University',
      department: 'Department of Computer Science',
      location: 'Los Angeles, CA',
      period: 'January 2024 - Present',
      skills: ['Python', 'C++', 'Pandas', 'Git'],
      achievements: [
        'Taught 200+ students in core CS & DS topics, leading to a 30% increase in overall class average on midterm exams',
        'Developed interactive learning modules using Jupyter Notebooks, integrating data visualization tools for real-time practice',
        'Automated grading scripts in Python, reducing grading time for coding assignments by 50%',
        'Designed & led collaborative coding labs using PyTorch, gaining practical experience with real-world data sets'
      ]
    },
    {
      id: 'data-scientist-intern',
      title: 'Data Scientist',
      type: 'Internship',
      company: 'Pepperdine University',
      department: 'Athletics Department',
      location: 'Los Angeles, CA',
      period: 'January 2024 - November 2024',
      skills: ['Python', 'TensorFlow', 'Tableau', 'MySQL'],
      achievements: [
        'Created Tableau dashboards tracking 50+ metrics (UTR, ITA rankings, win%) across 3 seasons for 12 players',
        'Analyzed 1500+ PlaySight video highlights to improve player patterns, resulting in 28% higher first-strike percentage',
        'Developed Python scripts to automate match reports using Tennis Analytics data from 300+ matches',
        'Built MySQL database integrating 5 data sources (PlaySight, UTR, ITA, GPS tracking, match stats) for real-time analysis',
        'Generated Power BI visualizations for 25+ tournament opponents leading to 35% improvement in match preparation success'
      ]
    },
    {
      id: 'ml-engineer-intern',
      title: 'Machine Learning Engineer',
      type: 'Internship',
      company: 'Cita Marketplace',
      location: 'Tokyo, JP',
      period: 'May 2024 - August 2024',
      skills: ['Python', 'PyTorch', 'Docker', 'Redis', 'Pandas', 'Git'],
      achievements: [
        'Increased model accuracy by 35% using PyTorch and Hugging Face transformers for content recommendation',
        'Implemented A/B testing framework with MLflow tracking 50+ experiments across 100K users',
        'Built data pipelines with PySpark processing 2TB+ daily data across 100+ features',
        'Optimized ML training infrastructure on AWS reducing costs by 45% using SageMaker and EC2',
        'Deployed real-time inference API handling 1M+ daily predictions using FastAPI and Redis'
      ]
    },
    {
      id: 'fullstack-engineer-intern',
      title: 'Full-Stack Software Engineer',
      type: 'Internship',
      company: 'Cita Marketplace',
      location: 'London, UK',
      period: 'May 2023 - August 2023',
      skills: ['React', 'TypeScript', 'TailwindCSS', 'Express', 'AWS', 'Git'],
      achievements: [
        'Developed user authentication system using Next.js 14, Prisma ORM, and PostgreSQL, reducing login time by 45%',
        'Architected real-time chat feature with WebSockets and Redis pub/sub serving 30,000+ daily messages',
        'Optimized GraphQL queries using Apollo Client caching, improving frontend load times by 60%',
        'Built CI/CD pipeline with GitHub Actions and Docker, reducing deployment time from 25 to 8 minutes',
        'Implemented secure payment processing system using Stripe API handling $500K+ in transactions'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-light dark:bg-gradient-dark">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-blue-600 dark:text-white text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience) => (
            <WorkExperienceCard key={experience.id} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}