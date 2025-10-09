import React, { useEffect, useRef } from 'react'

export default function CursorFX() {
  const dotRef = useRef(null)
  const scaleRef = useRef(1)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    const move = (e) => {
      const x = e.clientX
      const y = e.clientY
      dot.style.transform = `translate3d(${x - 14}px, ${y - 14}px, 0) scale(${scaleRef.current})`
    }
    const down = () => { scaleRef.current = 1.6 }
    const up = () => { scaleRef.current = 1.0 }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[60] h-7 w-7 rounded-full border-2 border-[color:rgb(var(--brand-secondary))] bg-transparent transition-transform duration-150 ease-out"
      style={{ transform: 'translate3d(-9999px,-9999px,0)' }}
    />
  )
}
