
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Close mobile menu when transitioning from mobile to desktop view
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

  // Function to scroll to contact form
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollPosition > 20 ? 'bg-primary shadow-md py-2' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-bold text-white text-xl md:text-2xl">
            sellmoretrips.ai
          </Link>
          
          <div className="flex items-center">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6 mr-4">
              <a href="#services" className="text-white hover:text-secondary transition-colors whitespace-nowrap">{t('nav.services')}</a>
              <a href="#problems" className="text-white hover:text-secondary transition-colors whitespace-nowrap">{t('nav.problems')}</a>
              <a href="#use-cases" className="text-white hover:text-secondary transition-colors whitespace-nowrap">{t('nav.usecases')}</a>
              <a href="#faq" className="text-white hover:text-secondary transition-colors whitespace-nowrap">{t('nav.faq')}</a>
              <a href="#team" className="text-white hover:text-secondary transition-colors whitespace-nowrap">{t('nav.team')}</a>
            </div>

            <div className="hidden md:block mr-4">
              <LanguageSwitcher />
            </div>

            <Button size="sm" className="hidden md:flex bg-white text-primary hover:bg-gray-100" onClick={scrollToContact}>
              <span className="whitespace-nowrap">{t('nav.contact')}</span>
            </Button>
            
            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <div className="mr-2">
                <LanguageSwitcher />
              </div>
              <button 
                className="text-white focus:outline-none mobile-menu-button" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 mobile-menu-container flex flex-col space-y-4 bg-primary p-4 rounded-md">
            <a 
              href="#services" 
              className="text-white hover:text-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.services')}
            </a>
            <a 
              href="#problems" 
              className="text-white hover:text-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.problems')}
            </a>
            <a 
              href="#use-cases" 
              className="text-white hover:text-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.usecases')}
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.faq')}
            </a>
            <a 
              href="#team" 
              className="text-white hover:text-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.team')}
            </a>
            
            <Button 
              className="bg-white hover:bg-gray-100 text-primary hover:text-primary text-base px-6 py-4 mt-2 flex items-center justify-center" 
              onClick={(e) => {
                setIsMenuOpen(false);
                scrollToContact(e);
              }}
            >
              {t('nav.contact')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
