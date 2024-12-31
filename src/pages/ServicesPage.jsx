import React from 'react'
import PageHeader from '../components/PageHeader'
import aboutimage1 from "../assets/images/about-1.jpg"
import Services from '../components/Services'
import Plans from '../components/Plans'
import CTASection from '../components/CTASection'
import FAQSection from '../components/FAQSection'


const ServicesPage = () => {
  return (
    <div>
    <PageHeader title="Service" backgroundImage={aboutimage1} />
    <Services/>
    <Plans/>
    <CTASection/>
    <FAQSection/>
    </div>
  )
}

export default ServicesPage