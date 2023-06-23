import React from 'react'
import Receive from '../../images/direct.png';
import Addone from '../../images/addone.png';
import Add from '../../images/add.png';
import { Link } from 'react-router-dom';

const Main = () => {
  const time = '13:01PM'
  const date = '2nd December,2022'

  const Details =[
    {
      id:1,
      pic:Addone,
      label: 'Term And Condition',
    },
    {
      id:2,
      pic:Addone,
      label: 'Privacy Policies',
    },
    {
      id:3,
      pic:Addone,
      label: 'Terms Of Use',
    },
    {
      id:4,
      pic:Addone,
      label: 'Return And Refund Policies',
    }
  ]
 const Box = [
  {
    id:1,
    detail: 'Policies Downloaded',
    picture: Receive,
    text: <p className='text-xs md:text-lg'><span className='text-orange-600'>24+</span> New policies downloaded</p>,
  },
  {
    id:2,
    detail: 'New Policies Added',
    picture: Receive,
    text: <p className='text-xs md:text-lg'><span className='text-orange-600'>24+</span> New policies downloaded</p>,
  },
  {
    id:3,
    detail: 'Available Policies',
    picture: Receive,
    text: <p className='text-xs md:text-lg'><span className='text-orange-600'>24+</span> New policies downloaded</p>,
  }
 ]
  return (
    <div className=' w-[100%] h-full overflow-hidden'>
      <center className='flex justify-center items-center gap-x-2  mt-5 md:gap-x-5'>
      <p className='text-xs font-bold text-green-900 md:text-xl'>{time}</p>
      <p className='text-xs font-bold text-green-900 md:text-xl'>{date}</p>
      </center>
      <div className='p-10'>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 w-[100%] gap-5'>
          {
            Box.map((items) => (
              <div className=' rounded xl px-2 py-8 bg-slate-300 '>
              <div className='flex justify-start items-center gap-x-1 mt-5 '>
                <p className='text-xs font-extrabold md:text-xl lg:text-lg xl:text-xl text-green-900'>{items.detail}</p>
                <img src={items.picture} alt="pic" className='w-3 md:w-6' />
              </div>
              <div className='flex justify-start items-center mt-5'>
                <p className=''>{items.text}</p>
              </div>
            </div>
            ))
          }
        </div>


        <div className='grid lg:grid-cols-2 w-[100%] gap-5 m-auto mt-10'>
          {
            Details.map((datum) => (
              <div className='rounded xl py-10 px-3 md:p-14 lg:p-16 xl:p-20 bg-transparent border border-green-900 text-green-900'>
              <center className=''>
                <img src={datum.pic} alt="pic" className='w-5 md:w-10 ' />
                </center>
                <center className=''>
                <p className='text-sm md:text-lg'>{datum.label}</p>
                </center>
              </div>
            ))
          }
          
        </div>


       
        </div>
      
    </div>
  )
}

export default Main
