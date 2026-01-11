'use client';

import { useLocale } from 'next-intl';
import { usePathname } from '@/i18n/routing';
import { Link } from '@/i18n/routing';
import { Globe } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
    { code: 'ku', name: 'Kurdish', nativeName: 'کوردی' },
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
          <Link
            key={language.code}
            href={pathname}
            locale={language.code as 'en' | 'ar' | 'ku'}
          >
            <DropdownMenuItem
            className={locale === language.code ? 'bg-accent' : ''}
          >
            <span>{language.nativeName}</span>
            <span className="ml-2 text-muted-foreground text-xs">
              {language.name}
            </span>
          </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

