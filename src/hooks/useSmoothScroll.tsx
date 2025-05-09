
import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useSmoothScroll = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Store the Lenis instance
    setLenis(lenisInstance);

    // Create a function to update ScrollTrigger each time Lenis scrolls
    const syncScrollTrigger = () => {
      ScrollTrigger.update();
    };

    // Add a callback to Lenis's onScroll event
    lenisInstance.on('scroll', syncScrollTrigger);

    // Create a RAF loop for Lenis
    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    
    // Start the loop
    requestAnimationFrame(raf);

    // Clean up the Lenis instance when the component unmounts
    return () => {
      lenisInstance.destroy();
      lenisInstance.off('scroll', syncScrollTrigger);
    };
  }, []);

  return lenis;
};
