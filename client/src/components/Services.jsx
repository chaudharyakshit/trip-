import React from 'react'

export default function Services() {
  const items = [
    { img: '/assets/images/vector image flights.jpeg', title: 'Flights', text: 'Best routes and prices from trusted carriers.' },
    { img: '/assets/images/hotels.jpeg', title: 'Hotels', text: 'Comfort stays from boutique to luxury.' },
    { img: '/assets/images/tours.jpeg', title: 'Tours', text: 'Curated itineraries and local experiences.' },
    { img: '/assets/images/support.jpeg', title: 'Support', text: '24/7 assistance before and during travel.' },
  ]

  return (
    <section
      id="services"
      className="py-14 md:py-20 relative overflow-hidden"
    >
      {/* Background Image (brighter version of Popular Destinations) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/bg4.png"
          alt="background"
          className="w-full h-full object-cover brightness-125 saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#b3d9ff]/40 via-[#d9ecff]/30 to-white/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="section-title">What we offer</h2>
          <p className="text-slate-500">Complete travel solutions tailored to you.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {items.map((item) => (
            <div key={item.title} className="hover-lift rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-soft hover:shadow-lg transition">
              <div className="mx-auto mb-3 h-20 w-20 rounded-full bg-gradient-to-br from-[color:rgb(var(--brand-secondary))]/15 via-white to-[color:rgb(var(--brand-primary))]/25 grid place-items-center overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-14 w-14 object-contain"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const el = e.currentTarget
                    const triedPng = el.dataset.triedPng === '1'
                    if (!triedPng && el.src.endsWith('.jpg')) {
                      el.dataset.triedPng = '1'
                      el.src = el.src.replace('.jpg', '.png')
                    } else {
                      el.src = '/assets/images/Indiasgotrip-logo.png'
                    }
                  }}
                />
              </div>
              <h6 className="font-semibold mb-1">{item.title}</h6>
              <p className="text-sm text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
