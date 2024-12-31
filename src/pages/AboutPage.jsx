import React from 'react'
import CTASection from '../components/CTASection'
import AboutUs from '../components/AboutUs'
import PageHeader from '../components/PageHeader'
import aboutimage1 from "../assets/images/about-1.jpg"
import TeamSection from '../components/TeamSection'

const AboutPage = () => {
  return (
    <div>
      <PageHeader title="About Us" backgroundImage={aboutimage1} />
        <AboutUs/>
        <TeamSection/>
        <CTASection/>

    </div>
  )
}

export default AboutPage