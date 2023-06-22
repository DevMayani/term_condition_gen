
import React, {useState} from 'react';
import { animateScroll as scroll, } from 'react-scroll'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Images from '../../images/logoimgone.png';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose =()=> setNav(!nav)

return (
  <div className='w-screen h-[80px] drop-shadow-lg md:h-[100px]'>
    <div className=' flex justify-between items-center '>
        <div className='flex justify-start items-center  w-[100px] md:w-[200px]'>
        <img src={Images} alt="pic" className=' w-[400px]' />
          </div>
          <div  >
          <ul className='hidden md:flex justify-around gap-x-10 '>
          <Link to='/'><li className='text-xl hover:text-green-600'>Home</li></Link>
            <Link to='/about'><li className='text-xl hover:text-green-600'>About</li></Link>
            <Link to='/contact'><li className='text-xl hover:text-green-600'>Contact Us</li></Link>
          </ul>
          </div>
        
        <div className='hidden gap-x-3 md:flex items-center mt-4 mr-10 '>
        <Link to='/signin'>
          <button className='bg-transparent text-green-800 px-3 py-3 mb-4 text-xl hover:text-green-600'>Login</button>
          </Link>
          <Link to='/signup'>
          <button className='border  bg-green-800 px-5 py-2 mb-4 rounded-xl text-white text-xl'>Sign up</button>
          </Link>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-10' /> : <XIcon className='w-10' />}
          
        </div>

      </div>

    <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full'}>
    <li className='border-b-2 border-zinc-300 w-full py-2 px-8 hover:text-green-600'><Link onClick={handleClose} to="/" smooth={true} duration={500}>Home</Link></li>
        <li className='border-b-2 border-zinc-300 w-full px-8 py-2 hover:text-green-600'><Link onClick={handleClose} to="/about" smooth={true} duration={500}>About</Link></li>
        <li className='border-b-2 border-zinc-300 w-full px-8 py-2 hover:text-green-600'><Link onClick={handleClose} to="/contact" smooth={true} offset={-50} duration={500}>Contact Us</Link></li>

      <div className='flex flex-col my-2 px-8 py-1' >
      <Link to='/signin'>
      <button className='border border-green-900 rounded-xl  text-green-800  w-[100px] py-1 mb-2 text-xl hover:text-green-600'>Login</button>
      </Link>
      <Link to='/signup'>
          <button className='border  bg-green-800 w-[100px] py-1 mb-2 rounded-xl text-white text-xl'>Sign up</button>
      </Link>
      </div>
    </ul>
  </div>
);
};

export default Navbar
