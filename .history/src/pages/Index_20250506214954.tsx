
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import BeforeAfterComparisonSection from '@/components/BeforeAfterComparisonSection';
import ProcessVisualizationSection from '@/components/ProcessVisualizationSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsAppButton';
import StatsSection from '@/components/StatsSection';
import CRMIntegrationSection from '@/components/CRMIntegrationSection';

const Index = () => {
  useScrollReveal();
  
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <BeforeAfterComparisonSection />
      <ProcessVisualizationSection />
      <CRMIntegrationSection />
      <FAQSection />
      <ContactSection />
      <TeamSection />
      <Footer />
      
      {showScrollTop && (
        <Button 
          className="fixed bottom-8 right-8 bg-primary hover:bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center z-40"
          onClick={scrollToTop}
        >
          <ArrowUp />
        </Button>
      )}
      
      <WhatsAppButton />
    </div>
  );
};

export default Index;
