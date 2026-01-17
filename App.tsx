import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { PersonalPlan } from './components/PersonalPlan';
import { TeamPlan } from './components/TeamPlan';
import { Footer } from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Handle scroll spy to update active section in sidebar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'personal', 'team', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className="bg-premium-dark min-h-screen text-premium-text font-sans">
      <Sidebar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        isMobileOpen={isMobileOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      
      <main className="lg:pl-72 w-full transition-all duration-300">
        <Hero />
        <PersonalPlan />
        <TeamPlan />
        <Footer />
      </main>
    </div>
  );
}

export default App;