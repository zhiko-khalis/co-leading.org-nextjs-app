'use client';

import { useEffect } from 'react';

export function LocaleHtmlAttributes({ children, locale }: { children: React.ReactNode; locale: string }) {
  const isRTL = locale === 'ar';
  
  useEffect(() => {
    // Set html lang and dir attributes
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      html.setAttribute('lang', locale);
      html.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
  }, [locale, isRTL]);

  return <>{children}</>;
}

