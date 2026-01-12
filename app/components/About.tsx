'use client';

import { Card } from './ui/card';
import { Target, Eye, Heart } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

export function About() {
  const t = useTranslations('about');
  
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* <div className="text-center mb-16">
            <h2 className="mb-4 text-blue-600 font-bold">{t('title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('description')}
            </p>
          </div> */}

          {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-t-4 border-orange-500">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="mb-3">{t('mission')}</h3>
              <p className="text-gray-600">
                {t('missionDescription')}
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-3">{t('vision')}</h3>
              <p className="text-gray-600">
                {t('visionDescription')}
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-t-4 border-green-500">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="mb-3">{t('coreValues')}</h3>
              <p className="text-gray-600">
                {t('coreValuesDescription')}
              </p>
            </Card>
          </div> */}

          <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm">
            <h3 className="mb-6 text-center">{t('ourApproach')}</h3>
            <p className="text-gray-600 text-center">
              {t('approachDescription1')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
