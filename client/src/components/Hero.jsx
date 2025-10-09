import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

const CheckItem = ({ children }) => (
  <li className="flex items-center gap-2 text-white/90">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-7.5 9.5a.75.75 0 0 1-1.127.05l-3.5-3.75a.75.75 0 0 1 1.1-1.022l2.9 3.11 6.964-8.824a.75.75 0 0 1 1.02-.116z" clipRule="evenodd" />
    </svg>
    <span>{children}</span>
  </li>
)

export default function Hero() {
  const videoRef = useRef(null)
  const [swiperRef, setSwiperRef] = useState(null)
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })
  // Rotating headline
  const headlines = [
    'Plan Your Trip, Your Way.',
    'Your Journey Begins Here 🚀',
  ]
  const [headlineIndex, setHeadlineIndex] = useState(0)
  const [headlineVisible, setHeadlineVisible] = useState(true)

  useEffect(() => {
    if (!videoRef.current) return
    const v = videoRef.current
    const onEnded = () => {
      if (swiperRef) {
        swiperRef.slideNext()
        // resume autoplay for the image slides
        swiperRef.params.autoplay.delay = 3000
        swiperRef.autoplay.start()
      }
    }
    v.addEventListener('ended', onEnded)
    return () => v.removeEventListener('ended', onEnded)
  }, [swiperRef])

  // When swiper is ready, if the first slide is the video, stop autoplay and play the video
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

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseLeave = () => setCursorPos({ x: -100, y: -100 })

  // Rotate the headline every 4 seconds with a fade
  useEffect(() => {
    const id = setInterval(() => {
      setHeadlineVisible(false)
      setTimeout(() => {
        setHeadlineIndex((i) => (i + 1) % headlines.length)
        setHeadlineVisible(true)
      }, 250) // fade-out duration
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      className="relative overflow-hidden min-h-[80vh] md:min-h-[86vh]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Swiper background slider full-bleed */}
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, Navigation, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSwiper={setSwiperRef}
          onSlideChange={(s) => {
            if (s.realIndex === 0) {
              // Video slide: stop autoplay and let the video control timing
              s.autoplay.stop()
              const v = videoRef.current
              if (v) {
                try { v.currentTime = 0 } catch (e) {}
                v.play().catch(() => {})
              }
            } else {
              // Image slides: ensure 3s delay autoplay
              s.params.autoplay.delay = 3000
              if (!s.autoplay.running) s.autoplay.start()
            }
          }}
          className="h-full"
        >
          <SwiperSlide>
            <div className="absolute inset-0">
              <video ref={videoRef} className="w-full h-full object-cover" muted playsInline>
                {/* User-provided names with robust fallbacks */}
                <source src="/assets/images/HERO%20VIDEO.mp4.mp4" type="video/mp4" />
                <source src="/assets/images/HERO%20VIDEO.mp4" type="video/mp4" />
                <source src="/assets/images/hero%20video.mp4" type="video/mp4" />
                <source src="/assets/images/hero-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* Local image: "hero 1" (support JPG/JPEG and case variations) with remote fallback */}
            <picture>
              <source srcSet="/assets/images/hero%201.jpg.jpeg" type="image/jpeg" />
              <source srcSet="/assets/images/hero%201.jpg" type="image/jpeg" />
              <source srcSet="/assets/images/hero%201.jpeg" type="image/jpeg" />
              <source srcSet="/assets/images/HERO%201.jpg" type="image/jpeg" />
              <source srcSet="/assets/images/HERO%201.jpeg" type="image/jpeg" />
              <img
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2000&auto=format&fit=crop"
                alt="Hero 1"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </picture>
            <div className="absolute inset-0 bg-black/30" />
          </SwiperSlide>
          <SwiperSlide>
            {/* Local image: "HERO 2" (support JPG/JPEG and case variations) with remote fallback */}
            <picture>
              <source srcSet="/assets/images/hero%202.jpg.jpeg" type="image/jpeg" />
              <source srcSet="/assets/images/HERO%202.jpg" type="image/jpeg" />
              <source srcSet="/assets/images/HERO%202.jpeg" type="image/jpeg" />
              <source srcSet="/assets/images/hero%202.jpg" type="image/jpeg" />
              <source srcSet="/assets/images/hero%202.jpeg" type="image/jpeg" />
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop"
                alt="Hero 2"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
            <div className="absolute inset-0 bg-black/30" />
          </SwiperSlide>
        </Swiper>

        {/* Custom circular navigation buttons */}
        <button
          type="button"
          aria-label="Previous slide"
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-lg hover:shadow-xl transition"
          onClick={() => swiperRef && swiperRef.slidePrev()}
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 20 20" fill="currentColor"><path d="M12.78 15.53a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 1 1 1.06 1.06L8.31 10l4.47 4.47a.75.75 0 0 1 0 1.06Z"/></svg>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-lg hover:shadow-xl transition"
          onClick={() => swiperRef && swiperRef.slideNext()}
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 20 20" fill="currentColor"><path d="M7.22 4.47a.75.75 0 0 1 1.06 0L12.78 9a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06L10.69 10 7.22 5.53a.75.75 0 0 1 0-1.06Z"/></svg>
        </button>
      </div>

      {/* Foreground heading area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-12 md:pt-16 h-[80vh] md:h-[86vh] flex items-center">
        <div className="text-white max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm mb-4">
            Enjoy Family Holiday Packages with Flexible Payment Options
          </div>
          <h1
            className={`text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-sm transition-opacity duration-300 ${headlineVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            {headlines[headlineIndex]}
          </h1>
          <p className="mt-4 text-white/90 text-lg md:text-xl">
            Perfect for customized travel experiences — tailored flights, stays, and tours just for you.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            <CheckItem>Trusted travel advisors</CheckItem>
            <CheckItem>Secure payment</CheckItem>
            <CheckItem>24/7 support</CheckItem>
          </ul>
        </div>
      </div>

      {/* Mouse-follow cursor ring */}
      <div
        className="pointer-events-none absolute z-20 border-2 border-white/60 rounded-full hidden md:block"
        style={{
          width: 40,
          height: 40,
          left: cursorPos.x,
          top: cursorPos.y,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 100ms ease-out',
        }}
      />

      {/* YouTube Shorts video embed */}
      <div className="max-w-4xl mx-auto px-4 mt-8 mb-8">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/R8XsEFKo1HQ"
          title="YouTube Shorts Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-lg"
          frameBorder="0"
        ></iframe>
      </div>
    </section>
  )
}
