import React from 'react'
import Images from '../../images/logoimgone.png';
import Search from '../../images/Vectornew.png';
import Clientimage from '../../images/clientimage.png';
import Group from '../../images/Group.png';
import { Link } from 'react-router-dom';

 


const TandCgenpage = () => {

  const name = 'MOYOSORE'
  const text = 'Generate a Terms & Conditions agreement for your business with the Terms & Conditions Generator from Terma.'
  return (
    <div className=''>
      <div className='border border-bg-black  w-[100%]   '>
     <div className=' flex justify-between items-center p-5 '>
     <div className='flex justify-start items-center  w-[20%]  '>
        <img src={Images} alt="pic" className=' w-[300px] ' />
      </div>
      <div className='w-[50%] flex justify-center items-center gap-x-2 md:gap-x-5 '>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
      className="w-10 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
     </svg>
        <p className='text-xs font-bold text-green-700 md:text-xl '>Hello {name}!</p>
        <img src={Group} alt="pic" className='w-5 md:w-10' />

      </div>
     </div>
     </div>
     <center className='mt-20'>
      <p className='w-[100%] text-xl text-green-900 font-bold md:w-[40%] text-2xl'>Terms & Conditions Generator</p>
      <p className='w-[100%] text-sm text-green-900 font-bold mt-10  md:w-[30%] text-xl '>{text}</p>
     </center>

     <Link to='/modalpageone'>
      <center className='mt-20'>
     <button type='submit'
      className='px-8 py-2 mb-4 border outline-none bg-green-900 rounded-2xl text-white text-xl '
      >Generate T & C</button>
     </center>
     </Link>

     

     








    </div>
  )
}

export default TandCgenpage
