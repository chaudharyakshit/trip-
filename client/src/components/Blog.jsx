import React from 'react'

export default function Blog() {
  const posts = [
  { 
    title: 'Best time to visit Kerala', 
    text: 'Weather, seasons, and festivals to plan your perfect trip.', 
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    title: 'Goa beyond beaches', 
    text: 'Hidden gems, spice farms, and local cuisine.', 
    img: 'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29hfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600' 
  },
  { 
    title: 'Packing for the Himalayas', 
    text: 'Essentials for high-altitude adventures.', 
    img: 'https://images.unsplash.com/photo-1662448747251-d3c79fdb7875?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhpbWFsYXlzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600' 
  },
];

   return (
    <section id="blog" className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="section-title">Travel tips & stories</h2>
            <p className="text-slate-500">Guides and insights from our travel experts.</p>
          </div>
          <a href="#" className="btn-outline-brand">All posts</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-soft hover:shadow-lg transition">
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover hover:scale-[1.03] transition" />
              </div>
              <div className="p-4">
                <h6 className="font-semibold">{p.title}</h6>
                <p className="text-sm text-slate-600">{p.text}</p>
                <a href="#" className="inline-flex items-center gap-2 text-[color:rgb(var(--brand-secondary))] hover:underline">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414L13.586 10 10.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd"/></svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
