
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const WhatsAppButton: React.FC = () => {
  const { t, language } = useLanguage();
  
  const phoneNumber = '573176654137'; // Colombian format without + sign
  const message = encodeURIComponent(t('whatsapp.message'));
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed left-8 bottom-8 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50 transition-transform duration-300 hover:scale-110 group"
            aria-label={t('whatsapp.chat')}
          >
            <div className="absolute w-full h-full rounded-full bg-green-500 opacity-40 animate-ping" />
            <MessageCircle size={24} />
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t('whatsapp.chat')}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppButton;
