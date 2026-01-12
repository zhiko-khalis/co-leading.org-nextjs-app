'use client';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';
import { useLanguage } from '../contexts/LanguageContext';

export function LatestNews() {
  const t = useTranslations('latestNews');
  const tCommon = useTranslations('common');
  const { locale, isRTL } = useLanguage();
  
  const newsItems = [
    {
      id: 1,
      title: t('newsItems.item1.title'),
      description: '', // t('newsItems.item1.description'),
      date: '2025-12-25',
      category: t('newsItems.item1.category'),
      image: '/n1/n1.jpg',
    },
    {
      id: 2,
      title: t('newsItems.item2.title'),
      description: '', // t('newsItems.item2.description'),
      date: '2024-01-15',
      category: t('newsItems.item2.category'),
      image: '/nn1/nn3.jpg',
    },
    {
      id: 3,
      title: t('newsItems.item3.title'),
      description: '', // t('newsItems.item3.description'),
      date: '2024-01-10',
      category: t('newsItems.item3.category'),
      image: '/nnn1/nnn1.jpg',
    }
    
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + 'T00:00:00'); // Ensure consistent timezone handling
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      calendar: 'gregory', // Force Gregorian calendar to avoid Hijri calendar differences
    };
    return date.toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', options);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      [t('categories.programs')]: 'bg-blue-100 text-blue-600',
      [t('categories.events')]: 'bg-orange-100 text-orange-600',
      [t('categories.partnerships')]: 'bg-green-100 text-green-600',
      [t('categories.news')]: 'bg-red-100 text-red-600'
    };
    return colors[category] || 'bg-gray-100 text-gray-600';
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
    <section id="news" className="py-20 bg-gray-50">
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
            {newsItems.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className={`flex items-center justify-center text-center text-sm text-gray-500 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Calendar className={`w-4 h-4 text-center ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    <span suppressHydrationWarning>{formatDate(item.date)}</span>
                  </div>
                  <CardTitle className="text-lg mb-2 line-clamp-2 text-center">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-1 text-center">
                    {item.description}
                  </p>
                  <Link href={`/news/${item.id}`} className="w-full">
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-center items-center group bg-gray-100 hover:bg-gray-200 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      {tCommon('readMore')}
                      {/* <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} /> */}
                    </Button>
                  </Link>
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
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* <Link href="" locale={locale}> */}
              <Button 
                variant="outline" 
                size="lg"
                className={`border-2 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('viewAllNews')}
                <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>
            {/* </Link> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
