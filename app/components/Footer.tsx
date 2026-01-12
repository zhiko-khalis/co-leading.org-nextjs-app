'use client';

import { useTranslations } from '../hooks/useTranslations';
import { useLanguage } from '../contexts/LanguageContext';
import Link from 'next/link';

export function Footer() {
  const t = useTranslations('common');
  const tFooter = useTranslations('footer');
  const { isRTL } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="mb-4">
                <div className="h-16 flex items-center mb-2">
                <img
                src="/leadlogo.PNG"
                alt="Co-Lead Logo"
                className="h-12 w-auto"
              />
                </div>
                <p className="text-sm text-gray-400">co-Leading.org</p>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                {tFooter('description')}
              </p>
            </div>

            <div>
              <h4 className="text-white mb-4">{t('quickLinks')}</h4>
              <ul className={`space-y-2 text-sm ${isRTL ? 'text-right' : 'text-left'}`}>
                <li><Link href="/about" className="hover:text-orange-400 transition-colors">{t('aboutUs')}</Link></li>
                <li><Link href="/#focus-areas" className="hover:text-orange-400 transition-colors">{t('focusAreas')}</Link></li>
                <li><Link href="/objectives" className="hover:text-orange-400 transition-colors">{t('objectives')}</Link></li>
                <li><Link href="/programs" className="hover:text-orange-400 transition-colors">{t('programs')}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">{t('getInvolved')}</h4>
              <ul className={`space-y-2 text-sm ${isRTL ? 'text-right' : 'text-left'}`}>
                <li><Link href="/calltoaction" className="hover:text-orange-400 transition-colors">{t('contactUs')}</Link></li>
                <li><Link href="/calltoaction" className="hover:text-orange-400 transition-colors">{t('volunteer')}</Link></li>
                <li><Link href="/calltoaction" className="hover:text-orange-400 transition-colors">{t('partnerWithUs')}</Link></li>
                <li><Link href="/calltoaction" className="hover:text-orange-400 transition-colors">{t('donate')}</Link></li>
              </ul>
            </div>
          </div>

          <div className={`border-t border-gray-800 pt-8 flex flex-col md:flex-row ${isRTL ? 'flex-row-reverse' : ''} justify-between items-center`}>
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              {tFooter('copyright')}
            </p>
            <div className={`flex ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'} text-sm`}>
              <a href="#" className="hover:text-orange-400 transition-colors">{t('privacyPolicy')}</a>
              <a href="#" className="hover:text-orange-400 transition-colors">{t('termsOfService')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
