'use client';

import { useEffect, useState } from 'react';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState<'entrance' | 'zoom' | 'glow' | 'exit'>('entrance');
  const [scale, setScale] = useState(0.5);
  const [glowIntensity, setGlowIntensity] = useState(0);
  const [bgGradient, setBgGradient] = useState(0);
  const [textOpacity, setTextOpacity] = useState(0);

  useEffect(() => {
    // Phase 1: Dramatic entrance with fade-in (0.8s)
    const entranceTimer = setTimeout(() => {
      setPhase('zoom');
      setTextOpacity(1);
    }, 800);

      // Phase 2: Intense zoom with increasing glow (2.5s)
      const zoomDuration = 2500;
      const startTime = Date.now();
      
      const zoomInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / zoomDuration, 1);
        
        // Exponential zoom with easing
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const newScale = 0.5 + easeOutCubic * 4.5; // Scale from 0.5 to 5
        
        // Increasing glow intensity
        const newGlow = Math.sin(progress * Math.PI * 4) * 30 + progress * 40;
        
        // Background gradient shift
        const newGradient = progress * 360;
        
        setScale(newScale);
        setGlowIntensity(newGlow);
        setBgGradient(newGradient);
      
      if (progress >= 1) {
        clearInterval(zoomInterval);
        setPhase('glow');
        // Brief pause at max zoom with intense glow
        setTimeout(() => {
          setPhase('exit');
          setTextOpacity(0);
          setTimeout(() => {
            setIsLoading(false);
          }, 600);
        }, 400);
      }
    }, 16); // ~60fps

    return () => {
      clearTimeout(entranceTimer);
      clearInterval(zoomInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-600 ease-in-out ${
        phase === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: `linear-gradient(${bgGradient}deg, #ffffff 0%, #f8f9fa 25%, #ffffff 50%, #fff5f0 75%, #ffffff 100%)`,
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-orange-500/20"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 23) % 100}%`,
              width: `${10 + (i % 5) * 5}px`,
              height: `${10 + (i % 5) * 5}px`,
              animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
              transform: `scale(${scale * 0.3})`,
            }}
          />
        ))}
      </div>

      {/* Main logo container */}
      <div className="relative z-10">
        <div
          className="flex items-center space-x-3 transition-all duration-300 ease-out"
          style={{
            transform: `scale(${scale})`,
            filter: `drop-shadow(0 0 ${glowIntensity}px rgba(249, 115, 22, 0.8))`,
          }}
        >
          <div className="h-14 md:h-24 w-auto flex items-center relative">
            {/* Glow effect behind logo */}
            <div
              className="absolute inset-0 bg-orange-500 rounded-lg blur-2xl opacity-50"
              style={{
                transform: `scale(${1 + glowIntensity / 100})`,
                opacity: glowIntensity / 100,
              }}
            />
            <img
              src="/leadlogo.PNG"
              alt="Co-Lead Logo"
              className="h-14 md:h-24 w-auto object-contain translate-x-2.5 relative z-10"
            />
          </div>
          
          {/* Text with fade in/out */}
          <div
            className="border-l-2 border-orange-500 pl-3 transition-opacity duration-500"
            style={{ opacity: textOpacity }}
          >
          
          </div>
        </div>

        {/* Radial gradient overlay for depth */}
        <div
          className="absolute inset-0 -z-10 rounded-full opacity-30"
          style={{
            background: `radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, transparent 70%)`,
            transform: `scale(${scale * 0.8})`,
          }}
        />
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </div>
  );
}
