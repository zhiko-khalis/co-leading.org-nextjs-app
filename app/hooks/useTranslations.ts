import { usePathname } from 'next/navigation';
import { useLocale as useNextIntlLocale } from 'next-intl';
import enMessages from '../../messages/en.json';
import arMessages from '../../messages/ar.json';
import kuMessages from '../../messages/ku.json';

const messages = {
  en: enMessages,
  ar: arMessages,
  ku: kuMessages,
};

export function useTranslations(namespace: string = 'common') {
  const locale = useNextIntlLocale() as 'en' | 'ar' | 'ku';
  
  return (key: string): string => {
    const localeMessages = messages[locale] || messages.en;
    const namespaceMessages = (localeMessages as any)[namespace];
    
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
    
    return namespaceMessages?.[key] || key;
  };
}
export function useLocale(): string {
  return useNextIntlLocale() || 'en';
}


