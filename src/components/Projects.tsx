import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const projects = [
    {
      title: 'Traffic Accident Prediction System',
      description: 'CNN models achieving 94% accuracy in predicting PCH traffic accidents using historical data and real-time traffic flow analysis.',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop',
      tech: ['Python', 'PyTorch', 'OpenCV', 'TensorFlow'],
      github: 'https://github.com/yourusername/traffic-prediction',
      demo: 'https://traffic-prediction-demo.com'
    },
    {
      title: 'Tennis Analytics Platform',
      description: 'Comprehensive analytics system for tennis performance tracking with real-time video analysis and statistical modeling.',
      image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=2070&auto=format&fit=crop',
      tech: ['Python', 'TensorFlow', 'MySQL', 'Tableau'],
      github: 'https://github.com/yourusername/tennis-analytics',
      demo: 'https://tennis-analytics-demo.com'
    },
    {
      title: 'ML-Powered Content Recommendation',
      description: 'Advanced recommendation system using PyTorch and Hugging Face transformers with A/B testing framework.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop',
      tech: ['PyTorch', 'MLflow', 'FastAPI', 'Redis'],
      github: 'https://github.com/yourusername/content-recommendation',
      demo: 'https://recommendation-demo.com'
    },
    {
      title: 'Real-time Chat Application',
      description: 'Scalable chat platform with WebSocket integration and Redis pub/sub, handling 30,000+ daily messages.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop',
      tech: ['React', 'TypeScript', 'WebSocket', 'Redis'],
      github: 'https://github.com/yourusername/realtime-chat',
      demo: 'https://chat-demo.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-light dark:bg-gradient-dark">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => window.open(project.demo, '_blank')}
              className="cursor-pointer"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}