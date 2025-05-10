
import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

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
        
        {/* New content block */}
        <div className="mt-20 max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 reveal-animation">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary text-center">
            Estás perdiendo hasta $2 millones usd al año por no cotizar de forma personalizada a tiempo.
          </h3>
          
          <p className="text-lg mb-8 text-center">
            Potencia tu equipo de ventas con Inteligencia Artificial, multiplicando tus ingresos sin multiplicar tu equipo:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-primary/5 p-6 rounded-lg text-center">
              <p className="font-bold text-xl mb-2 text-primary">Vende 3 veces más</p>
              <ArrowRight className="mx-auto mt-2 text-green-500" />
            </div>
            <div className="bg-primary/5 p-6 rounded-lg text-center">
              <p className="font-bold text-xl mb-2 text-primary">Responde 10 veces más rápido</p>
              <ArrowRight className="mx-auto mt-2 text-green-500" />
            </div>
            <div className="bg-primary/5 p-6 rounded-lg text-center">
              <p className="font-bold text-xl mb-2 text-primary">Convierte 4 veces más leads</p>
              <ArrowRight className="mx-auto mt-2 text-green-500" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
            <h4 className="text-xl md:text-2xl font-bold mb-4 text-center">
              Y además... te obsequiamos un vendedor de IA:
            </h4>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <span>Trabaja 24/7, nunca se cansa y jamás deja a un cliente sin respuesta.</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <span>Cuesta menos que un vendedor humano y vende 3 veces más.</span>
              </li>
            </ul>
          </div>
          
          <p className="text-lg font-medium text-center mt-8 text-primary">
            Responde mejor. Escala sin contratar. Exprime cada dólar de tu inversión en publicidad
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
