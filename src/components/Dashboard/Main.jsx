import React from 'react'
import Receive from '../../images/direct.png';
import Addone from '../../images/addone.png';
import Add from '../../images/add.png';
import { Link } from 'react-router-dom';

const Main = () => {
  const time = '13:01PM'
  const date = '2nd December,2022'
 
  return (
    <div className=' w-[100%] h-full overflow-hidden'>
      <center className='flex justify-center items-center gap-x-2  mt-5 md:gap-x-5'>
      <p className='text-xs font-bold text-green-900 md:text-xl'>{time}</p>
      <p className='text-xs font-bold text-green-900 md:text-xl'>{date}</p>
      </center>
      <div className='p-10'>

        <div className='grid md:grid-cols-3   w-[100%] gap-5'>
          <div className=' rounded xl h-[15vh] md:h-[20vh] bg-slate-300 '>
            <div className='flex justify-center items-center gap-x-2 mt-5 '>
              <p className='text-sm font-bold md:text-2xl text-green-900'>Policies Downloaded</p>
              <img src={Receive} alt="pic" className='w-3 md:w-6' />
            </div>
            <div className='flex justify-center items-center mt-5'>
              <p className='text-xs md:text-lg'><span className='text-orange-600'>24+</span> New policies downloaded</p>
            </div>
          </div>
          <div className=' rounded xl h-[15vh] md:h-[20vh] bg-slate-300 '>
          <div className='flex justify-center items-center  gap-x-3 mt-5'>
          <p className='text-sm font-bold md:text-2xl text-green-900'>New Policies Added</p>
          <img src={Receive} alt="pic" className='w-3 md:w-6' />
            </div>
            <div className='flex justify-center items-center mt-5'>
            <p className='text-xs md:text-lg'><span className='text-orange-600'>24+</span> New policies added</p>
            </div>
          </div>
          <div className=' rounded xl h-[15vh] md:h-[20vh] bg-slate-300 '>
          <div className='flex justify-center items-center  gap-x-3 mt-5'>
          <p className='text-sm font-bold md:text-2xl text-green-900'>Available Policies</p>
          <img src={Receive} alt="pic" className='w-3 md:w-6' />
            </div>
            <div className='flex justify-center items-center mt-5'>
            <p className='text-xs md:text-lg'><span className='text-orange-600'>24+</span> Available policies</p>
            </div>
          </div>
        </div>
        <div className='grid md:grid-cols-2 w-[85%] gap-5 m-auto mt-10'>
          <Link to=''>
          <div className='rounded xl h-[15vh] bg-transparent border border-green-900 text-green-900   '>
          <center className='mt-5'>
            <img src={Addone} alt="pic" className='w-5 ' />
            </center>
            <center className='mt-1'>
            <p className='text-sm md:text-xl'>Term And Condition</p>
            </center>
          </div>
          </Link>
          <div className='rounded xl h-[15vh] bg-green-900 text-white  '>
          <Link to=''>
          <center className='mt-5'>
            <img src={Add} alt="pic" className='w-5 ' />
            </center>
            <center className='mt-1'>
            <p className='text-sm md:text-xl'>Privacy Policies</p>
            </center>
            </Link>

          </div>
        </div>
        <div className='grid md:grid-cols-2 w-[85%] gap-5 m-auto mt-10 text-white  '>
          <div className='rounded xl h-[15vh] bg-green-900 '>
          <center className='mt-5'>
            <img src={Add} alt="pic" className='w-5 ' />
            </center>
            <center className='mt-1'>
            <p className='text-sm md:text-xl'>Terms Of Use</p>
            </center>
          </div>
          <div className='rounded xl h-[15vh] bg-transparent border border-green-900 text-green-900 '>
          <center className='mt-5'>
            <img src={Addone} alt="pic" className='w-5 ' />
            </center>
            <center className='mt-1'>
            <p className='text-sm md:text-xl'>Return And Refund Policies</p>
            </center>
          
          </div>
        </div>
        </div>
      
    </div>
  )
}

export default Main
