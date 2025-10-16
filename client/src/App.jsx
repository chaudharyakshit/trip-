import React from 'react'
import Navbar from './components/Navbar.jsx'
import CursorFX from './components/CursorFX.jsx'
import AnnouncementBar from './components/AnnouncementBar.jsx'
import Hero from './components/Hero.jsx'
import FeatureStrip from './components/FeatureStrip.jsx'
import Destinations from './components/Destinations.jsx'
import Services from './components/Services.jsx'
import SmartServices from './components/SmartServices.jsx'
import Testimonials from './components/Testimonials.jsx'
import Blog from './components/Blog.jsx'
import ContactFooter from './components/ContactFooter.jsx'
import PopularPackages from './components/PopularPackages.jsx'

function App() {
  return (
    <>
      <CursorFX />
      <Navbar />
      <AnnouncementBar />
      <main>
        <Hero />
        <FeatureStrip />
        <Destinations />
        <SmartServices />
        <PopularPackages />
        <Services />
        <Testimonials />
        <Blog />
        <ContactFooter />
      </main>
    </>
  )
}

export default App
