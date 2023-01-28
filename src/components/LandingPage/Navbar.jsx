
import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Images from '../../images/logoimgone.png';



const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose =()=> setNav(!nav)

return (
  <div className='w-screen h-[80px] drop-shadow-lg md:h-[100px] '>
    <div className=' flex justify-between items-center '>
        <div className='flex justify-start items-center  w-[100px] md:w-[200px]'>
          <img src={Images} alt="pic" className=' w-[400px]' />
          </div>
          <div  >
          <ul className='hidden md:flex justify-around gap-x-10 '>
            <li className='text-xl'>About</li>
            <li className='text-xl'>Template</li>
            <li className='text-xl'>Contact Us</li>
          </ul>
          </div>
        
        <div className='hidden gap-x-3 md:flex items-center mt-4 mr-10 '>
          <button className='bg-transparent text-green-800 px-3 py-3 mb-4 text-xl'>Login</button>
          <button className='border  bg-green-800 px-5 py-2 mb-4 rounded-xl text-white text-xl'>Sign up</button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-10' /> : <XIcon className='w-10' />}
          
        </div>

      </div>

    <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="" smooth={true} duration={500}>About</Link></li>
        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="" smooth={true} offset={-200} duration={500}>Template</Link></li>
        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="" smooth={true} offset={-50} duration={500}>Contact Us</Link></li>

      <div className='flex flex-col my-4'>
      <button className='border bg-transparent rounded-xl  text-green-800 px-8 py-3 mb-4 text-xl'>Login</button>
          <button className='border  bg-green-800 px-5 py-2 mb-4 rounded-xl text-white text-xl'>Sign up</button>
      </div>
    </ul>
  </div>
);
};

export default Navbar
