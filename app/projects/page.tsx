'use client';

import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, ArrowRight, Target } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function ProjectsPage() {
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
    },
    {
      id: 4,
      title: 'Youth Leadership Development Program',
      description: 'Training and mentoring young leaders to take active roles in their communities, focusing on civic engagement, public speaking, and project management skills.',
      year: '2024',
      status: 'In Progress',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGxlYWRlcnNoaXB8ZW58MXx8fHwxNzYyNjExMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      learnMore: '#'
    },
    {
      id: 5,
      title: 'Women Entrepreneurship Support Network',
      description: 'Creating a supportive ecosystem for women entrepreneurs through mentorship, access to capital, business development workshops, and networking opportunities.',
      year: '2023',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVudHJlcHJlbmV1cnN8ZW58MXx8fHwxNzYyNjExMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      learnMore: '#'
    },
    {
      id: 6,
      title: 'Clean Water Access Initiative',
      description: 'Installing water wells and purification systems in rural communities, providing clean and safe drinking water to over 10,000 people across multiple villages.',
      year: '2023',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdhdGVyfGVufDF8fHx8MTc2MjYxMTA4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      learnMore: '#'
    },
    {
      id: 7,
      title: 'Education Technology Hub',
      description: 'Establishing technology-enabled learning centers that provide access to digital educational resources, online courses, and computer literacy training for students and teachers.',
      year: '2024',
      status: 'In Progress',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb25hbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyNjExMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      learnMore: '#'
    },
    {
      id: 8,
      title: 'Community Garden and Food Security Program',
      description: 'Establishing community gardens in urban areas to promote food security, nutrition education, and sustainable urban agriculture practices.',
      year: '2024',
      status: 'In Progress',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW58ZW58MXx8fHwxNzYyNjExMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      learnMore: '#'
    },
    {
      id: 9,
      title: 'Climate Resilience Training Program',
      description: 'Educating communities about climate change impacts and training them in adaptation strategies, disaster preparedness, and sustainable resource management.',
      year: '2023',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1528122819723-9dca3a31295d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGltYXRlJTIwY2hhbmdlfGVufDF8fHx8MTc2MjYxMTA4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
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

  return (
    <>
      <Header />
      <section id="projects" className="pt-24 py-20 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="mb-4 text-red-600 font-bold text-3xl">Our Projects</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our impactful projects that are transforming communities and creating lasting positive change.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
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
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
