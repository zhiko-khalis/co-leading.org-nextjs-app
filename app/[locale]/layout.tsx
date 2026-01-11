import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '../../i18n';
import { Preloader } from '../components/Preloader';
import { LocaleHtmlAttributes } from '../LocaleHtmlAttributes';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <LocaleHtmlAttributes locale={locale}>
      <NextIntlClientProvider messages={messages}>
        <Preloader />
        {children}
      </NextIntlClientProvider>
    </LocaleHtmlAttributes>
  );
}

