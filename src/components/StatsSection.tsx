
import React, { useEffect, useRef } from 'react';
import AnimatedCounter from './AnimatedCounter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !statsRef.current) return;

    // Create animation for the stats section
    gsap.fromTo(
      statsRef.current.children,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      // Clean up ScrollTrigger instances
      const triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div className="h-full flex items-center justify-center" ref={sectionRef}>
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal-animation">Resultados Impactantes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10" ref={statsRef}>
          <AnimatedCounter value="40" suffix="%" label="Aumento en ventas" />
          <AnimatedCounter value="15" suffix=" hrs" label="Tiempo ahorrado por semana" />
          <AnimatedCounter value="90" suffix="%" label="Satisfacción del cliente" />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
