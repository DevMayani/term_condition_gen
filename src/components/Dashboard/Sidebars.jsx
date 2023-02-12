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
    <div className='w-[50%] h-screen cursor-pointer md:w-[20%] border border-bg-900 '>
          <Link to='/tandCgenpage'>
          <div className='flex justify-center items-center w-full mt-5 hover:bg-green-900 text-white  md:gap-x-3  '>
          <img src={Element} alt="pic" className=' w-5 md:w-8  ' />
          <div className=' w-20 font-bold text-green-900 hover:text-white'>
          <p className=' '>Dashboard</p>
          </div>
          </div>
          </Link>
          <Link to='/privacypolicygen'>
          <div className='flex justify-center items-center w-full mt-5 hover:bg-green-900   md:gap-x-3  '>
          <img src={Clipboard} alt="pic" className=' w-5 md:w-8  ' />
          <div className=' w-20 font-bold text-green-900 hover:text-white'>
          <p className=' '>Policies</p>
          </div>
          </div>
          </Link>
          
          <div className='flex justify-center items-center w-full mt-5 hover:bg-green-900   md:gap-x-3  '>
          <img src={Frame} alt="pic" className=' w-5 md:w-8  ' />
          <div className=' w-20 font-bold text-green-900 hover:text-white'>
          <p className=' '>Downloads</p>
          </div>
          
          </div>
          <div className='flex justify-center items-center w-full mt-5 hover:bg-green-900   md:gap-x-3  '>
          <img src={Archive} alt="pic" className=' w-5 md:w-8  ' />
          <div className=' w-20 font-bold text-green-900 hover:text-white'>
          <p className=' '>Saved</p>
          </div>
          
          </div>
          <Link to="/dashboardset">
          <div className='flex justify-center items-center w-full mt-5 hover:bg-green-900   md:gap-x-3  '>
          <img src={Setting} alt="pic" className=' w-5 md:w-8  ' />
          <div className=' w-20 font-bold text-green-900 hover:text-white'>
          <p className=' '>Settings</p>
          </div>
          
          </div>
          </Link>
          <div className='flex justify-center items-center w-full mt-[150px] hover:bg-green-900   md:gap-x-3  '>
          <img src={Log} alt="pic" className=' w-5 md:w-8  ' />
          <div className=' w-20 font-bold text-green-900 hover:text-white'>
          <p className=' '>Logout</p>
          </div>
          
          </div>
     
    </div>
  )
}

export default Sidebars
