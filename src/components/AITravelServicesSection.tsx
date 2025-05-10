
import React, { useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useIsMobile } from '@/hooks/use-mobile';
import { Smartphone, Monitor } from 'lucide-react';

interface ServiceItemProps {
  titleKey: string;
  descriptionKey: string;
  statisticKey: string;
  videoSrc?: string;
  placeholder?: string;
  index: number;
  isVertical?: boolean;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ 
  titleKey, 
  descriptionKey, 
  statisticKey, 
  videoSrc, 
  placeholder,
  index,
  isVertical = false
}) => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver({
    elementRef: containerRef,
    threshold: 0.5
  });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Auto-play was prevented:', error);
      });
    } else if (!isVisible && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isVisible]);

  // Alternate layout direction based on index for desktop view
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={containerRef}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16 ${index > 0 ? 'border-t border-gray-200' : ''} reveal-animation`}
    >
      {/* Device Type Indicator */}
      <div className="absolute top-4 right-4 flex items-center text-gray-500 text-sm">
        {isVertical ? (
          <><Smartphone size={16} className="mr-1" /> <span>Mobile View</span></>
        ) : (
          <><Monitor size={16} className="mr-1" /> <span>Desktop View</span></>
        )}
      </div>

      {/* Content Section - Mobile always has content on top, Desktop alternates based on index */}
      <div className={`${!isEven && !isMobile ? 'lg:order-2' : ''}`}>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{t(titleKey)}</h3>
        <p className="text-gray-600 mb-6 text-lg">{t(descriptionKey)}</p>
        <div className="bg-primary/10 p-4 inline-block rounded-lg">
          <p className="text-primary font-bold text-lg">{t(statisticKey)}</p>
        </div>
      </div>

      {/* Video Section - Mobile always has video on bottom, Desktop alternates based on index */}
      <div className={`${!isEven && !isMobile ? 'lg:order-1' : ''} relative bg-gray-100 rounded-lg overflow-hidden shadow-lg ${isVertical ? 'aspect-[9/16] max-h-[600px] mx-auto' : 'aspect-video'}`}>
        {isVertical && (
          <div className="absolute top-2 left-2 z-10 bg-black/50 text-white px-2 py-1 rounded-full flex items-center">
            <Smartphone size={14} className="mr-1" />
            <span className="text-xs">Mobile</span>
          </div>
        )}
        
        {!isVertical && (
          <div className="absolute top-2 left-2 z-10 bg-black/50 text-white px-2 py-1 rounded-full flex items-center">
            <Monitor size={14} className="mr-1" />
            <span className="text-xs">Desktop</span>
          </div>
        )}
        
        {videoSrc ? (
          <video 
            ref={videoRef} 
            className="w-full h-full object-cover"
            muted 
            playsInline
            loop
            // controls
            poster={placeholder || "https://via.placeholder.com/640x360?text=Video+Coming+Soon"}
          >
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <p className="text-gray-500">Video próximamente</p>
          </div>
        )}
      </div>
    </div>
  );
};

const AITravelServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  const services = [
    {
      titleKey: "aitravel.quote.title",
      descriptionKey: "aitravel.quote.description",
      statisticKey: "aitravel.quote.statistic",
      videoSrc: "/lovable-uploads/phase1.mp4",
      placeholder: "",
      isVertical: true
    },
    {
      titleKey: "aitravel.confirm.title",
      descriptionKey: "aitravel.confirm.description",
      statisticKey: "aitravel.confirm.statistic",
      videoSrc: "/lovable-uploads/demo.mp4",
      placeholder: "",
      isVertical: false
    },
    {
      titleKey: "aitravel.contracts.title",
      descriptionKey: "aitravel.contracts.description",
      statisticKey: "aitravel.contracts.statistic",
      videoSrc: "/lovable-uploads/demo.mp4",
      placeholder: "",
      isVertical: false
    },
    {
      titleKey: "aitravel.tracking.title",
      descriptionKey: "aitravel.tracking.description",
      statisticKey: "aitravel.tracking.statistic",
      videoSrc: "/lovable-uploads/demo.mp4",
      placeholder: "",
      isVertical: false
    }
  ];

  return (
    <section className="section-container py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 reveal-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('aitravel.title')}</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            {t('aitravel.description')}
          </p>
          
          <div className="flex justify-center mt-6 space-x-6">
            <div className="flex items-center">
              <Smartphone size={20} className="mr-2 text-primary" />
              <span>Mobile View</span>
            </div>
            <div className="flex items-center">
              <Monitor size={20} className="mr-2 text-primary" />
              <span>Desktop View</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              index={index}
              titleKey={service.titleKey}
              descriptionKey={service.descriptionKey}
              statisticKey={service.statisticKey}
              videoSrc={service.videoSrc}
              placeholder={service.placeholder}
              isVertical={service.isVertical}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AITravelServicesSection;
