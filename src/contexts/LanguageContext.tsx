import React, { createContext, useState, useContext, useEffect } from 'react';

type Language = 'en' | 'es' | 'pt';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, Record<string, string>>;
  t: (key: string) => string;
};

const defaultTranslations = {
  'hero.title': {
    en: 'Transform Travel Advisory with AI',
    es: 'Transforma la Asesoría de Viajes con IA',
    pt: 'Transforme Consultoria de Viagens com IA'
  },
  'hero.description': {
    en: 'Leverage advanced AI technology to help travel advisors find the perfect deals and assist customers in booking their dream trips.',
    es: 'Aprovecha la tecnología avanzada de IA para ayudar a los asesores de viajes a encontrar las mejores ofertas y asistir a los clientes en la reserva de sus viajes soñados.',
    pt: 'Aproveite a tecnologia avançada de IA para ajudar consultores de viagens a encontrar as melhores ofertas e auxiliar os clientes na reserva de suas viagens dos sonhos.'
  },
  'hero.cta': {
    en: 'Connect with Us',
    es: 'Conéctate con Nosotros',
    pt: 'Conecte-se Conosco'
  },
  'hero.city.bogota': {
    en: 'Discover Bogotá',
    es: 'Descubre Bogotá',
    pt: 'Descubra Bogotá'
  },
  'hero.city.cartagena': {
    en: 'Enjoy Cartagena',
    es: 'Disfruta Cartagena',
    pt: 'Aproveite Cartagena'
  },
  'hero.city.medellin': {
    en: 'Explore Medellín',
    es: 'Explora Medellín',
    pt: 'Explore Medellín'
  },
  'hero.city.tayrona': {
    en: 'Experience Tayrona',
    es: 'Vive Tayrona',
    pt: 'Vivencie Tayrona'
  },
  'hero.city.cali': {
    en: 'Dance in Cali',
    es: 'Baila en Cali',
    pt: 'Dance em Cali'
  },
  'hero.city.santamarta': {
    en: 'Relax in Santa Marta',
    es: 'Relájate en Santa Marta',
    pt: 'Relaxe em Santa Marta'
  },
  'hero.city.sanandres': {
    en: 'Sail San Andrés',
    es: 'Navega San Andrés',
    pt: 'Navegue em San Andrés'
  },
  'nav.services': {
    en: 'Services',
    es: 'Servicios',
    pt: 'Serviços'
  },
  'nav.problems': {
    en: 'Problems',
    es: 'Problemas',
    pt: 'Problemas'
  },
  'nav.usecases': {
    en: 'Use Cases',
    es: 'Casos de Uso',
    pt: 'Casos de Uso'
  },
  'nav.faq': {
    en: 'FAQ',
    es: 'Preguntas',
    pt: 'Perguntas'
  },
  'nav.team': {
    en: 'Team',
    es: 'Equipo',
    pt: 'Equipe'
  },
  'nav.contact': {
    en: 'Contact Us',
    es: 'Contáctanos',
    pt: 'Contate-nos'
  },
  'services.title': {
    en: 'Our AI Travel Services',
    es: 'Nuestros Servicios de Viaje con IA',
    pt: 'Nossos Serviços de Viagem com IA'
  },
  'services.description': {
    en: 'Discover how our dual AI assistants can transform your travel business and delight your customers.',
    es: 'Descubre cómo nuestros asistentes de IA pueden transformar tu negocio de viajes y deleitar a tus clientes.',
    pt: 'Descubra como nossos assistentes de IA podem transformar seu negócio de viagens e encantar seus clientes.'
  },
  'services.advisor.title': {
    en: 'AI Travel Advisor Assistant',
    es: 'Asistente de Asesor de Viajes IA',
    pt: 'Assistente de Consultor de Viagens IA'
  },
  'services.advisor.description': {
    en: 'Help travel advisors quickly find the best deals and information for customers, reducing research time dramatically.',
    es: 'Ayuda a los asesores de viajes a encontrar rápidamente las mejores ofertas e información para los clientes, reduciendo drásticamente el tiempo de investigación.',
    pt: 'Ajude consultores de viagens a encontrar rapidamente as melhores ofertas e informações para clientes, reduzindo drasticamente o tempo de pesquisa.'
  },
  'services.booking.title': {
    en: 'Customer Booking Assistant',
    es: 'Asistente de Reserva para Clientes',
    pt: 'Assistente de Reserva para Clientes'
  },
  'services.booking.description': {
    en: 'Guide customers through the booking process, from searching for trips to payment and confirmation.',
    es: 'Guía a los clientes a través del proceso de reserva, desde la búsqueda de viajes hasta el pago y la confirmación.',
    pt: 'Guie os clientes através do processo de reserva, desde a busca de viagens até o pagamento e confirmação.'
  },
  'services.finder.title': {
    en: 'Smart Trip Finder',
    es: 'Buscador Inteligente de Viajes',
    pt: 'Localizador Inteligente de Viagens'
  },
  'services.finder.description': {
    en: 'Analyze thousands of options to find the perfect match for customer preferences and budget constraints.',
    es: 'Analiza miles de opciones para encontrar la combinación perfecta según preferencias y restricciones presupuestarias del cliente.',
    pt: 'Analise milhares de opções para encontrar a combinação perfeita para as preferências do cliente e restrições orçamentárias.'
  },
  'services.support.title': {
    en: '24/7 Customer Support',
    es: 'Soporte al Cliente 24/7',
    pt: 'Suporte ao Cliente 24/7'
  },
  'services.support.description': {
    en: 'Provide instant responses to common questions and concerns, even outside business hours.',
    es: 'Proporciona respuestas instantáneas a preguntas y preocupaciones comunes, incluso fuera del horario laboral.',
    pt: 'Forneça respostas instantâneas a perguntas e preocupações comuns, mesmo fora do horário comercial.'
  },
  'services.intelligence.title': {
    en: 'Market Intelligence',
    es: 'Inteligencia de Mercado',
    pt: 'Inteligência de Mercado'
  },
  'services.intelligence.description': {
    en: 'Stay ahead of trends and competition with AI-powered analytics and insights.',
    es: 'Mantente por delante de las tendencias y la competencia con análisis e insights impulsados por IA.',
    pt: 'Mantenha-se à frente das tendências e da concorrência com análises e insights baseados em IA.'
  },
  'services.payment.title': {
    en: 'Secure Payment Processing',
    es: 'Procesamiento de Pago Seguro',
    pt: 'Processamento de Pagamento Seguro'
  },
  'services.payment.description': {
    en: 'Facilitate safe and easy transactions between customers and travel providers.',
    es: 'Facilita transacciones seguras y fáciles entre clientes y proveedores de viajes.',
    pt: 'Facilite transações seguras e fáceis entre clientes e fornecedores de viagens.'
  },
  'problems.title': {
    en: 'Problems We\'re Solving',
    es: 'Problemas Que Estamos Resolviendo',
    pt: 'Problemas Que Estamos Resolvendo'
  },
  'problems.description': {
    en: 'The travel industry faces numerous challenges that our AI technology is uniquely positioned to address.',
    es: 'La industria de viajes enfrenta numerosos desafíos que nuestra tecnología de IA está en una posición única para abordar.',
    pt: 'A indústria de viajes enfrenta numerosos desafios que nuestra tecnologia de IA está exclusivamente posicionada para resolver.'
  },
  
  'problems.tabs.quotation': {
    en: 'Quotations',
    es: 'Cotizaciones',
    pt: 'Cotações'
  },
  'problems.tabs.organization': {
    en: 'Organization',
    es: 'Organización',
    pt: 'Organização'
  },
  'problems.tabs.tracking': {
    en: 'Tracking',
    es: 'Seguimiento',
    pt: 'Acompanhamento'
  },
  
  'problems.before': {
    en: 'Before',
    es: 'Antes',
    pt: 'Antes'
  },
  'problems.after': {
    en: 'After',
    es: 'Después',
    pt: 'Depois'
  },
  
  'problems.quotation.before.1': {
    en: 'Manual quotations taking 30+ minutes',
    es: 'Cotizaciones manuales que toman 30+ minutos',
    pt: 'Cotações manuais que levam mais de 30 minutos'
  },
  'problems.quotation.before.2': {
    en: 'Errors in calculations and pricing',
    es: 'Errores en los cálculos y precios',
    pt: 'Erros nos cálculos e preços'
  },
  'problems.quotation.before.3': {
    en: 'Inconsistent formats',
    es: 'Formatos inconsistentes',
    pt: 'Formatos inconsistentes'
  },
  'problems.quotation.before.4': {
    en: 'Difficulty tracking progress',
    es: 'Dificultad para hacer seguimiento',
    pt: 'Dificuldade para fazer acompanhamento'
  },
  
  'problems.quotation.after.1': {
    en: 'Automated quotations in seconds',
    es: 'Cotizaciones automáticas en segundos',
    pt: 'Cotações automáticas em segundos'
  },
  'problems.quotation.after.2': {
    en: 'Precise calculations without errors',
    es: 'Cálculos precisos sin errores',
    pt: 'Cálculos precisos sem erros'
  },
  'problems.quotation.after.3': {
    en: 'Consistent professional format',
    es: 'Formato profesional consistente',
    pt: 'Formato profissional consistente'
  },
  'problems.quotation.after.4': {
    en: 'Automatic tracking and reminders',
    es: 'Seguimiento automático y recordatorios',
    pt: 'Acompanhamento automático e lembretes'
  },
  
  'problems.organization.before.1': {
    en: 'Mixed conversations with clients',
    es: 'Conversaciones mezcladas con clientes',
    pt: 'Conversas misturadas com clientes'
  },
  'problems.organization.before.2': {
    en: 'Information scattered in notes and chats',
    es: 'Información dispersa en notas y chats',
    pt: 'Informações dispersas em notas e chats'
  },
  'problems.organization.before.3': {
    en: 'Difficult to find customer history',
    es: 'Difícil encontrar historiales de clientes',
    pt: 'Difícil encontrar históricos de clientes'
  },
  'problems.organization.before.4': {
    en: 'No prospect categorization',
    es: 'Sin categorización de prospectos',
    pt: 'Sin categorización de leads'
  },
  
  'problems.organization.after.1': {
    en: 'Chats organized by client and stage',
    es: 'Chats organizados por cliente y etapa',
    pt: 'Chats organizados por cliente e fase'
  },
  'problems.organization.after.2': {
    en: 'All information centralized',
    es: 'Toda la información centralizada',
    pt: 'Todas as informações centralizadas'
  },
  'problems.organization.after.3': {
    en: 'Complete history and quick search',
    es: 'Historial completo y búsqueda rápida',
    pt: 'Histórico completo e busca rápida'
  },
  'problems.organization.after.4': {
    en: 'Automatic prospect classification',
    es: 'Clasificación automática de prospectos',
    pt: 'Classificação automática de leads'
  },
  
  'problems.tracking.before.1': {
    en: 'Inconsistent manual tracking',
    es: 'Seguimiento manual poco consistente',
    pt: 'Acompanhamento manual inconsistente'
  },
  'problems.tracking.before.2': {
    en: 'Potential clients are forgotten',
    es: 'Se olvidan clientes potenciales',
    pt: 'Clientes potenciales são esquecidos'
  },
  'problems.tracking.before.3': {
    en: 'No performance metrics',
    es: 'Sin métricas de desempeño',
    pt: 'Sin métricas de desempenho'
  },
  'problems.tracking.before.4': {
    en: 'Slow response times',
    es: 'Tiempos de respuesta lentos',
    pt: 'Tempos de resposta lentos'
  },
  
  'problems.tracking.after.1': {
    en: 'Automated tracking with reminders',
    es: 'Seguimiento automatizado con recordatorios',
    pt: 'Acompanhamento automatizado com lembretes'
  },
  'problems.tracking.after.2': {
    en: 'No client is left without attention',
    es: 'Ningún cliente se queda sin atención',
    pt: 'Nenhum cliente fica sem atenção'
  },
  'problems.tracking.after.3': {
    en: 'Dashboard with real-time metrics',
    es: 'Dashboard con métricas en tiempo real',
    pt: 'Dashboard com métricas em tempo real'
  },
  'problems.tracking.after.4': {
    en: 'Quick pre-configured responses',
    es: 'Respuestas rápidas preconfiguradas',
    pt: 'Respostas rápidas pré-configuradas'
  },
  
  'usecases.title': {
    en: 'How Our AI Works in Action',
    es: 'Cómo Funciona Nuestra IA en Acción',
    pt: 'Como Nossa IA Funciona em Ação'
  },
  'usecases.description': {
    en: 'Explore practical applications of our AI assistants in real-world travel scenarios.',
    es: 'Explora aplicaciones prácticas de nuestros asistentes de IA en escenarios de viaje del mundo real.',
    pt: 'Explore aplicações práticas dos nossos assistentes de IA em cenários de viagem do mundo real.'
  },
  'usecases.advisors': {
    en: 'For Travel Advisors',
    es: 'Para Asesores de Viajes',
    pt: 'Para Consultores de Viagens'
  },
  'usecases.travelers': {
    en: 'For Travelers',
    es: 'Para Viajeros',
    pt: 'Para Viajantes'
  },
  'faq.title': {
    en: 'Frequently Asked Questions',
    es: 'Preguntas Frecuentes',
    pt: 'Perguntas Frequentes'
  },
  'faq.description': {
    en: 'Get answers to common questions about our AI travel solutions.',
    es: 'Obtén respuestas a preguntas comunes sobre nuestras soluciones de viaje con IA.',
    pt: 'Obtenha respostas para perguntas comuns sobre nossas soluções de viagem com IA.'
  },
  'contact.title': {
    en: 'Get in Touch',
    es: 'Ponte en Contacto',
    pt: 'Entre em Contato'
  },
  'contact.description': {
    en: 'Ready to transform your travel business? Contact us today for a personalized demo.',
    es: '¿Listo para transformar tu negocio de viajes? Contáctanos hoy para una demostración personalizada.',
    pt: 'Pronto para transformar seu negócio de viagens? Entre em contato hoje para uma demonstração personalizada.'
  },
  'team.title': {
    en: 'Meet Our Team',
    es: 'Conoce a Nuestro Equipo',
    pt: 'Conheça Nossa Equipe'
  },
  'team.description': {
    en: 'The innovative minds behind sellmoretrips.AI',
    es: 'Las mentes innovadoras detrás de sellmoretrips.AI',
    pt: 'As mentes inovadoras por trás da sellmoretrips.AI'
  },
  'whatsapp.chat': {
    en: 'Chat with us',
    es: 'Chatea con nosotros',
    pt: 'Converse conosco'
  },
  'whatsapp.message': {
    en: 'Hello, I would like more information about your travel services.',
    es: 'Hola, me gustaría más información sobre sus servicios de viaje.',
    pt: 'Olá, eu gostaria de mais informações sobre seus serviços de viagem.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Detect browser language or use stored preference
  const detectLanguage = (): Language => {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage === 'en' || savedLanguage === 'es' || savedLanguage === 'pt') {
      return savedLanguage as Language;
    }
    
    // Check browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('es')) {
      return 'es';
    }
    if (browserLang.startsWith('pt')) {
      return 'pt';
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
