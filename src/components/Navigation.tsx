
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', updatePosition);

    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollPosition > 20 ? 'bg-primary shadow-md py-2' : 'py-6'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="font-bold text-white text-xl md:text-2xl">
            sellmoretrips.ai
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-white hover:text-primary transition-colors">{t('nav.services')}</a>
              <a href="#problems" className="text-white hover:text-primary transition-colors">{t('nav.problems')}</a>
              <a href="#use-cases" className="text-white hover:text-primary transition-colors">{t('nav.usecases')}</a>
              <a href="#faq" className="text-white hover:text-primary transition-colors">{t('nav.faq')}</a>
              <a href="#team" className="text-white hover:text-primary transition-colors">{t('nav.team')}</a>
            </div>

            <div className="hidden md:block mr-4">
              <LanguageSwitcher />
            </div>

            <Button className="bg-primary text-white hidden md:flex ">
              <a href="#contact">{t('nav.contact')}</a>
            </Button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4 bg-primary p-4 rounded-md">
            <a href="#services" className="text-white hover:text-secondary transition-colors font-medium">{t('nav.services')}</a>
            <a href="#problems" className="text-white hover:text-secondary transition-colors font-medium">{t('nav.problems')}</a>
            <a href="#use-cases" className="text-white hover:text-secondary transition-colors font-medium">{t('nav.usecases')}</a>
            <a href="#faq" className="text-white hover:text-secondary transition-colors font-medium">{t('nav.faq')}</a>
            <a href="#team" className="text-white hover:text-secondary transition-colors font-medium">{t('nav.team')}</a>
            
            <div className="py-2">
              <LanguageSwitcher />
            </div>
            
            <Button 
              className="bg-white hover:bg-secondary text-primary hover:text-white text-base px-6 py-4 mt-2 flex items-center justify-center" 
              onClick={() => window.open('https://wa.me/573054498624', '_blank')}
            >
              {t('hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
