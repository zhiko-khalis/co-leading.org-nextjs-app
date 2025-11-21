'use client';

import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1705234384669-c6d31c61b789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbGVhZGVycyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYyNjExMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Diverse leaders collaborating"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-700/85"></div> */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-orange-700/85"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm">Independent • Non-Profit • Civil Society Organization</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building Leaders for a Sustainable Future
          </h1>
          
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Empowering women, youth, and children through leadership development, entrepreneurship, 
            and collaboration to create a more inclusive, innovative, and sustainable society.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => scrollToSection('about')}
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-orange-600 hover:bg-white/10"
              onClick={() => scrollToSection('contact')}
            >
              Get Involved
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
