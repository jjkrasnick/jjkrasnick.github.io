import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-light dark:bg-gradient-dark">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-blue-600 dark:text-white">
            JJ Krasnick
          </h1>
          <p className="text-xl md:text-2xl text-black dark:text-white mb-12 font-light">
            ML Engineer | Quant Developer | Full Stack Developer
          </p>
          <motion.a
            href="/resume.pdf"
            download="JJ_Krasnick_Resume.pdf"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-4 text-lg font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}