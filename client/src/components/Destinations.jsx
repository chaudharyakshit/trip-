import React from 'react'

export default function Destinations() {
  const cards = [
    { title: 'Goa', text: 'Sun, sand, and vibrant nightlife.', img: '/assets/images/destinations/goa.jpg' },
    { title: 'Jaipur', text: 'Palaces, forts, and pink charm.', img: '/assets/images/destinations/jaipur.jpg' },
    { title: 'Ladakh', text: 'Himalayan vistas and monasteries.', img: '/assets/images/destinations/ladakh.jpg' },
    { title: 'Kerala', text: 'Backwaters and serene greenery.', img: '/assets/images/destinations/kerala.jpg' },
  ]

  return (
    <section id="destinations" className="py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
          <div>
            <h2 className="section-title">Featured Destinations</h2>
            <p className="text-slate-500">Handpicked places to inspire your next getaway.</p>
          </div>
          <a href="#" className="btn-outline-brand">View all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <article key={c.title} className="group rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-soft hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="h-44 w-full overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition" />
              </div>
              <div className="p-4">
                <h5 className="font-semibold mb-1">{c.title}</h5>
                <p className="text-sm text-slate-500">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
