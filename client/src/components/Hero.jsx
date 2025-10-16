import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

export default function Hero() {
  const videoRef = useRef(null)
  const [swiperRef, setSwiperRef] = useState(null)
  const [activeTab, setActiveTab] = useState('Tours')

  const TabIcon = ({ name }) => {
    switch (name) {
      case 'Tours':
        return (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm2 2v12h14V6H5Zm3 2h2v2H8V8Zm0 4h2v2H8v-2Zm4-4h2v2h-2V8Zm0 4h2v2h-2v-2Z"/></svg>)
      case 'Hotels':
        return (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 11V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5h-2V8H5v3H3Zm0 2h18v6a1 1 0 0 1-1 1h-4v-3H8v3H4a1 1 0 0 1-1-1v-6Z"/></svg>)
      case 'Visa':
        return (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3h10a2 2 0 0 1 2 2v2h4v12a2 2 0 0 1-2 2H8v-2h10V9h-2v2H4V5a2 2 0 0 1 2-2Zm0 6h10V5H6v4Zm1 11a3 3 0 1 1 6 0H5Z"/></svg>)
      case 'Experience':
        return (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 9.5 8.5 3 11l6.5 2.5L12 20l2.5-6.5L21 11l-6.5-2.5L12 2Z"/></svg>)
      default:
        return null
    }
  }

  useEffect(() => {
    if (!swiperRef) return
    if (swiperRef.realIndex === 0) {
      swiperRef.autoplay.stop()
      const v = videoRef.current
      if (v) {
        try { v.currentTime = 0 } catch (e) {}
        v.play().catch(() => {})
      }
    }
  }, [swiperRef])

  return (
    <section className="relative overflow-hidden min-h-[80vh] md:min-h-[86vh]">
      {/* Background slider */}
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, Navigation, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onSwiper={setSwiperRef}
          className="h-full"
        >
          <SwiperSlide>
            <div className="absolute inset-0">
              <video ref={videoRef} className="w-full h-full object-cover" muted playsInline>
                <source src="/assets/images/HERO%20VIDEO.mp4.mp4" type="video/mp4" />
                <source src="/assets/images/HERO%20VIDEO.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source srcSet="/assets/images/hero%201.jpg.jpeg" type="image/jpeg" />
              <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2000&auto=format&fit=crop" alt="Hero 1" className="w-full h-full object-cover" />
            </picture>
            <div className="absolute inset-0 bg-black/30" />
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source srcSet="/assets/images/hero%202.jpg.jpeg" type="image/jpeg" />
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop" alt="Hero 2" className="w-full h-full object-cover" />
            </picture>
            <div className="absolute inset-0 bg-black/30" />
          </SwiperSlide>
        </Swiper>

        {/* Round nav arrows */}
        <button
          type="button"
          aria-label="Previous slide"
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-lg transition"
          onClick={() => swiperRef && swiperRef.slidePrev()}
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 20 20" fill="currentColor"><path d="M12.78 15.53a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 1 1 1.06 1.06L8.31 10l4.47 4.47a.75.75 0 0 1 0 1.06Z"/></svg>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-lg transition"
          onClick={() => swiperRef && swiperRef.slideNext()}
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 20 20" fill="currentColor"><path d="M7.22 4.47a.75.75 0 0 1 1.06 0L12.78 9a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06L10.69 10 7.22 5.53a.75.75 0 0 1 0-1.06Z"/></svg>
        </button>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16 h-[80vh] md:h-[86vh] flex items-start">
        <div className="w-full">
          <div className="text-center text-white mx-auto max-w-4xl mb-6 md:mb-10">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Your Gateway To
              <br />
              The World.
            </h1>
            <p className="mt-4 text-white/90 text-base md:text-xl max-w-3xl mx-auto">
              Ideal for explorers seeking seamless booking and expert travel
              support every step of the way.
            </p>
          </div>

          {/* Themed background behind search panel */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40">
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent"></div>
            <div className="absolute -bottom-6 left-1/4 w-56 h-56 rounded-full blur-3xl opacity-25 bg-[color:rgb(var(--brand-secondary))]"></div>
            <div className="absolute -bottom-10 right-1/4 w-56 h-56 rounded-full blur-3xl opacity-25 bg-[color:rgb(var(--brand-primary))]"></div>
          </div>

          {/* Search panel pinned bottom with icons */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-6 w-full px-4">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden max-w-6xl mx-auto">
              {/* Tabs */}
              <div className="flex gap-2 p-3">
                {['Tours','Hotels','Visa','Experience'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setActiveTab(t)}
                    className={`${activeTab===t ? 'bg-[color:rgb(var(--brand-secondary))] text-white' : 'bg-white text-slate-800 border border-slate-200'} inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold shadow-sm`}
                  >
                    <TabIcon name={t} />
                    {t}
                  </button>
                ))}
              </div>
              

            {/* Fields */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 md:p-6">
              <div className="col-span-1 md:col-span-2">
                <label className="block text-slate-500 text-sm mb-1">Destination</label>
                <div className="flex items-center gap-3 h-14 px-4 rounded-xl border border-slate-200 bg-white">
                  <svg className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>
                  <div className="leading-tight">
                    <div className="text-slate-900 font-semibold">Bali Paradaise</div>
                    <div className="text-slate-500 text-sm">Indonesia</div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-slate-500 text-sm mb-1">Date</label>
                <div className="flex items-center gap-3 h-14 px-4 rounded-xl border border-slate-200 bg-white">
                  <svg className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1Zm12 9H5v7h14v-7Z"/></svg>
                  <div className="leading-tight">
                    <div className="text-slate-900 font-semibold">14 October</div>
                    <div className="text-slate-500 text-sm">Tuesday 2025</div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-slate-500 text-sm mb-1">Category</label>
                <div className="flex items-center gap-3 h-14 px-4 rounded-xl border border-slate-200 bg-white">
                  <svg className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c4.418 0 8 2.239 8 5v10a1 1 0 0 1-1.555.832L12 15.5l-6.445 3.332A1 1 0 0 1 4 18V8c0-2.761 3.582-5 8-5Z"/></svg>
                  <div className="leading-tight">
                    <div className="text-slate-900 font-semibold">Family Tour</div>
                    <div className="text-slate-500 text-sm">Category</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA row */}
              <div className="flex items-center justify-between px-4 md:px-6 pb-4 md:pb-6">
              <p className="hidden md:block text-slate-500 text-sm">
                Can’t find what you’re looking for? create your <a href="#" className="text-[color:rgb(var(--brand-secondary))] font-semibold">Custom Itinerary</a>
              </p>
              <button type="button" className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-[color:rgb(var(--brand-secondary))] text-white font-semibold shadow hover:brightness-110">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M10 2a8 8 0 1 1-6.32 12.9l-3.02 3.02a1 1 0 0 1-1.41-1.41l3.02-3.02A8 8 0 0 1 10 2Zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 10 4Z"/></svg>
                Search
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
