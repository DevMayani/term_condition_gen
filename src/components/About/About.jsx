import React from 'react'
import Navbar from "../../components/LandingPage/Navbar";
import Three from '../../images/three.png';
import Four from '../../images/Group2.png';

const About = () => {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet scelerisque euismod phasellus nibh. Rutrum metus massa tincidunt donec lacus, in. Velit, et nibh orci nunc. A arcu, maecenas faucibus pellentesque et amet.'
  return (
    <div className='overflow-x-hidden'>
     <Navbar />
     <div className='px-10'>
      <div className='grid  bg-red-400 md:grid-cols-2'>
        <div className='mt-20 '>
          <p className='text-4xl font-semibold w-[70%'>Who are we?</p>
          <p className=' w-[70%] text-xl mt-10'>{text}</p>
        </div>
        <div className=' mt-10'>
          <img src={Three} alt="pic" className='' />
        </div>
      </div>
      <div className='grid mt-20 bg-red-200 md:grid-cols-2'>
      <div>
        <img src={Four} alt="pic" className='w-[90%]' />
      </div>
      <div className='mt-20 '>
          <p className='text-4xl font-semibold w-[70%'>Who do we do?</p>
          <p className=' w-[70%] text-xl mt-10'>{text}</p>
        </div>
      </div>
      <div className='bg-yellow-300 flex justify-around items-center h-[20vh] w-[100%]'>
      <center className=' w-[20%] h-[10vh]  bg-slate-500 text-xs font-bold md:text-xl'>
          <p className='md:text-green-900 '>2022</p>
          <p className='font-bold'>Founded</p>
        </center>
        <center className=' w-[20%] h-[10vh] bg-slate-500 text-xs font-bold md:text-xl'>
          <p className='text-green-900'>10+</p>
          <p className='font-bold'>Supported Countries</p>
        </center>
        <center className=' w-[20%] h-[10vh] bg-slate-500 text-xs font-bold md:text-xl'>
          <p className='text-green-900 '>20+</p>
          <p className='font-bold'>Users</p>
        </center>
        <center className=' w-[20%] h-[10vh] bg-slate-500 text-xs font-bold md:text-xl'>
          <p className='text-green-900 '>20+</p>
          <p className='font-bold'>Policies Created</p>
        </center>
      </div>
      <div className='grid h-[40vh]   bg-red-400 md:grid-cols-2'>
        <div className='bbg-blue-600 '>
        <center className='mt-5'>
              <p className='text-green-900 border bg-orange-400'>Our Services</p>
            </center>

        </div>
        <div className='bg-slate-300  gap-x-5 w-[100%] flex justify-center items-center h-[30vh]'>
          <div className='border bg-white rounded-xl h-[20vh] w-[30%] '>
          <img src="" alt="" />
          <center>
          <p>Basic Privacy Policy</p>
          </center>
            <img src="" alt="" />
          </div>

          <div className='border bg-white rounded-xl h-[20vh] w-[30%]'>
          <img src="" alt="" />
          <center>
          <p>Term and Conditions</p>
          </center>
          <img src="" alt="" />
          </div>
          <div className='border bg-white rounded-xl h-[20vh] w-[30%]'>
          <img src="" alt="" />
          <center>
          <p>Cookies Policy</p>
          </center>
          <img src="" alt="" />
          </div>

        </div>

      </div>
     </div>
    </div>
  )
}

export default About
