'use client';

import { Button } from './ui/button';
import { Card } from './ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';
import { useLocale } from 'next-intl';

export function CallToAction() {
  const t = useTranslations('callToAction');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const headerVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
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
    hidden: { opacity: 0, y: 40, scale: 0.9 },
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

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-900 to-orange-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headerVariants}
          >
            <h2 className="mb-4 font-bold">{t('title')}</h2>
            <p className="text-xl text-orange-100">
              {t('description')}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={cardVariants}>
              <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h4 className="mb-2 text-white">{tCommon('emailUs')}</h4>
              <p className="text-orange-100 text-sm">public@co-leading.org</p>
            </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="mb-2 text-white">{tCommon('callUs')}</h4>
                <p className="text-orange-100 text-sm">+[Phone Number]</p>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="mb-2 text-white">{tCommon('visitUs')}</h4>
                <p className="text-orange-100 text-sm">[Location]</p>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ctaVariants}
          >
            <p className="mb-6 text-orange-100">
              {t('subtitle')}
            </p>
            {/* <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Button size="lg" className="bg-white text-indigo-600  hover:bg-gray-100">
                {tCommon('getInvolved')}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-orange-600 hover:bg-white/10">
                {tCommon('partnerWithUs')}
              </Button>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
