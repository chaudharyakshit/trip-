import React from 'react'

export default function Topbar() {
  const phone = '+918607998882'
  const whatsapp = 'https://wa.me/918607998882'
  return (
    <div className="hidden md:block bg-slate-900 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 opacity-80">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>
            <span>India</span>
          </div>
          <div className="hidden lg:flex items-center gap-2 opacity-80">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7a1 1 0 0 1 1 1v3.382l2.447 1.224a1 1 0 1 1-.894 1.788l-3-1.5A1 1 0 0 1 11 12V8a1 1 0 0 1 1-1Z"/><path fillRule="evenodd" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-8 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"/></svg>
            <span className="truncate">Open 24/7</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href={`tel:${phone}`} className="inline-flex items-center gap-2 hover:text-orange-200">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 6.03c-.12-1.1.78-2.03 1.89-2.03H7c.9 0 1.67.6 1.9 1.46l.7 2.62a2 2 0 0 1-.5 1.9l-1.2 1.2a15.05 15.05 0 0 0 6.02 6.02l1.2-1.2a2 2 0 0 1 1.9-.5l2.62.7c.86.23 1.46 1 1.46 1.9v3.1c0 1.11-.93 2.01-2.03 1.89A20 20 0 0 1 2.01 6.03Z"/></svg>
            <span>+91 86079 98882</span>
          </a>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600">
            <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4"><path d="M19.11 17.49c-.29-.14-1.7-.84-1.96-.93-.26-.1-.45-.14-.64.14-.19.29-.73.93-.9 1.12-.17.19-.33.21-.62.07-.29-.14-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.12-.59.12-.12.29-.31.43-.47.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49-.17 0-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.17 3 .14.19 2.03 3.1 4.92 4.34.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.12.56-.08 1.7-.69 1.94-1.37.24-.68.24-1.26.17-1.37-.07-.12-.26-.19-.55-.33z"/><path d="M27.88 4.12A13.92 13.92 0 0 0 16 0C7.18 0 0 7.18 0 16c0 2.82.74 5.56 2.15 7.97L0 32l8.24-2.1A15.87 15.87 0 0 0 16 32c8.82 0 16-7.18 16-16 0-4.25-1.66-8.24-4.12-11.88zM16 29.33c-2.4 0-4.78-.64-6.86-1.84l-.49-.29-4.88 1.24 1.3-4.72-.31-.5A12.85 12.85 0 0 1 3.34 16c0-6.95 5.71-12.66 12.66-12.66 3.38 0 6.57 1.31 8.97 3.71 2.4 2.4 3.71 5.59 3.71 8.97 0 6.95-5.71 12.66-12.66 12.66z"/></svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}
