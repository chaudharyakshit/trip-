import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { useNavigate } from 'react-router-dom'

const Card = ({ image, title, region, days, price, badge, onClick }) => (
  <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden cursor-pointer" onClick={onClick}>
    <div className="relative group">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      {/* Mirror open hover effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-white/20 backdrop-blur-[1px] translate-x-0 group-hover:-translate-x-full transition-transform duration-500"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-white/20 backdrop-blur-[1px] -translate-x-0 group-hover:translate-x-full transition-transform duration-500"></div>
      </div>
      {badge && (
        <span className="absolute top-3 right-3 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-red-500 text-white shadow">
          {badge}
        </span>
      )}
    </div>
    <div className="p-5">
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <div className="flex items-center gap-4 text-slate-600 text-sm mb-4">
        <span className="inline-flex items-center gap-1">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>
          {region}
        </span>
        <span className="inline-flex items-center gap-1">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1Zm12 9H5v7h14v-7Z"/></svg>
          {days}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white bg-blue-600 hover:bg-blue-700 font-semibold shadow transition-colors">
          Book Now
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10.75 3.75a.75.75 0 0 0-1.5 0v5.5H3.75a.75.75 0 0 0 0 1.5h5.5v5.5a.75.75 0 0 0 1.5 0v-5.5h5.5a.75.75 0 0 0 0-1.5h-5.5v-5.5Z"/></svg>
        </button>
        <div className="text-right">
          <div className="text-slate-500 text-xs">Per Person</div>
          <div className="text-2xl font-extrabold">${price}</div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-6 text-slate-600 text-sm">
        <span className="inline-flex items-center gap-1"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 9.5 8.5 3 11l6.5 2.5L12 20l2.5-6.5L21 11l-6.5-2.5L12 2Z"/></svg> Experience</span>
        <span className="inline-flex items-center gap-1"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v4H4V4Zm0 6h16v10H4V10Z"/></svg> Inclusion</span>
      </div>
    </div>
  </div>
)

export default function PopularPackages() {
  const navigate = useNavigate();

  const packages = [
    {
      id: 'delhi',
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1600&auto=format&fit=crop",
      title: "Historic Delhi Tour",
      region: "Delhi, India",
      days: "02 Days/01 Night",
      price: 99,
      badge: "Popular"
    },
    {
      id: 'mumbai',
      image: "https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=1600&auto=format&fit=crop",
      title: "Mumbai City Experience",
      region: "Mumbai, India",
      days: "03 Days/02 Nights",
      price: 149,
      badge: "Bestseller"
    },
    {
      id: 'agra',
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop",
      title: "Taj Mahal Special",
      region: "Agra, India",
      days: "01 Day Tour",
      price: 79,
      badge: "Must Visit"
    },
    {
      id: 'jaipur',
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-city-1-hero?qlt=82&ts=1742200253577",
      title: "Pink City Heritage",
      region: "Jaipur, India",
      days: "02 Days/01 Night",
      price: 119,
      badge: "Cultural"
    },
    {
      id: 'dehradun',
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/mountains-dehradun-uttrakhand-city-1-hero?qlt=82&ts=1742155351343",
      title: "Dehradun Hill Station",
      region: "Dehradun, India",
      days: "03 Days/02 Nights",
      price: 139,
      badge: "Nature"
    }
  ];

  const handleCardClick = (packageId) => {
    // Navigate to individual package page using React Router
    navigate(`/packages/${packageId}`);
  };

  return (
    <section className="relative py-14 md:py-20 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(43,123,185,0.15),transparent_60%)]">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Left parachute */}
        <div className="absolute left-0 top-1/4 animate-bounce">
          <img src="/assets/parachute.svg" alt="Parachute" className="w-24 h-24" />
        </div>
        
        {/* Right rotating circle */}
        <div className="absolute right-0 top-1/3 animate-spin">
          <svg className="w-20 h-20" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#10B981" strokeWidth="3" fill="none" opacity="0.7"/>
            <circle cx="50" cy="50" r="30" stroke="#10B981" strokeWidth="2" fill="none" opacity="0.5"/>
            <circle cx="50" cy="50" r="20" stroke="#10B981" strokeWidth="1" fill="none" opacity="0.3"/>
          </svg>
        </div>

        {/* Background pattern */}
        <div className="w-full h-full opacity-10 bg-[linear-gradient(45deg,transparent_49%,#3B82F6_49%,#3B82F6_51%,transparent_51%)] bg-[length:10px_10px]" />
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full opacity-[0.5] bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'><path fill=\'%23edf2f7\' fill-opacity=\'1\' d=\'M0,224L120,192C240,160,480,96,720,112C960,128,1200,224,1320,272L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z\'></path></svg>')] bg-cover" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">One Day Trips</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Explore the rich cultural heritage and breathtaking landscapes of India's most iconic destinations.</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-10"
        >
          {packages.map((pkg) => (
            <SwiperSlide key={pkg.id}>
              <Card 
                image={pkg.image}
                title={pkg.title}
                region={pkg.region}
                days={pkg.days}
                price={pkg.price}
                badge={pkg.badge}
                onClick={() => handleCardClick(pkg.id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}