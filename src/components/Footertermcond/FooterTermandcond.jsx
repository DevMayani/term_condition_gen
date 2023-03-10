import React from 'react'
import Navbar from '../LandingPage/Navbar'
import Add from '../../images/addone.png';
import { Link } from 'react-router-dom';

const FooterTermandcond = () => {
  const date = 'Last Updated December 2022'
  const textOne = 'By accessing and placing an order with Terma, you confirm that you are in agreement with and bound by the terms of service outlined below. These terms apply to the entire website and any email or other type of communication between you and Terma.Under no circumstances shall Terma team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if Terma team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof.'
  const subText = 'Terma will not be responsible for any outcome that may occur during the course of usage of our resources. We reserve the rights to change prices and revise the resources usage policy in any moment.'

  const textTwo = 'We are not lawyers nor a law firm, but we help you with compliance in relation to your privacy and contractual obligations. We provide you a software (the “Software”), that you access remotely via the cloud, that you can use for (a) consent management (“Consent Platform”); and (b) the generation of policies, legal agreements, disclaimers, and other documents generated by the Services using information related to your business or organization that you enter into the Software (collectively “Forms”).'
  const refund = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolor.'
  const consent = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'

  return (
    <div className='overflow-hidden'>
      <div>
        <Navbar />
        </div>
        <div className='px-4 md:px-16'>
          <center className='mt-3 md:mt-10'>
            <p className='text-green-900 font-bold text-xl md:text-2xl'>TERMS OF USE</p>
          </center>
          <div  className='mt-5'>
            <p className='font-semibold text-green-900'>{date}</p>
            <p  className='text-sm md:text-lg leading-7 mt-3'>General Terms</p>
            <p className='text-sm md:text-lg leading-7'>{textOne}</p>
            <p className='text-sm md:text-lg leading-7 mt-3'>{subText}</p>
            
          </div>
          <div className='mt-20 h-[950vh] md:h-[500vh] '>
            <div className='bg-green-900 h-[5vh] flex justify-start items-center md:h-[10vh] '>
              <img src={Add} alt="pic" className='w-[10%] md:w-[5%]' />
              <p className='text-white font-bold text-sm md:text-2xl'>1. License</p>
            </div>
            <div  className='px-3 mt-5 md:px-10 mt-10'>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{textTwo}</p>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{textTwo}</p>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{textTwo}</p>
            </div>
            <div className='mt-20'>
            <div className='bg-green-900 h-[5vh] flex justify-start items-center md:h-[10vh] '>
              <img src={Add} alt="pic" className='w-[10%] md:w-[5%]' />
              <p className='text-white font-bold text-sm md:text-2xl'>2. Return and Refund Policy</p>
            </div>
            <div  className='px-3 mt-5 md:px-10 mt-10'>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{refund}</p>
              
            </div>
          </div>
          <div className='mt-20'>
            <div className='bg-green-900 h-[5vh] flex justify-start items-center md:h-[10vh] '>
              <img src={Add} alt="pic" className='w-[10%] md:w-[5%]' />
              <p className='text-white font-bold text-sm md:text-2xl'>3. Your consent</p>
            </div>
            <div  className='px-3 mt-5 md:px-10 mt-10'>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{consent}</p>
             
            </div>
          </div>
          <div className='mt-20'>
            <div className='bg-green-900 h-[5vh] flex justify-start items-center md:h-[10vh] '>
              <img src={Add} alt="pic" className='w-[10%] md:w-[5%]' />
              <p className='text-white font-bold text-sm md:text-2xl'>4. Link to other websites</p>
            </div>
            <div  className='px-3 mt-5 md:px-10 mt-10'>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{textTwo}</p>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{textTwo}</p>
            </div>
          </div>
          <div className='mt-20'>
            <div className='bg-green-900 h-[5vh] flex justify-start items-center md:h-[10vh] '>
              <img src={Add} alt="pic" className='w-[10%] md:w-[5%]' />
              <p className='text-white font-bold text-sm md:text-2xl'>5. Cookies</p>
            </div>
            <div  className='px-3 mt-5 md:px-10 mt-10'>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{textTwo}</p>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{textTwo}</p>
            </div>
          </div>
          <div className='mt-20'>
            <div className='bg-green-900 h-[5vh] flex justify-start items-center md:h-[10vh] '>
              <img src={Add} alt="pic" className='w-[10%] md:w-[5%]' />
              <p className='text-white font-bold text-sm md:text-2xl'>6. Updates to our web</p>
            </div>
            <div  className='px-3 mt-5 md:px-10 mt-10'>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{textTwo}</p>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{textTwo}</p>
            </div>
          </div>
          <div className='mt-20'>
            <div className='bg-green-900 h-[5vh] flex justify-start items-center md:h-[10vh] '>
              <img src={Add} alt="pic" className='w-[10%] md:w-[5%]' />
              <p className='text-white font-bold text-sm md:text-2xl'>7. Third Party Services</p>
            </div>
            <div  className='px-3 mt-5 md:px-10 mt-10'>
              <p  className='text-sm md:text-lg leading-7 mt-3'>{textTwo}</p>
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

export default FooterTermandcond
