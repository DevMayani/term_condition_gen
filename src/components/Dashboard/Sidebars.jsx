import React from 'react'
import { SidebarData } from './SidebarData'
import Element from '../../images/element.png';
import { useState } from 'react'



const Sidebars = () => {
  const [details , setDetails] = useState([
    {
    id:1,
    title: "Dashboard",
    icon: {Element},
    link: "/home",
  },
  {
    id:2,
    title: "Policies",
    icon: {Element},
    link: "/home",
  },
  { 
    id:3,
    title: "Downloads",
    icon: {Element},
    link: "/home",
  },
  {
    id:4,
    title: "Saved",
    icon: {Element},
    link: "/home",
  },
  {
    id:5,
    title: "Settings",
    icon: {Element},
    link: "/home",
  },
])
  
  return (
    <div className='w-[50%] h-screen cursor-pointer md:w-[20%] border border-bg-900 '>
      {
        details.map((datum) => 
          <div key={datum.id} className='flex justify-center items-center w-full mt-10 hover:bg-green-900   md:gap-x-3  '>
          <img src={Element} alt="pic" className=' w-5 md:w-8  ' />
          <div className=' w-20 font-bold text-green-900 hover:text-white'>
          <p className=' '>{datum.title}</p>
          </div>
          
          </div>
       )
      }
     
    </div>
  )
}

export default Sidebars
