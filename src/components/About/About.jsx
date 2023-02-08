import React from 'react'
import Navbar from "../../components/LandingPage/Navbar";
import Three from '../../images/three.png';
import Four from '../../images/Group2.png';
import Landfooter from '../../components/LandingPage/Landfooter'
import Eye from '../../images/eye.png';
import Send from '../../images/send.png';
import Receipt from '../../images/receipt.png';
import Discount from '../../images/discount.png';


const About = () => {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet scelerisque euismod phasellus nibh. Rutrum metus massa tincidunt donec lacus, in. Velit, et nibh orci nunc. A arcu, maecenas faucibus pellentesque et amet.'
  return (
    <div className='overflow-hidden'>
     <Navbar  />
     <div className='px-5 md:px-10'>
      <div className='grid  md:grid-cols-2'>
        <div className='mt-10 '>
          <p className='text-4xl font-semibold w-[70%]'>Who are we?</p>
          <p className=' w-[70%] text-xl mt-10'>{text}</p>
        </div>
        <div className=' mt-10'>
          <img src={Three} alt="pic" className='' />
        </div>
      </div>
      <div className='grid mt-20  md:grid-cols-2'>
      <div>
        <img src={Four} alt="pic" className='w-[90%]' />
      </div>
      <div className='mt-20 '>
          <p className='text-4xl font-semibold w-[70%'>Who do we do?</p>
          <p className=' w-[70%] text-xl mt-10'>{text}</p>
        </div>
      </div>
      <div className='flex justify-around items-center mt-20 h-[20vh] w-[100%]'>
      <center className=' w-[20%] h-[8vh]  text-xs font-bold md:text-xl'>
          <p className='text-green-900'>2022</p>
          <p className='font-semibold uppercase'>Founded</p>
        </center>
      
        <center className=' w-[20%] h-[8vh]  text-xs font-bold md:text-xl'>
          <p className='text-green-900'>10+</p>
          <p className='font-semibold uppercase'>Supported Countries</p>
        </center>
        <center className=' w-[20%] h-[8vh]  text-xs font-bold md:text-xl'>
          <p className='text-green-900 '>20+</p>
          <p className='font-semibold uppercase'>Users</p>
        </center>
        <center className=' w-[20%] h-[8vh]  text-xs font-bold md:text-xl'>
          <p className='text-green-900 '>20+</p>
          <p className='font-semibold uppercase'>Policies Created</p>
        </center>
      </div>
      <div className='grid h-[35vh]  bg-green-900 md:grid-cols-2'>
        <div className='flex justify-center items-center'>
        <div className='w-[70%]'>
              <button className='text-green-900 w-[100%] border border-orange-600 bg-orange-600 font-bold px-10 py-3 mb-4 rounded-xl text-xl md:py-8  '>Our Services</button>
            </div>

        </div>
        <div className='gap-x-2 w-[100%] flex justify-center items-center md:gap-x-5'>
        <div className='flex justify-center items-start h-[20vh] w-[30%] border bg-white rounded-xl'>
          <div className='mt-2'>
          <img src={Eye} alt="pic" className='w-5 m-auto ' />
          <center className='mt-2'>
          <p className='font-semibold'>Basic Privacy <br /> Policy</p>
          </center>
            <img src={Send} alt="pic" className='w-5 mt-3 m-auto' />
          </div>
          </div>
           
          <div className='flex justify-center items-start h-[20vh] w-[30%] border bg-white rounded-xl'>
          <div className='mt-2'>
          <img src={Receipt} alt="pic" className='w-5 m-auto ' />
          <center className='mt-2'>
          <p className='font-semibold'>Terms and <br /> Conditions</p>
          </center>
          <img src={Send} alt="pic" className='w-5 mt-3 m-auto' />
          </div>
          </div>

          <div className='flex justify-center items-start h-[20vh] w-[30%] border bg-white rounded-xl'>
          <div className='mt-2'>
          <img src={Discount} alt="pic" className='w-5 m-auto ' />
          <center className='mt-2 md:mt-5'>
          <p className='font-semibold'>Cookies Policy</p>
          </center>
          <img src={Send} alt="pic" className='w-5 mt-3 m-auto md:mt-5' />
          </div>
          </div>

        </div>

      </div>
     </div>
     <Landfooter />
    </div>
  )
}

export default About
