"use client";

import { Star, Shield, Truck, RotateCcw } from "lucide-react";
import Image from "next/image";

const TrustIndicators = () => {


  const brands = [
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      name: "Samsung",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Samsung_old_logo_before_year_2015.svg",
    },
    {
      name: "Sony",
      logo: "https://1000logos.net/wp-content/uploads/2021/05/Sony-logo-500x281.png",
    },
    {
      name: "Dell",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
    },
    {
      name: "HP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
    },
    {
      name: "Lenovo",
      logo: "https://images.seeklogo.com/logo-png/26/1/lenovo-logo-png_seeklogo-267847.png",
    },
    {
      name: "Asus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Microsoft_logo_-_2012_%28vertical%29.svg",
    },
    {
      name: "LG",
      logo: "https://images.seeklogo.com/logo-png/29/1/lg-electronics-logo-png_seeklogo-298561.png",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-[#F5E6D3]/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      

        {/* Brand Logo Cloud */}
        <div className="text-center mb-6">
          <p className="text-sm font-semibold text-[#001E3C] uppercase tracking-wider">
            Trusted Brands We Partner With
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F5E6D3]/30 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Logo Container */}
          <div className="flex animate-scroll hover:pause-animation">
            {/* First set of logos */}
            <div className="flex gap-12 items-center justify-center min-w-max px-6">
              {brands.map((brand, index) => (
                <div
                  key={`first-${index}`}
                  className="relative w-20 h-14 hover:scale-110 transition-transform duration-300 flex items-center justify-center flex-shrink-0"
                  title={brand.name}
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain p-2"
                    unoptimized
                  />
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-12 items-center justify-center min-w-max px-6">
              {brands.map((brand, index) => (
                <div
                  key={`second-${index}`}
                  className="relative w-20 h-14 hover:scale-110 transition-transform duration-300 flex items-center justify-center flex-shrink-0"
                  title={brand.name}
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain p-2"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add custom CSS for animation */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }

          .hover\:pause-animation:hover {
            animation-play-state: paused;
          }
        `}</style>

      </div>
    </div>
  );
};

export default TrustIndicators;