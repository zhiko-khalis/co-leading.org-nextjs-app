import { Button } from './ui/button';
import { Card } from './ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

export function CallToAction() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-900 to-orange-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 font-bold">Join Our Mission</h2>
            <p className="text-xl text-orange-100">
              Together, we can build a world where every individual has equal access to opportunities 
              and resources, enabling them to contribute meaningfully to society.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h4 className="mb-2 text-white">Email Us</h4>
              <p className="text-orange-100 text-sm">public@co-leading.org</p>
            </Card>

            <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h4 className="mb-2 text-white">Call Us</h4>
              <p className="text-orange-100 text-sm">+[Phone Number]</p>
            </Card>

            <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h4 className="mb-2 text-white">Visit Us</h4>
              <p className="text-orange-100 text-sm">[Location]</p>
            </Card>
          </div>

          <div className="text-center">
            <p className="mb-6 text-orange-100">
              Whether you're interested in our programs, want to volunteer, or explore partnership opportunities, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-600  hover:bg-gray-100">
                Get Involved
              </Button>
              <Button size="lg" variant="outline" className="border-white text-orange-600 hover:bg-white/10">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
