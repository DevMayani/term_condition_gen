import React from 'react'
import Frame from '../../images/Frameone.png';
import { Link } from 'react-router-dom';

const Privacyfinal = () => {
  return (
    <div className='p-20'>
      

    <div className='flex justify-center items-center'>
     <img src={Frame} alt="pic" className='w-[30%] md:w-[10%]' />
     </div>
     <div className='flex justify-center items-center mt-20'>
    <p className='text-sm md:text-xl font-bold text-green-900'>Your Template is ready</p>
     </div>

     <div className='w-[100%] md:w-[100%] h-[8vh] flex justify-around items-center mt-20'>
   <Link to='/privacymodalthree'>
     <div className='mt-5'>
     <button type='submit'
     className='px-8 py-2 mb-4 border outline-none bg-green-900 rounded-2xl text-white text-xl '
     >Back</button>
     </div>
   </Link>

     <Link to='/privacypolicy'>
      <div className='mt-5'>
        <button type='submit'
         className='px-8 py-2 mb-4 border outline-none bg-green-900 rounded-2xl text-white text-xl '>
             Preview</button>
      </div>
     </Link>

     </div>
 </div>
  )
}

export default Privacyfinal
