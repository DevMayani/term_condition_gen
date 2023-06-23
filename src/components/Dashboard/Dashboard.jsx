import React from 'react'
import Images from '../../images/logoimgone.png';
import Search from '../../images/Vectornew.png';
import Clientimage from '../../images/clientimage.png';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const name = 'MOYOSORE'

  return (
    <section>
      <div className='hidden lg:block'>
        <div className='border border-bg-black  w-[100%] py-1'>
          <div className=' flex justify-evenly items-center  '>
            <div className='flex justify-start items-center  w-[20%]  '>
              <img src={Images} alt="pic" className=' w-[300px]' />
            </div>
            <div className=' h-[8vh] w-[40%] rounded-2xl flex justify-around items-center  border border-black bg-white drop-shadow-2xl lg:w-[35%] xl:h-[6vh]'>
              <input type="text"
                name=""
                id=""
                placeholder='Search... '
                className='w-[80%] outline-none bg-transparent text-xl' />
              <img src={Search}
                alt="pic"
                className='w-5 md:w-5' />
            </div>
            <div className='flex justify-center items-center gap-x-3 lg:w-[35%]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                className="w-10 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
              <p className='text-xs font-bold text-green-700 md:text-xl'>Hello {name}!</p>
              <img src={Clientimage} alt="pic" className='w-5  md:w-20 h-20 rounded-full' />
            </div>
          </div>
        </div>
      </div>
      <div className='block  lg:hidden'>
        <div className='border border-bg-black  w-[100%] p-2 flex justify-between items-center'>
          <div className='flex justify-start items-center  w-[20%]  '>
            <img src={Images} alt="pic" className=' w-[400px]' />
          </div>
          <div className='flex justify-center items-center gap-x-1 md:gap-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                className="w-6 h-5 md:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
              <p className='text-xs font-bold text-green-700 md:text-xl'>Hello {name}!</p>
              <img src={Clientimage} alt="pic" className='w-12 h-12 rounded-full' />
            </div>

        </div>
        <div className='border border-bg-black py-2 flex justify-center'>
        <div className=' h-[4vh] w-[80%] rounded-2xl flex justify-center items-center  border border-black bg-white drop-shadow-2xl md:w-[60%]'>
              <input type="text"
                name=""
                id=""
                placeholder='Search... '
                className='w-[80%] outline-none bg-transparent text-sm md:text-xl' />
              <img src={Search}
                alt="pic"
                className='w-3 md:w-5' />
            </div>

        </div>

      </div>
    </section>
  )
}

export default Dashboard
