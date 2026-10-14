import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import Porto from './Components/Porto'
import Skill from './Components/Skill'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { useEffect } from 'react'
import { createTimeline, stagger } from 'animejs'

function App() {
  useEffect(() => {
    const intro = createTimeline({ defaults: { ease: 'outExpo' } })
    intro.add('.hero-kicker, .hero-title, .hero-copy', { opacity: [0, 1], y: [24, 0], delay: stagger(90), duration: 800 })
      .add('.hero-visual', { opacity: [0, 1], scale: [0.9, 1], duration: 900 }, '-=600')
    return () => {
      intro.pause()
    }
  }, [])

  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
       <Porto/>
      <Skill/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
