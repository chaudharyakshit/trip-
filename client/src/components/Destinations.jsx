import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const DestinationCard = ({ image, title, tours }) => (
  <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden group cursor-pointer relative w-64 h-80">
    <div className="relative h-60 w-full overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      
      {/* Glass overlay that opens diagonally from both corners on hover */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-left diagonal glass */}
        <div className="absolute top-0 left-0 w-full h-full bg-white/30 backdrop-blur-sm 
          transition-all duration-500 ease-out 
          group-hover:-translate-x-full group-hover:-translate-y-full group-hover:opacity-0
          transform origin-top-left"></div>
        
        {/* Bottom-right diagonal glass */}
        <div className="absolute top-0 left-0 w-full h-full bg-white/30 backdrop-blur-sm 
          transition-all duration-500 ease-out 
          group-hover:translate-x-full group-hover:translate-y-full group-hover:opacity-0
          transform origin-bottom-right"></div>
      </div>
    </div>
    
    <div className="p-5 h-20 flex flex-col justify-center">
      <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-slate-600 text-sm">Tours ({tours})</p>
    </div>
  </div>
);

export default function TopDestinations() {
  const destinations = [
    {
      image: "https://images.unsplash.com/photo-1586769852836-bc069f74e9e2?q=80&w=1600&auto=format&fit=crop",
      title: "OAKERAL DELGI",
      tours: 10
    },
    {
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop",
      title: "DEHRADUN",
      tours: 15
    },
    {
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1600&auto=format&fit=crop",
      title: "Great Temple Jordan",
      tours: 10
    },
    {
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1600&auto=format&fit=crop",
      title: "Athens Greece",
      tours: 15
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop",
      title: "Switzerland",
      tours: 27
    },
    {
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600&auto=format&fit=crop",
      title: "Norway",
      tours: 8
    }
  ];

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Top Destinations</h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ 
              delay: 3000, 
              disableOnInteraction: false 
            }}
            navigation={{
              nextEl: '.destination-next',
              prevEl: '.destination-prev',
            }}
            loop={true}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
            className="pb-2"
          >
            {destinations.map((destination, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <DestinationCard 
                  image={destination.image}
                  title={destination.title}
                  tours={destination.tours}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="destination-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors">
            <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="destination-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors">
            <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}