import React from 'react'

const Stars = ({ full = 5 }) => {
  const items = Array.from({ length: 5 })
  return (
    <div className="flex gap-1 text-amber-400">
      {items.map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 ${i < full ? '' : 'opacity-30'}`}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const data = [
    { name: 'Aisha K.', text: 'Seamless booking and an amazing Kerala houseboat experience. Highly recommend!', stars: 4, avatar: '/assets/images/avatars/user1.jpg' },
    { name: 'Rahul S.', text: 'Our Rajasthan trip was perfectly planned. Great hotels and a knowledgeable guide!', stars: 5, avatar: '/assets/images/avatars/user2.jpg' },
    { name: 'Meera T.', text: 'Loved Ladakh with IndiasGoTrip! Smooth transport and breathtaking views.', stars: 4, avatar: '/assets/images/avatars/user3.jpg' },
    { name: 'Vikram P.', text: 'Great support team. Changed dates last minute with zero hassle.', stars: 4, avatar: '/assets/images/avatars/user4.jpg' },
  ]

  return (
    <section id="testimonials" className="py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-7 gap-8 items-center">
          <div className="lg:col-span-3">
            <h2 className="section-title">Loved by travelers</h2>
            <p className="text-slate-500 mt-2">Real stories from customers who explored with us.</p>
            <a href="#contact" className="btn-brand mt-4 inline-flex">Plan your tour</a>
          </div>
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.map((t) => (
              <div key={t.name} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
                <div className="flex items-center gap-2 mb-2">
                  <img src={t.avatar} alt="" className="h-9 w-9 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <Stars full={t.stars} />
                  </div>
                </div>
                <p className="text-sm text-slate-600 m-0">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
