import { Card } from './ui/card';
import { GraduationCap, Network, Users2, TrendingUp, Scale } from 'lucide-react';

export function Objectives() {
  const objectives = [
    {
      icon: GraduationCap,
      title: 'Leadership Development',
      points: [
        'Mentoring for emerging leaders and youth',
        'Develop self-awareness and team leadership',
        'Foster innovation and change skills'
      ]
    },
    {
      icon: Network,
      title: 'Networking & Communication',
      points: [
        'Create diverse networks across sectors',
        'Connect public, private, and civil society',
        'Strengthen government-organization relationships'
      ]
    },
    {
      icon: Users2,
      title: 'Community Involvement',
      points: [
        'Encourage women and youth participation',
        'Facilitate civic engagement and governance',
        'Promote cooperation on public issues'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Community & Economic Development',
      points: [
        'Joint projects for environment and entrepreneurship',
        'Support research and innovation',
        'Strengthen governance and public services'
      ]
    },
    {
      icon: Scale,
      title: 'Culture & Human Rights',
      points: [
        'Emphasize diversity and equality',
        'Support human rights and democratic principles',
        'Ongoing training for members and staff'
      ]
    }
  ];

  return (
    <section id="objectives" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-orange-600 font-bold">Our Objectives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic goals that guide our work and impact across communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              const colors = ['bg-orange-500', 'bg-green-500', 'bg-blue-500', 'bg-red-500', 'bg-orange-600'];
              const dotColors = ['bg-orange-600', 'bg-green-600', 'bg-blue-600', 'bg-red-600', 'bg-orange-700'];
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white">
                  <div className={`w-12 h-12 ${colors[index]} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-4">{objective.title}</h3>
                  <ul className="space-y-2">
                    {objective.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={`inline-block w-1.5 h-1.5 ${dotColors[index]} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
