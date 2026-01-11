'use client';

import { Card } from './ui/card';
import { GraduationCap, Network, Users2, TrendingUp, Scale } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';
import { useLocale } from 'next-intl';

export function Objectives() {
  const t = useTranslations('objectives');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  
  // Helper function to get nested translation
  const getObjectivePoints = (key: string) => {
    const points = [
      t(`objectives.${key}.points.0`),
      t(`objectives.${key}.points.1`),
      t(`objectives.${key}.points.2`)
    ];
    return points;
  };

  const objectives = [
    {
      icon: GraduationCap,
      title: t('objectives.leadershipDevelopment.title'),
      points: getObjectivePoints('leadershipDevelopment')
    },
    {
      icon: Network,
      title: t('objectives.networkingCommunication.title'),
      points: getObjectivePoints('networkingCommunication')
    },
    {
      icon: Users2,
      title: t('objectives.communityInvolvement.title'),
      points: getObjectivePoints('communityInvolvement')
    },
    {
      icon: TrendingUp,
      title: t('objectives.communityEconomicDevelopment.title'),
      points: getObjectivePoints('communityEconomicDevelopment')
    },
    {
      icon: Scale,
      title: t('objectives.cultureHumanRights.title'),
      points: getObjectivePoints('cultureHumanRights')
    }
  ];

  return (
    <section id="objectives" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* <h2 className="mb-4 text-orange-600 font-bold">{t('title')}</h2> */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              const colors = ['bg-orange-500', 'bg-green-500', 'bg-blue-500', 'bg-red-500', 'bg-orange-600'];
              const dotColors = ['bg-orange-600', 'bg-green-600', 'bg-blue-600', 'bg-red-600', 'bg-orange-700'];
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white">
                  <div className={`w-12 h-12 ${colors[index]} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-4">{objective.title}</h3>
                  <ul className="space-y-2">
                    {objective.points.map((point, idx) => (
                      <li key={idx} className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className={`inline-block w-1.5 h-1.5 ${dotColors[index]} rounded-full mt-2 flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`}></span>
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
