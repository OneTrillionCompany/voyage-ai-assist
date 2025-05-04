
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Flag, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

// Language data with display names and flags
const languageOptions = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' }
];

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  // Find the current language option
  const currentLanguage = languageOptions.find(option => option.code === language) || languageOptions[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 bg-white rounded-md border border-gray-200 hover:bg-gray-50 transition-colors text-sm">
        <span>{currentLanguage.flag}</span>
        <span className="font-medium">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown className="h-4 w-4 opacity-70" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[180px]">
        {languageOptions.map((option) => (
          <DropdownMenuItem
            key={option.code}
            className={`flex items-center gap-2 cursor-pointer ${
              language === option.code ? 'bg-gray-100' : ''
            }`}
            onClick={() => setLanguage(option.code as 'en' | 'es' | 'pt')}
          >
            <span className="text-base mr-1">{option.flag}</span>
            <div>
              <span className="font-medium">{option.name}</span>
              <span className="text-gray-500 text-xs ml-1">({option.code.toUpperCase()})</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
