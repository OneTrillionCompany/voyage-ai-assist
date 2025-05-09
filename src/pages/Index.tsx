
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsAppButton';
import BeforeAfterComparisonSection from '@/components/BeforeAfterComparisonSection';
import CRMIntegrationSection from '@/components/CRMIntegrationSection';
import ProblemsSection from '@/components/ProblemsSection';
import FullScreenSection from '@/components/FullScreenSection';
import SectionNavigation from '@/components/SectionNavigation';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const sections = [
  { id: 'hero', labelKey: 'nav.home' },
  { id: 'stats', labelKey: 'nav.stats' },
  { id: 'problems', labelKey: 'nav.problems' },
  { id: 'comparison', labelKey: 'nav.comparison' },
  { id: 'integration', labelKey: 'nav.integration' },
  { id: 'faq', labelKey: 'nav.faq' },
  { id: 'contact', labelKey: 'nav.contact' },
  { id: 'team', labelKey: 'nav.team' },
];

const Index = () => {
  // Initialize smooth scrolling
  const lenis = useSmoothScroll();

  const [showScrollTop, setShowScrollTop] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden snap-y snap-mandatory">
      <Navigation />
      
      <SectionNavigation sections={sections} />
      
      <FullScreenSection id="hero" className="pt-0">
        <HeroSection />
      </FullScreenSection>
      
      <FullScreenSection id="stats" className="bg-gray-50">
        <StatsSection />
      </FullScreenSection>
      
      <FullScreenSection id="problems">
        <ProblemsSection />
      </FullScreenSection>
      
      <FullScreenSection id="comparison" className="bg-gray-50">
        <BeforeAfterComparisonSection />
      </FullScreenSection>
      
      <FullScreenSection id="integration">
        <CRMIntegrationSection />
      </FullScreenSection>
      
      <FullScreenSection id="faq" className="bg-gray-50">
        <FAQSection />
      </FullScreenSection>
      
      <FullScreenSection id="contact">
        <ContactSection />
      </FullScreenSection>
      
      <FullScreenSection id="team" className="bg-gray-50">
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
