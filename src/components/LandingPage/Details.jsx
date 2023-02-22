import React from 'react'
import Imagesh from '../../images/shield-tick.png';
import Imagesgreen from '../../images/Ellipsebiggreen.png';
import VectorOne from '../../images/Vectorss.png';
import VectorTwo from '../../images/user-edit.png';
import VectorThree from '../../images/layer.png';


const Details = () => {
  
  const textTwo = 'Terma Keeps you updated on new T&C modules available for premium result'
  const textOne = 'We create the best and most up to date policies for your business'
  const textThree = 'Terma lets you edit and customize manually your policies and also lets you download them on PDF, DOCX, TXT and HTML format.'
  const textFour = 'Terma is an Easy to Use System, which gives youaccess to edit, monitor and Enforce your product policyat any given time'

  return (
    <div className='p-[20px]  h-[130vh] md:h-[70vh]'>
            <p className='flex justify-center items-center  mt-10 text-2xl font-bold text-green-900'>Why Choose Us</p>
            <div className='grid  m-auto md:grid-cols-4 gap-x-[90px] mt-2'>

              <div className=' h-[25vh] relative mt-5 '>
              <img src={Imagesgreen} alt="img" className=' w-14 md:m-auto '  />
              <img src={Imagesh} alt="img" className='h-10 absolute top-0 inset-x-2 md:inset-x-[94px] top-2  ' />
              <p className='mt-5'>{textOne}</p>
              </div>

              <div className=' h-[25vh] relative mt-5'>
              <img src={Imagesgreen} alt="img" className=' w-14 md:m-auto'  />
              <img src={VectorOne} alt="img" className='h-10 absolute top-0 inset-x-2 md:inset-x-[94px] top-2' />
              <p className='mt-5'>{textTwo}</p>
              </div>

              <div className=' h-[25vh] relative mt-5'>
              <img src={Imagesgreen} alt="img" className=' w-14 md:m-auto'  />
              <img src={VectorThree} alt="img" className='h-10 absolute top-0 inset-x-2 md:inset-x-[94px] top-2' />
              <p className='mt-5'>{textThree}</p>
              </div>

              <div className='mt-10 h-[25vh] relative md:mt-5'>
              <img src={Imagesgreen} alt="img" className=' w-14 md:m-auto'  />
              <img src={VectorTwo} alt="img" className='h-10 absolute top-0 inset-x-2 md:inset-x-[94px] top-2' />
              <p className='mt-5'>{textFour}</p>
              </div>

            </div>
          </div>
  )
}

export default Details
