
import React from 'react';
import AnimatedCounter from './AnimatedCounter';

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal-animation">Resultados Impactantes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <AnimatedCounter value="40" suffix="%" label="Aumento en ventas" />
          <AnimatedCounter value="15" suffix=" hrs" label="Tiempo ahorrado por semana" />
          <AnimatedCounter value="90" suffix="%" label="Satisfacción del cliente" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
