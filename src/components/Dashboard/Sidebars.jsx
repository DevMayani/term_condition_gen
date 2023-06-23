import React from 'react'
import { SidebarData } from './SidebarData'
import Element from '../../images/elementthree.png';
import Clipboard from '../../images/clipboard-tick.png';
import Archive from '../../images/archive-tick.png';
import Frame from '../../images/frame.png';
import Setting from '../../images/setting.png';
import Log from '../../images/login.png';
import { useState } from 'react'
import { Link } from 'react-router-dom';



const Sidebars = () => {
  
  return (
    <div className='w-[50%] h-screen cursor-pointer md:w-[30%] lg:w-[25%] border border-bg-900'>
          <Link to='/tandCgenpage'>
          <div className='px-2 py-3 flex justify-center items-center w-full mt-5 hover:bg-green-300 gap-x-3  md:gap-x-3  '>
          <img src={Element} alt="pic" className=' w-4 md:w-6 lg:w-8 ' />
          <div className=' w-20 font-bold text-green-900'>
          <p className='text-xs md:text-lg xl:text-lg'>Dashboard</p>
          </div>
          </div>
          </Link>
          <Link to='/privacypolicygen'>
          <div className='px-2 py-3 flex justify-center items-center w-full mt-5 hover:bg-green-300 gap-x-3   md:gap-x-3  '>
          <img src={Clipboard} alt="pic" className='w-4 md:w-6 lg:w-8' />
          <div className=' w-20 font-bold text-green-900 '>
          <p className='text-xs md:text-lg xl:text-lg'>Policies</p>
          </div>
          </div>
          </Link>
          
          <div className='px-2 py-3 flex justify-center items-center w-full mt-5 hover:bg-green-300 gap-x-3   md:gap-x-3  '>
          <img src={Frame} alt="pic" className='w-4 md:w-6 lg:w-8' />
          <div className=' w-20 font-bold text-green-900 '>
          <p className='text-xs md:text-lg xl:text-lg'>Downloads</p>
          </div>
          
          </div>
          <div className='px-2 py-3 flex justify-center items-center w-full mt-5 hover:bg-green-300 gap-x-3   md:gap-x-3  '>
          <img src={Archive} alt="pic" className='w-4 md:w-6 lg:w-8' />
          <div className=' w-20 font-bold text-green-900 '>
          <p className='text-xs md:text-lg xl:text-lg'>Saved</p>
          </div>
          
          </div>
          <Link to="/dashboardset">
          <div className='px-2 py-3 flex justify-center items-center w-full mt-5 hover:bg-green-300 gap-x-3   md:gap-x-3  '>
          <img src={Setting} alt="pic" className='w-4 md:w-6 lg:w-8' />
          <div className=' w-20 font-bold text-green-900 '>
          <p className='text-xs md:text-lg xl:text-lg'>Settings</p>
          </div>
          
          </div>
          </Link>
          <div className='px-2 py-3 flex justify-center items-center w-full mt-[150px] hover:bg-green-300 gap-x-3   md:gap-x-3  '>
          <img src={Log} alt="pic" className='w-4 md:w-6 lg:w-8' />
          <div className=' w-20 font-bold text-green-900'>
          <p className='text-xs md:text-lg xl:text-lg'>Logout</p>
          </div>
          
          </div>
     
    </div>
  )
}

export default Sidebars
