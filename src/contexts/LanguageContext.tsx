
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextProps {
  language: string;
  t: (key: string) => string;
  changeLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  t: () => '',
  changeLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

const translations = {
  en: {
    'nav.problems': 'Problems',
    'nav.services': 'Services',
    'nav.howItWorks': 'How It Works',
    'nav.pricing': 'Plans',
    'nav.faq': 'FAQ',
    'nav.team': 'Team',
    'nav.contact': 'Contact Us',
    'nav.joinWaitlist': 'Join Waitlist',
    
    'hero.title': 'Boost your travel agency\'s productivity with AI',
    'hero.subtitle': 'SellMoreTrips.AI transforms how travel advisors work by offering intelligent automation, personalized trip recommendations, and seamless client communication—all on a single platform.',
    'hero.cta': 'Get Started',
    
    'stats.title': 'Impactful Results',
    'stats.salesIncrease': 'Sales Increase',
    'stats.timeSaved': 'Hours Saved per Week',
    'stats.satisfaction': 'Client Satisfaction',

    'before.title': 'Transform Your Travel Agency',
    'before.subtitle': 'See how our AI technology revolutionizes the way you serve clients',
    'before.beforeTitle': 'BEFORE',
    'before.afterTitle': 'AFTER',
    'before.item1.before': 'Manual searching across multiple booking platforms',
    'before.item1.after': 'Unified search with AI-driven recommendations',
    'before.item2.before': 'Hours spent creating basic itineraries',
    'before.item2.after': 'Generate detailed itineraries in minutes',
    'before.item3.before': 'Disjointed communication with clients',
    'before.item3.after': 'Seamless client interaction and real-time updates',

    'crm.title': 'Smart CRM Integration',
    'crm.subtitle': 'Say goodbye to time-consuming client management',
    'crm.feature1.title': 'Client Relationship Management',
    'crm.feature1.description': 'Easily manage your client relationships with our integrated CRM system.',
    'crm.feature2.title': 'Smart Email Marketing',
    'crm.feature2.description': 'Automatically send personalized emails to your clients based on their preferences.',
    'crm.feature3.title': 'Automated Follow-ups',
    'crm.feature3.description': 'Never miss a follow-up opportunity with our automated reminder system.',
    'crm.cta': 'Learn More',

    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to the most common questions about sellmoretrips.AI',
    'faq.q1': 'How does sellmoretrips.AI help travel agencies?',
    'faq.a1': 'Our platform helps travel agencies increase efficiency through AI-powered search, automated itinerary creation, personalized recommendations, and unified client communication.',
    'faq.q2': 'Is sellmoretrips.AI suitable for agencies of all sizes?',
    'faq.a2': 'Yes! Our platform is designed to scale with your business. Whether you\'re a solo travel advisor or part of a large agency, our tools adapt to your needs.',
    'faq.q3': 'How long does it take to implement sellmoretrips.AI?',
    'faq.a3': 'Most agencies are up and running within days. Our onboarding team provides comprehensive training to ensure a smooth transition.',
    'faq.q4': 'Can sellmoretrips.AI integrate with my existing systems?',
    'faq.a4': 'We offer integrations with popular travel agency tools and CRM systems. Our team can help determine the best integration path for your specific setup.',

    'contact.title': 'Get In Touch',
    'contact.description': 'Have questions or ready to transform your travel agency? Reach out to us!',
    'contact.info.title': 'Contact Information',
    'contact.info.description': 'Our team is here to help you with any questions about our platform.',
    'contact.info.email.label': 'Email',
    'contact.info.email.value': 'contact@sellmoretrips.ai',
    'contact.info.whatsapp.label': 'WhatsApp',
    'contact.info.whatsapp.value': '+57 315 938 1236',
    'contact.info.hours.label': 'Business Hours',
    'contact.info.hours.value': 'Monday - Friday, 9am - 6pm EST',
    'contact.form.name.label': 'Name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email.label': 'Email',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.company.label': 'Company',
    'contact.form.company.placeholder': 'Your travel agency',
    'contact.form.message.label': 'Message',
    'contact.form.message.placeholder': 'How can we help you?',
    'contact.form.submit': 'Send Message',
    'contact.form.submitting': 'Sending...',
    
    'team.title': 'Meet Our Team',
    'team.subtitle': 'The minds behind sellmoretrips.AI',
    'team.member1.name': 'Gregory Ramirez',
    'team.member1.role': 'Founder & CEO',
    'team.member1.bio': 'Former travel agent with 12+ years of experience. Tech enthusiast passionate about revolutionizing the travel industry.',
    'team.member2.name': 'Luisa Hernandez',
    'team.member2.role': 'Head of Product',
    'team.member2.bio': 'Product specialist with expertise in building intuitive solutions for service industries.',
    'team.member3.name': 'Carlos Rodriguez',
    'team.member3.role': 'Lead Developer',
    'team.member3.bio': 'Seasoned developer with a background in AI and machine learning applications.',
    
    'footer.copyright': '© 2025 sellmoretrips.AI. All rights reserved.',
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.careers': 'Careers',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.connect': 'Connect',

    'waitlist.joinTitle': 'Join Our Waitlist Today',
    'waitlist.joinSubtitle': 'Get exclusive early access to sellmoretrips.AI and transform how you manage your travel business.',
    'waitlist.benefit1': 'Be among the first to experience our AI-powered platform',
    'waitlist.benefit2': 'Receive special early adopter pricing',
    'waitlist.benefit3': 'Get personalized onboarding support',
    'waitlist.formTitle': 'Sign up for early access',
    'waitlist.formDescription': 'Fill in your details below to join our waitlist and be notified when we launch.',
    'waitlist.nameLabel': 'Full Name',
    'waitlist.namePlaceholder': 'Enter your name',
    'waitlist.emailLabel': 'Email Address',
    'waitlist.emailPlaceholder': 'Enter your email',
    'waitlist.phoneLabel': 'Phone Number (optional)',
    'waitlist.phonePlaceholder': 'Enter your phone number',
    'waitlist.selectCountry': 'Country',
    'waitlist.interestLabel': 'Your Interest',
    'waitlist.interestPlaceholder': 'Select your interest',
    'waitlist.interests.hotel': 'Hotel Management',
    'waitlist.interests.agency': 'Travel Agency',
    'waitlist.interests.destination': 'Destination Management',
    'waitlist.interests.other': 'Other',
    'waitlist.submit': 'Join Waitlist',
    'waitlist.submitting': 'Submitting...',
    'waitlist.success': 'Success!',
    'waitlist.successMessage': 'You\'ve been added to our waitlist. We\'ll notify you when we launch!',
    'waitlist.error': 'Submission Error',
    'waitlist.errorMessage': 'There was a problem with your submission. Please try again.',
    'waitlist.errorRequired': 'Please fill in all required fields.'
  },
  es: {
    'nav.problems': 'Problemas',
    'nav.services': 'Servicios',
    'nav.howItWorks': 'Cómo Funciona',
    'nav.pricing': 'Planes',
    'nav.faq': 'Preguntas',
    'nav.team': 'Equipo',
    'nav.contact': 'Contáctenos',
    'nav.joinWaitlist': 'Únete a la Lista',
    
    'hero.title': 'Impulsa la productividad de tu agencia de viajes con IA',
    'hero.subtitle': 'SellMoreTrips.AI transforma cómo los asesores de viajes trabajan ofreciendo automatización inteligente, recomendaciones de viajes personalizadas y comunicación perfecta con los clientes, todo en una sola plataforma.',
    'hero.cta': 'Comenzar',
    
    'stats.title': 'Resultados Impactantes',
    'stats.salesIncrease': 'Aumento en Ventas',
    'stats.timeSaved': 'Horas Ahorradas por Semana',
    'stats.satisfaction': 'Satisfacción del Cliente',

    'before.title': 'Transforma Tu Agencia de Viajes',
    'before.subtitle': 'Mira cómo nuestra tecnología de IA revoluciona la forma en que atiendes a tus clientes',
    'before.beforeTitle': 'ANTES',
    'before.afterTitle': 'DESPUÉS',
    'before.item1.before': 'Búsqueda manual en múltiples plataformas',
    'before.item1.after': 'Búsqueda unificada con recomendaciones basadas en IA',
    'before.item2.before': 'Horas creando itinerarios básicos',
    'before.item2.after': 'Genera itinerarios detallados en minutos',
    'before.item3.before': 'Comunicación desconectada con clientes',
    'before.item3.after': 'Interacción perfecta y actualizaciones en tiempo real',

    'crm.title': 'Integración Inteligente con CRM',
    'crm.subtitle': 'Dile adiós a la gestión de clientes que consume tiempo',
    'crm.feature1.title': 'Gestión de Relaciones con Clientes',
    'crm.feature1.description': 'Administra fácilmente tus relaciones con clientes con nuestro sistema CRM integrado.',
    'crm.feature2.title': 'Email Marketing Inteligente',
    'crm.feature2.description': 'Envía automáticamente emails personalizados a tus clientes basados en sus preferencias.',
    'crm.feature3.title': 'Seguimientos Automatizados',
    'crm.feature3.description': 'Nunca pierdas una oportunidad de seguimiento con nuestro sistema de recordatorios automatizados.',
    'crm.cta': 'Saber Más',

    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Encuentra respuestas a las preguntas más comunes sobre sellmoretrips.AI',
    'faq.q1': '¿Cómo ayuda sellmoretrips.AI a las agencias de viajes?',
    'faq.a1': 'Nuestra plataforma ayuda a las agencias de viajes a aumentar la eficiencia a través de búsquedas potenciadas por IA, creación automatizada de itinerarios, recomendaciones personalizadas y comunicación unificada con los clientes.',
    'faq.q2': '¿Es sellmoretrips.AI adecuado para agencias de todos los tamaños?',
    'faq.a2': '¡Sí! Nuestra plataforma está diseñada para escalar con tu negocio. Ya seas un asesor de viajes independiente o parte de una gran agencia, nuestras herramientas se adaptan a tus necesidades.',
    'faq.q3': '¿Cuánto tiempo lleva implementar sellmoretrips.AI?',
    'faq.a3': 'La mayoría de las agencias están operativas en cuestión de días. Nuestro equipo de incorporación proporciona una capacitación completa para garantizar una transición sin problemas.',
    'faq.q4': '¿Puede sellmoretrips.AI integrarse con mis sistemas existentes?',
    'faq.a4': 'Ofrecemos integraciones con herramientas populares para agencias de viajes y sistemas CRM. Nuestro equipo puede ayudar a determinar la mejor ruta de integración para tu configuración específica.',

    'contact.title': 'Ponte en Contacto',
    'contact.description': '¿Tienes preguntas o estás listo para transformar tu agencia de viajes? ¡Contáctanos!',
    'contact.info.title': 'Información de Contacto',
    'contact.info.description': 'Nuestro equipo está aquí para ayudarte con cualquier pregunta sobre nuestra plataforma.',
    'contact.info.email.label': 'Email',
    'contact.info.email.value': 'contacto@sellmoretrips.ai',
    'contact.info.whatsapp.label': 'WhatsApp',
    'contact.info.whatsapp.value': '+57 315 938 1236',
    'contact.info.hours.label': 'Horario de Atención',
    'contact.info.hours.value': 'Lunes - Viernes, 9am - 6pm EST',
    'contact.form.name.label': 'Nombre',
    'contact.form.name.placeholder': 'Tu nombre',
    'contact.form.email.label': 'Email',
    'contact.form.email.placeholder': 'tu@email.com',
    'contact.form.company.label': 'Empresa',
    'contact.form.company.placeholder': 'Tu agencia de viajes',
    'contact.form.message.label': 'Mensaje',
    'contact.form.message.placeholder': '¿Cómo podemos ayudarte?',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.form.submitting': 'Enviando...',
    
    'team.title': 'Conoce a Nuestro Equipo',
    'team.subtitle': 'Las mentes detrás de sellmoretrips.AI',
    'team.member1.name': 'Gregory Ramirez',
    'team.member1.role': 'Fundador y CEO',
    'team.member1.bio': 'Ex agente de viajes con más de 12 años de experiencia. Entusiasta de la tecnología apasionado por revolucionar la industria de viajes.',
    'team.member2.name': 'Luisa Hernandez',
    'team.member2.role': 'Jefa de Producto',
    'team.member2.bio': 'Especialista en productos con experiencia en la construcción de soluciones intuitivas para industrias de servicios.',
    'team.member3.name': 'Carlos Rodriguez',
    'team.member3.role': 'Desarrollador Principal',
    'team.member3.bio': 'Desarrollador experimentado con formación en aplicaciones de IA y aprendizaje automático.',
    
    'footer.copyright': '© 2025 sellmoretrips.AI. Todos los derechos reservados.',
    'footer.company': 'Empresa',
    'footer.about': 'Sobre Nosotros',
    'footer.careers': 'Carreras',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.connect': 'Conecta',

    'waitlist.joinTitle': 'Únete a Nuestra Lista Hoy',
    'waitlist.joinSubtitle': 'Obtén acceso anticipado exclusivo a sellmoretrips.AI y transforma la gestión de tu negocio de viajes.',
    'waitlist.benefit1': 'Sé de los primeros en experimentar nuestra plataforma impulsada por IA',
    'waitlist.benefit2': 'Recibe precios especiales para primeros usuarios',
    'waitlist.benefit3': 'Obtén soporte de integración personalizado',
    'waitlist.formTitle': 'Regístrate para acceso anticipado',
    'waitlist.formDescription': 'Completa tus datos a continuación para unirte a nuestra lista de espera y recibir notificaciones cuando lancemos.',
    'waitlist.nameLabel': 'Nombre Completo',
    'waitlist.namePlaceholder': 'Ingresa tu nombre',
    'waitlist.emailLabel': 'Correo Electrónico',
    'waitlist.emailPlaceholder': 'Ingresa tu correo',
    'waitlist.phoneLabel': 'Número de Teléfono (opcional)',
    'waitlist.phonePlaceholder': 'Ingresa tu número de teléfono',
    'waitlist.selectCountry': 'País',
    'waitlist.interestLabel': 'Tu Interés',
    'waitlist.interestPlaceholder': 'Selecciona tu interés',
    'waitlist.interests.hotel': 'Gestión de Hoteles',
    'waitlist.interests.agency': 'Agencia de Viajes',
    'waitlist.interests.destination': 'Gestión de Destinos',
    'waitlist.interests.other': 'Otro',
    'waitlist.submit': 'Unirse a la Lista',
    'waitlist.submitting': 'Enviando...',
    'waitlist.success': '¡Éxito!',
    'waitlist.successMessage': 'Has sido añadido a nuestra lista de espera. ¡Te notificaremos cuando lancemos!',
    'waitlist.error': 'Error de Envío',
    'waitlist.errorMessage': 'Hubo un problema con tu envío. Por favor, intenta de nuevo.',
    'waitlist.errorRequired': 'Por favor, completa todos los campos requeridos.'
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Try to get the language from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      return savedLanguage;
    }
    
    // If not found, try to detect from browser
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'es' ? 'es' : 'en'; // Default to English
  });

  useEffect(() => {
    // Save the language preference to localStorage
    localStorage.setItem('language', language);
    // Update html lang attribute for SEO
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    // Split the key by dots to access nested properties
    const keys = key.split('.');
    let value: any = translations[language as keyof typeof translations];
    
    // Try to find the key in the translations
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Key not found, fallback to the key itself
        return key;
      }
    }
    
    return value || key;
  };

  const changeLanguage = (lang: string) => {
    if (lang === 'en' || lang === 'es') {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
