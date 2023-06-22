import React from 'react'
import Imagepage from '../../images/pagenew.png';
import { Link } from 'react-router-dom';

const Ready = () => {
  return (
    <div className='px-[20px] md:p-[40px] '>
          <div className='grid md:grid-cols-2 md:mt-10'>
            <div className='mt-[10px] w-full md:mt-[80px] '>
            <div>
          <p className='text-2xl font-extrabold md:text-4xl lg:text-5xl xl:text-6xl'>Valid Solution for <br  className='hidden md:block'/> Your Product T&Cs</p>
          </div>
          <div className='mt-5 md:mt-15'>
          <p>We offer valid Terms and Condition Templates For small scale 
             businesses, Large scale businesses, Products and services, 
             Capturing your business legal terms of service at a glance.
          </p>
          <Link to='/signup'><button className='border px-10 py-3 mb-4 rounded-xl text-white font-semibold mt-5 text-lg bg-red-500  md:mt-10 text-xl'>Get Started</button></Link>
          </div>
            </div>
            <div>
            <img src={Imagepage} alt="img" className='my-5  md:my-15 '  />
            </div>

          </div>
        </div>
  )
}

export default Ready
