
import React, { useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface ServiceItemProps {
  title: string;
  description: string;
  statistic: string;
  videoSrc?: string;
  placeholder?: string;
  index: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ 
  title, 
  description, 
  statistic, 
  videoSrc, 
  placeholder,
  index 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver({
    elementRef: containerRef,
    threshold: 0.5
  });

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Auto-play was prevented:', error);
      });
    } else if (!isVisible && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isVisible]);

  // Alternate layout direction based on index
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={containerRef}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16 ${index > 0 ? 'border-t border-gray-200' : ''} reveal-animation`}
    >
      {/* Content Section - Swap order based on index */}
      <div className={`${!isEven && 'lg:order-2'}`}>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 text-lg">{description}</p>
        <div className="bg-primary/10 p-4 inline-block rounded-lg">
          <p className="text-primary font-bold text-lg">{statistic}</p>
        </div>
      </div>

      {/* Video Section - Swap order based on index */}
      <div className={`${!isEven && 'lg:order-1'} bg-gray-100 rounded-lg overflow-hidden shadow-lg aspect-video`}>
        {videoSrc ? (
          <video 
            ref={videoRef} 
            className="w-full h-full object-cover"
            muted 
            playsInline
            loop
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
  
  const services = [
    {
      title: "Cotiza en segundos",
      description: "Nuestros algoritmos buscan el vuelo y el hotel que mas se ajuste a tus planes y estilo de viaje. Con un simple mensaje te devolvera el vuelo y el hotel para que inicies a disfrutar más rapido.",
      statistic: "90% más rapido que un humano",
      videoSrc: "/lovable-uploads/demo.mp4",
      placeholder: ""
    },
    {
      title: "Confirma tu viaje",
      description: "Convierte tus leads sin que tengan que salir de whatsapp. Con solo unos datos más pueden pasar al cierre de la venta y Paga sin complicaciones mediante pse con el monto exacto.",
      statistic: "4X más alta la taza de cierre",
      videoSrc: "/lovable-uploads/demo.mp4",
      placeholder: ""
    },
    {
      title: "Contratos y facturas al instante",
      description: "Crea automáticamente contratos legales con tu formato y los datos de tu cliente y crea una factura correcta cuando los pagos están validados.",
      statistic: "11 horas ahorradas en la semana",
      videoSrc: "/lovable-uploads/demo.mp4",
      placeholder: ""
    },
    {
      title: "Seguimiento",
      description: "Nunca pierdas un potencial cliente por falta de organización, centraliza tus agentes y lead en nuestra plataforma",
      statistic: "31+ clientes recuperados en un solo día",
      videoSrc: "/lovable-uploads/demo.mp4",
      placeholder: ""
    }
  ];

  return (
    <section className="section-container py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 reveal-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios de IA para Viajes</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Descubre cómo nuestros asistentes de IA pueden transformar tu negocio de viajes y deleitar a tus clientes.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              statistic={service.statistic}
              videoSrc={service.videoSrc}
              placeholder={service.placeholder}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AITravelServicesSection;
