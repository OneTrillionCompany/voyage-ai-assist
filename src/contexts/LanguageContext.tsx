
import React, { createContext, useState, useContext, useEffect } from 'react';

type Language = 'en' | 'es';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, Record<string, string>>;
  t: (key: string) => string;
};

const defaultTranslations = {
  'hero.title': {
    en: 'Transform Travel Advisory with AI',
    es: 'Transforma la Asesoría de Viajes con IA'
  },
  'hero.description': {
    en: 'Leverage advanced AI technology to help travel advisors find the perfect deals and assist customers in booking their dream trips.',
    es: 'Aprovecha la tecnología avanzada de IA para ayudar a los asesores de viajes a encontrar las mejores ofertas y asistir a los clientes en la reserva de sus viajes soñados.'
  },
  'hero.cta': {
    en: 'Connect with Us',
    es: 'Conéctate con Nosotros'
  },
  'nav.services': {
    en: 'Services',
    es: 'Servicios'
  },
  'nav.problems': {
    en: 'Problems',
    es: 'Problemas'
  },
  'nav.usecases': {
    en: 'Use Cases',
    es: 'Casos de Uso'
  },
  'nav.faq': {
    en: 'FAQ',
    es: 'Preguntas'
  },
  'nav.team': {
    en: 'Team',
    es: 'Equipo'
  },
  'nav.contact': {
    en: 'Contact Us',
    es: 'Contáctanos'
  },
  'services.title': {
    en: 'Our AI Travel Services',
    es: 'Nuestros Servicios de Viaje con IA'
  },
  'services.description': {
    en: 'Discover how our dual AI assistants can transform your travel business and delight your customers.',
    es: 'Descubre cómo nuestros asistentes de IA pueden transformar tu negocio de viajes y deleitar a tus clientes.'
  },
  'services.advisor.title': {
    en: 'AI Travel Advisor Assistant',
    es: 'Asistente de Asesor de Viajes IA'
  },
  'services.advisor.description': {
    en: 'Help travel advisors quickly find the best deals and information for customers, reducing research time dramatically.',
    es: 'Ayuda a los asesores de viajes a encontrar rápidamente las mejores ofertas e información para los clientes, reduciendo drásticamente el tiempo de investigación.'
  },
  'services.booking.title': {
    en: 'Customer Booking Assistant',
    es: 'Asistente de Reserva para Clientes'
  },
  'services.booking.description': {
    en: 'Guide customers through the booking process, from searching for trips to payment and confirmation.',
    es: 'Guía a los clientes a través del proceso de reserva, desde la búsqueda de viajes hasta el pago y la confirmación.'
  },
  'services.finder.title': {
    en: 'Smart Trip Finder',
    es: 'Buscador Inteligente de Viajes'
  },
  'services.finder.description': {
    en: 'Analyze thousands of options to find the perfect match for customer preferences and budget constraints.',
    es: 'Analiza miles de opciones para encontrar la combinación perfecta según preferencias y restricciones presupuestarias del cliente.'
  },
  'services.support.title': {
    en: '24/7 Customer Support',
    es: 'Soporte al Cliente 24/7'
  },
  'services.support.description': {
    en: 'Provide instant responses to common questions and concerns, even outside business hours.',
    es: 'Proporciona respuestas instantáneas a preguntas y preocupaciones comunes, incluso fuera del horario laboral.'
  },
  'services.intelligence.title': {
    en: 'Market Intelligence',
    es: 'Inteligencia de Mercado'
  },
  'services.intelligence.description': {
    en: 'Stay ahead of trends and competition with AI-powered analytics and insights.',
    es: 'Mantente por delante de las tendencias y la competencia con análisis e insights impulsados por IA.'
  },
  'services.payment.title': {
    en: 'Secure Payment Processing',
    es: 'Procesamiento de Pago Seguro'
  },
  'services.payment.description': {
    en: 'Facilitate safe and easy transactions between customers and travel providers.',
    es: 'Facilita transacciones seguras y fáciles entre clientes y proveedores de viajes.'
  },
  'problems.title': {
    en: 'Problems We\'re Solving',
    es: 'Problemas Que Estamos Resolviendo'
  },
  'problems.description': {
    en: 'The travel industry faces numerous challenges that our AI technology is uniquely positioned to address.',
    es: 'La industria de viajes enfrenta numerosos desafíos que nuestra tecnología de IA está en una posición única para abordar.'
  },
  'usecases.title': {
    en: 'How Our AI Works in Action',
    es: 'Cómo Funciona Nuestra IA en Acción'
  },
  'usecases.description': {
    en: 'Explore practical applications of our AI assistants in real-world travel scenarios.',
    es: 'Explora aplicaciones prácticas de nuestros asistentes de IA en escenarios de viaje del mundo real.'
  },
  'usecases.advisors': {
    en: 'For Travel Advisors',
    es: 'Para Asesores de Viajes'
  },
  'usecases.travelers': {
    en: 'For Travelers',
    es: 'Para Viajeros'
  },
  'faq.title': {
    en: 'Frequently Asked Questions',
    es: 'Preguntas Frecuentes'
  },
  'faq.description': {
    en: 'Get answers to common questions about our AI travel solutions.',
    es: 'Obtén respuestas a preguntas comunes sobre nuestras soluciones de viaje con IA.'
  },
  'contact.title': {
    en: 'Get in Touch',
    es: 'Ponte en Contacto'
  },
  'contact.description': {
    en: 'Ready to transform your travel business? Contact us today for a personalized demo.',
    es: '¿Listo para transformar tu negocio de viajes? Contáctanos hoy para una demostración personalizada.'
  },
  'team.title': {
    en: 'Meet Our Team',
    es: 'Conoce a Nuestro Equipo'
  },
  'team.description': {
    en: 'The innovative minds behind sellmoretrips.AI',
    es: 'Las mentes innovadoras detrás de sellmoretrips.AI'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Detect browser language or use stored preference
  const detectLanguage = (): Language => {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage === 'en' || savedLanguage === 'es') {
      return savedLanguage;
    }
    
    // Check browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('es')) {
      return 'es';
    }
    
    return 'en';
  };

  const [language, setLanguageState] = useState<Language>(detectLanguage);
  const [translations, setTranslations] = useState(defaultTranslations);

  const setLanguage = (newLanguage: Language) => {
    localStorage.setItem('preferred-language', newLanguage);
    setLanguageState(newLanguage);
  };

  // Translate function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    
    if (!translations[key][language]) {
      console.warn(`Missing ${language} translation for key: ${key}`);
      return translations[key]['en'] || key;
    }
    
    return translations[key][language];
  };

  // Detect language on initial load
  useEffect(() => {
    setLanguageState(detectLanguage());
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
