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
  
  // Process Steps
  'process.step1.title': {
    en: 'Quotation',
    es: 'Cotización',
    pt: 'Cotação'
  },
  'process.step1.description': {
    en: 'Generate professional quotes automatically with just a few clicks',
    es: 'Genera cotizaciones profesionales automáticamente con solo unos clics',
    pt: 'Gere orçamentos profissionais automaticamente com apenas alguns cliques'
  },
  'process.step2.title': {
    en: 'Confirmation',
    es: 'Confirmación',
    pt: 'Confirmação'
  },
  'process.step2.description': {
    en: 'Process confirmations and payments directly through WhatsApp',
    es: 'Procesa confirmaciones y pagos directamente a través de WhatsApp',
    pt: 'Processe confirmações e pagamentos diretamente pelo WhatsApp'
  },
  'process.step3.title': {
    en: 'Documents',
    es: 'Documentos',
    pt: 'Documentos'
  },
  'process.step3.description': {
    en: 'Send itineraries and necessary documentation automatically',
    es: 'Envía itinerarios y documentación necesaria automáticamente',
    pt: 'Envie itinerários e documentação necessária automaticamente'
  },
  'process.step4.title': {
    en: 'Monitoring',
    es: 'Seguimiento',
    pt: 'Monitoramento'
  },
  'process.step4.description': {
    en: 'Keep your customers informed with scheduled updates',
    es: 'Mantén a tus clientes informados con actualizaciones programadas',
    pt: 'Mantenha seus clientes informados com actualizaciones programadas'
  },
  
  // WhatsApp Experience Section
  'whatsapp.experience.title': {
    en: 'Fluid WhatsApp Experience',
    es: 'Experiencia WhatsApp Fluida',
    pt: 'Experiência Fluida no WhatsApp'
  },
  'whatsapp.experience.instant.title': {
    en: 'Instant Responses',
    es: 'Respuestas instantáneas',
    pt: 'Respostas instantâneas'
  },
  'whatsapp.experience.instant.description': {
    en: 'Your customers receive immediate responses, even when you are busy with other matters.',
    es: 'Tus clientes reciben respuestas inmediatas, incluso cuando estás ocupado con otros asuntos.',
    pt: 'Seus clientes recebem respostas imediatas, mesmo quando você está ocupado com outros assuntos.'
  },
  'whatsapp.experience.personalization.title': {
    en: 'Automatic Personalization',
    es: 'Personalización automática',
    pt: 'Personalização automática'
  },
  'whatsapp.experience.personalization.description': {
    en: 'Each message adapts to the client, including their name and specific details of their inquiry.',
    es: 'Cada mensaje se adapta al cliente, incluyendo su nombre y detalles específicos de su consulta.',
    pt: 'Cada mensagem se adapta ao cliente, incluindo seu nome e detalhes específicos de sua consulta.'
  },
  'whatsapp.experience.languages.title': {
    en: 'Multiple Languages',
    es: 'Múltiples idiomas',
    pt: 'Múltiplos idiomas'
  },
  'whatsapp.experience.languages.description': {
    en: 'Communicate with international customers with support for English, Spanish and other languages.',
    es: 'Comunícate con clientes internacionales con soporte para español, inglés y otros idiomas.',
    pt: 'Comunique-se com clientes internacionais com suporte para português, inglês, espanhol e outros idiomas.'
  },
  
  // WhatsApp Conversation
  'whatsapp.header.title': {
    en: 'Travel Assistant',
    es: 'Asistente de Viajes',
    pt: 'Assistente de Viagens'
  },
  'whatsapp.header.status': {
    en: 'typing...',
    es: 'escribiendo...',
    pt: 'digitando...'
  },
  'whatsapp.conversation.message1': {
    en: 'Hello, could you send me information about packages to Cancun?',
    es: 'Hola, ¿podrían enviarme información sobre paquetes a Cancún?',
    pt: 'Olá, poderia me enviar informações sobre pacotes para Cancún?'
  },
  'whatsapp.conversation.response1': {
    en: 'Hello! Of course, we have excellent options for Cancun. For how many people and on what dates are you thinking of traveling?',
    es: '¡Hola! Por supuesto, tenemos excelentes opciones para Cancún. ¿Para cuántas personas y en qué fechas estás pensando viajar?',
    pt: 'Olá! Claro, temos excelentes opções para Cancún. Para quantas pessoas e em quais datas você está pensando em viajar?'
  },
  'whatsapp.conversation.message2': {
    en: 'For 2 adults, from July 15 to 22',
    es: 'Para 2 adultos, del 15 al 22 de julio',
    pt: 'Para 2 adultos, de 15 a 22 de julho'
  },
  'whatsapp.conversation.response2': {
    en: 'Perfect! Here are our 3 best options for those dates:',
    es: '¡Perfecto! Aquí tienes nuestras 3 mejores opciones para esas fechas:',
    pt: 'Perfeito! Aqui estão nossas 3 melhores opções para essas datas:'
  },
  'whatsapp.conversation.quote': {
    en: '[PDF Quote] Cancun Options Jul 15-22',
    es: '[Cotización PDF] Opciones Cancún Jul 15-22',
    pt: '[Orçamento PDF] Opções Cancún Jul 15-22'
  },
  'whatsapp.conversation.message3': {
    en: 'Thank you! I\'m interested in option 2. How can I book?',
    es: '¡Gracias! Me interesa la opción 2. ¿Cómo puedo reservar?',
    pt: 'Obrigado! Estou interessado na opção 2. Como posso reservar?'
  },
  
  // CRM Integration Section
  'crm.title': {
    en: 'CRM Integration',
    es: 'Integración con CRM',
    pt: 'Integração com CRM'
  },
  'crm.description': {
    en: 'All your data automatically synchronized with your CRM system for complete analysis.',
    es: 'Todos tus datos sincronizados automáticamente con tu sistema CRM para un análisis completo.',
    pt: 'Todos os seus dados sincronizados automaticamente com seu sistema CRM para uma análise completa.'
  },
  'crm.whatsapp.data': {
    en: 'WhatsApp Data',
    es: 'Datos de WhatsApp',
    pt: 'Dados do WhatsApp'
  },
  'crm.dashboard': {
    en: 'CRM Dashboard',
    es: 'CRM Dashboard',
    pt: 'CRM Dashboard'
  },
  'crm.stats.newLeads': {
    en: 'New Leads',
    es: 'Leads Nuevos',
    pt: 'Novos Leads'
  },
  'crm.stats.closedSales': {
    en: 'Closed Sales',
    es: 'Ventas Cerradas',
    pt: 'Vendas Fechadas'
  },
  'crm.stats.conversionRate': {
    en: 'Conversion Rate',
    es: 'Tasa de Conversión',
    pt: 'Taxa de Conversão'
  },
  'crm.stats.recentClients': {
    en: 'Recent Clients',
    es: 'Clientes Recientes',
    pt: 'Clientes Recentes'
  },
  'crm.clients.client1.name': {
    en: 'Maria Lopez',
    es: 'María López',
    pt: 'Maria Lopez'
  },
  'crm.clients.client1.status': {
    en: 'Booked',
    es: 'Reservado',
    pt: 'Reservado'
  },
  'crm.clients.client2.name': {
    en: 'Carlos Garcia',
    es: 'Carlos García',
    pt: 'Carlos Garcia'
  },
  'crm.clients.client2.status': {
    en: 'Quote sent',
    es: 'Cotización enviada',
    pt: 'Orçamento enviado'
  },
  'crm.clients.client3.name': {
    en: 'Andrea Ruiz',
    es: 'Andrea Ruiz',
    pt: 'Andrea Ruiz'
  },
  'crm.clients.client3.status': {
    en: 'Interested',
    es: 'Interesado',
    pt: 'Interessado'
  },
  
  // CTA Section
  'cta.title': {
    en: 'Ready to boost your sales?',
    es: '¿Listo para impulsar tus ventas?',
    pt: 'Pronto para impulsionar suas vendas?'
  },
  'cta.description': {
    en: 'Start using our WhatsApp sales assistant today and transform your sales process.',
    es: 'Comienza a utilizar nuestro asistente de ventas por WhatsApp hoy mismo y transforma tu proceso de ventas.',
    pt: 'Comece a usar nosso assistente de vendas por WhatsApp hoje mesmo e transforme seu processo de vendas.'
  },
  'cta.whatsapp': {
    en: 'Contact via WhatsApp',
    es: 'Contactar por WhatsApp',
    pt: 'Contato via WhatsApp'
  },
  'cta.demo': {
    en: 'Request Demo',
    es: 'Solicitar Demo',
    pt: 'Solicitar Demo'
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
  },
  
  // FAQ Section
  'faq.title': {
    en: 'Frequently Asked Questions',
    es: 'Preguntas Frecuentes',
    pt: 'Perguntas Frequentes'
  },
  'faq.description': {
    en: 'Find answers to common questions about our AI travel solutions',
    es: 'Encuentra respuestas a preguntas comunes sobre nuestras soluciones de viaje con IA',
    pt: 'Encontre respostas para perguntas comuns sobre nossas soluções de viagem com IA'
  },
  'faq.items.item1.question': {
    en: 'How does the AI advisor assistant work?',
    es: '¿Cómo funciona el asistente de IA para asesores?',
    pt: 'Como funciona o assistente de IA para consultores?'
  },
  'faq.items.item1.answer': {
    en: 'Our AI advisor assistant uses advanced natural language processing and machine learning to analyze thousands of travel options across multiple providers. It quickly filters results based on specific client requirements, price ranges, and preferences, presenting advisors with the most relevant options and saving hours of research time.',
    es: 'Nuestro asistente de IA para asesores utiliza procesamiento avanzado de lenguaje natural y aprendizaje automático para analizar miles de opciones de viaje de múltiples proveedores. Filtra rápidamente los resultados según los requisitos específicos del cliente, rangos de precios y preferencias, presentando a los asesores las opciones más relevantes y ahorrando horas de tiempo de investigación.',
    pt: 'Nosso assistente de IA para consultores usa processamento avançado de linguagem natural e aprendizado de máquina para analisar milhares de opções de viagem em vários provedores. Ele filtra rapidamente os resultados com base nos requisitos específicos do cliente, faixas de preço e preferências, apresentando aos consultores as opções mais relevantes e economizando horas de tempo de pesquisa.'
  },
  'faq.items.item2.question': {
    en: 'Is customer data kept secure?',
    es: '¿Se mantienen seguros los datos de los clientes?',
    pt: 'Os dados dos clientes são mantidos seguros?'
  },
  'faq.items.item2.answer': {
    en: 'Absolutely. We implement enterprise-grade security measures including encryption, secure authentication, and regular security audits. All customer data is protected in compliance with global privacy standards, and we never share personal information with third parties without explicit consent.',
    es: 'Absolutamente. Implementamos medidas de seguridad de nivel empresarial que incluyen cifrado, autenticación segura y auditorías de seguridad regulares. Todos los datos de los clientes están protegidos en cumplimiento con los estándares globales de privacidad, y nunca compartimos información personal con terceros sin consentimiento explícito.',
    pt: 'Absolutamente. Implementamos medidas de segurança de nível empresarial, incluindo criptografia, autenticação segura e auditorias regulares de segurança. Todos os dados dos clientes são protegidos em conformidade com os padrões globais de privacidade, e nunca compartilhamos informações pessoais com terceiros sem consentimento explícito.'
  },
  'faq.items.item3.question': {
    en: 'Can the AI handle complex itineraries?',
    es: '¿Puede la IA manejar itinerarios complejos?',
    pt: 'A IA consegue lidar com itinerários complexos?'
  },
  'faq.items.item3.answer': {
    en: 'Yes, our AI excels at managing complex multi-destination itineraries with various transportation methods, accommodation types, and activities. It can coordinate complicated logistics while optimizing for factors like cost, convenience, and customer preferences.',
    es: 'Sí, nuestra IA se destaca en la gestión de itinerarios complejos con múltiples destinos, diversos métodos de transporte, tipos de alojamiento y actividades. Puede coordinar logísticas complicadas mientras optimiza factores como costo, conveniencia y preferencias del cliente.',
    pt: 'Sim, nossa IA se destaca no gerenciamento de itinerários complexos com múltiplos destinos, vários métodos de transporte, tipos de acomodação e atividades. Ela pode coordenar logísticas complicadas enquanto otimiza fatores como custo, conveniência e preferências do cliente.'
  },
  'faq.items.item4.question': {
    en: 'How do payments work through the platform?',
    es: '¿Cómo funcionan los pagos a través de la plataforma?',
    pt: 'Como funcionam os pagamentos através da plataforma?'
  },
  'faq.items.item4.answer': {
    en: 'Our secure payment system integrates with major payment processors and provides multiple payment options for customers. The system handles deposits, installment payments, and full payments, with automated receipts and confirmation emails. Travel advisors receive immediate notification of completed transactions.',
    es: 'Nuestro sistema de pago seguro se integra con los principales procesadores de pago y proporciona múltiples opciones de pago para los clientes. El sistema maneja depósitos, pagos en cuotas y pagos completos, con recibos automatizados y correos electrónicos de confirmación. Los asesores de viaje reciben notificación inmediata de las transacciones completadas.',
    pt: 'Nosso sistema de pagamento seguro se integra com los principais processadores de pagamento e oferece múltiplas opções de pagamento para os clientes. O sistema gerencia depósitos, pagamentos parcelados e pagamentos completos, com recibos automatizados e e-mails de confirmação. Consultores de viagem recebem notificação imediata das transações concluídas.'
  },
  'faq.items.item5.question': {
    en: 'Can the AI assistant be customized for my travel business?',
    es: '¿Se puede personalizar el asistente de IA para mi negocio de viajes?',
    pt: 'O assistente de IA pode ser personalizado para o meu negócio de viagens?'
  },
  'faq.items.item5.answer': {
    en: 'Yes, our AI solutions are designed to be highly customizable. We can adapt the system to match your brand voice, preferred suppliers, commission structures, and business workflow. The AI learns from your business patterns over time, becoming increasingly tailored to your specific needs.',
    es: 'Sí, nuestras soluciones de IA están diseñadas para ser altamente personalizables. Podemos adaptar el sistema para que coincida con la voz de su marca, proveedores preferidos, estructuras de comisiones y flujo de trabajo comercial. La IA aprende de los patrones de su negocio con el tiempo, volviéndose cada vez más adaptada a sus necesidades específicas.',
    pt: 'Sim, nossas soluções de IA são projetadas para serem altamente personalizáveis. Podemos adaptar o sistema para corresponder à voz da sua marca, fornecedores preferidos, estruturas de comissão e fluxo de trabalho do negócio. A IA aprende com os padrões do seu negócio ao longo do tempo, tornando-se cada vez mais adaptada às suas necessidades específicas.'
  },
  'faq.items.item6.question': {
    en: 'Is training required to use the system?',
    es: '¿Se requiere capacitación para usar el sistema?',
    pt: 'É necessário treinamento para usar o sistema?'
  },
  'faq.items.item6.answer': {
    en: 'We provide comprehensive onboarding and training, but the system is designed to be intuitive and user-friendly. Most travel advisors can begin using the basic features within hours, while more advanced capabilities might require additional familiarization. Our support team is always available to help with questions or challenges.',
    es: 'Proporcionamos una incorporación y capacitación integral, pero el sistema está diseñado para ser intuitivo y fácil de usar. La mayoría de los asesores de viajes pueden comenzar a usar las funciones básicas en cuestión de horas, mientras que las capacidades más avanzadas podrían requerir una familiarización adicional. Nuestro equipo de soporte siempre está disponible para ayudar con preguntas o desafíos.',
    pt: 'Fornecemos integração e treinamento abrangentes, mas o sistema é projetado para ser intuitivo e fácil de usar. A maioria dos consultores de viagem pode começar a usar os recursos básicos em poucas horas, enquanto recursos mais avançados podem exigir familiarização adicional. Nossa equipe de suporte está sempre disponível para ajudar com perguntas ou desafios.'
  },
  
  // Contact Section
  'contact.title': {
    en: 'Contact Us',
    es: 'Contáctanos',
    pt: 'Contate-nos'
  },
  'contact.description': {
    en: 'Get in touch with our team and discover how we can transform your travel business',
    es: 'Ponte en contacto con nuestro equipo y descubre cómo podemos transformar tu negocio de viajes',
    pt: 'Entre em contato com nossa equipe e descubra como podemos transformar seu negócio de viagens'
  },
  'contact.info.title': {
    en: 'Contact Information',
    es: 'Información de Contacto',
    pt: 'Informações de Contato'
  },
  'contact.info.description': {
    en: 'Have questions about our AI solutions? Fill out the form or contact us directly using the information below.',
    es: '¿Tienes preguntas sobre nuestras soluciones de IA? Completa el formulario o contáctanos directamente utilizando la información a continuación.',
    pt: 'Tem perguntas sobre nossas soluções de IA? Preencha o formulário ou contate-nos diretamente usando as informações abaixo.'
  },
  'contact.info.email.label': {
    en: 'Email',
    es: 'Correo Electrónico',
    pt: 'Email'
  },
  'contact.info.email.value': {
    en: 'manuel.gruezo@uao.edu.co',
    es: 'manuel.gruezo@uao.edu.co',
    pt: 'manuel.gruezo@uao.edu.co'
  },
  'contact.info.whatsapp.label': {
    en: 'WhatsApp',
    es: 'WhatsApp',
    pt: 'WhatsApp'
  },
  'contact.info.whatsapp.value': {
    en: '+573159381236',
    es: '+573159381236',
    pt: '+573159381236'
  },
  'contact.info.hours.label': {
    en: 'Office Hours',
    es: 'Horario de Oficina',
    pt: 'Horário de Funcionamento'
  },
  'contact.info.hours.value': {
    en: 'Monday to Friday, 9AM - 5PM EST',
    es: 'Lunes a Viernes, 9AM - 5PM EST',
    pt: 'Segunda a Sexta, 9AM - 5PM EST'
  },
  'contact.form.name.label': {
    en: 'Name',
    es: 'Nombre',
    pt: 'Nome'
  },
  'contact.form.name.placeholder': {
    en: 'Your name',
    es: 'Tu nombre',
    pt: 'Seu nome'
  },
  'contact.form.email.label': {
    en: 'Email',
    es: 'Correo Electrónico',
    pt: 'Email'
  },
  'contact.form.email.placeholder': {
    en: 'your@email.com',
    es: 'tu@email.com',
    pt: 'seu@email.com'
  },
  'contact.form.company.label': {
    en: 'Company',
    es: 'Empresa',
    pt: 'Empresa'
  },
  'contact.form.company.placeholder': {
    en: 'Your company name',
    es: 'Nombre de tu empresa',
    pt: 'Nome da sua empresa'
  },
  'contact.form.message.label': {
    en: 'Message',
    es: 'Mensaje',
    pt: 'Mensagem'
  },
  'contact.form.message.placeholder': {
    en: 'How can we help you?',
    es: '¿Cómo podemos ayudarte?',
    pt: 'Como podemos ajudá-lo?'
  },
  'contact.form.submit': {
    en: 'Send Message',
    es: 'Enviar Mensaje',
    pt: 'Enviar Mensagem'
  },
  'contact.form.submitting': {
    en: 'Sending...',
    es: 'Enviando...',
    pt: 'Enviando...'
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
