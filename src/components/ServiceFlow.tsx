import React from 'react';
import { ArrowRight, Sparkles, Building2, Users, Calendar, Megaphone, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Users,
    title: '회원가입',
    description: '간단한 정보 입력으로 시작하세요'
  },
  {
    icon: Calendar,
    title: '공연 계획',
    description: '공연 일정과 규모를 설정하세요'
  },
  {
    icon: Building2,
    title: '공연장 매칭',
    description: 'AI가 최적의 공연장을 추천해드립니다'
  },
  {
    icon: Megaphone,
    title: '홍보 전략',
    description: '맞춤형 마케팅 전략을 제안받으세요'
  },
  {
    icon: CheckCircle,
    title: '성공적인 공연',
    description: '더 많은 관객과 만나보세요'
  }
];

const ServiceFlow = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">서비스 이용 프로세스</h2>
          <p className="text-xl text-gray-600">
            공연 기획부터 성공적인 공연까지, 알터즈가 함께합니다
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-purple-200 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold z-10">
                  {index + 1}
                </div>
                
                {/* Card */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative z-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <step.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 text-purple-300 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-colors"
          >
            <Sparkles className="w-5 h-5" />
            지금 시작하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceFlow;