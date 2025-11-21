import { Card } from './ui/card';
import { Target, Eye, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-blue-600 font-bold">About Co-Lead Organization</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An independent, non-profit, and civil society organization committed to developing 
              leadership skills, fostering entrepreneurship, and promoting collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-t-4 border-orange-500">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="mb-3">Mission</h3>
              <p className="text-gray-600">
                Building bridges between leaders and organizations, raising knowledge and skills, 
                developing current and future leaders, and encouraging innovation and positive change in society.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-3">Vision</h3>
              <p className="text-gray-600">
                Creating a society without discrimination based on gender, religion, and ethnicity 
                that supports the public good and sustainable development.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-t-4 border-green-500">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="mb-3">Core Values</h3>
              <p className="text-gray-600">
                Empowerment, collaboration, innovation, inclusion, and sustainability guide 
                everything we do to create lasting positive impact.
              </p>
            </Card>
          </div>

          <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm">
            <h3 className="mb-6">Our Approach</h3>
            <p className="text-gray-600 mb-4">
              Through our diverse initiatives and programs, Co-Lead strives to create a supportive 
              and innovative environment where individuals can thrive and reach their full potential. 
              We deliver leadership development workshops, entrepreneurship training, mentorship programs, 
              and innovation labs that help participants build the knowledge, confidence, and capacity 
              to become proactive changemakers in their communities.
            </p>
            <p className="text-gray-600">
              At the core of our mission lies a strong commitment to networking and collaboration. 
              Co-Lead acts as a bridge connecting emerging leaders, innovators, and professionals 
              across different sectors—facilitating the exchange of experiences, ideas, and resources. 
              By strengthening partnerships between local and international organizations, we enhance 
              collective impact and drive community-centered development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
