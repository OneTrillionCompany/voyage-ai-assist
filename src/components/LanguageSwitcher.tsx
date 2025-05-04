
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={language === 'en' ? "default" : "outline"}
        size="sm"
        className={`text-xs ${language === 'en' ? 'bg-primary text-white' : 'text-gray-700'}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
      <Button
        variant={language === 'es' ? "default" : "outline"}
        size="sm"
        className={`text-xs ${language === 'es' ? 'bg-primary text-white' : 'text-gray-700'}`}
        onClick={() => setLanguage('es')}
      >
        ES
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
