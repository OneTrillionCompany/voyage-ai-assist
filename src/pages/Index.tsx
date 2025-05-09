
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
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import FullScreenSection from '@/components/FullScreenSection';
import SectionNavigation from '@/components/SectionNavigation';

const sectionIds = [
  'hero',
  'stats',
  'comparison',
  'crm',
  'faq',
  'contact',
  'team'
];

const Index = () => {
  useScrollReveal();
  useSmoothScroll(); // Initialize smooth scrolling with Lenis
  
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
    <div className="min-h-screen overflow-x-hidden scroll-snap-container">
      <Navigation />
      <SectionNavigation sections={sectionIds} />
      
      <FullScreenSection id="hero" messageStyle fromRight>
        <HeroSection />
      </FullScreenSection>
      
      <FullScreenSection id="stats" messageStyle fromLeft>
        <StatsSection />
      </FullScreenSection>
      
      <FullScreenSection id="comparison" messageStyle fromRight>
        <BeforeAfterComparisonSection />
      </FullScreenSection>
      
      <FullScreenSection id="crm" messageStyle fromLeft dark>
        <CRMIntegrationSection />
      </FullScreenSection>
      
      <FullScreenSection id="faq" messageStyle fromRight>
        <FAQSection />
      </FullScreenSection>
      
      <FullScreenSection id="contact" messageStyle fromLeft>
        <ContactSection />
      </FullScreenSection>
      
      <FullScreenSection id="team" messageStyle fromRight>
        <TeamSection />
      </FullScreenSection>
      
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
