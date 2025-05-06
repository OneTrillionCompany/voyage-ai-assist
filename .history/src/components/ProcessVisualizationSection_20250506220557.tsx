import React, { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { FileText, CheckSquare, FileCheck, BarChart3 } from 'lucide-react';
interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}
const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  icon
}) => {
  return <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 reveal-animation">
      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 text-primary">
        {icon}
      </div>
    </div>;
};
const ProcessVisualizationSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  const phoneImageRef = useRef(null);
  const isPhoneVisible = useIntersectionObserver({
    elementRef: phoneImageRef,
    threshold: 0.1
  });
  const background_url = "https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg";
  return <section id="use-cases" className="section-container bg-gray-50">
      <div className="text-center mb-16 reveal-animation">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('usecases.title')}</h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto">
          {t('usecases.description')}
        </p>
      </div>

      {/* Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <ProcessStep number="1" title="Cotización" description="Genera cotizaciones profesionales automáticamente con solo unos clics" icon={<FileText size={24} />} />
        <ProcessStep number="2" title="Confirmación" description="Procesa confirmaciones y pagos directamente a través de WhatsApp" icon={<CheckSquare size={24} />} />
        <ProcessStep number="3" title="Documentos" description="Envía itinerarios y documentación necesaria automáticamente" icon={<FileCheck size={24} />} />
        <ProcessStep number="4" title="Seguimiento" description="Mantén a tus clientes informados con actualizaciones programadas" icon={<BarChart3 size={24} />} />
      </div>

      {/* WhatsApp Experience Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 reveal-animation">Experiencia WhatsApp Fluida</h3>
          <div className="space-y-6 reveal-animation">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-xl mb-2">Respuestas instantáneas</h4>
              <p className="text-gray-600">Tus clientes reciben respuestas inmediatas, incluso cuando estás ocupado con otros asuntos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-xl mb-2">Personalización automática</h4>
              <p className="text-gray-600">Cada mensaje se adapta al cliente, incluyendo su nombre y detalles específicos de su consulta.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-xl mb-2">Múltiples idiomas</h4>
              <p className="text-gray-600">Comunícate con clientes internacionales con soporte para español, inglés y otros idiomas.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end reveal-animation" >
          <div className={`transform transition-all duration-1000 ${isPhoneVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative">
              <div className="chat-bubble absolute -top-10 -left-16 bg-green-500 text-white p-3 rounded-lg  max-w-xs z-10 -mt-8">
                Hola, ¿podrían enviarme información sobre paquetes a Cancún?
                <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-4 h-4 bg-green-500"></div>
              </div>

              <div className="phone-mockup w-64 h-auto relative">
                <svg className="w-full" viewBox="0 0 300 600" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="280" height="580" rx="40" fill="#222" stroke="#000" strokeWidth="10" />
                  <rect x="20" y="40" width="260" height="520" rx="5" fill="#fff" />
                  <circle cx="150" cy="580" r="15" fill="#333" />
                </svg>
                <div className="absolute top-[50px] left-[30px] right-[30px] bottom-[90px] bg-gray-100 overflow-hidden">
                  {/* WhatsApp Interface with More Detailed Conversation */}
                  <div className="h-full flex flex-col">
                    <div className="bg-green-500 p-3 flex items-center">
                      <div className="w-10 h-10 bg-white rounded-full"></div>
                      <div className="ml-3">
                        <div className="text-white font-semibold">Asistente de Viajes</div>
                        <div className="text-green-100 text-xs">escribiendo...</div>
                      </div>
                    </div>
                    <div className="flex-1 bg-[url(${background_url})] p-2 overflow-y-auto">
                      <div className="mr-auto max-w-[70%] bg-white p-2 rounded-lg mb-2">
                        Hola, ¿podrían enviarme información sobre paquetes a Cancún?
                      </div>
                      <div className="ml-auto max-w-[70%] bg-green-100 p-2 rounded-lg mb-2">
                        ¡Hola! Por supuesto, tenemos excelentes opciones para Cancún. ¿Para cuántas personas y en qué fechas estás pensando viajar?
                      </div>
                      <div className="mr-auto max-w-[70%] bg-white p-2 rounded-lg mb-2">
                        Para 2 adultos, del 15 al 22 de julio
                      </div>
                      <div className="ml-auto max-w-[70%] bg-green-100 p-2 rounded-lg mb-2">
                        ¡Perfecto! Aquí tienes nuestras 3 mejores opciones para esas fechas:
                      </div>
                      <div className="ml-auto max-w-[70%] bg-green-100 p-2 rounded-lg">
                        [Cotización PDF] Opciones Cancún Jul 15-22
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="chat-bubble absolute -bottom-12 -right-16 bg-white border border-gray-300 p-3 rounded-lg max-w-xs shadow-lg">
                ¡Gracias! Me interesa la opción 2. ¿Cómo puedo reservar?
                <div className="absolute top-0 left-8 transform -translate-y-1/2 rotate-45 w-4 h-4 bg-white border-l border-t border-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProcessVisualizationSection;