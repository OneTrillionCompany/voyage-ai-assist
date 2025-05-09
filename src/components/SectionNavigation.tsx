
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SectionNavigationProps {
  sections: string[];
  activeSectionId?: string;
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({ 
  sections,
  activeSectionId 
}) => {
  const [activeSection, setActiveSection] = useState<string | undefined>(activeSectionId);
  
  useEffect(() => {
    if (activeSectionId) {
      setActiveSection(activeSectionId);
    }
  }, [activeSectionId]);

  useEffect(() => {
    const handleScroll = () => {
      const sectionsElements = sections.map(id => document.getElementById(id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sectionsElements.length - 1; i >= 0; i--) {
        const section = sectionsElements[i];
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col items-center space-y-4">
      {sections.map((sectionId) => (
        <button
          key={sectionId}
          onClick={() => scrollToSection(sectionId)}
          className={cn(
            "w-3 h-3 rounded-full transition-all duration-300",
            activeSection === sectionId ? 'bg-primary scale-150' : 'bg-gray-300 hover:bg-gray-400'
          )}
          aria-label={`Scroll to ${sectionId} section`}
        />
      ))}
    </div>
  );
};

export default SectionNavigation;
