import React from 'react';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const handleContactClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdiBEucT8Bin9FCDjV0CarS33ptykw7_ouLiQg_zQVDq4k_og/viewform?usp=sf_link', '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">함께 만들어가는 공연의 미래</h2>
            <p className="text-xl text-gray-300 mb-8">
              알터즈와 함께 성공적인 공연을 만들어보세요.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <p className="text-gray-300">artause23@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <p className="text-gray-300">경상북도 포항시 북구 한동로558 한동대학교 창업보육센터, 학생창업공간(2)</p>
              </div>
            </div>
            <button 
              onClick={handleContactClick}
              className="mt-8 group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              공연 문의하기
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-2xl transform rotate-3" />
            <img
              src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80"
              alt="Performance"
              className="relative rounded-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;