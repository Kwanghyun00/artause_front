import React, { useEffect, useRef } from 'react';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={containerRef}
            className="transform translate-y-16 opacity-0 transition-all duration-1000 delay-200"
          >
            <h2 className="text-5xl font-bold mb-8">무대 경험의 혁신</h2>
            <p className="text-xl text-gray-300 mb-6">
              Artause는 모든 예술가가 스포트라이트를 받을 자격이 있다고 믿습니다. 우리의 미션은 혁신적인 기술 솔루션을 통해 공연예술 산업을 혁신하는 것입니다.
            </p>
            <p className="text-xl text-gray-300 mb-8">
              AI 기반 마케팅과 효율적인 공연장 관리를 결합하여, 예술가들이 가장 잘하는 것에 집중할 수 있도록 - 무대 위에서 마법 같은 순간을 만드는 것을 돕습니다.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-2xl transform rotate-3" />
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80"
              alt="Performance"
              className="relative rounded-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
        
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 transform translate-y-16 opacity-0 transition-all duration-1000 delay-400"
        >
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">500+</div>
            <div className="text-gray-400">지원된 아티스트</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">200+</div>
            <div className="text-gray-400">제휴 공연장</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">1M+</div>
            <div className="text-gray-400">판매된 티켓</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">98%</div>
            <div className="text-gray-400">성공률</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;