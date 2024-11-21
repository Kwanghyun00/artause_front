import React from 'react';

const partners = [
  {
    name: "Partner 1",
    logo: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=300&h=150&fit=crop"
  },
  {
    name: "Partner 2",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop"
  },
  {
    name: "Partner 3",
    logo: "https://images.unsplash.com/photo-1599305446868-acca7d8479b8?w=300&h=150&fit=crop"
  },
  {
    name: "Partner 4",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=150&fit=crop"
  },
  {
    name: "Partner 5",
    logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=150&fit=crop"
  },
  {
    name: "Partner 6",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=300&h=150&fit=crop"
  },
  {
    name: "Partner 7",
    logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=150&fit=crop"
  },
  {
    name: "Partner 8",
    logo: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=300&h=150&fit=crop"
  }
];

const PartnerSlider = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">협력 파트너사</h2>
        <div className="relative">
          {/* First row of partners */}
          <div className="flex space-x-8 animate-[scroll_40s_linear_infinite]">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-none w-[200px] h-[100px] bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-full h-full p-4 flex items-center justify-center relative">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Second row of partners (reversed) */}
          <div className="flex space-x-8 mt-8 animate-[scroll_40s_linear_infinite_reverse]">
            {[...partners.reverse(), ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-none w-[200px] h-[100px] bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-full h-full p-4 flex items-center justify-center relative">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default PartnerSlider;