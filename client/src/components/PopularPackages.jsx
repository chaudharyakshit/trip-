import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

// Destination to route mapping based on your PDF
const destinationRoutes = {
  "Jaipur, Rajasthan": "jaipur",
  "Agra, Uttar Pradesh": "agra", 
  "Goa": "goa",
  "Kerala (Munnar & Alleppey)": "kerala",
  "Delhi": "delhi",
  "Mumbai, Maharashtra": "mumbai",
  "Udaipur, Rajasthan": "udaipur",
  "Varanasi, Uttar Pradesh": "varanasi",
  "Rishikesh, Uttarakhand": "rishikesh",
  "Shimla, Himachal Pradesh": "shimla",
  "Ladakh, Jammu & Kashmir": "ladakh",
  "Darjeeling, West Bengal": "darjeeling",
  "Amritsar, Punjab": "amritsar",
  "Hampi, Karnataka": "hampi",
  "Mysore, Karnataka": "mysore",
  "Coorg, Karnataka": "coorg",
  "Khajuraho, Madhya Pradesh": "khajuraho",
  "Konark, Odisha": "konark",
  "Rann of Kutch, Gujarat": "kutch",
  "Sikkim (Gangtok)": "sikkim",
  "Pushkar, Rajasthan": "pushkar",
  "Mahabalipuram, Tamil Nadu": "mahabalipuram",
  "Ajanta & Ellora Caves, Maharashtra": "ajanta-ellora",
  "Pune, Maharashtra": "pune",
  "Auli, Uttarakhand": "auli"
};

// Sample images for each destination (you'll replace these with actual images)
const destinationImages = {
  "Jaipur, Rajasthan": "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1600&auto=format&fit=crop",
  "Agra, Uttar Pradesh": "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop",
  "Goa": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop",
  "Kerala (Munnar & Alleppey)": "https://images.unsplash.com/photo-1580052614386-6b4573a0d0d5?q=80&w=1600&auto=format&fit=crop",
  "Delhi": "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1600&auto=format&fit=crop",
  // Add more images for other destinations...
};

const Card = ({ image, title, region, days, price, badge, destination }) => {
  const imgRef = useRef(null)
  const boxRef = useRef(null)
  const ZOOM_SCALE = 1.6
  const TRANSITION_IN = 'transform 140ms ease-out, transform-origin 80ms linear'
  const TRANSITION_OUT = 'transform 140ms ease-in'

  const handleEnter = () => {
    if (imgRef.current) {
      imgRef.current.style.transition = TRANSITION_IN
      imgRef.current.style.transform = `scale(${ZOOM_SCALE})`
      imgRef.current.style.willChange = 'transform'
    }
  }

  const handleMove = (e) => {
    if (!boxRef.current || !imgRef.current) return
    const rect = boxRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    imgRef.current.style.transformOrigin = `${x}% ${y}%`
  }

  const handleLeave = () => {
    if (imgRef.current) {
      imgRef.current.style.transition = TRANSITION_OUT
      imgRef.current.style.transformOrigin = '50% 50%'
      imgRef.current.style.transform = 'scale(1)'
      imgRef.current.style.willChange = 'auto'
    }
  }

  const handleTouchStart = (e) => {
    if (!boxRef.current || !imgRef.current) return
    const t = e.touches && e.touches[0]
    if (!t) return
    const rect = boxRef.current.getBoundingClientRect()
    const x = ((t.clientX - rect.left) / rect.width) * 100
    const y = ((t.clientY - rect.top) / rect.height) * 100
    imgRef.current.style.transition = TRANSITION_IN
    imgRef.current.style.transform = `scale(${ZOOM_SCALE})`
    imgRef.current.style.transformOrigin = `${x}% ${y}%`
    imgRef.current.style.willChange = 'transform'
  }

  const handleTouchMove = (e) => {
    if (!boxRef.current || !imgRef.current) return
    const t = e.touches && e.touches[0]
    if (!t) return
    const rect = boxRef.current.getBoundingClientRect()
    const x = ((t.clientX - rect.left) / rect.width) * 100
    const y = ((t.clientY - rect.top) / rect.height) * 100
    imgRef.current.style.transformOrigin = `${x}% ${y}%`
  }

  const handleTouchEnd = () => {
    if (imgRef.current) {
      imgRef.current.style.transition = TRANSITION_OUT
      imgRef.current.style.transformOrigin = '50% 50%'
      imgRef.current.style.transform = 'scale(1)'
      imgRef.current.style.willChange = 'auto'
    }
  }

  // Get the route for this destination
  const destinationRoute = destinationRoutes[destination] || "destination";

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      <div className="relative group">
        <div className="px-5 pt-5">
          <div
            ref={boxRef}
            onMouseEnter={handleEnter}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="h-48 w-full overflow-hidden rounded-2xl"
          >
            <img
              ref={imgRef}
              loading="lazy"
              src={image}
              alt={title}
              className="w-full h-full object-cover select-none"
              draggable={false}
            />
          </div>
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
          <Link to={`/destination/${destinationRoute}`}>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white bg-[color:rgb(var(--brand-secondary))] hover:brightness-110 font-semibold shadow">
              Book Now
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.75 3.75a.75.75 0 0 0-1.5 0v5.5H3.75a.75.75 0 0 0 0 1.5h5.5v5.5a.75.75 0 0 0 1.5 0v-5.5h5.5a.75.75 0 0 0 0-1.5h-5.5v-5.5Z"/>
              </svg>
            </button>
          </Link>
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
}

