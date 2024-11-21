import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import {
  ArrowLeft,
  Sparkles,
  Building2,
  BarChart,
  Users,
  Calendar,
  ArrowRight,
  CheckCircle2,
  MousePointer,
  X
} from 'lucide-react';

const services = {
  spotlight: {
    title: '스폿라잇',
    description: 'AI 기반 공연 마케팅 솔루션',
    icon: Sparkles,
    color: '#FF7F00',
    features: [
      {
        icon: BarChart,
        title: '데이터 기반 마케팅',
        description: '관객 데이터 분석을 통한 효과적인 타겟팅',
        details: [
          '빅데이터 기반 관객 성향 분석',
          '실시간 마케팅 성과 트래킹',
          '맞춤형 콘텐츠 추천 시스템',
          'A/B 테스트 지원'
        ]
      },
      {
        icon: Users,
        title: '관객 세그먼테이션',
        description: '관심사와 행동 패턴 기반 관객 그룹화',
        details: [
          '인구통계학적 분석',
          '문화생활 패턴 분석',
          '티켓 구매 이력 분석',
          '맞춤형 프로모션 설계'
        ]
      },
      {
        icon: Calendar,
        title: '최적 시점 분석',
        description: '티켓 오픈 및 프로모션 최적 시점 추천',
        details: [
          '시즌별 티켓 판매 트렌드 분석',
          '경쟁 공연 일정 분석',
          '관객 선호 시간대 분석',
          '프로모션 효과 예측'
        ]
      }
    ],
    steps: [
      {
        title: '공연 정보 등록',
        description: '공연의 기본 정보와 특성을 입력하세요',
        icon: '📝'
      },
      {
        title: '타겟 관객 분석',
        description: 'AI가 최적의 타겟 관객을 분석합니다',
        icon: '🎯'
      },
      {
        title: '마케팅 전략 수립',
        description: '데이터 기반의 마케팅 전략을 제안받습니다',
        icon: '📊'
      },
      {
        title: '캠페인 실행',
        description: '효과적인 마케팅 캠페인을 실행합니다',
        icon: '🚀'
      },
      {
        title: '성과 분석',
        description: '실시간으로 마케팅 성과를 확인하세요',
        icon: '📈'
      }
    ]
  },
  curling: {
    title: '컬링',
    description: '스마트 공연장 예약 플랫폼',
    icon: Building2,
    color: '#FF7F00',
    features: [
      {
        icon: Calendar,
        title: '실시간 예약',
        description: '실시간 공연장 가용성 확인 및 예약',
        details: [
          '실시간 공연장 현황 확인',
          '간편한 예약 프로세스',
          '자동 일정 조율 시스템',
          '예약 변경/취소 관리'
        ]
      },
      {
        icon: BarChart,
        title: '가격 최적화',
        description: '시즌별 최적 대관료 추천',
        details: [
          '시즌별 수요 분석',
          '경쟁 공연장 가격 비교',
          '수익 최적화 추천',
          '할인 정책 설계'
        ]
      },
      {
        icon: Users,
        title: '공연장 매칭',
        description: '공연 규모와 성격에 맞는 최적의 공연장 추천',
        details: [
          '공연 특성 기반 매칭',
          '기술 요구사항 분석',
          '관객 수용력 최적화',
          '부대시설 매칭'
        ]
      }
    ],
    steps: [
      {
        title: '공연 요구사항 입력',
        description: '필요한 공연장 조건을 입력하세요',
        icon: '📋'
      },
      {
        title: '공연장 추천',
        description: 'AI가 최적의 공연장을 추천합니다',
        icon: '🏛️'
      },
      {
        title: '일정 확인',
        description: '실시간으로 가용 일정을 확인하세요',
        icon: '📅'
      },
      {
        title: '견적 및 계약',
        description: '투명한 견적과 간편한 계약을 진행합니다',
        icon: '📄'
      },
      {
        title: '공연장 이용',
        description: '원활한 공연장 이용을 지원합니다',
        icon: '🎭'
      }
    ]
  }
};

interface FeatureModalProps {
  feature: {
    title: string;
    description: string;
    details: string[];
  };
  onClose: () => void;
}

const FeatureModal: React.FC<FeatureModalProps> = ({ feature, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl">
        <div className="p-6 flex justify-between items-center border-b">
          <h3 className="text-2xl font-bold">{feature.title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-6">{feature.description}</p>
          <div className="space-y-4">
            {feature.details.map((detail, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF7F00]" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services[id as keyof typeof services];
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [visibleStep, setVisibleStep] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setVisibleStep((prev) => 
          prev < (service?.steps.length ?? 0) - 1 ? prev + 1 : prev
        );
      }, 800);
      return () => clearInterval(interval);
    }
  }, [inView, service?.steps.length]);

  if (!service) {
    return <div>Service not found</div>;
  }

  const ServiceIcon = service.icon;

  const handleContactClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdiBEucT8Bin9FCDjV0CarS33ptykw7_ouLiQg_zQVDq4k_og/viewform?usp=sf_link', '_blank');
  };

  return (
    <div className="pt-20 overflow-x-hidden">
      <section 
        className="relative bg-gradient-to-b from-[#FF7F00]/10 to-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>메인으로 돌아가기</span>
          </button>

          <div className="flex items-center gap-4 mb-8 animate-[fadeIn_1s_ease-out]">
            <div className="w-16 h-16 bg-[#FF7F00]/10 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform">
              <ServiceIcon className="w-8 h-8 text-[#FF7F00]" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{service.title}</h1>
              <p className="text-xl text-gray-600">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">주요 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedFeature(index)}
                  className="text-left bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[#FF7F00]/10 rounded-lg flex items-center justify-center mb-4">
                    <FeatureIcon className="w-6 h-6 text-[#FF7F00]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section ref={ref} className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">이용 프로세스</h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {service.steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative transform transition-all duration-500 ${
                    index <= visibleStep
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="text-4xl mb-4 text-center">{step.icon}</div>
                  <div className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 ${
                    index <= visibleStep ? 'translate-y-0' : 'translate-y-4'
                  }`}>
                    <h3 className="font-semibold mb-2 text-center">{step.title}</h3>
                    <p className="text-sm text-gray-600 text-center">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">지금 바로 시작하세요</h2>
          <button
            onClick={handleContactClick}
            className="inline-flex items-center gap-2 bg-[#FF7F00] text-white px-8 py-4 rounded-full hover:bg-[#FF9933] transition-all duration-300 transform hover:scale-105"
          >
            무료로 시작하기
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {selectedFeature !== null && (
        <FeatureModal
          feature={service.features[selectedFeature]}
          onClose={() => setSelectedFeature(null)}
        />
      )}
    </div>
  );
};

export default ServiceDetail;