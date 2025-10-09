import React from 'react'

export default function Services() {
  const items = [
    { icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/><path fillRule="evenodd" d="M2.25 20.1a7.5 7.5 0 0 1 19.5 0v.15a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V20.1Z" clipRule="evenodd"/></svg>
      ), title: 'Flights', text: 'Best routes and prices from trusted carriers.' },
    { icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M3.75 3A.75.75 0 0 0 3 3.75v16.5c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 20.25 3H3.75Zm1.5 8.25A.75.75 0 0 1 6 10.5h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Zm0-3.75A.75.75 0 0 1 6 6.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Zm0 7.5A.75.75 0 0 1 6 14.25h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z"/></svg>
      ), title: 'Hotels', text: 'Comfort stays from boutique to luxury.' },
    { icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M2.25 12 12 3l9.75 9-1.5 1.5L12 6 3.75 13.5 2.25 12Z"/><path d="M4.5 13.5v6.75h4.5v-3.75h6v3.75h4.5V13.5L12 7.5 4.5 13.5Z"/></svg>
      ), title: 'Tours', text: 'Curated itineraries and local experiences.' },
    { icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M8.25 4.5A2.25 2.25 0 0 0 6 6.75v10.5A2.25 2.25 0 0 0 8.25 19.5h7.5A2.25 2.25 0 0 0 18 17.25V6.75A2.25 2.25 0 0 0 15.75 4.5h-7.5Z"/></svg>
      ), title: 'Support', text: '24/7 assistance before and during travel.' },
  ]

  return (
    <section id="services" className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">What we offer</h2>
          <p className="text-slate-500">Complete travel solutions tailored to you.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-soft hover:shadow-lg transition">
              <div className="mx-auto mb-3 h-14 w-14 rounded-full bg-gradient-to-br from-[color:rgb(var(--brand-50,231,148,29))] to-orange-200 grid place-items-center text-[color:rgb(var(--brand-primary))]">
                {item.icon}
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
