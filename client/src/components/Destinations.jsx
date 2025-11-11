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
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 cursor-pointer relative w-64 h-80 hover:shadow-xl transition-all duration-300">
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
      image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      title: "Jaipur, Rajasthan",
      tours: 15
    },
    {
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWdyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "Agra, Uttar Pradesh",
      tours: 12
    },
    {
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      title: "Goa",
      tours: 20
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VyYWxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      title: "Kerala",
      tours: 18
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      title: "Delhi",
      tours: 25
    },
    {
      image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVtYmFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      title: "Mumbai, Maharashtra",
      tours: 22
    },
    {
      image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "Udaipur, Rajasthan",
      tours: 14
    },
    {
      image: "https://images.unsplash.com/photo-1599831069477-b2acdc0bcb91?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmFyYW5hc2l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      title: "Varanasi, Uttar Pradesh",
      tours: 16
    },
    {
      image: "https://images.unsplash.com/photo-1720819029162-8500607ae232?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmlzaGlrZXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      title: "Rishikesh, Uttarakhand",
      tours: 13
    },
    {
      image: "https://images.unsplash.com/photo-1641735735000-c9719ac2740b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpbGxhJTIwaGltYWNoYWwlMjBwcmFkZXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      title: "Shimla, Himachal Pradesh",
      tours: 11
    },
    {
      image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFkYWtofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      title: "Ladakh, Jammu & Kashmir",
      tours: 10
    },
    {
      image: "https://images.unsplash.com/photo-1545324367-8997ba3b801e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhcmplZWxpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      title: "Darjeeling, West Bengal",
      tours: 12
    },
    {
      image: "https://images.unsplash.com/photo-1583821017783-4333717df070?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1yaXRzYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      title: "Amritsar, Punjab",
      tours: 14
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1697730337612-8bd916249e30?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFtcGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      title: "Hampi, Karnataka",
      tours: 9
    },
    {
      image: "https://images.unsplash.com/photo-1657856855186-7cf4909a4f78?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXlzb3JlJTIwcGFsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      title: "Mysore, Karnataka",
      tours: 11
    },
    {
      image: "https://images.unsplash.com/photo-1597040663344-5f6a3b61e5e3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29vcmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      title: "Coorg, Karnataka",
      tours: 8
    },
    {
      image: "https://images.unsplash.com/photo-1606298855672-3efb63017be8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2hhanVyYWhvfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      title: "Khajuraho, Madhya Pradesh",
      tours: 7
    },
    {
      image: "https://images.unsplash.com/photo-1690313186501-445a6367d7e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a29uYXJrfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      title: "Konark, Odisha",
      tours: 6
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661951545793-ecb10ba445dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFubiUyMG9mJTIwa3V0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      title: "Rann of Kutch, Gujarat",
      tours: 8
    },
    {
      image: "https://images.unsplash.com/photo-1748722873181-03b100cfd883?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lra2ltfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      title: "Sikkim (Gangtok)",
      tours: 10
    },
    {
      image: "https://images.unsplash.com/photo-1668236305915-09785d2e73de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHVzaGthcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "Pushkar, Rajasthan",
      tours: 9
    },
    {
      image: "https://images.unsplash.com/photo-1707062413533-d88a20b58704?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1haGFiYWxpcHVyYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      title: "Mahabalipuram, Tamil Nadu",
      tours: 7
    },
    {
      image: "https://images.unsplash.com/photo-1673037405516-9253fb3ea335?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWphbnRhJTIwZWxsb3JhfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      title: "Ajanta & Ellora Caves",
      tours: 8
    },
    {
      image: "https://images.unsplash.com/photo-1713761525604-45384322feae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVuZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "Pune, Maharashtra",
      tours: 15
    },
    {
      image: "https://images.unsplash.com/photo-1618661057370-7cf87dfad271?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVsaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "Auli, Uttarakhand",
      tours: 6
    }
  ];

  return (
    <section id="destinations" className="py-14 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
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
        <div className="text-center mt-12">
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All 25 Destinations
          </button>
        </div>
      </div>
    </section>
  );
}