import React from 'react'

const Footer = () => {
  return (
    <div className='bg-green-900  grid grid-cols-5 gap-x-10  p-10'>
          <div className='col-span-full md:col-span-2'>
            <p className='text-white  mt-5'>Products</p>
            <p className='text-white mt-3'>WE are a legally verified agency. We create customized Privacy Policies and Terms & Conditions in a matter of seconds to keep your business safe from any legal issue.</p>
          </div>
          <div className='col-span-2 md:col-span-1'>
          <p className=' text-white font-bold  mt-5'>Company</p>
          <p className='mt-3 text-white text-sm'>About us</p>
          <p className='mt-3 text-white text-sm'>Our Terms of use</p>
          <p className='mt-3 text-white text-sm'>Our Privacy policies</p>
          </div>
          <div className='col-span-2 md:col-span-1'>
          <p className=' text-white font-bold  mt-5'>Resourses</p>
          <p className='mt-3 text-white text-sm'>Terms and conditions</p>
          <p className='mt-3 text-white text-sm'>Privacy policies</p>
          </div>
          <div className='col-span-1 md:col-span-1 '>
          <p className=' text-white font-bold  mt-5'>Support</p>
          <p className='mt-3 text-white text-sm'>Contact us</p>
          <p className='mt-3 text-white text-sm'>FAQs</p>
          </div>

        </div>
      
  )
}

export default Footer
