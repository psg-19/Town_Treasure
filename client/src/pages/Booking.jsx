import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Hero from '../components/Hero'
import Service from '../components/Service'
import Recommendation from '../components/Recommendation'
import Footer from '../components/Footer'
// import ScrollToTop from '../components/ScrollToTop'
import Testimonials from '../components/Testimonials'
import Classes from '../Styles/Footer.module.css'


const Booking = () => { 
  return (
    <div className={Classes.app}>
    <ScrollToTop />
   
    <Hero />
    <Service />
    <Recommendation /> 
    <Testimonials />
   
  </div>
  )
}
 
export default Booking
