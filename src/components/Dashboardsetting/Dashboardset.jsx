import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Sidebars from '../Dashboard/Sidebars'
import Maindetail from './Maindetail'


const Dashboardset = () => {
  return (
    <div className='overflow-hidden ' >
      <div>
      <Dashboard />
      </div>
      <div className='flex justify-start items-start '>
       <Sidebars className='' />
       <Maindetail />
     
      </div>
     
    </div>
  )
}

export default Dashboardset
