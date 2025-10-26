import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Sections from './components/Sections';
import ContactFooter from './components/ContactFooter';

export default function App() {
  useEffect(() => {
    // Ensure dark mode default for a sleek, modern look
    if (!document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-blue-500/30 selection:text-blue-100 scroll-smooth">
      <Navigation />
      <main>
        <Hero />
        <Sections />
        <ContactFooter />
      </main>
    </div>
  );
}
