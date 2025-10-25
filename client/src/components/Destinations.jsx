import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const DestinationCard = ({ image, title, tours }) => {
  const imgRef = useRef(null)
  const boxRef = useRef(null)
  const ZOOM_SCALE = 1.6
  const TRANSITION_IN = 'transform 140ms ease-out, transform-origin 80ms linear'
  const TRANSITION_OUT = 'transform 140ms ease-in'

  const enter = () => {
    if (imgRef.current) {
      imgRef.current.style.transition = TRANSITION_IN
      imgRef.current.style.transform = `scale(${ZOOM_SCALE})`
      imgRef.current.style.willChange = 'transform'
    }
  }
  const move = (e) => {
    if (!boxRef.current || !imgRef.current) return
    const rect = boxRef.current.getBoundingClientRect()
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    const x = ((clientX - rect.left) / rect.width) * 100
    const y = ((clientY - rect.top) / rect.height) * 100
    imgRef.current.style.transformOrigin = `${x}% ${y}%`
  }
  const leave = () => {
    if (imgRef.current) {
      imgRef.current.style.transition = TRANSITION_OUT
      imgRef.current.style.transformOrigin = '50% 50%'
      imgRef.current.style.transform = 'scale(1)'
      imgRef.current.style.willChange = 'auto'
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 cursor-pointer relative w-64 h-80">
      <div
        ref={boxRef}
        className="relative h-60 w-full overflow-hidden rounded-t-xl"
        onMouseEnter={enter}
        onMouseMove={move}
        onMouseLeave={leave}
        onTouchStart={(e) => { enter(); move(e) }}
        onTouchMove={move}
        onTouchEnd={leave}
      >
        <img
          ref={imgRef}
          src={image}
          alt={title}
          className="w-full h-full object-cover select-none"
          draggable={false}
        />
      </div>
      <div className="p-5 h-20 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
        <p className="text-slate-600 text-sm">Tours ({tours})</p>
      </div>
    </div>
  )
}

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

  // No extra effects required; pan-zoom handled per card

  return (
    <section id="destinations" className="py-14 md:py-20 bg-white">
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