
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface FullScreenSectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  fromRight?: boolean;
  fromLeft?: boolean;
  messageStyle?: boolean;
  dark?: boolean;
}

const FullScreenSection: React.FC<FullScreenSectionProps> = ({
  children,
  id,
  className,
  fromRight = false,
  fromLeft = false,
  messageStyle = false,
  dark = false
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Set up ScrollTrigger for this section
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top bottom',
      end: 'bottom top',
      toggleClass: { targets: sectionRef.current, className: 'active' },
      once: true
    });
    
    return () => {
      // Clean up ScrollTrigger instance
      trigger.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn(
        'min-h-screen w-full snap-start flex items-center justify-center pt-20 pb-10',
        dark ? 'bg-primary text-white' : 'bg-white',
        className
      )}
    >
      <div 
        className={cn(
          'container mx-auto px-4 opacity-0 translate-y-10 transition-all duration-700 ease-out',
          messageStyle && 'message-container',
          fromRight && 'from-right',
          fromLeft && 'from-left'
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default FullScreenSection;
