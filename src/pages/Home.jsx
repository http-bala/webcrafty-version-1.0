import React from 'react'
import AboutUs from '../components/AboutUs'
import HeroSlider from '../components/HeroSection'
import Services from '../components/Services'
import Awards from '../components/Awards'
import Plans from '../components/Plans'
import BlogSection from '../components/BlogSection'
import CTASection from '../components/CTASection'

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