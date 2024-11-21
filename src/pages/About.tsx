import React, { useState } from 'react';
import { Mail, MapPin, ArrowLeft, Users, Calendar, Award, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const teamMembers = [
  {
    name: '김광현',
    role: 'CEO & Founder',
    description: '한동대학교 전산전자공학부 졸업\n공연기획 및 마케팅 5년 경력\n스타트업 창업 경험 보유',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  },
  {
    name: '김성은',
    role: 'CTO',
    description: '한동대학교 전산전자공학부 졸업\nAI 및 데이터 분석 전문가\n다수의 기술 프로젝트 리드 경험',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
  },
  {
    name: '김예린',
    role: 'Product manager',
    description: '디지털 마케팅 전문가\nSNS 마케팅 캠페인 다수 진행\n공연 프로모션 전략 수립',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
  },
  {
    name: '김현우',
    role: 'Product manager',
    description: '풀스택 개발자\n웹 서비스 아키텍처 설계\n클라우드 인프라 관리',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80'
  },
  {
    name: '백은채',
    role: 'Growth Manager',
    description: 'UI/UX 디자인 전문가\n사용자 경험 최적화\n브랜드 아이덴티티 디자인',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80'
  },
  {
    name: '안수민',
    role: 'AI Developer',
    description: '데이터 분석 전문가\n관객 행동 패턴 분석\n성과 측정 및 리포팅',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
  },
  {
    name: '임예담',
    role: 'Content Designer',
    description: '콘텐츠 기획 및 제작\nSNS 채널 운영\n브랜드 스토리텔링',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80'
  },
  {
    name: '한정현',
    role: 'Marketer',
    description: '공연장 파트너십 관리\n비즈니스 전략 수립\n신규 사업 기획',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80'
  }
];

const milestones = [
  {
    date: '2023년 12월',
    title: '알터즈 법인 설립',
    description: '공연예술 산업의 디지털 혁신을 위한 첫걸음',
    icon: Calendar
  },
  {
    date: '2024년 1월',
    title: '시드 투자 유치',
    description: '초기 서비스 개발 및 시장 진입을 위한 투자 확보',
    icon: Trophy
  },
  {
    date: '2024년 2월',
    title: '베타 서비스 출시',
    description: '스폿라잇 베타 서비스 런칭 및 초기 사용자 확보',
    icon: Award
  },
  {
    date: '2024년 3월',
    title: '파트너십 확장',
    description: '20개 이상의 공연장 및 기획사와 파트너십 체결',
    icon: Users
  }
];

const About = () => {
  const navigate = useNavigate();
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <div className="pt-20">
      <section className="bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            메인으로 돌아가기
          </button>

          <h1 className="text-5xl font-bold mb-8">About Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xl text-gray-300 mb-8">
                알터즈는 공연예술 산업의 디지털 혁신을 선도하는 스타트업입니다. 
                우리는 AI 기술과 혁신적인 플랫폼을 통해 아티스트와 관객을 더 가깝게 연결하고, 
                모든 공연이 성공적으로 관객과 만날 수 있도록 돕고 있습니다.
              </p>
              
              <div className="space-y-6 text-gray-300">
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                <p>모든 예술가가 박수받을 자격이 있습니다.</p>
                
                <h2 className="text-2xl font-bold text-white mt-8">Our Vision</h2>
                <p>기술로 예술의 가치를 높이는 세상을 만듭니다.</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-2xl font-bold">Contact Us</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FF7F00]" />
                  <p>artause23@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#FF7F00]" />
                  <p>경상북도 포항시 북구 한동로558 한동대학교 창업보육센터, 학생창업공간(2)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team History Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#FF7F00]/20" />
            
            <div className="space-y-24">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#FF7F00]">
                      <div className="absolute w-8 h-8 rounded-full border-2 border-[#FF7F00] -left-2 -top-2 animate-pulse" />
                    </div>
                    
                    {/* Content */}
                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? 'pr-16' : 'pl-16'
                      }`}
                    >
                      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                          <Icon className="w-8 h-8 text-[#FF7F00]" />
                          <div>
                            <h3 className="text-xl font-bold">{milestone.title}</h3>
                            <p className="text-sm text-gray-500">{milestone.date}</p>
                          </div>
                        </div>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Users className="w-8 h-8 text-[#FF7F00]" />
            <h2 className="text-4xl font-bold">Our Team</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group relative cursor-pointer transition-all duration-300 ${
                  selectedMember === index ? 'col-span-2 row-span-2' : ''
                }`}
                onClick={() => setSelectedMember(selectedMember === index ? null : index)}
              >
                <div className="relative overflow-hidden rounded-xl aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-20 text-white">
                    <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-gray-300">{member.role}</p>
                    
                    {selectedMember === index && (
                      <div className="mt-4 text-sm text-gray-300 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        {member.description.split('\n').map((line, i) => (
                          <p key={i} className="mb-1">{line}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;