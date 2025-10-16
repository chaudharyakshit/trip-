import React from 'react'

const Service = ({ icon, title, subtitle }) => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex items-start gap-4">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[color:rgb(var(--brand-secondary))]/10 text-[color:rgb(var(--brand-secondary))]">
      {icon}
    </div>
    <div>
      <div className="font-semibold text-slate-900">{title}</div>
      <div className="text-sm text-slate-600">{subtitle}</div>
    </div>
  </div>
)

export default function SmartServices() {
  return (
    <section className="relative py-16 md:py-24 bg-[#fff7ef]">
      {/* light pattern + theme accents */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 left-10 w-64 h-64 rounded-full blur-3xl opacity-20 bg-[color:rgb(var(--brand-secondary))]"></div>
        <div className="absolute -bottom-24 right-10 w-64 h-64 rounded-full blur-3xl opacity-20 bg-[color:rgb(var(--brand-primary))]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Left copy */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Your Trustpoint, GoFly Best for
            <br />
            Travel Agency.
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            At GoFly Travel Agency, we are passionate about creating exceptional travel experiences. Whether you're looking for a relaxing beach vacation, an adventurous trek, a luxurious getaway, or a cultural expedition.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-extrabold text-slate-900">12</div>
            <div className="leading-tight text-slate-700"><div className="font-semibold">Years</div><div className="text-sm">of Experience</div></div>
          </div>
          <div className="mt-8">
            <div className="text-slate-800 font-semibold mb-3">We Provide to Smart Services</div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Service title="Hotel Booking" subtitle="Best stays" icon={<svg className='w-6 h-6' viewBox='0 0 24 24' fill='currentColor'><path d='M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v13h-2v-3H5v3H3V6Zm2 8h14V6H5v8Z'/></svg>} />
              <Service title="Top Destinations" subtitle="Handpicked" icon={<svg className='w-6 h-6' viewBox='0 0 24 24' fill='currentColor'><path d='M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z'/></svg>} />
              <Service title="Visa Processing" subtitle="Hassle free" icon={<svg className='w-6 h-6' viewBox='0 0 24 24' fill='currentColor'><path d='M4 3h10a2 2 0 0 1 2 2v2h4v12a2 2 0 0 1-2 2H8v-2h10V9h-2v2H4V5a2 2 0 0 1 2-2Zm0 6h10V5H6v4Z'/></svg>} />
              <Service title="Tour Experiences" subtitle="Guided trips" icon={<svg className='w-6 h-6' viewBox='0 0 24 24' fill='currentColor'><path d='M12 2 9.5 8.5 3 11l6.5 2.5L12 20l2.5-6.5L21 11l-6.5-2.5L12 2Z'/></svg>} />
              <Service title="Customize Package" subtitle="Your way" icon={<svg className='w-6 h-6' viewBox='0 0 24 24' fill='currentColor'><path d='M4 4h16v4H4V4Zm0 6h16v10H4V10Z'/></svg>} />
              <Service title="Adventure Travel" subtitle="Thrilling" icon={<svg className='w-6 h-6' viewBox='0 0 24 24' fill='currentColor'><path d='M3 12h4l3 7 4-14 3 7h4'/></svg>} />
            </div>
          </div>
        </div>

        {/* Right arches images */}
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[36px] overflow-hidden shadow-lg border border-slate-200 col-span-1 self-end">
            <img className="w-full h-72 object-cover" src="https://images.unsplash.com/photo-1544551763-7ef42086eaff?q=80&w=1200&auto=format&fit=crop" alt="Beach" />
          </div>
          <div className="rounded-[36px] overflow-hidden shadow-lg border border-slate-200 col-span-1">
            <img className="w-full h-96 object-cover" src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1200&auto=format&fit=crop" alt="Waterfall" />
          </div>
        </div>
      </div>
    </section>
  )
}



