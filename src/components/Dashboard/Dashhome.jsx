import React from 'react'
import Dashboard from './Dashboard'

import Main from './Main'
import Sidebars from './Sidebars'



const Dashhome = () => {
  return (
    <div className='overflow-hidden' >
      <div>
      <Dashboard />
      </div>
      <div className='flex justify-start items-start '>
       <Sidebars />
      <Main />
      </div>
     
    </div>
  )
}

export default Dashhome
