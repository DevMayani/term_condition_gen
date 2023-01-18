
import React, {useState} from 'react';
import { Link } from "react-router-dom";

import Images from '../../images/logoimgone.png';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const LandingPage = () => {
  const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 fixed drop-shadow-lg'>
      <div className=' flex justify-around items-center'>
        <div className='flex justify-between  items-center'>
          <img src={Images} alt="pic" className='w-[200px]' />
          </div>
          <div  >
          <ul className='hidden md:flex justify-around gap-x-7'>
            <li className='text-xl'>About</li>
            <li className='text-xl'>Template</li>
            <li className='text-xl'>Contact Us</li>
          </ul>
          </div>
        
        <div className='hidden gap-x-3 md:flex items-center mt-4 '>
          <button className='bg-transparent text-green-800 px-3 py-3 mb-4 text-xl'>Login</button>
          <button className='border  bg-green-800 px-5 py-2 mb-4 rounded-xl text-white text-xl'>Sign up</button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-10' /> : <XIcon className='w-10' />}
          
        </div>
        
        

      </div>
      
      
    </div>
  )
}

export default LandingPage
