import React from 'react'
import Frame from '../../images/Frameone.png';
import { Link } from 'react-router-dom';

const Privacyfinal = () => {
  return (
    <div className='py-20 md:py-40'>
    <div className='flex justify-center items-center'>
     <img src={Frame} alt="pic" className='w-[20%] md:w-[20%] lg:w-[15%]' />
     </div>
     <div className='flex justify-center items-center mt-20'>
    <p className='text-lg md:text-xl font-bold text-green-900'>Your Template is ready</p>
     </div>

     <div className='flex justify-center items-center mt-20 gap-x-6'>
   <Link to='/privacymodalthree'>
     <div className='mt-5'>
     <button type='submit'
     className='px-8 py-1 md:py-2 mb-4 outline-none bg-green-900 rounded-2xl text-white text-xl '
     >Back</button>
     </div>
   </Link>

     <Link to='/privacypolicy'>
      <div className='mt-5'>
        <button type='submit'
         className='px-8 py-1 md:py-2 mb-4 outline-none bg-green-900 rounded-2xl text-white text-xl '>
             Preview</button>
      </div>
     </Link>

     </div>
 </div>
  )
}

export default Privacyfinal
