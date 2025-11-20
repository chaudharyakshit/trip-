import React from 'react'
import './Topbar.css'

export default function Topbar() {
  const whatsappLink = 'https://wa.me/919695947578'
  const phoneNumber = '+919695947578'
  const email = 'info@indiasgo.com'

  return (
    <div className="topbar">
      {/* WhatsApp */}
      <a href={whatsappLink} target="_blank" rel="noreferrer" className="contact-card contact-whatsapp">
        <div className="icon-circle whatsapp">
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M19.11 17.49c-.29-.14-1.7-.84-1.96-.93-.26-.1-.45-.14-.64.14-.19.29-.73.93-.9 1.12-.17.19-.33.21-.62.07-.29-.14-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.12-.59.12-.12.29-.31.43-.47.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49-.17 0-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.17 3 .14.19 2.03 3.1 4.92 4.34.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.12.56-.08 1.7-.69 1.94-1.37.24-.68.24-1.26.17-1.37-.07-.12-.26-.19-.55-.33z" />
            <path d="M27.88 4.12A13.92 13.92 0 0 0 16 0C7.18 0 0 7.18 0 16c0 2.82.74 5.56 2.15 7.97L0 32l8.24-2.1A15.87 15.87 0 0 0 16 32c8.82 0 16-7.18 16-16 0-4.25-1.66-8.24-4.12-11.88zM16 29.33c-2.4 0-4.78-.64-6.86-1.84l-.49-.29-4.88 1.24 1.3-4.72-.31-.5A12.85 12.85 0 0 1 3.34 16c0-6.95 5.71-12.66 12.66-12.66 3.38 0 6.57 1.31 8.97 3.71 2.4 2.4 3.71 5.59 3.71 8.97 0 6.95-5.71 12.66-12.66 12.66z" />
          </svg>
        </div>
        <div className="contact-text">
          <span className="label">WhatsApp</span>
          <span className="value">{phoneNumber}</span>
        </div>
      </a>

      {/* Mail Support */}
      <a href={`mailto:${email}`} className="contact-card contact-mail">
        <div className="icon-circle mail">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.01L12 13l8-6.99V6H4Zm0 3.236V18h16V9.236l-7.386 6.189a2 2 0 0 1-2.228 0L4 9.236Z" />
          </svg>
        </div>
        <div className="contact-text">
          <span className="label">Mail Support</span>
          <span className="value">{email}</span>
        </div>
      </a>

      {/* More Inquiry */}
      <a href={`tel:${phoneNumber}`} className="contact-card contact-inquiry">
        <div className="icon-circle inquiry">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-5.586L9 22.414 9.586 17H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
          </svg>
        </div>
        <div className="contact-text">
          <span className="label">More Inquiry</span>
          <span className="value">{phoneNumber}</span>
        </div>
      </a>
    </div>
  )
}
