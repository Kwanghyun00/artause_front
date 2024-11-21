import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const handleNavigation = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold">Artause</span>
            <p className="mt-4 text-gray-600">
              공연예술의 새로운 미래를 만들어갑니다.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">서비스</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <button 
                  onClick={() => handleNavigation('services')}
                  className="hover:text-purple-600 transition-colors"
                >
                  스폿라잇
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('services')}
                  className="hover:text-purple-600 transition-colors"
                >
                  컬링
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">연락처</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a 
                  href="https://www.instagram.com/spotlight_performance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-purple-600 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="mailto:artause23@gmail.com"
                  className="flex items-center gap-2 hover:text-purple-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  artause23@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Artause. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;