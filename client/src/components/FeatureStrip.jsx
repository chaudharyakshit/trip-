import React from 'react'

export default function FeatureStrip() {
  const items = [
    { title: 'Best Price Guarantee', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4Zm0 2.18 7 3.11v4.71c0 4.52-2.96 8.83-7 10.16-4.04-1.33-7-5.64-7-10.16V6.29l7-3.11Z"/><path d="M11 7h2v5h-2V7Zm0 6h2v2h-2v-2Z"/></svg>
    )},
    { title: '24/7 Friendly Support', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a9 9 0 0 0-9 9v3a4 4 0 0 0 4 4h1v-6H6V10a6 6 0 1 1 12 0v1h-2v6h1a4 4 0 0 0 4-4v-3a9 9 0 0 0-9-9Z"/></svg>
    )},
    { title: 'Secure Payment', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8V6a5 5 0 1 0-10 0v2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2ZM9 6a3 3 0 1 1 6 0v2H9V6Z"/></svg>
    )},
    { title: 'Handpicked Tours', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 2 7l10 5 10-5-10-5Zm0 7L2 4v13l10 5 10-5V4l-10 5Z"/></svg>
    )},
  ]

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.title} className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200 hover:shadow-soft transition">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[color:rgb(var(--brand-secondary))] to-[color:rgb(var(--brand-primary))] text-white grid place-items-center">
              {it.icon}
            </div>
            <div className="font-medium text-slate-700 text-sm md:text-base">{it.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
