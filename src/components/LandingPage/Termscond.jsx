import React from 'react'
import HandImage from '../../images/Hand.png';

const Termscond = () => {
  const message = 'Having a good Terms of Service (TOS) is very important for every website or application. Basically, is a legal agreement between a service and aperson that wants to use that service.We will take care to clear all the doubts of your current and upcoming users with our highly professional TOS generator.'
  return (
    <div className='grid p-[20px] mt-0 md:grid-cols-2'>
          <div>
          <img src={HandImage} alt="img" className='w-[70%]'  />
          </div>
          <div>
            <div>
            <p className='text-xl mt-5'>Why you Need</p>
            <p  className='text-2xl md:text-4xl font-semibold mt-3'>Terms and Conditions</p>
            <div className='h-[55vh] p-5 mt-5 border bg-white md:h-[35vh] rounded-lg w-[80%] drop-shadow-xl'>
              <p className='font-bold'>{message}</p>
            </div>
          </div>
          <button className='border bg bg-green-900 rounded-xl px-12 py-4 mb-4 mt-10 text-white font-bold text-xl'>Get Started</button>
          </div>
          </div>
  )
}

export default Termscond
