import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Quote from '../components/Quote'
import CTA from '../components/CTA'
import Testimonial from '../components/Testimonial'
import InstagramSection from '../components/InstagramSection'
import Newsletter from '../components/Newsletter'
import SocialSection from '../components/SocialSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Quote />
      <CTA />
      <Testimonial />
      <InstagramSection />
      <Newsletter />
      <SocialSection />
      <Footer />
    </div>
  )
}

export default Home