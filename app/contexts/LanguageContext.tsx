'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import enMessages from '../locales/en.json';
import arMessages from '../locales/ar.json';
import kuMessages from '../locales/ku.json';

export type Locale = 'en' | 'ar' | 'ku';

const messages = {
  en: enMessages,
  ar: arMessages,
  ku: kuMessages,
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (namespace: string, key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  // Load locale from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale') as Locale;
      if (savedLocale && ['en', 'ar', 'ku'].includes(savedLocale)) {
        setLocaleState(savedLocale);
      }
    }
  }, []);

  // Save locale to localStorage when it changes
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
      // Update HTML attributes
      const html = document.documentElement;
      html.setAttribute('lang', newLocale);
      html.setAttribute('dir', newLocale === 'ar' ? 'rtl' : 'ltr');
    }
  };

  // Update HTML attributes when locale changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const html = document.documentElement;
      html.setAttribute('lang', locale);
      html.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
    }
  }, [locale]);

  const t = (namespace: string, key: string): string => {
    const localeMessages = messages[locale] || messages.en;
    const namespaceMessages = (localeMessages as any)[namespace];
    
    if (!namespaceMessages) {
      return key;
    }

    // Support nested keys with dot notation
    if (key.includes('.')) {
      const keys = key.split('.');
      let value: any = namespaceMessages;
      for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        // Handle array index access (e.g., "points.0")
        if (!isNaN(Number(k)) && Array.isArray(value)) {
          value = value[Number(k)];
        } else if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          return key;
        }
      }
      return typeof value === 'string' ? value : key;
    }
    
    return namespaceMessages[key] || key;
  };

  const isRTL = locale === 'ar';

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

