
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useWhatsAppButton } from '@/contexts/WhatsAppButtonContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const HeroSection: React.FC = () => {
  // Use the language context
  const { t } = useLanguage();
  
  // WhatsApp button visibility
  const whatsAppButtonRef = useRef<HTMLDivElement>(null);
  const { setIsHeroButtonVisible } = useWhatsAppButton();
  const isButtonVisible = useIntersectionObserver({
    elementRef: whatsAppButtonRef,
    threshold: 0.5,
  });

  useEffect(() => {
    setIsHeroButtonVisible(isButtonVisible);
  }, [isButtonVisible, setIsHeroButtonVisible]);
  
  // Scene state management
  const [currentScene, setCurrentScene] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  
  // Scene definitions
  const scenes = [
    { name: 'bogota', color: 'from-blue-300 to-blue-100', cloudColor: 'text-white', waveColor: 'text-blue-50' },
    { name: 'cartagena', color: 'from-amber-200 to-blue-200', cloudColor: 'text-white', waveColor: 'text-blue-100' },
    { name: 'medellin', color: 'from-indigo-900 to-purple-900', cloudColor: 'text-indigo-200', waveColor: 'text-indigo-800' },
    { name: 'tayrona', color: 'from-orange-400 to-pink-500', cloudColor: 'text-pink-100', waveColor: 'text-orange-100' },
  ];
  
  // Scene transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      
      // Wait for fade out before changing scene
      setTimeout(() => {
        setCurrentScene((prev) => (prev + 1) % scenes.length);
        
        // Wait a moment then fade in the new scene
        setTimeout(() => {
          setTransitioning(false);
        }, 100);
      }, 500);
    }, 8000); // Change scene every 8 seconds
    
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative h-screen pt-28 pb-16 overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b ${scenes[currentScene].color} transition-opacity duration-500 ease-in-out ${transitioning ? 'opacity-0' : 'opacity-100'}`}
      ></div>
      
      {/* Scene Indicator */}
      <div className="absolute bottom-2 right-4 z-20 flex space-x-2">
        {scenes.map((scene, index) => (
          <div 
            key={scene.name}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentScene ? 'bg-white scale-125' : 'bg-white/50'}`}
          ></div>
        ))}
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Decorative Wave - Bottom */}
        <svg 
          className={`absolute bottom-0 left-0 w-full h-24 ${scenes[currentScene].waveColor} transition-colors duration-500`} 
          viewBox="0 0 1440 120" 
          fill="currentColor" 
          preserveAspectRatio="none"
        >
          <path d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,80C672,85,768,75,864,69.3C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
        
        {/* Scene-specific decorative elements */}
        {currentScene === 0 && (
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white opacity-20 animate-pulse"></div>
        )}
        {currentScene === 1 && (
          <div className="absolute bottom-32 right-1/4 w-20 h-20 rounded-full bg-yellow-300 opacity-70 animate-pulse"></div>
        )}
        {currentScene === 2 && (
          <>
            <div className="absolute top-20 right-40 w-2 h-2 rounded-full bg-white opacity-80 animate-pulse"></div>
            <div className="absolute top-40 right-80 w-1 h-1 rounded-full bg-white opacity-90 animate-pulse-slow"></div>
            <div className="absolute top-60 right-20 w-2 h-2 rounded-full bg-white opacity-70 animate-pulse"></div>
            <div className="absolute top-80 right-60 w-1 h-1 rounded-full bg-white opacity-80 animate-pulse-slow"></div>
          </>
        )}
        {currentScene === 3 && (
          <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-orange-500 opacity-40 animate-pulse-slow"></div>
        )}
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative h-[calc(100vh-7rem)] z-10">
        {/* Scene-specific text overlay */}
        <div className={`absolute top-4 right-10 text-sm font-medium transition-opacity duration-500 ${transitioning ? 'opacity-0' : 'opacity-70'}`}>
          {currentScene === 0 && <span className="text-blue-800">Descubre Bogotá</span>}
          {currentScene === 1 && <span className="text-amber-800">Disfruta Cartagena</span>}
          {currentScene === 2 && <span className="text-white">Explora Medellín</span>}
          {currentScene === 3 && <span className="text-white">Vive Tayrona</span>}
        </div>
        {/* Title - Top Left */}
        <div className="absolute top-12 md:top-0 md:left-10 max-w-xl md:max-w-2xl">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold transition-colors duration-500 ${currentScene === 2 ? 'text-white' : ''}`}>
            {t('hero.title')}
          </h1>
        </div>

        {/* Image - Center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg md:max-w-xl lg:max-w-2xl">
          <img 
            src="/hero.webp" 
            alt="AI Travel Assistant" 
            className="w-full animate-plane-float h-auto scale-125"
          />
        </div>

        {/* Description - Bottom Left */}
        <div className="absolute bottom-10 md:left-10 max-w-md md:max-w-lg">
          <p className={`text-base md:text-lg lg:text-xl transition-colors duration-500 ${currentScene === 2 ? 'text-white' : 'text-secondary'}`}>
            {t('hero.description')}
          </p>
        </div>

        {/* CTA Button - Bottom Right */}
        <div className="absolute bottom-10 right-10" ref={whatsAppButtonRef}>
          <Button 
            className="bg-primary hover:bg-secondary text-white text-base md:text-lg px-6 py-5 md:px-8 md:py-6 hidden md:flex" 
            onClick={() => window.open('https://wa.me/573159381236', '_blank')}
          >
            {t('hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
