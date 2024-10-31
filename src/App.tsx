import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { WorkExperience } from './components/WorkExperience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { LazyMotion, domAnimation } from 'framer-motion';

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <ThemeProvider>
        <div className="min-h-screen bg-light-gradient dark:bg-dark-gradient text-gray-900 dark:text-white transition-all duration-200">
          <div className="relative z-10">
            <Header />
            <ThemeToggle />
            <main className="relative">
              <Hero />
              <div className="relative space-y-1">
                <About />
                <Skills />
                <WorkExperience />
                <Projects />
                <Contact />
              </div>
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </div>
      </ThemeProvider>
    </LazyMotion>
  );
}