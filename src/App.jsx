import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import SmoothScroll from './components/SmoothScroll'
import BackgroundAnim from './components/BackgroundAnim'
import Navbar from './components/Navbar'
import LiveSpotlight from './components/LiveSpotlight'


import Hero from './components/Hero'
import Countdown from './components/Countdown'
import EventDetails from './components/EventDetails'
import Journey from './components/Journey'
import VideoSection from './components/VideoSection'
import Invitation from './components/Invitation'
import Socials from './components/Socials'
import Footer from './components/Footer'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />
  }

  return (
    <SmoothScroll>
      <CustomCursor />
      <BackgroundAnim />
      <Navbar />
      <main className="relative z-[1] pt-100">
        <LiveSpotlight />
        <Hero />
        <Countdown />
        <EventDetails />
        <Journey />
        <VideoSection />
        <Invitation />
        <Socials />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
