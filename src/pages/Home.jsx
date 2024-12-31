import React from 'react'

import AboutUs from '../components/AboutUs'
import HeaderNavbar from '../components/HeaderNavbar'
import HeroSlider from '../components/HeroSection'
import Services from '../components/Services'
import Awards from '../components/Awards'
import Plans from '../components/Plans'
import GetQuote from '../components/GetQuote'
import BlogSection from '../components/BlogSection'
import CTASection from '../components/CTASection'
import ModernFooter from '../components/ModernFooter'

const Home = () => {
  return (
    <div> 
    <HeroSlider/>
    <AboutUs/>
    <Services/>
    <Awards/>
    <Plans/>
    {/* <GetQuote/> */}
    <BlogSection/>
    <CTASection/>
    </div>
  )
}

export default Home