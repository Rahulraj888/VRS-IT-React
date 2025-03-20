import React from 'react'
import '../styles/home.css'
import HomeCarousel from "../components/home/HomeCarousel.jsx"
import OurRental from '../components/home/OurRental'
import HowToRent from '../components/home/HowToRent'
import WhyToRent from '../components/home/WhyToRent'
import RentalSection from '../components/home/RentalSection'

function Home() {

  return (
    <>
      <HomeCarousel/>
      <OurRental/>
      <RentalSection/>
      <HowToRent/>
      <WhyToRent/>
    </>
  )
}

export default Home
