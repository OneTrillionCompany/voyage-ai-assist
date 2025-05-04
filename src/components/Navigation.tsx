
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navigation: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', updatePosition);

    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollPosition > 20 ? 'bg-white shadow-md py-2' : 'py-6'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="font-bold text-primary text-xl md:text-2xl">
            sellmoretrips.AI
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="#services" className="text-secondary hover:text-primary transition-colors">Services</a>
            <a href="#problems" className="text-secondary hover:text-primary transition-colors">Problems</a>
            <a href="#use-cases" className="text-secondary hover:text-primary transition-colors">Use Cases</a>
            <a href="#faq" className="text-secondary hover:text-primary transition-colors">FAQ</a>
            <a href="#team" className="text-secondary hover:text-primary transition-colors">Team</a>
          </div>

          <Button className="bg-primary hover:bg-secondary text-white">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