export default function PopularPackages() {
  // Sample package data based on your PDF destinations
  const packages = [
    {
      destination: "Jaipur, Rajasthan",
      title: "Royal Rajasthan Experience",
      region: "Rajasthan, India", 
      days: "04 Days/03 Nights",
      price: 299,
      image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1600&auto=format&fit=crop"
    },
    {
      destination: "Agra, Uttar Pradesh", 
      title: "Taj Mahal Wonder",
      region: "Uttar Pradesh, India",
      days: "03 Days/02 Nights",
      price: 199,
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop",
      badge: "Popular"
    },
    {
      destination: "Goa",
      title: "Goa Beach Paradise",
      region: "Goa, India",
      days: "05 Days/04 Nights", 
      price: 349,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop"
    },
    {
      destination: "Kerala (Munnar & Alleppey)",
      title: "Kerala Backwaters",
      region: "Kerala, India",
      days: "06 Days/05 Nights",
      price: 399,
      image: "https://media.istockphoto.com/id/472909442/photo/backwaters-of-kerala.jpg?s=2048x2048&w=is&k=20&c=ruTvmL4tcs9TlSvAmrWGQYJY-xYfnGuMOrCup0VRpwU="
    },
    {
      destination: "Ladakh, Jammu & Kashmir",
      title: "Ladakh Adventure",
      region: "Jammu & Kashmir, India", 
      days: "07 Days/06 Nights",
      price: 499,
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1600&auto=format&fit=crop",
      badge: "Adventure"
    }
  ];

  useEffect(() => {
    // No extra JS needed for pan-zoom hover; handled per-card.
  }, []);

  return (
    <section className="relative mt-24 md:mt-36 lg:mt-44 py-14 md:py-20 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(43,123,185,0.15),transparent_60%)]">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Left parachute */}
        <div className="absolute left-0 top-1/4 animate-bounce">
          <img src="../assets/parachute.svg" alt="Parachute" className="w-24 h-24" />
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Popular Indian Destinations</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Explore the most visited and beautiful places in India with our curated packages.</p>
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
          {packages.map((pkg, index) => (
            <SwiperSlide key={index}>
              <Card 
                image={pkg.image}
                title={pkg.title}
                region={pkg.region}
                days={pkg.days}
                price={pkg.price}
                badge={pkg.badge}
                destination={pkg.destination}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}