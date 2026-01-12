import { useLanguage } from '../contexts/LanguageContext';

export function useTranslations(namespace: string = 'common') {
  const { t } = useLanguage();
  
  return (key: string): string => {
    return t(namespace, key);
  };
}

export function useLocale(): string {
  const { locale } = useLanguage();
  return locale;
}


