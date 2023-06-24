import React from 'react'
import { Link } from 'react-router-dom';
import Progress from '../TandCgen/Progress';

const Modaloneprivacy = () => {
  const questionOne = "What is your Company's Name?"
  const option = '(Dont have a company registered,enter website/app name)'
  return (
    <div className='p-5 md:p-20'>
       <Progress done="30"/>
    <div className='mt-10'>
     <p className='text-green-900 text-lg md:text-xl font-extrabold'>{questionOne}</p>
     <p className='text-green-900 text-sm md:text-lg font-bold '>{option}</p>

     <div className='w-[100%] md:w-[100%] border border-bg-green-900 drop-shadow-xl mt-5'>
     <input type="text"
     placeholder='Enter Company Name'
     className='w-[100%] p-2 h-[6vh] font-bold outline-none' />
     </div>
     </div>
     <div className='mt-10'>
     <p className='text-green-900 text-lg md:text-xl font-extrabold'>{questionOne}</p>

     <div className='w-[100%] md:w-[100%]  border border-bg-green-900 drop-shadow-xl mt-5'>
     <input type="text"
     placeholder='Enter Company Name'
     className='w-[100%] p-2 h-[6vh] outline-none' />
     </div>
     </div>
     <div className='mt-10'>
     <p className='text-green-900 text-lg md:text-xl font-extrabold'>{questionOne}</p>
     

     <div className='w-[100%] md:w-[100%] border border-bg-green-900 drop-shadow-xl mt-5'>
     <input type="text"
     placeholder='Enter Company Name'
     className='w-[100%] p-2 h-[6vh] outline-none' />
     </div>
     </div>
     <div className='w-[100%] md:w-[100%] h-[8vh] flex justify-between items-center mt-10'>
     <Link to='/privacypolicygen'>
       <div className='mt-5'>
       <button type='submit'
       className='px-8 py-2 mb-4 border outline-none bg-green-900 rounded-2xl text-white md:text-xl'
       >Back</button>
       </div>
     </Link>

       <Link to='/privacymodaltwo'>
        <div className='mt-5'>
          <button type='submit'
           className='px-8 py-2 mb-4 border outline-none bg-green-900 rounded-2xl text-white md:text-xl'>
               Next</button>
        </div>
       </Link>

       </div>
   </div>
  )
}

export default Modaloneprivacy
