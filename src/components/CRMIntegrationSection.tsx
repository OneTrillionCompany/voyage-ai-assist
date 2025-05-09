import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEmblaCarousel } from 'embla-carousel/react';
import Image from 'next/image';

const CRMIntegrationSection = () => {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setCurrentSlide(emblaApi.selectedScrollSnap());
      });
      return () => {
        emblaApi.off('select');
      };
    }
  }, [emblaApi]);

  const slides = [
    {
      titleKey: 'crm.slides.slide1.title',
      descriptionKey: 'crm.slides.slide1.description',
      imageSrc: '/lovable-uploads/crm-dashboard.png',
      altKey: 'crm.slides.slide1.alt',
    },
    {
      titleKey: 'crm.slides.slide2.title',
      descriptionKey: 'crm.slides.slide2.description',
      imageSrc: '/lovable-uploads/sales-pipeline.png',
      altKey: 'crm.slides.slide2.alt',
    },
    {
      titleKey: 'crm.slides.slide3.title',
      descriptionKey: 'crm.slides.slide3.description',
      imageSrc: '/lovable-uploads/marketing-automation.png',
      altKey: 'crm.slides.slide3.alt',
    },
    {
      titleKey: 'crm.slides.slide4.title',
      descriptionKey: 'crm.slides.slide4.description',
      imageSrc: '/lovable-uploads/performance-analytics.png',
      altKey: 'crm.slides.slide4.alt',
    },
    {
      titleKey: 'crm.slides.slide5.title',
      descriptionKey: 'crm.slides.slide5.description',
      imageSrc: '/lovable-uploads/task-management.png',
      altKey: 'crm.slides.slide5.alt',
    },
    {
      titleKey: 'crm.slides.slide6.title',
      descriptionKey: 'crm.slides.slide6.description',
      imageSrc: '/lovable-uploads/customer-communication.png',
      altKey: 'crm.slides.slide6.alt',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 reveal-animation">{t('crm.title')}</h2>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16 reveal-animation">{t('crm.description')}</p>

        <div className="embla reveal-animation">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container flex">
              {slides.map((slide, index) => (
                <div className="embla__slide relative w-full flex-[0_0_100%] min-w-0" key={index}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image
                      src={slide.imageSrc}
                      alt={t(slide.altKey)}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-primary">{t(slide.titleKey)}</h3>
                      <p className="text-gray-600">{t(slide.descriptionKey)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="embla__dots flex justify-center mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`embla__dot w-3 h-3 rounded-full mx-1 ${currentSlide === index ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMIntegrationSection;
