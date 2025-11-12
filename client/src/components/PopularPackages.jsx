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
      {/* === Animated Background === */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-100">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 opacity-[0.05] animate-[bgScroll_25s_linear_infinite] bg-[linear-gradient(90deg,transparent_95%,#3B82F6_95%),linear-gradient(transparent_95%,#3B82F6_95%)] bg-[size:30px_30px]" />

        {/* Floating Plane */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/869/869636.png"
          alt="plane"
          className="absolute top-12 left-10 w-12 h-12 opacity-60 animate-[floatSlow_8s_ease-in-out_infinite]"
        />

        {/* Palm Tree */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
          alt="palm"
          className="absolute bottom-20 left-1/4 w-16 h-16 opacity-40 animate-[sway_7s_ease-in-out_infinite]"
        />

        {/* Hot Air Balloon */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
          alt="balloon"
          className="absolute top-1/3 right-20 w-14 h-14 opacity-50 animate-[floatSlow_9s_ease-in-out_infinite]"
        />

        {/* Compass */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
          alt="compass"
          className="absolute bottom-10 right-10 w-20 h-20 opacity-30 animate-[rotateSlow_40s_linear_infinite]"
        />
      </div>

      {/* === Section Content === */}
      <div className="max-w-7xl mx-auto px-4">
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

      {/* === Tailwind Animations === */}
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
      `}</style>
    </section>
  );
}
