import React from 'react';
import { motion } from 'framer-motion';
import { CertificationCard } from './CertificationCard';

export function Certifications() {
  const certifications = [
    {
      title: "TensorFlow Developer Certificate",
      organization: "Google",
      date: "Expected 2024",
      image: "https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      link: "https://www.tensorflow.org/certificate"
    },
    {
      title: "AWS Machine Learning Specialty",
      organization: "Amazon Web Services",
      date: "Expected 2024",
      image: "https://images.unsplash.com/photo-1485627941502-d2e6429a8af0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      link: "https://aws.amazon.com/certification/certified-machine-learning-specialty/"
    },
    {
      title: "CFA Level I",
      organization: "CFA Institute",
      date: "In Progress",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      link: "https://www.cfainstitute.org/"
    },
    {
      title: "Series 65",
      organization: "FINRA",
      date: "In Progress",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      link: "https://www.finra.org/registration-exams-ce/qualification-exams/series65"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-blue-600 dark:text-white text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CertificationCard {...certification} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}