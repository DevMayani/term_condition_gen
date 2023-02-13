import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-green-900  grid md:grid-cols-5 gap-x-10  p-10'>
          <div className='col-span-full md:col-span-2'>
            <p className='text-white  mt-5'>Products</p>
            <p className='mt-3 text-white text-xs md:text-sm'>We are a legally verified agency. We create customized Privacy Policies and Terms & Conditions in a matter of seconds to keep your business safe from any legal issue.</p>
          </div>
          <div className='col-span-full md:col-span-3 flex justify-around items-start'>
          <div className='col-span-1  md:col-span-1'>
          <p className=' text-white font-bold  mt-5 text-sm'>Company</p>
          <Link to='/about'>
          <p className='mt-3 text-white text-xs hover:text-green-300 text-sm'>About us</p>
          </Link>
          <Link to='/footerTermandcond'>
          <p className='mt-3 text-white text-xs hover:text-green-300 text-sm'>Our Terms of use</p>
          </Link>
          <Link to='/footerPrivacypolicy'>
          <p className='mt-3 text-white text-xs hover:text-green-300 text-sm'>Our Privacy policies</p>
          </Link>
          </div>
          <div className='col-span-1 md:col-span-1'>
          <p className=' text-white font-bold  mt-5'>Resourses</p>
          <Link to='/footerTermandcond'>
          <p className='mt-3 text-white text-xs hover:text-green-300 text-sm'>Terms and conditions</p>
          </Link>
          <Link to='/footerPrivacypolicy'>
          <p className='mt-3 text-white text-xs hover:text-green-300 text-sm'>Privacy policies</p>
          </Link>
          </div>
          <div className='col-span-1 md:col-span-1 '>
          <p className=' text-white font-bold  mt-5'>Support</p>
          <Link to='/contact'>
          <p className='mt-3 text-white text-xs hover:text-green-300 text-sm'>Contact us</p>
          </Link>
          <Link to='/faq'>
          <p className='mt-3 text-white text-xs hover:text-green-300 text-sm'>FAQs</p>
          </Link>
          </div>

          </div>
          
         
        

        </div>
      
  )
}

export default Footer
