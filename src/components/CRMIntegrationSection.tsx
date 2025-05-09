
import React, { useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useMediaQuery } from '@/hooks/use-mobile';

const CRMIntegrationSection: React.FC = () => {
  const { t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Slides data
  const slides = [
    {
      title: t('crm.slides.slide1.title'),
      description: t('crm.slides.slide1.description'),
      imageSrc: '/lovable-uploads/c15a8878-7862-4395-92b5-f1cff742e5b0.png',
      imageAlt: t('crm.slides.slide1.alt'),
    },
    {
      title: t('crm.slides.slide2.title'),
      description: t('crm.slides.slide2.description'),
      imageSrc: '/lovable-uploads/87b0e882-0fa2-4475-932f-12b9ea2cae7f.png',
      imageAlt: t('crm.slides.slide2.alt'),
    },
    {
      title: t('crm.slides.slide3.title'),
      description: t('crm.slides.slide3.description'),
      imageSrc: '/lovable-uploads/2a93b8a1-8682-419d-b375-1ad7f551b191.png',
      imageAlt: t('crm.slides.slide3.alt'),
    },
    {
      title: t('crm.slides.slide4.title'),
      description: t('crm.slides.slide4.description'),
      imageSrc: '/lovable-uploads/477c3a28-df0d-4b19-88e5-8b5e3af3ae20.png',
      imageAlt: t('crm.slides.slide4.alt'),
    },
    {
      title: t('crm.slides.slide5.title'),
      description: t('crm.slides.slide5.description'),
      imageSrc: '/lovable-uploads/2080a18a-8bc8-48ed-a0a6-0c509ac7fc2d.png',
      imageAlt: t('crm.slides.slide5.alt'),
    },
    {
      title: t('crm.slides.slide6.title'),
      description: t('crm.slides.slide6.description'),
      imageSrc: '/lovable-uploads/b4eb495d-3b87-4cf5-908a-de29dedc7527.png',
      imageAlt: t('crm.slides.slide6.alt'),
    },
  ];

  const scrollToPrevious = () => {
    if (carouselRef.current) {
      const scrollAmount = isMobile ? carouselRef.current.offsetWidth : carouselRef.current.offsetWidth * 0.33;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    }
  };

  const scrollToNext = () => {
    if (carouselRef.current) {
      const scrollAmount = isMobile ? carouselRef.current.offsetWidth : carouselRef.current.offsetWidth * 0.33;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      if (currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  // Fixed: Properly handle the scroll event type
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const slideWidth = isMobile 
        ? carouselRef.current.offsetWidth 
        : carouselRef.current.offsetWidth * 0.33;
      
      const newSlideIndex = Math.round(scrollPosition / slideWidth);
      
      if (newSlideIndex !== currentSlide) {
        setCurrentSlide(newSlideIndex);
      }
    }
  };

  return (
    <section className="section-container bg-gray-50">
      <div className="text-center mb-16 reveal-animation">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('crm.title')}</h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto">
          {t('crm.description')}
        </p>
      </div>
      
      <div className="relative">
        {/* Carousel navigation buttons */}
        <Button 
          onClick={scrollToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-primary hover:bg-gray-100 rounded-full shadow-md -ml-4 md:-ml-6"
          size="icon"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <Button 
          onClick={scrollToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-primary hover:bg-gray-100 rounded-full shadow-md -mr-4 md:-mr-6"
          size="icon"
          disabled={currentSlide === slides.length - (isMobile ? 1 : 3)}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
        
        {/* Carousel */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-4 snap-x snap-mandatory hide-scrollbar pb-8"
          onScroll={handleScroll} // Fixed: Now using the corrected event handler
        >
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`flex-none snap-center ${isMobile ? 'w-full' : 'w-1/3'}`}
            >
              <Card className="h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4 aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={slide.imageSrc} 
                      alt={slide.imageAlt} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
                  <p className="text-gray-600 flex-grow">{slide.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-4 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentSlide ? 'bg-primary' : 'bg-gray-300'
              }`}
              onClick={() => {
                if (carouselRef.current) {
                  const scrollAmount = isMobile
                    ? carouselRef.current.offsetWidth * index
                    : carouselRef.current.offsetWidth * 0.33 * index;
                  carouselRef.current.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth',
                  });
                  setCurrentSlide(index);
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CRMIntegrationSection;
