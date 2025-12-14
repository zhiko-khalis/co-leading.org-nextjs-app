'use client';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, ArrowRight, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function LatestProjects() {
  const projects = [
    {
      id: 1,
      title: 'Community Health Initiative',
      description: 'A comprehensive health program providing medical services and health education to underserved communities, reaching over 5,000 beneficiaries.',
      year: '2024',
      status: 'In Progress',
      image: '/lead-photo.jpg',
      learnMore: '#'
    },
    {
      id: 2,
      title: 'Digital Skills Training Program',
      description: 'Empowering youth and women with essential digital literacy skills, coding workshops, and technology entrepreneurship training.',
      year: '2024',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2tpbGxzJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYyNjExMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      learnMore: '#'
    },
    {
      id: 3,
      title: 'Sustainable Agriculture Project',
      description: 'Supporting local farmers with modern farming techniques, sustainable practices, and market access to improve food security and livelihoods.',
      year: '2023',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc2MjYxMTA4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      learnMore: '#'
    }
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'In Progress': 'bg-blue-100 text-blue-600',
      'Completed': 'bg-green-100 text-green-600',
      'Upcoming': 'bg-orange-100 text-orange-600',
      'On Hold': 'bg-gray-100 text-gray-600'
    };
    return colors[status] || 'bg-gray-100 text-gray-600';
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
        ease: [0.25, 0.46, 0.45, 0.94],
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
        ease: [0.25, 0.46, 0.45, 0.94],
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
            <h2 className="mb-4 text-red-600 font-bold">Latest Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our impactful projects that are transforming communities and creating lasting positive change.
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
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.year}
                  </div>
                  <CardTitle className="text-lg mb-2 line-clamp-2 flex items-start">
                    <Target className="w-5 h-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group"
                    onClick={() => window.location.href = project.learnMore}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Link href="/projects">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2"
              >
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
