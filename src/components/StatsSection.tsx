
import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import { useLanguage } from '@/contexts/LanguageContext';

const StatsSection: React.FC = () => {

    // Use the language context
    const { t } = useLanguage();
    
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal-animation">{t('stats.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <AnimatedCounter value="40" suffix="%" label={t('stats.increasedSales')} />
          <AnimatedCounter value="15" suffix=" hrs" label={t('stats.timeSaved')} />
          <AnimatedCounter value="90" suffix="%" label={t('stats.customerSatisfaction')} />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
