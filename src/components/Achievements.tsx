import React from 'react';
import { Trophy, Users, Star, Award } from 'lucide-react';

const achievements = [
  {
    icon: Users,
    number: '6,200+',
    label: 'SNS 팔로워',
    description: '소셜 미디어에서 활발한 커뮤니티 형성'
  },
  {
    icon: Trophy,
    number: '120+',
    label: '홍보 대행 공연',
    description: '성공적인 공연 홍보 실적'
  },
  {
    icon: Star,
    number: '98%',
    label: '고객 만족도',
    description: '높은 고객 만족도 유지'
  },
  {
    icon: Award,
    number: '20+',
    label: '제휴 공연장',
    description: '전국의 다양한 공연장과 협력'
  }
];

const Achievements = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">우리의 성과</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-300" />
              <achievement.icon className="w-12 h-12 text-purple-400 mb-6" />
              <div className="text-4xl font-bold mb-2">{achievement.number}</div>
              <div className="text-xl font-semibold mb-2">{achievement.label}</div>
              <p className="text-gray-400">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;