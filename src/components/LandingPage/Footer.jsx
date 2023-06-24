import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  const Details = [
    {
      id: 1,
      title: "Company",
      textOne: "About us",
      textTwo: "Our Terms of use",
      textThree: "Our Privacy policies"
    },
    {
      id: 2,
      title: "Resourses",
      textOne: "Terms and conditions",
      textTwo: "Our Terms of use",
      textThree: "Privacy policies"
    },
    {
      id: 3,
      title: "Support",
      textOne: "Contact us",
      textTwo: "FAQs",
    }
  ]
  return (
    <div className='bg-green-900  grid md:grid-cols-5 gap-x-10  p-10'>
      <div className='col-span-full md:col-span-2'>
        <p className='text-white  mt-5'>Products</p>
        <p className='mt-3 text-white text-xs md:text-sm'>We are a legally verified agency. We create customized Privacy Policies and Terms & Conditions in a matter of seconds to keep your business safe from any legal issue.</p>
      </div>
      <div className='col-span-full gap-3 md:col-span-3 flex justify-around items-start'>
        {
          Details.map((datum) => (
            <div className='col-span-1 w-full h-full  md:col-span-1'>
              <p className=' text-white font-bold  mt-5 text-sm'>{datum.title}</p>
                <p className='mt-2 text-white text-xs h-[5vh] md:h-[2vh] hover:text-green-300 '>{datum.textOne}</p>
                <p className='mt-1 text-white text-xs hover:text-green-300 h-[5vh] md:h-[2vh] md:mt-3'>{datum.textTwo}</p>
                <p className='mt-1 text-white text-xs hover:text-green-300 h-[5vh] md:h-[2vh] md:mt-3 '>{datum.textThree}</p>
            </div>
          ))
        }




      </div>




    </div>

  )
}

export default Footer
