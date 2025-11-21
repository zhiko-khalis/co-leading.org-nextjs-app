import { Card } from './ui/card';
import { Leaf, Heart, Users, Laptop } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FocusAreas() {
  const areas = [
    {
      title: 'Environmental Leadership',
      icon: Leaf,
      description: 'Promoting awareness and action toward environmental protection, climate resilience, and sustainable resource management.',
      color: 'green',
      image: 'https://images.unsplash.com/photo-1528122819723-9dca3a31295d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwc3VzdGFpbmFiaWxpdHl8ZW58MXx8fHwxNzYyNTEyNTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Health Leadership',
      icon: Heart,
      description: 'Strengthening community-based health initiatives and empowering youth and women to take leadership roles in promoting public health and wellbeing.',
      color: 'red',
      image: 'https://images.unsplash.com/photo-1591197172062-c718f82aba20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWFsdGh8ZW58MXx8fHwxNzYyNjExMDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Social Leadership',
      icon: Users,
      description: 'Encouraging inclusive participation, gender equality, and social cohesion by equipping leaders to advocate for justice, equity, and human rights.',
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1759171907618-95130c76ae5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBqdXN0aWNlJTIwZXF1YWxpdHl8ZW58MXx8fHwxNzYyNjExMDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Technology Leadership',
      icon: Laptop,
      description: 'Advancing digital skills, innovation, and technology-driven solutions that improve education, governance, and entrepreneurship opportunities.',
      color: 'purple',
      image: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjI1NDM1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const colorClasses = {
    green: 'bg-green-500',
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    purple: 'bg-orange-500'
  };

  return (
    <section id="focus-areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-green-600 font-bold">Our Leadership Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach to leadership is multi-dimensional, addressing key areas 
              essential for holistic community development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 ${colorClasses[area.color as keyof typeof colorClasses]} opacity-60`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <Icon className={`w-8 h-8 ${
                          area.color === 'green' ? 'text-green-600' :
                          area.color === 'red' ? 'text-red-600' :
                          area.color === 'blue' ? 'text-blue-600' :
                          'text-orange-600'
                        }`} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3">{area.title}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
