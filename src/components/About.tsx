import React from 'react';
import { motion } from 'framer-motion';
import { Brain, LineChart, Code } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
      title: 'ML Engineer',
      description: 'Specializing in deep learning, computer vision, and NLP'
    },
    {
      icon: <LineChart className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
      title: 'Quant Developer',
      description: 'Developing quantitative analysis and trading systems'
    },
    {
      icon: <Code className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
      title: 'Full Stack Developer',
      description: 'Building scalable web applications and APIs'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-light dark:bg-gradient-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-blue-600 dark:text-white">About</h2>
            <p className="text-lg leading-relaxed text-black dark:text-white mb-10 max-w-3xl mx-auto">
              I'm pursuing multiple degrees at Pepperdine University in Mathematics, Computer Science, Data Science, Economics, and Finance. 
              My research focuses on Machine Learning and Mathematical Finance. I'm currently self-studying for various certifications, including
              CFA Level I, SIE, Series 63, Series 65, and Series 66. I've completed study abroad programs in London, UK, and Tokyo, Japan,
              gaining valuable international experience in technology and finance.
            </p>
            <motion.a
              href="/resume.pdf"
              download="JJ_Krasnick_Resume.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Download Resume
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="inline-block p-3 bg-blue-500/10 dark:bg-blue-400/10 rounded-xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-white">{item.title}</h3>
                <p className="text-black dark:text-white">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
