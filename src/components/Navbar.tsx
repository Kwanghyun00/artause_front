import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import PlannerForm from './PlannerForm';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              <span className="text-2xl font-bold">Artause</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/#services" className="text-gray-900 hover:text-gray-600">서비스</Link>
              <Link to="/about" className="text-gray-900 hover:text-gray-600">소개</Link>
              <button 
                onClick={() => setShowForm(true)}
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                시작하기
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-900 hover:text-gray-600"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <Link to="/#services" className="block px-3 py-2 text-gray-900">서비스</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-900">소개</Link>
              <button 
                onClick={() => setShowForm(true)}
                className="w-full mt-4 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                시작하기
              </button>
            </div>
          </div>
        )}
      </nav>
      
      <PlannerForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  );
};

export default Navbar;