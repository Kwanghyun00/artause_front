import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

const Hero = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const curtainLeftRef = useRef<HTMLDivElement>(null);
  const curtainRightRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isStageHovered, setIsStageHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!stageRef.current) return;

      const rect = stageRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });

      if (curtainLeftRef.current && curtainRightRef.current) {
        const moveX = (x - 0.5) * 50;
        const moveY = (y - 0.5) * 20;
        
        if (isStageHovered) {
          curtainLeftRef.current.style.transform = `translateX(-100%) translateY(${moveY}px)`;
          curtainRightRef.current.style.transform = `translateX(100%) translateY(${moveY}px)`;
        } else {
          curtainLeftRef.current.style.transform = `translateX(${-moveX}px) translateY(${moveY}px)`;
          curtainRightRef.current.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isStageHovered]);

  const handleStageEnter = () => {
    setIsStageHovered(true);
  };

  const handleStageLeave = () => {
    setIsStageHovered(false);
  };

  const handleExplore = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={stageRef}
      className="relative h-screen overflow-hidden bg-black"
      onMouseEnter={handleStageEnter}
      onMouseLeave={handleStageLeave}
    >
      {/* Spotlight effect */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-3000"
        style={{
          background: `radial-gradient(
            circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
            transparent 10%,
            rgba(0,0,0,0.85) 15%,
            rgba(0,0,0,0.95) 25%
          )`
        }}
      />

      {/* Stage curtains */}
      <div 
        ref={curtainLeftRef}
        className="absolute top-0 left-0 w-1/2 h-full transform transition-transform duration-3000 ease-out"
        style={{
          background: 'linear-gradient(to right, #FF7F00, #FF9933)',
          backgroundImage: `
            linear-gradient(to right, #FF7F00, #FF9933),
            repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 40px)
          `,
          clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
          transformOrigin: 'left center'
        }}
      />
      <div 
        ref={curtainRightRef}
        className="absolute top-0 right-0 w-1/2 h-full transform transition-transform duration-3000 ease-out"
        style={{
          background: 'linear-gradient(to left, #FF7F00, #FF9933)',
          backgroundImage: `
            linear-gradient(to left, #FF7F00, #FF9933),
            repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 40px)
          `,
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
          transformOrigin: 'right center'
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-[#FF7F00] animate-pulse" />
            <span className="text-[#FF7F00] font-medium">무대 뒤 모든 순간을 함께합니다</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
            당신의<br />
            공연기획자
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
            공연 기획부터 홍보까지 모든 과정을 기술로 지원하여<br />
            성공적인 공연의 시작을 함께합니다.
          </p>
          <button 
            onClick={handleExplore}
            className="group relative overflow-hidden bg-[#FF7F00] text-white px-8 py-4 rounded-full hover:bg-[#FF9933] transition-all duration-300 opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards]"
          >
            <span className="relative z-10 flex items-center gap-2 text-lg font-medium">
              서비스 살펴보기
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      {/* Bottom gradient */}
      <div 
        className="absolute bottom-0 w-full h-32"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))'
        }}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 animate-bounce">
        <span className="text-sm text-gray-400">스크롤하여 더 알아보기</span>
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;