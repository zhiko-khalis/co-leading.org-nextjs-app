import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Lightbulb, Users, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
      tags: ['Technology', 'Solutions', 'Research']
    },
    {
      title: 'Mentorship Programs',
      description: 'Connecting emerging leaders with experienced professionals for guidance, knowledge sharing, and career development.',
      icon: Users,
      tags: ['Mentoring', 'Growth', 'Network']
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-red-600 font-bold">Our Programs & Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse initiatives designed to empower individuals and create lasting community impact.
            </p>
          </div>

          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden h-96 mb-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1545886082-e66c6b9e011a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGVtcG93ZXJtZW50JTIwd29ya3Nob3B8ZW58MXx8fHwxNzYyNjExMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const bgColors = ['bg-orange-100', 'bg-green-100', 'bg-blue-100', 'bg-red-100'];
              const iconColors = ['text-orange-600', 'text-green-600', 'text-blue-600', 'text-red-600'];
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className={`w-12 h-12 ${bgColors[index]} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
