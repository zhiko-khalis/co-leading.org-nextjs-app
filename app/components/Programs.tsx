'use client';

import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Lightbulb, Users, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';
import { useLocale } from 'next-intl';

export function Programs() {
  const t = useTranslations('programs');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  
  const programs = [
    {
      title: t('programs.leadershipWorkshops.title'),
      description: t('programs.leadershipWorkshops.description'),
      icon: BookOpen,
      tags: [
        t('programs.leadershipWorkshops.tags.0'),
        t('programs.leadershipWorkshops.tags.1'),
        t('programs.leadershipWorkshops.tags.2')
      ]
    },
    {
      title: t('programs.entrepreneurshipTraining.title'),
      description: t('programs.entrepreneurshipTraining.description'),
      icon: Briefcase,
      tags: [
        t('programs.entrepreneurshipTraining.tags.0'),
        t('programs.entrepreneurshipTraining.tags.1'),
        t('programs.entrepreneurshipTraining.tags.2')
      ]
    },
    {
      title: t('programs.innovationLabs.title'),
      description: t('programs.innovationLabs.description'),
      icon: Lightbulb,
      tags: [
        t('programs.innovationLabs.tags.0'),
        t('programs.innovationLabs.tags.1')
      ]
    },
    {
      title: t('programs.mentorshipPrograms.title'),
      description: t('programs.mentorshipPrograms.description'),
      icon: Users,
      tags: [
        t('programs.mentorshipPrograms.tags.0'),
        t('programs.mentorshipPrograms.tags.1'),
        t('programs.mentorshipPrograms.tags.2')
      ]
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headerVariants}
          >
            <h2 className="mb-4 text-red-600 font-bold">{t('title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('description')}
            </p>
          </motion.div>

          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <div className="relative rounded-2xl overflow-hidden h-96 mb-8">
              <ImageWithFallback
                src="/lead-photo.jpg"
                alt="Youth empowerment workshop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="mb-2">{t('empoweringNextGeneration')}</h3>
                <p className="text-gray-200">
                  {t('empoweringNextGenerationDescription')}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {programs.map((program, index) => {
              const Icon = program.icon;
              const bgColors = ['bg-orange-100', 'bg-green-100', 'bg-blue-100', 'bg-red-100'];
              const iconColors = ['text-orange-600', 'text-green-600', 'text-blue-600', 'text-red-600'];
              return (
                <motion.div key={index} variants={cardVariants}>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className={`flex items-start mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-12 h-12 ${bgColors[index]} rounded-lg flex items-center justify-center shrink-0 ${isRTL ? 'ml-4' : 'mr-4'}`}>
                      <Icon className={`w-6 h-6 ${iconColors[index]}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2">{program.title}</h3>
                      <div className={`flex flex-wrap gap-2 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        {program.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{program.description}</p>
                </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
