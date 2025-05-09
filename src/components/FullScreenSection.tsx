
import React, { ReactNode, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FullScreenSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
  background?: string;
}

const FullScreenSection: React.FC<FullScreenSectionProps> = ({ 
  children, 
  id, 
  className = '',
  background = ''
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    
    if (!section) return;
    
    // Set up ScrollTrigger for this section
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom top',
      markers: false, // Change to true for debugging
      id: id,
      toggleClass: 'active'
    });
    
    return () => {
      // Clean up
      if (trigger) {
        trigger.kill();
      }
    };
  }, [id]);
  
  return (
    <section 
      ref={sectionRef}
      id={id}
      className={`relative min-h-screen w-full flex flex-col items-center justify-center snap-center ${className}`}
      style={{ background: background || 'transparent' }}
    >
      {children}
    </section>
  );
};

export default FullScreenSection;
