'use client';

import { Card } from './ui/card';
import { GraduationCap, Network, Users2, TrendingUp, Scale } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

export function Objectives() {
  const t = useTranslations('objectives');
  
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
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white flex flex-col items-center text-center">
                  <div className={`w-12 h-12 ${colors[index]} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-4">{objective.title}</h3>
                  <ul className="space-y-2 flex flex-col items-center">
                    {objective.points.map((point, idx) => (
                      <li key={idx} className="text-gray-600 text-[12px]">
                        {point}
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
