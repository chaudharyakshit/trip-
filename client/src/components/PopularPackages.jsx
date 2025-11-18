import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function PopularPackages() {
  const packages = [
  {
    slug: "jaipur-page",
    destination: "Jaipur, Rajasthan",
    title: "Royal Rajasthan Experience",
    region: "Rajasthan, India",
    days: "04 Days/03 Nights",
    price: 7475,
    image: "../../../assets/card-images/jaipur.png"
  },
  {
    slug: "agra-page",
    destination: "Agra, Uttar Pradesh",
    title: "Taj Mahal Wonder",
    region: "Uttar Pradesh, India",
    days: "03 Days/02 Nights",
    price: 4975,
    image: "../../../assets/card-images/Agra.png"
  },
  {
    slug: "goa",
    destination: "Goa",
    title: "Goa Beach Paradise",
    region: "Goa, India",
    days: "05 Days/04 Nights",
    price: 8725,
    image: "../../../assets/card-images/Goa.png"
  },
  {
    slug: "kerala",
    destination: "Kerala (Munnar & Alleppey)",
    title: "Kerala Backwaters",
    region: "Kerala, India",
    days: "06 Days/05 Nights",
    price: 9975,
    image: "../../../assets/card-images/Kerala.png"
  },
  {
    slug: "delhi",
    destination: "Delhi",
    title: "Heritage Capital Tour",
    region: "Delhi, India",
    days: "03 Days/02 Nights",
    price: 6475,
    image: "../../../assets/card-images/Delhi.png"
  },
  {
    slug: "mumbai",
    destination: "Mumbai, Maharashtra",
    title: "City of Dreams Experience",
    region: "Maharashtra, India",
    days: "04 Days/03 Nights",
    price: 8225,
    image: "../../../assets/card-images/Mumbai.png"
  },
  {
    slug: "udaipur",
    destination: "Udaipur, Rajasthan",
    title: "City of Lakes Tour",
    region: "Rajasthan, India",
    days: "03 Days/02 Nights",
    price: 6975,
    image: "../../../assets/card-images/udaipur.png"
  },
  {
    slug: "varanasi",
    destination: "Varanasi, Uttar Pradesh",
    title: "Spiritual Ganga Tour",
    region: "Uttar Pradesh, India",
    days: "03 Days/02 Nights",
    price: 6225,
    image: "../../../assets/card-images/Varanasi.png"
  },
  {
    slug: "rishikesh",
    destination: "Rishikesh, Uttarakhand",
    title: "Yoga & Adventure Escape",
    region: "Uttarakhand, India",
    days: "03 Days/02 Nights",
    price: 5475,
    image: "../../../assets/card-images/Rishikesh.png"
  },
  {
    slug: "shimla",
    destination: "Shimla, Himachal Pradesh",
    title: "Queen of Hills Getaway",
    region: "Himachal Pradesh, India",
    days: "04 Days/03 Nights",
    price: 7225,
    image: "../../../assets/card-images/Shimla.png"
  },
  {
    slug: "ladakh",
    destination: "Ladakh, Jammu & Kashmir",
    title: "Ladakh Adventure",
    region: "J&K, India",
    days: "07 Days/06 Nights",
    price: 12475,
    image: "../../../assets/card-images/Ladakh.png"
  },
  {
    slug: "darjeeling",
    destination: "Darjeeling, West Bengal",
    title: "Tea Garden Retreat",
    region: "West Bengal, India",
    days: "04 Days/03 Nights",
    price: 6975,
    image: "../../../assets/card-images/darjeeling.png"
  },
  {
    slug: "amritsar",
    destination: "Amritsar, Punjab",
    title: "Golden Temple Journey",
    region: "Punjab, India",
    days: "02 Days/01 Night",
    price: 4975,
    image: "../../../assets/card-images/Amritsar.png"
  },
  // {
  //   slug: "hampi",
  //   destination: "Hampi, Karnataka",
  //   title: "Heritage Ruins Tour",
  //   region: "Karnataka, India",
  //   days: "03 Days/02 Nights",
  //   price: 6225,
  //   image: "../../../assets/card-images/Hampi,-Karnataka.png"
  // },
  // {
  //   slug: "mysore",
  //   destination: "Mysore, Karnataka",
  //   title: "Royal Mysore Tour",
  //   region: "Karnataka, India",
  //   days: "03 Days/02 Nights",
  //   price: 5725,
  //   image: "../../../assets/card-images/mysore.png"
  // },
  {
    slug: "coorg",
    destination: "Coorg, Karnataka",
    title: "Coffee Hills Escape",
    region: "Karnataka, India",
    days: "03 Days/02 Nights",
    price: 5975,
    image: "../../../assets/card-images/Coorg,-Karnataka.png"
  },
  {
    slug: "khajuraho",
    destination: "Khajuraho, Madhya Pradesh",
    title: "Temple Art Tour",
    region: "Madhya Pradesh, India",
    days: "03 Days/02 Nights",
    price: 6475,
    image: "../../../assets/card-images/Khajuraho,-Madhya-Pradesh.png"
  },
  {
    slug: "konark",
    destination: "Konark, Odisha",
    title: "Sun Temple Heritage Tour",
    region: "Odisha, India",
    days: "03 Days/02 Nights",
    price: 5975,
    image: "../../../assets/card-images/Konark,-Odisha.png"
  },
  {
    slug: "kutch",
    destination: "Rann of Kutch, Gujarat",
    title: "White Desert Festival",
    region: "Gujarat, India",
    days: "04 Days/03 Nights",
    price: 8725,
    image: "../../../assets/card-images/Rann.png"
  },
  {
    slug: "sikkim",
    destination: "Sikkim (Gangtok)",
    title: "Mystical Himalayan Tour",
    region: "Sikkim, India",
    days: "05 Days/04 Nights",
    price: 9975,
    image: "../../../assets/card-images/Sikkim.png"
  },
  {
    slug: "pushkar",
    destination: "Pushkar, Rajasthan",
    title: "Lake & Temple Tour",
    region: "Rajasthan, India",
    days: "02 Days/01 Night",
    price: 4725,
    image: "../../../assets/card-images/Pushkar.png"
  },
  {
    slug: "mahabalipuram",
    destination: "Mahabalipuram, Tamil Nadu",
    title: "Shore Temple Tour",
    region: "Tamil Nadu, India",
    days: "02 Days/01 Night",
    price: 4975,
    image: "../../../assets/card-images/Mahabalipuram.png"
  },
  {
    slug: "ajanta-ellora",
    destination: "Ajanta & Ellora Caves",
    title: "Ancient Caves Tour",
    region: "Maharashtra, India",
    days: "03 Days/02 Nights",
    price: 6475,
    image: "../../../assets/card-images/Ajanta.png"
  },
  {
    slug: "pune",
    destination: "Pune, Maharashtra",
    title: "Cultural Pune Tour",
    region: "Maharashtra, India",
    days: "02 Days/01 Night",
    price: 4475,
    image: "../../../assets/card-images/Pune,-Maharashtra.png"
  },
  {
    slug: "auli",
    destination: "Auli, Uttarakhand",
    title: "Skiing & Snow Adventure",
    region: "Uttarakhand, India",
    days: "04 Days/03 Nights",
    price: 9225,
    image: "../../../assets/card-images/Auli,-Uttarakhand.png"
  }
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
                    <Link to={`/destination/${pkg.slug}`}>
                      <button className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold hover:scale-105 transition-transform">
                        Book Now
                      </button>
                    </Link>
                    <p className="text-xl font-bold text-slate-900">
                      <a href="https://wa.me/918607998882?text=Hi, I'm interested in this package. Please share the pricing details." target="_blank" className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm font-semibold transition-colors inline-block">
                        Price on Request
                      </a>
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
