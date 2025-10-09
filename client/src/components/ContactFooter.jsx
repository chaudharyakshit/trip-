import React from 'react'

export default function ContactFooter() {
  const year = new Date().getFullYear()
  const phone = '+918607998882'
  const whatsapp = 'https://wa.me/918607998882'
  return (
    <>
      <section id="contact" className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl bg-gradient-to-br from-[color:rgb(var(--brand-secondary))] to-[color:rgb(var(--brand-primary))] text-white p-6 md:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 shadow-soft">
            <div>
              <h3 className="m-0 font-bold text-2xl">Ready to plan your dream trip?</h3>
              <p className="m-0 text-white/90">Talk to an IndiasGoTrip expert today.</p>
            </div>
            <div className="flex gap-3">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-slate-800 hover:bg-slate-100 transition">WhatsApp</a>
              <a href={`tel:${phone}`} className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-white/80 hover:bg-white/10 transition">Call us</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <img src="/assets/images/logo.png" alt="IndiasGoTrip" className="h-7 w-auto" />
            <span className="text-sm text-slate-500">&copy; {year} IndiasGoTrip. All rights reserved.</span>
          </div>
          <ul className="flex items-center gap-4 text-sm">
            <li><a className="text-slate-500 hover:text-slate-700" href="#">Privacy</a></li>
            <li><a className="text-slate-500 hover:text-slate-700" href="#">Terms</a></li>
            <li><a className="text-slate-500 hover:text-slate-700" href={`tel:${phone}`}>Call: +91 86079 98882</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}
