'use client';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, ArrowRight, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';
import { useLanguage } from '../contexts/LanguageContext';

export function LatestProjects() {
  const t = useTranslations('latestProjects');
  const tCommon = useTranslations('common');
  const { isRTL } = useLanguage();
  
  const projects = [
    {
      id: 1,
      // title: t('projects.project1.title'),
      title: 'Coming Soon',
      // description: t('projects.project1.description'),
      year: '2024',
      status: t('status.inProgress'),
      image: '/lead-photoo.jpg',
      learnMore: '#'
    },
    {
      id: 2,
      title: 'Coming Soon',
      // description: t('projects.project2.description'),
      year: '2024',
      status: t('status.inProgress'),
      image: '/lead-photoo.jpg',
      learnMore: '#'
    },
    {
      id: 3,
      title: 'Coming Soon',
      // description: t('projects.project3.description'),
      year: '2023',
      status: t('status.inProgress'),
      image: '/lead-photoo.jpg',
      learnMore: '#'
    }
  ];

  const getStatusColor = (status: string) => {
    const statusKeys = {
      [t('status.inProgress')]: 'bg-blue-100 text-blue-600',
      [t('status.completed')]: 'bg-green-100 text-green-600',
      [t('status.upcoming')]: 'bg-orange-100 text-orange-600',
      [t('status.onHold')]: 'bg-gray-100 text-gray-600'
    };
    return statusKeys[status] || 'bg-gray-100 text-gray-600';
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

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

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

  return (
    <section id="projects" className="py-20 bg-white">
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className={`flex items-center justify-center text-sm text-gray-500 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Calendar className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {project.year}
                  </div>
                  <CardTitle className={`text-lg mb-2 line-clamp-2 flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Target className={`w-5 h-5 text-red-600 shrink-0 mt-0.5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-1 text-center">
                    {project.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-center group bg-orange-50 hover:bg-orange-100 ${isRTL ? 'flex-row-reverse' : ''}`}
                    onClick={() => window.location.href = project.learnMore}
                  >
                    {tCommon('learnMore')}
                    {/* <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} /> */}
                  </Button>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          >
            {/* <Link href="/projects"> */}
              <Button 
                variant="outline" 
                size="lg"
                className={`border-2 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('viewAllProjects')}
                <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>
            {/* </Link> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
