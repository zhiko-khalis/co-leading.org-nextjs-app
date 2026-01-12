'use client';

import { useTranslations } from '../hooks/useTranslations';
import { useLanguage } from '../contexts/LanguageContext';

export function Ingredients() {
  const t = useTranslations('common');
  const { isRTL } = useLanguage();

  return (
    <section id="ingredients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h2 className="mb-4 text-red-600 font-bold">Ingredients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {/* Add ingredients content here */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

