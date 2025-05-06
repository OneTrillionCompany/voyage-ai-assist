
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CRMIntegrationSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* CRM Integration */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 reveal-animation">Integración con CRM</h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16 reveal-animation">
            Todos tus datos sincronizados automáticamente con tu sistema CRM para un análisis completo.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start reveal-animation">
            <div className="lg:col-span-2">
              <div className="phone-mockup w-48 h-auto mx-auto">
                <svg className="w-full" viewBox="0 0 300 600" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="280" height="580" rx="40" fill="#222" stroke="#000" strokeWidth="10" />
                  <rect x="20" y="40" width="260" height="520" rx="5" fill="#fff" />
                  <circle cx="150" cy="580" r="15" fill="#333" />
                </svg>
                <div className="absolute top-[40px] left-0 right-0 bottom-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 mx-auto mb-2 text-green-500">
                      {/* WhatsApp Icon */}
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.941 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.214 3.074.149.198 2.097 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 5.363h-.001a8.77 8.77 0 01-4.473-1.231l-.321-.191-3.326.868.889-3.24-.209-.332a8.725 8.725 0 01-1.334-4.627c.001-4.825 3.936-8.756 8.764-8.756 2.342 0 4.541.912 6.19 2.566a8.68 8.68 0 012.571 6.184c-.003 4.825-3.937 8.759-8.75 8.759zm7.149-15.909A10.449 10.449 0 0012.05 1.5C6.229 1.5 1.5 6.229 1.5 12.048c0 1.795.469 3.541 1.353 5.073L1.06 22.939a1 1 0 001.242 1.242l5.818-1.792a10.44 10.44 0 004.93 1.26h.004c5.819 0 10.548-4.729 10.548-10.547a10.41 10.41 0 00-3.058-7.634z"/>
                      </svg>
                    </div>
                    <div className="text-xs text-center font-medium">Datos de WhatsApp</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <div className="w-6 h-20 border-r-4 border-dashed border-primary"></div>
              </div>
            </div>

            <div className="lg:col-span-1 flex justify-center items-center">
              <div className="transform animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-4 overflow-hidden">
                <div className="bg-primary text-white p-2 rounded-t-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <div className="text-sm">CRM Dashboard</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 p-3 rounded">
                      <div className="text-xs text-blue-600">Leads Nuevos</div>
                      <div className="text-2xl font-bold">128</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <div className="text-xs text-green-600">Ventas Cerradas</div>
                      <div className="text-2xl font-bold">47</div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded p-2 mb-3">
                    <div className="text-xs font-medium">Tasa de Conversión</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <div className="text-right text-xs mt-1">65%</div>
                  </div>
                  <div className="text-xs font-medium mb-1">Clientes Recientes</div>
                  <ul className="text-xs">
                    <li className="border-b py-1 flex justify-between">
                      <span>María López</span>
                      <span className="text-green-600">Reservado</span>
                    </li>
                    <li className="border-b py-1 flex justify-between">
                      <span>Carlos García</span>
                      <span className="text-blue-600">Cotización enviada</span>
                    </li>
                    <li className="py-1 flex justify-between">
                      <span>Andrea Ruiz</span>
                      <span className="text-orange-600">Interesado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-animation">¿Listo para impulsar tus ventas?</h2>
            <p className="text-xl mb-8 reveal-animation">
              Comienza a utilizar nuestro asistente de ventas por WhatsApp hoy mismo y transforma tu proceso de ventas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 reveal-animation">
              <Button 
                className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/573159381236?text=Hola,%20estoy%20interesado%20en%20saber%20más%20sobre%20el%20asistente%20de%20ventas', '_blank')}
              >
                Contactar por WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                className="bg-white hover:bg-gray-100 text-primary text-lg px-8 py-6 w-full sm:w-auto"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CRMIntegrationSection;
