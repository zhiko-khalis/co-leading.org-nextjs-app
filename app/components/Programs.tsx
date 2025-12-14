'use client';

import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Lightbulb, Users, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';

export function Programs() {
  const programs = [
    {
      title: 'Leadership Development Workshops',
      description: 'Interactive workshops designed to build essential leadership skills, self-awareness, and team collaboration capabilities.',
      icon: BookOpen,
      tags: ['Training', 'Skills', 'Mentorship']
    },
    {
      title: 'Entrepreneurship Training',
      description: 'Comprehensive programs supporting start-ups and promoting sustainable business practices with access to mentorship and funding opportunities.',
      icon: Briefcase,
      tags: ['Business', 'Innovation', 'Support']
    },
    {
      title: 'Innovation Labs',
      description: 'Creative spaces where participants develop technology-driven solutions and tackle local and regional challenges through innovation.',
      icon: Lightbulb,
      tags: ['Solutions', 'Research']
    },
    {
      title: 'Mentorship Programs',
      description: 'Connecting emerging leaders with experienced professionals for guidance, knowledge sharing, and career development.',
      icon: Users,
      tags: ['Mentoring', 'Growth', 'Network']
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
            <h2 className="mb-4 text-red-600 font-bold">Our Programs & Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse initiatives designed to empower individuals and create lasting community impact.
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
                <h3 className="mb-2">Empowering the Next Generation</h3>
                <p className="text-gray-200">
                  Our entrepreneurship and innovation programs inspire creativity and support women 
                  and youth-led enterprises, fostering inclusive economic growth and social empowerment.
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
                  <div className="flex items-start mb-4">
                    <div className={`w-12 h-12 ${bgColors[index]} rounded-lg flex items-center justify-center mr-4 shrink-0`}>
                      <Icon className={`w-6 h-6 ${iconColors[index]}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2">{program.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
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
