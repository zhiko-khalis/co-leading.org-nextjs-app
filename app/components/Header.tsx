'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-14 w-auto flex items-center">
            <img
                src="/leadlogo.PNG"
                alt="Co-Lead Logo"
                className="h-12 w-auto"
              />
            </div>
            <div className="border-l-2 border-orange-500 pl-3">
              <p className="text-xs text-gray-600">co-Leading.org</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('focus-areas')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Focus Areas
            </button>
            <button onClick={() => scrollToSection('objectives')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Objectives
            </button>
            <button onClick={() => scrollToSection('programs')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Programs
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-orange-500 hover:bg-orange-600">Get Involved</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-orange-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition-colors text-left">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors text-left">
              About
            </button>
            <button onClick={() => scrollToSection('')} className="text-gray-700 hover:text-orange-600 transition-colors text-left">
              Focus Areas
            </button>
            <button onClick={() => scrollToSection('objectives')} className="text-gray-700 hover:text-orange-600 transition-colors text-left">
              Objectives
            </button>
            <button onClick={() => scrollToSection('programs')} className="text-gray-700 hover:text-orange-600 transition-colors text-left">
              Programs
            </button>
            <Button onClick={() => scrollToSection('contact')} className="w-full bg-orange-500 hover:bg-orange-600">Get Involved</Button>
          </nav>
        )}
      </div>
    </header>
  );
}
