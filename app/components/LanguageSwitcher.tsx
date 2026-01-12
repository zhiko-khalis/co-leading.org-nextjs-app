'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const languages = [
    { code: 'en' as const, name: 'English', nativeName: 'English' },
    { code: 'ar' as const, name: 'Arabic', nativeName: 'العربية' },
    { code: 'ku' as const, name: 'Kurdish', nativeName: 'کوردی' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 bg-white"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline bg-white">
            {languages.find((lang) => lang.code === locale)?.nativeName || locale.toUpperCase()}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setLocale(language.code)}
            className={locale === language.code ? 'bg-accent' : ''}
          >
            <span>{language.nativeName}</span>
            <span className="ml-2 text-muted-foreground text-xs">
              {language.name}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

