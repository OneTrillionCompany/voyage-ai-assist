
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const BeforeAfterComparisonSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="problems" className="section-container">
      <div className="text-center mb-16 reveal-animation">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('problems.title')}</h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto">
          {t('problems.description')}
        </p>
      </div>

      <Carousel className="reveal-animation">
        <CarouselContent>
          <CarouselItem>
            <Tabs defaultValue="quotation" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="quotation">Cotizaciones</TabsTrigger>
                  <TabsTrigger value="organization">Organización</TabsTrigger>
                  <TabsTrigger value="tracking">Seguimiento</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="quotation" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Antes</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white mr-3">✗</span>
                        <span>Cotizaciones manuales que toman 30+ minutos</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white mr-3">✗</span>
                        <span>Errores en los cálculos y precios</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white mr-3">✗</span>
                        <span>Formatos inconsistentes</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white mr-3">✗</span>
                        <span>Dificultad para hacer seguimiento</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-green-600">Después</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">✓</span>
                        <span>Cotizaciones automáticas en segundos</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">✓</span>
                        <span>Cálculos precisos sin errores</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">✓</span>
                        <span>Formato profesional consistente</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">✓</span>
                        <span>Seguimiento automático y recordatorios</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="organization" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Antes</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white mr-3">✗</span>
                        <span>Conversaciones mezcladas con clientes</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white mr-3">✗</span>
                        <span>Información dispersa en notas y chats</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white mr-3">✗</span>
                        <span>Difícil encontrar historiales de clientes</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white mr-3">✗</span>
                        <span>Sin categorización de prospectos</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-green-600">Después</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">✓</span>
                        <span>Chats organizados por cliente y etapa</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">✓</span>
                        <span>Toda la información centralizada</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">✓</span>
                        <span>Historial completo y búsqueda rápida</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">✓</span>
                        <span>Clasificación automática de prospectos</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="tracking" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Antes</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white mr-3">✗</span>
                        <span>Seguimiento manual poco consistente</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white mr-3">✗</span>
                        <span>Se olvidan clientes potenciales</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white mr-3">✗</span>
                        <span>Sin métricas de desempeño</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white mr-3">✗</span>
                        <span>Tiempos de respuesta lentos</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-green-600">Después</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">✓</span>
                        <span>Seguimiento automatizado con recordatorios</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">✓</span>
                        <span>Ningún cliente se queda sin atención</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">✓</span>
                        <span>Dashboard con métricas en tiempo real</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">✓</span>
                        <span>Respuestas rápidas preconfiguradas</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </section>
  );
};

export default BeforeAfterComparisonSection;
