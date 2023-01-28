import React from 'react'
import { Link } from "react-router-dom";
import Arrow from '../../images/arrow.png';
import Arrows from '../../images/arrow-white.png';


const Guide = () => {
  const contOne = 'Enter your website name and the URL to the website. example(www.buymenow.com)'
  const contTwo = 'All you need to do is answer a handful of simple questions,and we will generate the Terms of Service for your website or app. It should take you less than 5 minutes to get it done.'
  const contThree = 'Go through the generated template that has been created for you or use the audio option for easy access.'
  const contFour = 'Click on the download button to download your template or copy the link to share your template.' 
  return (
    <div className='p-10'>
            <p className='mt-2 text-xl flex justify-center items-center gap-x-1 md:mt-5'>HOW IT <span className='font-bold '>WORKS</span></p>
            <div className='grid mt-3  md:grid-cols-2 gap-x-[100px]'>
            <div className='h-[50vh]  mt-5  p-5  border bg-white md:h-[40vh] rounded-lg   drop-shadow-xl'>
              <div className='flex justify-between items-center'>
              <p className='font-bold text-xl'>Step 1</p>
              <img src={Arrow} alt="pic" className='w-5' />
              </div>
              <p className='mt-5  w-[50%] text-md'>{contOne}</p>
              
            </div>
            <div className='h-[50vh] mt-5  p-5 border bg-white md:h-[40vh] rounded-lg  drop-shadow-xl'>
            <div className='flex justify-between items-center'>
              <p className='font-bold text-xl'>Step 2</p>
              <img src={Arrow} alt="pic" className='w-5' />
              </div>
              <p className='mt-5 w-[70%] text-md'>{contTwo}</p>
              
            </div>
            </div>
            <div className='grid  mt-5 md:grid-cols-2 gap-x-[100px]  mt-10 '>
            <div className='h-[50vh] p-5 mt-5 border bg-white md:h-[40vh] rounded-lg  drop-shadow-xl'>
            <div className='flex justify-between items-center'>
              <p className='font-bold text-xl'>Step 3</p>
              <img src={Arrow} alt="pic" className='w-5' />
              </div>
              <p className='mt-5  w-[50%] text-md'>{contThree}</p>
            </div>
            <div className='h-[50vh] p-5 mt-5 border bg-green-900 md:h-[40vh] rounded-lg drop-shadow-xl '>
            <div className='flex justify-between items-center'>
              <p className='font-bold text-xl text-white'>Step 4</p>
              <img src={Arrows} alt="pic" className='w-5' />
              </div>
              <p className='mt-5  w-[50%] text-md text-white'>{contFour}</p>
            </div>
            </div>
          </div>
  )
}

export default Guide
