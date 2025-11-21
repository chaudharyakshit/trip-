import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

import imgJaipur from '../assets/card-images/jaipur.png';
import imgAgra from '../assets/card-images/Agra.png';
import imgGoa from '../assets/card-images/Goa.png';
import imgKerala from '../assets/card-images/Kerala.png';
import imgDelhi from '../assets/card-images/Delhi.png';
import imgMumbai from '../assets/card-images/Mumbai.png';
import imgUdaipur from '../assets/card-images/udaipur.png';
import imgVaranasi from '../assets/card-images/Varanasi.png';
import imgRishikesh from '../assets/card-images/Rishikesh.png';
import imgShimla from '../assets/card-images/Shimla.png';
import imgLadakh from '../assets/card-images/Ladakh.png';
import imgDarjeeling from '../assets/card-images/darjeeling.png';
import imgAmritsar from '../assets/card-images/Amritsar.png';
import imgHampi from '../assets/card-images/Hampi,-Karnataka.png';
import imgMysore from '../assets/card-images/mysore.png';
import imgCoorg from '../assets/card-images/Coorg,-Karnataka.png';
import imgKhajuraho from '../assets/card-images/Khajuraho,-Madhya-Pradesh.png';
import imgKonark from '../assets/card-images/Konark,-Odisha.png';
import imgKutch from '../assets/card-images/Rann.png';
import imgSikkim from '../assets/card-images/Sikkim.png';
import imgPushkar from '../assets/card-images/Pushkar.png';
import imgMahabalipuram from '../assets/card-images/Mahabalipuram.png';
import imgAjanta from '../assets/card-images/Ajanta.png';
import imgPune from '../assets/card-images/Pune,-Maharashtra.png';
import imgAuli from '../assets/card-images/Auli,-Uttarakhand.png';
import bg4 from '../assets/images/bg4.png';
import parachute from '../assets/parachute.svg';
import ring from '../assets/images/ring.svg';
import passport from '../assets/images/passport.svg';

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
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 cursor-pointer relative w-80 h-96 sm:w-64 sm:h-96 hover:shadow-xl transition-all duration-300">
      <div
        ref={boxRef}
        className="relative h-72 sm:h-72 w-full overflow-hidden rounded-t-xl"
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
      <div className="px-5 py-4 h-24 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
        <p className="text-slate-600 text-sm">Tours ({tours})</p>
      </div>
    </div>
  )
}

export default function TopDestinations() {

  const destinations = [
    {
      image: imgJaipur,
      title: "Jaipur, Rajasthan",
      tours: 15
    },
    {
      image: imgAgra,
      title: "Agra, Uttar Pradesh",
      tours: 12
    },
    {
      image: imgGoa,
      title: "Goa",
      tours: 20
    },
    {
      image: imgKerala,
      title: "Kerala",
      tours: 18
    },
    {
      image: imgDelhi,
      title: "Delhi",
      tours: 25
    },
    {
      image: imgMumbai,
      title: "Mumbai, Maharashtra",
      tours: 22
    },
    {
      image: imgUdaipur,
      title: "Udaipur, Rajasthan",
      tours: 14
    },
    {
      image: imgVaranasi,
      title: "Varanasi, Uttar Pradesh",
      tours: 16
    },
    {
      image: imgRishikesh,
      title: "Rishikesh, Uttarakhand",
      tours: 13
    },
    {
      image: imgShimla,
      title: "Shimla, Himachal Pradesh",
      tours: 11
    },
    {
      image: imgLadakh,
      title: "Ladakh, Jammu & Kashmir",
      tours: 10
    },
    {
      image: imgDarjeeling,
      title: "Darjeeling, West Bengal",
      tours: 12
    },
    {
      image: imgAmritsar,
      title: "Amritsar, Punjab",
      tours: 14
    },
    {
      image: imgHampi,
      title: "Hampi, Karnataka",
      tours: 9
    },
    {
      image: imgMysore,
      title: "Mysore, Karnataka",
      tours: 11
    },
    {
      image: imgCoorg,
      title: "Coorg, Karnataka",
      tours: 8
    },
    {
      image: imgKhajuraho,
      title: "Khajuraho, Madhya Pradesh",
      tours: 7
    },
    {
      image: imgKonark,
      title: "Konark, Odisha",
      tours: 6
    },
    {
      image: imgKutch,
      title: "Rann of Kutch, Gujarat",
      tours: 8
    },
    {
      image: imgSikkim,
      title: "Sikkim (Gangtok)",
      tours: 10
    },
    {
      image: imgPushkar,
      title: "Pushkar, Rajasthan",
      tours: 9
    },
    {
      image: imgMahabalipuram,
      title: "Mahabalipuram, Tamil Nadu",
      tours: 7
    },
    {
      image: imgAjanta,
      title: "Ajanta & Ellora Caves",
      tours: 8
    },
    {
      image: imgPune,
      title: "Pune, Maharashtra",
      tours: 15
    },
    {
      image: imgAuli,
      title: "Auli, Uttarakhand",
      tours: 6
    }
  ];

  return (
    <section id="destinations" className="py-20 md:py-32 lg:py-40 relative overflow-hidden min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bg4} 
          alt="background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/95"></div>
      </div>

      {/* Decorative SVGs */}
      <div className="absolute top-10 left-10 z-10 opacity-100 drop-shadow-2xl animate-pulse">
        <img src={parachute} alt="decoration" className="w-24 h-24" />
      </div>
      <div className="absolute bottom-20 right-12 z-10 opacity-100 drop-shadow-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>
        <img src={ring} alt="decoration" className="w-32 h-32" />
      </div>
      <div className="absolute top-1/2 right-20 z-10 opacity-100 drop-shadow-2xl">
        <img src={passport} alt="decoration" className="w-28 h-28" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-20">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Top Indian Destinations</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Discover the most beautiful and culturally rich destinations across India with our curated travel experiences
          </p>
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
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 }
            }}
            className="pb-2"
          >
            {destinations.map((destination, index) => (
              <SwiperSlide key={index} className="flex justify-center py-4">
                <DestinationCard 
                  image={destination.image}
                  title={destination.title}
                  tours={destination.tours}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="destination-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-all duration-300 hover:scale-110 border border-slate-200">
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="destination-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-all duration-300 hover:scale-110 border border-slate-200">
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 md:mt-20">
          <Link 
            to="/destinations" 
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            View All Destinations
          </Link>
        </div>
      </div>
      
    </section>
  );
}