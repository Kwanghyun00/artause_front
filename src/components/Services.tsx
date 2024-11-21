import React from 'react';
import { ArrowUpRight, Lightbulb, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: '스폿라잇',
    description: '영화 데이터 기반 관객 취향 분석을 통해 구축한 DB로 맞춤형 공연 추천 및 마케팅 솔루션을 제공합니다.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80',
    icon: Lightbulb,
    id: 'spotlight'
  },
  {
    title: '컬링',
    description: '획일화된 공연 정보 제공과 공연장 특화 대관 프로세스, 시간 대관 정보 및 예약 시스템, 공연장 운영 보조, 장비 대여 서비스를 제공하는 통합 공연장 관리 플랫폼입니다.',
    image: 'https://images.unsplash.com/photo-1485518994577-6cd6324ade8f?auto=format&fit=crop&q=80',
    icon: Building2,
    id: 'curling'
  }
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-16">서비스 소개</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative cursor-pointer"
              onClick={() => navigate(`/service/${service.id}`)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="w-6 h-6" />
                    <h3 className="text-3xl font-semibold transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-white/80 transform translate-y-16 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {service.description}
                  </p>
                  <button className="mt-6 inline-flex items-center text-white/80 group-hover:text-white transform translate-y-16 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    자세히 보기
                    <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;