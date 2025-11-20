import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import CursorFX from './components/CursorFX.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import AnnouncementBar from './components/AnnouncementBar.jsx'
import Hero from './components/Hero.jsx'
import Destinations from './components/Destinations.jsx'
import Services from './components/Services.jsx'
import SmartServices from './components/SmartServices.jsx'
import Testimonials from './components/Testimonials.jsx'
import Blog from './components/Blog.jsx'
import ContactFooter from './components/ContactFooter.jsx'
import PopularPackages from './components/PopularPackages.jsx'
import OneDayTrips from './components/OneDayTrips.jsx'
import AwardSection from './components/AwardSection.jsx'
import Banner from './components/Banner.jsx'
import Gallery from './components/Gallery.jsx'
import TrustedCompanies from './components/TrustedCompanies.jsx'
import './styles/inner-page-fix.css'
import './styles/mobile-sections.css'


// Import all destination pages
import JaipurPage from './pages/destinations/jaipur-page.jsx'
import AgraPage from './pages/destinations/AgraPage.jsx'
import GoaPage from './pages/destinations/GoaPage.jsx'
import KeralaPage from './pages/destinations/KeralaPage.jsx'
import DelhiPage from './pages/destinations/DelhiPage.jsx'
import MumbaiPage from './pages/destinations/MumbaiPage.jsx'
import UdaipurPage from './pages/destinations/UdaipurPage.jsx'
import VaranasiPage from './pages/destinations/VaranasiPage.jsx'
import RishikeshPage from './pages/destinations/RishikeshPage.jsx'
import ShimlaPage from './pages/destinations/ShimlaPage.jsx'
import LadakhPage from './pages/destinations/LadakhPage.jsx'
import DarjeelingPage from './pages/destinations/DarjeelingPage.jsx'
import AmritsarPage from './pages/destinations/AmritsarPage.jsx'
import HampiPage from './pages/destinations/HampiPage.jsx'
// import MysorePage from './pages/destinations/MysorePage.jsx'
// We route Mysore to a common inner page instead of separate component
import InnerPage1 from './pages/inner-page1.jsx'
import CoorgPage from './pages/destinations/CoorgPage.jsx'
import KhajurahoPage from './pages/destinations/KhajurahoPage.jsx'
import KonarkPage from './pages/destinations/KonarkPage.jsx'
import KutchPage from './pages/destinations/KutchPage.jsx'
import SikkimPage from './pages/destinations/SikkimPage.jsx'
import PushkarPage from './pages/destinations/PushkarPage.jsx'
import MahabalipuramPage from './pages/destinations/MahabalipuramPage.jsx'
import AjantaElloraPage from './pages/destinations/AjantaElloraPage.jsx'
import PunePage from './pages/destinations/PunePage.jsx'
import AuliPage from './pages/destinations/AuliPage.jsx'
import AllDestinations from './pages/AllDestinations.jsx'

//import all packages 

import JaipurPackage from './pages/packages/jaipur.jsx'
import DelhiPackage from './pages/packages/delhi.jsx'
import DehradunPackage from './pages/packages/dehradun.jsx'
import AgraPackage from './pages/packages/agra.jsx'
import MumbaiPackage from './pages/packages/Mumbai.jsx' 

function HomePage() {
  return (
    <>
      <CursorFX />
      <ScrollToTop />
      <Navbar />
      <AnnouncementBar />
      <main>
        <Hero />
        <PopularPackages />
        <Destinations />
        <SmartServices />
        <Services />
        <OneDayTrips />
        <AwardSection />
        {/* Swapped order: show TrustedCompanies before the poster banner */}
        <TrustedCompanies />
        <Banner />
        <Blog />
        <Testimonials />
        <Gallery />
        <ContactFooter />
      </main>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
     
           <Route path="/destinations" element={<AllDestinations />} />

      
      {/* Destination Routes */}
      <Route path="/destination/jaipur-page" element={<JaipurPage />} />
      <Route path="/destination/agra-page" element={<AgraPage />} />
      <Route path="/destination/goa" element={<GoaPage />} />
      <Route path="/destination/kerala" element={<KeralaPage />} />
      <Route path="/destination/delhi" element={<DelhiPage />} />
      <Route path="/destination/mumbai" element={<MumbaiPage />} />
      <Route path="/destination/udaipur" element={<UdaipurPage />} />
      <Route path="/destination/varanasi" element={<VaranasiPage />} />
      <Route path="/destination/rishikesh" element={<RishikeshPage />} />
      <Route path="/destination/shimla" element={<ShimlaPage />} />
      <Route path="/destination/ladakh" element={<LadakhPage />} />
      <Route path="/destination/darjeeling" element={<DarjeelingPage />} />
      <Route path="/destination/amritsar" element={<AmritsarPage />} />
      {/* Mysore uses Coorg page for combo tour */}
      <Route path="/destination/mysore" element={<CoorgPage />} />
      <Route path="/destination/hampi" element={<HampiPage />} />
      <Route path="/destination/coorg" element={<CoorgPage />} />
      <Route path="/destination/khajuraho" element={<KhajurahoPage />} />
      <Route path="/destination/konark" element={<KonarkPage />} /> 
      <Route path="/destination/kutch" element={<KutchPage />} />
      <Route path="/destination/sikkim" element={<SikkimPage />} />
      <Route path="/destination/pushkar" element={<PushkarPage />} />
      <Route path="/destination/mahabalipuram" element={<MahabalipuramPage />} />
      <Route path="/destination/ajanta-ellora" element={<AjantaElloraPage />} />
      <Route path="/destination/pune" element={<PunePage />} />
      <Route path="/destination/auli" element={<AuliPage />} />  


      // Package Routes
      <Route path="/packages/jaipur" element={<JaipurPackage />} />
      <Route path="/packages/delhi" element={<DelhiPackage />} />
      <Route path="/packages/dehradun" element={<DehradunPackage />} />
      <Route path="/packages/agra" element={<AgraPackage />} />
      <Route path="/packages/mumbai" element={<MumbaiPackage />} />
    </Routes>
  )
}

export default App