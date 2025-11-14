import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function PopularPackages() {
  const packages = [
    {
      destination: "Jaipur, Rajasthan",
      title: "Royal Rajasthan Experience",
      region: "Rajasthan, India",
      days: "04 Days/03 Nights",
      price: 299,
      image:
        "../../../assets/card-images/jaipur.png",
    },
    {
      destination: "Agra, Uttar Pradesh",
      title: "Taj Mahal Wonder",
      region: "Uttar Pradesh, India",
      days: "03 Days/02 Nights",
      price: 199,
      image:
        "../../../assets/card-images/Agra.png",
      badge: "Popular",
    },
    {
      destination: "Goa",
      title: "Goa Beach Paradise",
      region: "Goa, India",
      days: "05 Days/04 Nights",
      price: 349,
      image:
        "../../../assets/card-images/Goa.png",
    },
    {
      destination: "Kerala (Munnar & Alleppey)",
      title: "Kerala Backwaters",
      region: "Kerala, India",
      days: "06 Days/05 Nights",
      price: 399,
      image:
        "../../../assets/card-images/Kerala.png",
    },
    {
      destination: "Ladakh, Jammu & Kashmir",
      title: "Ladakh Adventure",
      region: "Jammu & Kashmir, India",
      days: "07 Days/06 Nights",
      price: 499,
      image:
        "../../../assets/card-images/Ladakh.png",
      badge: "Adventure",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* === Background Image with Strong Overlay === */}
   <div className="absolute inset-0 z-[1]">

        <img 
          src="/assets/images/bg4.png" 
          alt="background" 
          className="w-full h-full object-cover brightness-110 saturate-125"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#b3d9ff]/60 via-[#d9ecff]/50 to-[#ffffff]/50"></div>

      </div>

      {/* === Decorative SVGs with High Visibility === */}
      {/* Parachute - Top Left */}
      <div className="absolute top-8 left-6 z-10">
        <img 
          src="/assets/parachute.svg" 
          alt="parachute" 
          className="w-32 h-32 opacity-100 drop-shadow-2xl animate-float"
        />
      </div>

      {/* Ring/Lifebuoy - Bottom Right */}
   <div className="absolute bottom-0 left-9 z-40">


        <img 
          src="/assets/images/ring.svg" 
          alt="ring" 
          className="w-28 h-28 opacity-100 drop-shadow-2xl animate-bounce-slow"
        />
      </div>

      {/* Passport - Top Right */}
      <div className="absolute top-16 right-12 z-10">
        <img 
          src="/assets/images/passport.svg" 
          alt="passport" 
          className="w-32 h-32 opacity-100 drop-shadow-2xl animate-pulse"
        />
      </div>

      {/* === Section Content === */}
      <div className="max-w-7xl mx-auto px-4 relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Popular Indian Destinations
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover incredible journeys through India's most breathtaking
            landscapes and cultural treasures
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {packages.map((pkg, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-2">{pkg.region}</p>
                  <p className="text-sm text-slate-500 mb-4">{pkg.days}</p>
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/destination/${pkg.destination
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      <button className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold hover:scale-105 transition-transform">
                        Book Now
                      </button>
                    </Link>
                    <p className="text-xl font-bold text-slate-900">
                      ${pkg.price}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* === Custom Animations === */}
      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes sway {
          0%, 100% {
            transform: translateX(0) rotate(-3deg);
          }
          50% {
            transform: translateX(10px) rotate(3deg);
          }
        }
        @keyframes rotateSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes bgScroll {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 200%;
          }
        }
        .animate-float {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s ease-in-out infinite;
        }
        img {
          image-rendering: -webkit-optimize-contrast;
        }
      `}</style>
    </section>
  );
}
