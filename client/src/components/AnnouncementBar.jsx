import React, { useEffect, useState } from 'react'

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0)
  const messages = [
    '“Discover India, Your Way — with IndiasGo Trip”',
    'Find perfect destinations, best deals, and unforgettable experiences — all in one place. 👉 “Your Journey Begins Here 🚀”',
    '👉 “Explore the Colors of India with IndiasGo Trip”',
  ]

  // autoplay rotation
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % messages.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="w-full bg-[#ff7a00] text-white select-none relative z-40">
      <div className="relative z-40 w-full px-3 md:px-6 h-14 flex items-center">
        <button
          type="button"
          aria-label="Previous announcement"
          className="hidden sm:inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 transition-colors mr-2"
          onClick={() => setIndex((i)=> (i - 1 + messages.length) % messages.length)}
        >
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M12.78 15.53a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 1 1 1.06 1.06L8.31 10l4.47 4.47a.75.75 0 0 1 0 1.06Z"/></svg>
        </button>
        <div className="flex-1">
          <div className="h-14 w-full flex items-center justify-center px-3 text-[17px] md:text-[18px] font-semibold text-white text-center tracking-wide whitespace-nowrap" style={{textShadow:'0 1px 2px rgba(0,0,0,.25)'}}>
            {messages[index]}
          </div>
        </div>
        <button
          type="button"
          aria-label="Next announcement"
          className="hidden sm:inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 transition-colors ml-2"
          onClick={() => setIndex((i)=> (i + 1) % messages.length)}
        >
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M7.22 4.47a.75.75 0 0 1 1.06 0L12.78 9a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06L10.69 10 7.22 5.53a.75.75 0 0 1 0-1.06Z"/></svg>
        </button>
      </div>
    </div>
  )
}
