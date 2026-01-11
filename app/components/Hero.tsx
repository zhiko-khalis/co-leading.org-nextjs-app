'use client';

import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRouter } from 'next/navigation';
import { useTranslations } from '../hooks/useTranslations';
import { useLocale } from 'next-intl';

interface HeroProps {
  videoSrc?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function Hero({ videoSrc, imageSrc, imageAlt = 'Hero background' }: HeroProps = {}) {
  const router = useRouter();
  const t = useTranslations('hero');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute w-full h-full z-0">
        {videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-[25%_center] md:object-center"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : imageSrc ? (
          <ImageWithFallback
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover object-[25%_center] md:object-center"
          />
        ) : null}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-700/85"></div> */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-orange-700/85"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-block mb-6">
            <ImageWithFallback
              src="/leadlogo.PNG"
              alt="Co-Leading Organization Logo"
              className="h-40 md:h-50 w-auto object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-6">
            {t('title')}
          </h1>
          
          <p className="text-[14px] md:text-[18px] mb-8 text-gray-200 max-w-3xl mx-auto">
            {t('description')}
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => router.push(`/${locale}/about`)}
            >
              {tCommon('learnMore')}
              <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Button>
            {/* <Button 
              size="lg" 
              variant="outline"
              className="border-white text-orange-600 hover:bg-white/10"
              onClick={() => scrollToSection('contact')}
            >
              Get Involved
            </Button> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div> */}
    </section>
  );
}
