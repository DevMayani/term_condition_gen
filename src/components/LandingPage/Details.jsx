import React from 'react'
import Imagesh from '../../images/shield-tick.png';
import Imagesgreen from '../../images/Ellipsebiggreen.png';
import VectorOne from '../../images/Vectorss.png';
import VectorTwo from '../../images/user-edit.png';
import VectorThree from '../../images/layer.png';


const Details = () => {
  const Comp = [
    {
      id: 1,
      picOne: Imagesgreen,
      picTwo: Imagesh,
      textOne: "Terma Keeps you updated on new T&C modules available for premium result",
    },
    {
      id: 2,
      picOne: Imagesgreen,
      picTwo: VectorOne,
      textOne: "We create the best and most up to date policies for your business",
    },
    {
      id: 3,
      picOne: Imagesgreen,
      picTwo: VectorThree,
      textOne: "Terma lets you edit and customize manually your policies and also lets you download them on PDF, DOCX, TXT and HTML format",
    },
    {
      id: 4,
      picOne: Imagesgreen,
      picTwo: VectorTwo,
      textOne: "Terma is an Easy to Use System, which gives youaccess to edit, monitor and Enforce your product policyat any given time",
    }
  ]

  const textTwo = 'Terma Keeps you updated on new T&C modules available for premium result'
  const textOne = 'We create the best and most up to date policies for your business'
  const textThree = 'Terma lets you edit and customize manually your policies and also lets you download them on PDF, DOCX, TXT and HTML format.'
  const textFour = 'Terma is an Easy to Use System, which gives youaccess to edit, monitor and Enforce your product policyat any given time'

  return (
    <div className='px-[20px] md:py-20 '>
      <p className='flex justify-center items-center  mt-10 md:mt-2 text-2xl font-bold text-green-900'>Why Choose Us</p>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-[90px] mt-2 m-auto'>
        {Comp.map((datum) => (
          <div>
            <div className='relative mt-5'>
              <img src={datum.picOne} alt="img" className=' w-14 md:m-auto ' />
              <img src={datum.picTwo} alt="img" className='h-10 absolute top-2 inset-x-2 md:inset-x-[151px] lg:inset-x-[69px] xl:lg:inset-x-[100px]' />
            </div>
            <p className='mt-5'>{datum.textOne}</p>

          </div>
        ))
        }

      </div>
    </div>
  )
}

export default Details
