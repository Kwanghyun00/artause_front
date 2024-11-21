import React from 'react';
import { X } from 'lucide-react';

interface PlannerFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PlannerForm: React.FC<PlannerFormProps> = ({ isOpen, onClose }) => {
  const handleContactClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdiBEucT8Bin9FCDjV0CarS33ptykw7_ouLiQg_zQVDq4k_og/viewform?usp=sf_link', '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold">공연 기획 시작하기</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 text-center">
          <p className="text-lg text-gray-600 mb-8">
            공연 기획을 위한 상세 정보를 입력해주세요.
            아래 버튼을 클릭하시면 문의 양식으로 이동합니다.
          </p>
          <button
            onClick={handleContactClick}
            className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-colors"
          >
            공연 문의하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlannerForm;