import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/award-section.css';

export default function AwardSection() {
  return (
    <section className="award-section relative py-12 md:py-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background image wrapper (parallax-style) */}
        <div className="award-frame-bg relative h-[380px] md:h-[480px] lg:h-[560px] rounded-[40px] overflow-hidden shadow-2xl">
          {/* Big rounded outer frame + connector lines (no inner card) */}
          <div className="pointer-events-none absolute inset-x-6 md:inset-x-12 lg:inset-x-[72px] top-8 bottom-8">
            <div className="award-frame-outer w-full h-full rounded-[46px] border border-white/40">
              {/* horizontal connector lines aligned roughly with CTA */}
              <div className="hidden md:block absolute left-0 top-[63%] w-1/3 h-px bg-white/70" />
              <div className="hidden md:block absolute right-0 top-[63%] w-1/3 h-px bg-white/70" />
              {/* glowing center dot */}
              <div className="hidden md:flex absolute left-1/2 top-[63%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]" />
            </div>
          </div>

          {/* Center content directly on background (no glass card) */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="relative max-w-3xl w-full px-6 py-8 md:px-12 md:py-10 text-center text-white">
              {/* Top badge */}
              <div className="flex flex-col items-center gap-2 mb-4">
                <div className="inline-flex items-center gap-2 text-sm md:text-base font-medium tracking-[0.15em] uppercase">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/20">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 4H16V6C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6V4Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M7 4H5C4.44772 4 4 4.44772 4 5V7C4 8.65685 5.34315 10 7 10H8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M16 10H17C18.6569 10 20 8.65685 20 7V5C20 4.44772 19.5523 4 19 4H17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M10 14L8 20H16L14 14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="tracking-[0.2em] text-xs md:text-sm font-semibold uppercase opacity-90">
                    🏆 The IndiasGo Excellence Award
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs md:text-sm opacity-90">
                  <span className="text-yellow-300">★★★★★</span>
                  <span>Trusted by travellers across India</span>
                </div>
              </div>

              {/* Main heading */}
              <p className="text-sm md:text-base font-semibold tracking-[0.35em] uppercase text-sky-200 mb-2">
                Nationwide Recognition
              </p>
              <div className="mb-4">
                <div className="text-[44px] md:text-[64px] lg:text-[80px] leading-none font-extrabold tracking-[0.35em] text-white">
                  BEST
                </div>
                <div className="mt-1 text-2xl md:text-3xl lg:text-4xl italic font-medium">
                  Travel & Trip Planner
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-100/90 max-w-xl mx-auto mb-6">
                From weekend getaways to cross-country explorations, IndiasGo Trip designs travel experiences tailored to your interests, comfort, and budget  ensuring every journey is smooth, memorable, and uniquely yours.
              </p>

              {/* CTA button (center of lines) */}
              <div className="flex justify-center">
                <Link
                  to="/destinations"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 hover:bg-sky-600 text-sm md:text-base font-semibold px-8 md:px-10 py-3 md:py-3.5 shadow-lg shadow-sky-500/40 transition-colors"
                >
                  View All Destinations
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.75 10.75H13.19L9.22 14.72C8.92734 15.0127 8.92734 15.4876 9.22 15.7803C9.51266 16.073 9.98755 16.073 10.2802 15.7803L15.5302 10.5303C15.6708 10.3897 15.75 10.1989 15.75 10C15.75 9.80109 15.6708 9.61032 15.5302 9.46967L10.2802 4.21967C9.98755 3.927 9.51266 3.927 9.22 4.21967C8.92734 4.51234 8.92734 4.98723 9.22 5.2799L13.19 9.25H4.75C4.33579 9.25 4 9.58579 4 10C4 10.4142 4.33579 10.75 4.75 10.75Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
