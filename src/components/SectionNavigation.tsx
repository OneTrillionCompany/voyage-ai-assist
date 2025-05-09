
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface SectionNavigationProps {
  sections: { id: string; labelKey: string }[];
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('');
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is more than 50% in the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <nav className="flex flex-col space-y-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center"
            aria-label={t(section.labelKey)}
          >
            <span className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              activeSection === section.id ? "bg-primary scale-125" : "bg-gray-400 scale-100 hover:bg-primary/70"
            )}></span>
            <span className={cn(
              "ml-2 text-sm font-medium transition-all duration-300 opacity-0 group-hover:opacity-100",
              activeSection === section.id ? "text-primary" : "text-gray-600"
            )}>
              {t(section.labelKey)}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default SectionNavigation;
