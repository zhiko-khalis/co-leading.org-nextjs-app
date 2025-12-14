'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">
              About
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-orange-600 transition-colors">
              News
            </Link>
            <Link href="/focusareas" className="text-gray-700 hover:text-orange-600 transition-colors">
              Focus Areas
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-orange-600 transition-colors">
              Projects
            </Link>
            <Link href="/objectives" className="text-gray-700 hover:text-orange-600 transition-colors">
              Objectives
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-orange-600 transition-colors">
              Programs
            </Link>
           
            <Link href="/calltoaction" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors">
              Get Involved
            </Link>
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
          <nav className="md:hidden mt-4 pb-4 flex justify-center items-center flex-col space-y-3">
            <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors text-left" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors text-left" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-orange-600 transition-colors text-left" onClick={() => setMobileMenuOpen(false)}>
              News
            </Link>
            <Link href="/focusareas" className="text-gray-700 hover:text-orange-600 transition-colors text-left" onClick={() => setMobileMenuOpen(false)}>
              Focus Areas
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-orange-600 transition-colors text-left" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </Link>
            <Link href="/objectives" className="text-gray-700 hover:text-orange-600 transition-colors text-left" onClick={() => setMobileMenuOpen(false)}>
              Objectives
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-orange-600 transition-colors text-left" onClick={() => setMobileMenuOpen(false)}>
              Programs
            </Link>
          
            <Link href="/calltoaction" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors text-center" onClick={() => setMobileMenuOpen(false)}>
              Get Involved
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
