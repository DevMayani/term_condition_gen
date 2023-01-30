import React from 'react'
import Navbar from './Navbar'
import Ready from './Ready'
import Details from './Details'
import Termscond from './Termscond'
import Guide from './Guide'
import Feedback from './Feedback'
import Footer from './Footer'
import Landfooter from './Landfooter'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Ready />
      <div className='bg-green-800 h-5 md: w-full h-8'></div>
      <Details />
      <Termscond />
      <Guide />
      <Feedback />
      <Footer />
      <Landfooter />
      
    </div>
  )
}

export default Home
