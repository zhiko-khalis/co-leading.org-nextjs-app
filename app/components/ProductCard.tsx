'use client';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  year: string;
  status: string;
  image: string;
  learnMore?: string;
  statusColor?: string;
  isRTL?: boolean;
  onLearnMore?: () => void;
}

export function ProductCard({
  id,
  title,
  description,
  year,
  status,
  image,
  learnMore,
  statusColor,
  isRTL = false,
  onLearnMore
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <Badge className={statusColor || 'bg-gray-100 text-gray-600'}>
              {status}
            </Badge>
          </div>
        </div>
        
        <CardHeader>
          <div className={`flex items-center justify-center text-sm text-gray-500 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Calendar className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {year}
          </div>
          <CardTitle className={`text-lg mb-2 line-clamp-2 flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Target className={`w-5 h-5 text-red-600 shrink-0 mt-0.5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col">
          <p className="text-gray-600 mb-4 line-clamp-3 flex-1 text-center">
            {description}
          </p>
          {learnMore && (
            <Button 
              variant="ghost" 
              className={`w-full justify-center group bg-orange-50 hover:bg-orange-100 ${isRTL ? 'flex-row-reverse' : ''}`}
              onClick={onLearnMore || (() => window.location.href = learnMore)}
            >
              Learn More
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

