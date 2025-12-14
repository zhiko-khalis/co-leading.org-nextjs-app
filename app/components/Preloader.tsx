'use client';

import { useEffect, useState, useRef } from 'react';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState<'entrance' | 'zoom' | 'glow' | 'exit'>('entrance');
  const [animationState, setAnimationState] = useState({
    scale: 0.5,
    glowIntensity: 0,
    bgGradient: 0,
    textOpacity: 0,
  });
  const [particleCount, setParticleCount] = useState(20);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  // Set particle count based on screen size (reduce on mobile)
  useEffect(() => {
    const updateParticleCount = () => {
      setParticleCount(window.innerWidth < 768 ? 10 : 20);
    };
    updateParticleCount();
    window.addEventListener('resize', updateParticleCount);
    return () => window.removeEventListener('resize', updateParticleCount);
  }, []);

  useEffect(() => {
    // Phase 1: Dramatic entrance with fade-in (0.8s)
    const entranceTimer = setTimeout(() => {
      setPhase('zoom');
      setAnimationState(prev => ({ ...prev, textOpacity: 1 }));
      
      // Start animation loop with requestAnimationFrame
      const animate = (currentTime: number) => {
        if (startTimeRef.current === 0) {
          startTimeRef.current = currentTime;
        }
        
        const elapsed = currentTime - startTimeRef.current;
        const zoomDuration = 2500;
        const progress = Math.min(elapsed / zoomDuration, 1);
        
        // Exponential zoom with easing
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const newScale = 0.5 + easeOutCubic * 4.5; // Scale from 0.5 to 5
        
        // Increasing glow intensity
        const newGlow = Math.sin(progress * Math.PI * 4) * 30 + progress * 40;
        
        // Background gradient shift
        const newGradient = progress * 360;
        
        // Batch all state updates together
        setAnimationState({
          scale: newScale,
          glowIntensity: newGlow,
          bgGradient: newGradient,
          textOpacity: 1,
        });
        
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          setPhase('glow');
          // Brief pause at max zoom with intense glow
          setTimeout(() => {
            setPhase('exit');
            setAnimationState(prev => ({ ...prev, textOpacity: 0 }));
            setTimeout(() => {
              setIsLoading(false);
            }, 600);
          }, 400);
        }
      };
      
      rafRef.current = requestAnimationFrame(animate);
    }, 800);

    return () => {
      clearTimeout(entranceTimer);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-600 ease-in-out ${
        phase === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: `linear-gradient(${animationState.bgGradient}deg, #ffffff 0%, #f8f9fa 25%, #ffffff 50%, #fff5f0 75%, #ffffff 100%)`,
        willChange: 'background',
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(particleCount)].map((_, i) => (
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
              transform: `translate3d(0, 0, 0) scale(${animationState.scale * 0.3})`,
              willChange: 'transform',
            }}
          />
        ))}
      </div>

      {/* Main logo container */}
      <div className="relative z-10" style={{ willChange: 'transform' }}>
        <div
          className="flex items-center space-x-3"
          style={{
            transform: `translate3d(0, 0, 0) scale(${animationState.scale})`,
            filter: `drop-shadow(0 0 ${animationState.glowIntensity}px rgba(249, 115, 22, 0.8))`,
            willChange: 'transform, filter',
          }}
        >
          <div className="h-14 md:h-24 w-auto flex items-center relative">
            {/* Glow effect behind logo */}
            <div
              className="absolute inset-0 bg-orange-500 rounded-lg blur-2xl opacity-50"
              style={{
                transform: `translate3d(0, 0, 0) scale(${1 + animationState.glowIntensity / 100})`,
                opacity: animationState.glowIntensity / 100,
                willChange: 'transform, opacity',
              }}
            />
            <img
              src="/leadlogo.PNG"
              alt="Co-Lead Logo"
              className="h-14 md:h-24 w-auto object-contain translate-x-2.5 relative z-10"
              style={{ willChange: 'transform' }}
            />
          </div>
          
          {/* Text with fade in/out */}
          <div
            className="border-l-2 border-orange-500 pl-3 transition-opacity duration-500"
            style={{ 
              opacity: animationState.textOpacity,
              willChange: 'opacity',
            }}
          >
          
          </div>
        </div>

        {/* Radial gradient overlay for depth */}
        <div
          className="absolute inset-0 -z-10 rounded-full opacity-30"
          style={{
            background: `radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, transparent 70%)`,
            transform: `translate3d(0, 0, 0) scale(${animationState.scale * 0.8})`,
            willChange: 'transform',
          }}
        />
      </div>

      {/* CSS for floating animation - optimized for GPU */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(10px, -20px, 0);
          }
        }
      `}</style>
    </div>
  );
}
