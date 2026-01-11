'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from '../hooks/useTranslations';
import { useLocale } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const t = useTranslations('common');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const isHomePage = pathname === '/' || pathname === `/${locale}` || pathname === `/${locale}/`;
  const isRTL = locale === 'ar';
  
  // On non-home pages, always show white background with black text
  // On home page, show based on scroll position
  // Only apply scroll-based styling after component has mounted to avoid hydration mismatch
  const isScrolled = !isHomePage || (mounted && scrollY > 50);

  // Map navigation items to their section IDs
  const sectionMap: Record<string, string> = {
    home: 'hero',
    about: 'about',
    news: 'news',
    focusareas: 'focus-areas',
    projects: 'projects',
    objectives: 'objectives',
    programs: 'programs',
    calltoaction: 'contact'
  };

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle navigation click
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    setMobileMenuOpen(false);
    
    // Extract section name from path (e.g., "/about" -> "about")
    const sectionName = path.replace(/^\//, '').replace(/\/$/, '') || 'home';
    const sectionId = sectionMap[sectionName];

    if (isHomePage && sectionId) {
      // If on home page, prevent default and scroll to section
      e.preventDefault();
      scrollToSection(sectionId);
    } else if (sectionId) {
      // If not on home page, prevent default, navigate to home first, then scroll
      e.preventDefault();
      const homePath = `/${locale}`;
      router.push(homePath);
      // Wait for DOM to update, then scroll
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 300);
    }
    // If path is not in sectionMap, let Link handle normal navigation
  };

  useEffect(() => {
    // Set mounted to true after component mounts to avoid hydration mismatch
    // Defer state updates to avoid synchronous setState in effect
    const timeoutId = setTimeout(() => {
      setMounted(true);
      if (isHomePage) {
        // Initialize scroll position
        setScrollY(window.scrollY);
      }
    }, 0);
    
    if (!isHomePage) {
      return () => clearTimeout(timeoutId);
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 backdrop-blur-md ${
      isScrolled 
        ? 'bg-white/80 shadow-md' 
        : 'bg-transparent shadow-sm'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''} justify-between`}>
          {/* Logo Section - appears on right in RTL, left in LTR */}
          <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
            <div className="h-14 w-auto flex items-center">
            <img
                src="/leadlogo.PNG"
                alt="Co-Lead Logo"
                className="h-12 w-auto"
              />
            </div>
            <div className={`${isRTL ? 'border-r-2 pr-3' : 'border-l-2 pl-3'} ${
              isScrolled ? 'border-orange-500' : 'border-orange-500'
            }`}>
              {/* <p className={`text-xs transition-colors ${
                isScrolled ? 'text-black' : 'text-white'
              }`}>co-Leading.org</p> */}
            </div>
          </div>

          {/* Navigation and Mobile Button Group - appears on left in RTL, right in LTR */}
          <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            {/* Desktop Navigation */}
            <nav className={`hidden md:flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse space-x-8' : 'space-x-8'}`}>
            <Link href={`/${locale}`} onClick={(e) => handleNavClick(e, '/')} className={`transition-colors cursor-pointer ${
                isScrolled ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-600'
              }`}>
                {t('home')}
              </Link>
              <Link href={`/${locale}/about`} onClick={(e) => handleNavClick(e, '/about')} className={`transition-colors cursor-pointer ${
                isScrolled ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-600'
              }`}>
                {t('about')}
              </Link>
              <Link href={`/${locale}/news`} onClick={(e) => handleNavClick(e, '/news')} className={`transition-colors cursor-pointer ${
                isScrolled ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-600'
              }`}>
                {t('news')}
              </Link>
              <Link href={`/${locale}/focusareas`} onClick={(e) => handleNavClick(e, '/focusareas')} className={`transition-colors cursor-pointer ${
                isScrolled ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-600'
              }`}>
                {t('focusAreas')}
              </Link>
              <Link href={`/${locale}/projects`} onClick={(e) => handleNavClick(e, '/projects')} className={`transition-colors cursor-pointer ${
                isScrolled ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-600'
              }`}>
                {t('projects')}
              </Link>

              
              
              <Link href={`/${locale}/programs`} onClick={(e) => handleNavClick(e, '/programs')} className={`transition-colors cursor-pointer ${
                isScrolled ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-600'
              }`}>
                {t('programs')}
              </Link>

              <Link href={`/${locale}/objectives`} onClick={(e) => handleNavClick(e, '/objectives')} className={`transition-colors cursor-pointer ${
                isScrolled ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-600'
              }`}>
                {t('objectives')}
              </Link>

             
             
              <Link href={`/${locale}/calltoaction`} onClick={(e) => handleNavClick(e, '/calltoaction')} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors cursor-pointer">
                {t('getInvolved')}
              </Link>
              {/* <LanguageSwitcher /> */}
            </nav>

            {/* Mobile Menu Button - appears on left in RTL, right in LTR */}
            <button 
              className={`md:hidden p-2 transition-colors ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className={`md:hidden mt-4 pb-4 flex justify-center items-center flex-col ${isRTL ? 'space-y-reverse space-y-3' : 'space-y-3'}`}>
            <Link href={`/${locale}`} onClick={(e) => handleNavClick(e, '/')} className={`transition-colors cursor-pointer ${isRTL ? 'text-right' : 'text-left'} ${
              isScrolled ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-600'
            }`}>
              {t('home')}
            </Link>
            <Link href={`/${locale}/about`} onClick={(e) => handleNavClick(e, '/about')} className={`transition-colors cursor-pointer ${isRTL ? 'text-right' : 'text-left'} ${
              isScrolled ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-600'
            }`}>
              {t('about')}
            </Link>
            <Link href={`/${locale}/news`} onClick={(e) => handleNavClick(e, '/news')} className={`transition-colors cursor-pointer ${isRTL ? 'text-right' : 'text-left'} ${
              isScrolled ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-600'
            }`}>
              {t('news')}
            </Link>
            <Link href={`/${locale}/focusareas`} onClick={(e) => handleNavClick(e, '/focusareas')} className={`transition-colors cursor-pointer ${isRTL ? 'text-right' : 'text-left'} ${
              isScrolled ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-600'
            }`}>
              {t('focusAreas')}
            </Link>
            <Link href={`/${locale}/projects`} onClick={(e) => handleNavClick(e, '/projects')} className={`transition-colors cursor-pointer ${isRTL ? 'text-right' : 'text-left'} ${
              isScrolled ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-600'
            }`}>
              {t('projects')}
            </Link>

            <Link href={`/${locale}/programs`} onClick={(e) => handleNavClick(e, '/programs')} className={`transition-colors cursor-pointer ${isRTL ? 'text-right' : 'text-left'} ${
              isScrolled ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-600'
            }`}>
              {t('programs')}
            </Link>


            <Link href={`/${locale}/objectives`} onClick={(e) => handleNavClick(e, '/objectives')} className={`transition-colors cursor-pointer ${isRTL ? 'text-right' : 'text-left'} ${
              isScrolled ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-600'
            }`}>
              {t('objectives')}
            </Link>
           
          
            <Link href={`/${locale}/calltoaction`} onClick={(e) => handleNavClick(e, '/calltoaction')} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors text-center cursor-pointer">
              {t('getInvolved')}
            </Link>
            {/* <div className="mt-2">
              <LanguageSwitcher />
            </div> */}
          </nav>
        )}
      </div>
    </header>
  );
}
