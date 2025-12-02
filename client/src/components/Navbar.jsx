import React, { useState, useEffect, useRef } from 'react'
import Topbar from './Topbar'
import logo from '../assets/images/Indiasgotrip-logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const phone = '+919695947578'
  const whatsapp = 'https://wa.me/919695947578'
  const [loginOpen, setLoginOpen] = useState(false)
  const [loginStage, setLoginStage] = useState('initial') // 'initial' | 'chooseRole'
  const [contactOpen, setContactOpen] = useState(false)
  const contactRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setContactOpen(false)
      }
    }

    if (contactOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [contactOpen])

  const Menu = () => (
    <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 lg:gap-6 font-semibold text-[14px] md:text-[15px] tracking-tight">
      <li>
        <a className="text-orange-500 transition-colors duration-300 py-2 pb-2.5 border-b-4 border-orange-500" href="/">Home</a>
      </li>
      <li className="relative group">
        <a className="flex items-center gap-1 md:gap-1.5 text-slate-900 hover:text-orange-600 transition-colors duration-300 py-2 pb-2.5 border-b-4 border-transparent group-hover:border-orange-600 whitespace-nowrap" href="#destinations">
          Destination
          <svg className="w-4 h-4 md:w-[18px] md:h-[18px] transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.167l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.24 4.5a.75.75 0 0 1-1.08 0l-4.24-4.5a.75.75 0 0 1 .02-1.06Z"/>
          </svg>
        </a>
        <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg rounded-xl p-3 min-w-[200px] border border-slate-200 mt-2">
          <a className="block px-3 py-2 text-sm rounded-lg hover:bg-slate-50 transition-colors" href="#destinations">Popular</a>
          <a className="block px-3 py-2 text-sm rounded-lg hover:bg-slate-50 transition-colors" href="#destinations">Mountains</a>
          <a className="block px-3 py-2 text-sm rounded-lg hover:bg-slate-50 transition-colors" href="#destinations">Beaches</a>
        </div>
      </li>
      <li className="relative group">
        <a className="flex items-center gap-1 md:gap-1.5 text-slate-900 hover:text-orange-600 transition-colors duration-300 py-2 pb-2.5 border-b-4 border-transparent group-hover:border-orange-600 whitespace-nowrap" href="#services">
          <span className="whitespace-nowrap">Travel Package</span>
          <svg className="w-4 h-4 md:w-[18px] md:h-[18px] transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.167l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.24 4.5a.75.75 0 0 1-1.08 0l-4.24-4.5a.75.75 0 0 1 .02-1.06Z"/>
          </svg>
        </a>
        <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg rounded-xl p-3 min-w-[200px] border border-slate-200 mt-2">
          <a className="block px-3 py-2 text-sm rounded-lg hover:bg-slate-50 transition-colors" href="#services">Tours</a>
          <a className="block px-3 py-2 text-sm rounded-lg hover:bg-slate-50 transition-colors" href="#services">Hotels</a>
          <a className="block px-3 py-2 text-sm rounded-lg hover:bg-slate-50 transition-colors" href="#services">Flights</a>
        </div>
      </li>
      <li className="relative group">
        <a className="flex items-center gap-1 md:gap-1.5 text-slate-900 hover:text-orange-600 transition-colors duration-300 py-2 pb-2.5 border-b-4 border-transparent group-hover:border-orange-600 whitespace-nowrap" href="#blog">
          Pages
          <svg className="w-4 h-4 md:w-[18px] md:h-[18px] transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.167l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.24 4.5a.75.75 0 0 1-1.08 0l-4.24-4.5a.75.75 0 0 1 .02-1.06Z"/>
          </svg>
        </a>
        <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg rounded-xl p-3 min-w-[200px] border border-slate-200 mt-2">
          <a className="block px-3 py-2 text-sm rounded-lg hover:bg-slate-50 transition-colors" href="#blog">Blog</a>
          <a className="block px-3 py-2 text-sm rounded-lg hover:bg-slate-50 transition-colors" href="#testimonials">Reviews</a>
          <a className="block px-3 py-2 text-sm rounded-lg hover:bg-slate-50 transition-colors" href="#contact">Contact</a>
        </div>
      </li>
      <li>
        <a className="text-slate-900 hover:text-orange-600 transition-colors duration-300 py-2 pb-2.5 border-b-4 border-transparent hover:border-orange-600" href="#contact">Contact</a>
      </li>
    </ul>
  )

  return (
    <header className="navbar sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-md">
      <div className="w-full pl-3 pr-6 md:pl-4 md:pr-8 lg:pl-6 lg:pr-10">
        <nav className="h-24 lg:h-28 w-full flex items-center justify-between md:grid md:grid-cols-[auto_1fr_auto] md:items-center">
          {/* Logo */}
          <a className="flex items-center gap-3" href="/" aria-label="IndiasGoTrip Home">
            <img src={logo} alt="IndiasGoTrip" className="h-[72px] md:h-[80px] w-auto" />
          </a>

          <div className="hidden md:flex items-center justify-center">
            <div className="px-3 lg:px-6">
              <Menu />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 lg:gap-4 ml-auto">
            {/* Phone contact dropdown - opens on click and stays open until closed */}
            <div className="relative hidden md:flex items-center gap-2" ref={contactRef}>
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 border border-slate-200">
                <svg className="w-4 h-4 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 6.03c-.12-1.1.78-2.03 1.89-2.03H7c.9 0 1.67.6 1.9 1.46l.7 2.62a2 2 0 0 1-.5 1.9l-1.2 1.2a15.05 15.05 0 0 0 6.02 6.02l1.2-1.2a2 2 0 0 1 1.9-.5l2.62.7c.86.23 1.46 1 1.46 1.9v3.1c0 1.11-.93 2.01-2.03 1.89A20 20 0 0 1 2.01 6.03Z" />
                </svg>
              </div>
              
              <button
                type="button"
                onClick={() => setContactOpen((prev) => !prev)}
                className="flex flex-col items-end leading-tight cursor-pointer"
              >
                <span className="text-[11px] text-slate-600 font-medium">Need Help?</span>
                <span className="text-sm font-semibold text-slate-900">+91 96959 47578</span>
              </button>

              {contactOpen && (
                <div className="absolute right-0 top-full mt-2 z-40">
                  <Topbar />
                </div>
              )}
            </div>

            {/* Search icon only */}
            <button
              type="button"
              aria-label="Search"
              className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 shadow"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-3.5-3.5"/>
              </svg>
            </button>
            {/* Login button + popover */}
            <div className="relative">
              <button 
                type="button"
                aria-haspopup="dialog"
                aria-expanded={loginOpen}
                onClick={() => { setLoginOpen((v) => !v); setLoginStage('initial') }}
                className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-[rgb(242,138,15)] text-white hover:brightness-110 font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                Login
              </button>

              {loginOpen && (
                <div className="absolute right-0 mt-3 w-72 bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50">
                  {/* Stage 1: choose sign in or login */}
                  {loginStage === 'initial' && (
                    <div className="p-4">
                      <h4 className="text-lg font-bold mb-3">Welcome</h4>
                      <div className="grid gap-3">
                        <button
 onClick={() => { window.location.assign("https://indiasgotrip.com/web_apps/newUserRequest.jsp"); }}

  className="inline-flex items-center justify-center h-11 rounded-xl border border-slate-300 hover:bg-slate-50 font-semibold w-full"
>
  Sign up / Create account
</button>

                        <button
                          type="button"
                          onClick={() => setLoginStage('chooseRole')}
                          className="inline-flex items-center justify-center h-11 rounded-xl bg-slate-900 text-white hover:bg-black font-semibold"
                        >
                          Continue to Login
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Stage 2: choose role */}
                  {loginStage === 'chooseRole' && (
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-bold">Login as</h4>
                        <button className="text-sm text-blue-600 hover:underline" onClick={() => setLoginStage('initial')}>Back</button>
                      </div>
                      <div className="grid gap-3">
                      <button
onClick={() => { window.location.assign("https://indiasgotrip.com/web_apps/login.jsp"); }}

  className="inline-flex items-center justify-center h-11 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-semibold w-full"
>
  User
</button>

                      </div>
                    </div>
                  )}

                  <div className="px-4 py-3 bg-slate-50 border-t border-slate-200 text-sm">
                    <button className="text-slate-600 hover:text-slate-900" onClick={() => setLoginOpen(false)}>Close</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button 
            aria-label="Toggle Menu" 
            className="md:hidden p-3 rounded-xl hover:bg-slate-100 transition-colors duration-300" 
            onClick={() => setOpen(!open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {open && (
          <div className="md:hidden py-6 border-t border-slate-200 bg-white/95 backdrop-blur-sm">
            <Menu />
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
              <a href={`tel:${phone}`} className="text-slate-700 font-medium text-lg">Call: +91 96959 47578</a>
              <a href={whatsapp}  rel="noreferrer" className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-emerald-500 text-white font-semibold text-base hover:bg-emerald-600 transition-colors">
                WhatsApp
              </a>
           <button
onClick={() => { window.location.assign("https://indiasgotrip.com/web_apps/login.jsp"); }}

  className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-[rgb(242,138,15)] text-white font-semibold text-base hover:opacity-90 transition-colors w-full"
>
  Login
</button>

            
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
