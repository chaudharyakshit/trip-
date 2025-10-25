import React from 'react'
import Navbar from './components/Navbar.jsx'
import CursorFX from './components/CursorFX.jsx'
import AnnouncementBar from './components/AnnouncementBar.jsx'
import Hero from './components/Hero.jsx'
// import FeatureStrip from './components/FeatureStrip.jsx'
import Destinations from './components/Destinations.jsx'
import Services from './components/Services.jsx'
import SmartServices from './components/SmartServices.jsx'
import Testimonials from './components/Testimonials.jsx'
import Blog from './components/Blog.jsx'
import ContactFooter from './components/ContactFooter.jsx'
import PopularPackages from './components/PopularPackages.jsx'
import OneDayTrips from './components/OneDayTrips.jsx'
import Banner from './components/Banner.jsx'
import Gallery from './components/Gallery.jsx'
import TrustedCompanies from './components/TrustedCompanies.jsx'


function App() {
  return (
    <>
      <CursorFX />
      <Navbar />
      <AnnouncementBar />
      <main>
        <Hero />
        <PopularPackages />
        <Destinations />
        <SmartServices />
        <Services />
        <OneDayTrips />
        <Banner />
        <TrustedCompanies />
        <Blog />
        <Testimonials />
        <Gallery />
        <ContactFooter />
      </main>
    </>
  )
}

export default App
