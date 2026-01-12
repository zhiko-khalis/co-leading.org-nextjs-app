'use client';

import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  description: string;
  year: string;
  status: string;
  image: string;
  learnMore?: string;
}

interface ProductSectionProps {
  title: string;
  description: string;
  products: Product[];
  viewAllText?: string;
  viewAllLink?: string;
  locale?: string;
  isRTL?: boolean;
  getStatusColor?: (status: string) => string;
}

export function ProductSection({
  title,
  description,
  products,
  viewAllText,
  viewAllLink,
  locale = 'en',
  isRTL = false,
  getStatusColor
}: ProductSectionProps) {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headerVariants}
          >
            <h2 className="mb-4 text-red-600 font-bold">{title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                statusColor={getStatusColor?.(product.status)}
                isRTL={isRTL}
              />
            ))}
          </motion.div>

          {viewAllText && viewAllLink && (
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            >
              <Link href={viewAllLink}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className={`border-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {viewAllText}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

