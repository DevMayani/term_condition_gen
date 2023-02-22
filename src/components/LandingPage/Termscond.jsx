import React from 'react'
import HandImage from '../../images/Hand.png';
import { Link } from 'react-router-dom';

const Termscond = () => {
  const message = 'Having a good Terms of Service (TOS) is very important for every website or application. Basically, is a legal agreement between a service and aperson that wants to use that service.We will take care to clear all the doubts of your current and upcoming users with our highly professional TOS generator.'
  return (
    <div className='grid  mt-0 md:grid-cols-2'>
         <div className='p-[20px]'>
          <img src={HandImage} alt="img" className='w-[70%]'  />
          </div>
          <div className='p-[20px]'>
            <div className=''>
            <p className='text-xl mt-5'>Why you Need</p>
            <p  className='text-2xl md:text-4xl font-semibold mt-3'>Terms and Conditions</p>
            <div className='w-[100%] max-h-[65vh] p-5 mt-5 border bg-white md:w-[80%] rounded-lg  drop-shadow-xl'>
              <p className='font-bold'>{message}</p>
            </div>
          </div>
          <Link to='/signup'>
          <button className='border bg bg-green-900 rounded-xl px-12 py-4 mb-4 mt-10 text-white font-bold text-xl'>Get Started</button>
          </Link>
          </div>
          </div>
  )
}

export default Termscond
