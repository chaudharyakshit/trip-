import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('down')
  const [lastScrollY, setLastScrollY] = useState(0)

  // Detect scroll direction and visibility
  const handleScroll = () => {
    const currentScrollY = window.pageYOffset

    // Show button when scrolled down more than 200px
    if (currentScrollY > 200) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }

    // Detect scroll direction
    if (currentScrollY > lastScrollY) {
      setScrollDirection('down')
    } else if (currentScrollY < lastScrollY) {
      setScrollDirection('up')
    }

    setLastScrollY(currentScrollY)
  }

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  // Dynamic styles based on scroll direction
  const buttonStyles = scrollDirection === 'down'
    ? 'bg-blue-500 hover:bg-blue-600 border-2 border-blue-600'
    : 'bg-white hover:bg-gray-100 text-blue-500 border-2 border-blue-500'

  const iconStyles = scrollDirection === 'down'
    ? 'text-white'
    : 'text-blue-500'

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${buttonStyles}`}
          aria-label="Scroll to top"
        >
          <FaArrowUp className={`text-xl ${iconStyles}`} />
        </button>
      )}
    </>
  )
}

export default ScrollToTop
