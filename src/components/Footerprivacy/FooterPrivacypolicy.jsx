import React from 'react'
import Navbar from '../LandingPage/Navbar'
import Add from '../../images/addone.png';
import { Link } from 'react-router-dom';

const FooterPrivacypolicy = () => {
  const date = 'Last Updated December 2022'
  const textOne = 'You may be required to register with the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.'
  const textTwo = 'We are not lawyers nor a law firm, but we help you with compliance in relation to your privacy and contractual obligations. We provide you a software (the “Software”), that you access remotely via the cloud, that you can use for (a) consent management (“Consent Platform”); and (b) the generation of policies, legal agreements, disclaimers, and other documents generated by the Services using information related to your business or organization that you enter into the Software (collectively “Forms”).'
  return (
    <div className='overflow-hidden'>
      <div>
        <Navbar />
        </div>
        <div className='px-4 md:px-16'>
          <center className='mt-3 md:mt-10'>
            <p className='text-green-900 font-bold text-xl md:text-2xl'>PRIVACY POLICY</p>
          </center>
          <div  className='mt-5'>
            <p className='font-semibold text-green-900'>{date}</p>
            <p className='text-sm md:text-lg leading-7 mt-3'>{textOne}</p>
            <p className='text-sm md:text-lg leading-7 mt-3'>{textOne}</p>
            <p className='text-sm md:text-lg leading-7 mt-3'>{textOne}</p>
          </div>
          <div className='mt-20 h-[790vh] md:h-[400vh] '>
            <div className='bg-green-900 h-[5vh] flex justify-start items-center md:h-[10vh] '>
              <img src={Add} alt="pic" className='w-[10%] md:w-[5%]' />
              <p className='text-white font-bold text-sm md:text-2xl'>1. OUR WEBSITES AND SERVICES</p>
            </div>
            <div  className='px-3 mt-5 md:px-10 md:mt-10'>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{textTwo}</p>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{textTwo}</p>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{textTwo}</p>
            </div>
            <div className='mt-20'>
            <div className='bg-green-900 h-[5vh] flex justify-start items-center md:h-[10vh] '>
              <img src={Add} alt="pic" className='w-[10%] md:w-[5%]' />
              <p className='text-white font-bold text-sm md:text-2xl'>2. INTELLECTUAL PROPERTY RIGHTS</p>
            </div>
            <div  className='px-3 mt-5 md:px-10 md:mt-10'>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{textTwo}</p>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{textTwo}</p>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{textTwo}</p>
            </div>
          </div>
          <div className='mt-20'>
            <div className='bg-green-900 h-[5vh] flex justify-start items-center md:h-[10vh] '>
              <img src={Add} alt="pic" className='w-[10%] md:w-[5%]' />
              <p className='text-white font-bold text-sm md:text-2xl'>3. USER REPRESENTATIONS</p>
            </div>
            <div  className='px-3 mt-5 md:px-10 md:mt-10'>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{textTwo}</p>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{textTwo}</p>
            </div>
          </div>
          <div className='mt-20'>
            <div className='bg-green-900 h-[5vh] flex justify-start items-center md:h-[10vh] '>
              <img src={Add} alt="pic" className='w-[10%] md:w-[5%]' />
              <p className='text-white font-bold text-sm md:text-2xl'>4. USER REGISTRATIONS</p>
            </div>
            <div  className='px-3 mt-5 md:px-10 mt-10'>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{textTwo}</p>
            </div>
          </div>
          <div className='mt-20'>
            <div className='bg-green-900 h-[5vh] flex justify-start items-center md:h-[10vh] '>
              <img src={Add} alt="pic" className='w-[10%] md:w-[5%]' />
              <p className='text-white font-bold text-sm md:text-2xl'>5. FEES AND PAYMENT</p>
            </div>
            <div  className='px-3 mt-5 md:px-10 mt-10'>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{textTwo}</p>
            </div>
          </div>
          </div>
          <div>
            
          </div>
        </div>
        <div className='bg-green-900  grid grid-cols-5 gap-x-10 p-5 md:p-10'>
          <div className='col-span-full md:col-span-2 '>
            <p className='text-white  mt-5'>Products</p>
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
      
    </div>
  )
}

export default FooterPrivacypolicy

