import BackToTop from '@/BackToTopComponents/BackToTop'
import Footer from '@/BarComponents/Footer'
import NavBar from '@/BarComponents/NavBar'
import AboutUs from '@/MainComponents/AboutUs'
import BestUniversity from '@/MainComponents/BestUniversity'
import ChooseUs from '@/MainComponents/ChooseUs'
import ContactUs from '@/MainComponents/ContactUs'
import Hero from '@/MainComponents/Hero'
import OurServices from '@/MainComponents/OurServices'
import Testimonials from '@/MainComponents/Testimonials'
import React from 'react'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <AboutUs/>
      <OurServices/>
      <ChooseUs/>
      <BestUniversity/>
      <Testimonials/>
      <ContactUs/>
      <BackToTop/>
      <Footer/>  
    </div>
  )
}

export default Home
