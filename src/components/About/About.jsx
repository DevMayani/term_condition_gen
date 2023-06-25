import React from 'react'
import Navbar from "../../components/LandingPage/Navbar";
import Three from '../../images/three.png';
import Four from '../../images/Group2.png';
import Landfooter from '../../components/LandingPage/Landfooter'
import Eye from '../../images/eye.png';
import Send from '../../images/send.png';
import Receipt from '../../images/receipt.png';
import Discount from '../../images/discount.png';


const About = () => {
  const Details = [
    {
      id:1,
      subOne: <p className='text-green-900'>2022</p>,
      subTwo:  <p className='font-semibold uppercase'>Founded</p>,
    },
    {
      id:2,
      subOne: <p className='text-green-900'>10+</p>,
      subTwo:<p className='font-semibold uppercase'>Supported Countries</p>
    },
    {
      id:3,
      subOne: <p className='text-green-900'>20+</p>,
      subTwo:  <p className='font-semibold uppercase'>Users</p>,
    },
    {
      id:4,
      subOne:<p className='text-green-900 '>20+</p>,
      subTwo:  <p className='font-semibold uppercase'>Policies Created</p>,
    },
  ]
  const Comp = [
    {
      id:1,
      picOne: Eye,
      text:  <p className=''>Basic Privacy <br /> Policy</p>,
      picTwo: Send

    },
    {
      id:2,
      picOne: Receipt,
      text:  <p className=''>Terms and <br /> Conditions</p>,
      picTwo: Send

    }, {
      id:3,
      picOne: Discount,
      text:  <p className=''>Cookies <br /> Policy</p>,
      picTwo: Send

    }
  ]
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet scelerisque euismod phasellus nibh. Rutrum metus massa tincidunt donec lacus, in. Velit, et nibh orci nunc. A arcu, maecenas faucibus pellentesque et amet.'
  return (
    <div className='overflow-hidden'>
     <Navbar  />
     <div className='px-5 lg:px-10'>
      <div className='grid lg:grid-cols-2'>
        <div className='mt-10 '>
          <p className='text-2xl md:text-4xl font-semibold w-[70%]'>Who are we?</p>
          <p className='lg:w-[70%] text-sm md:text-lg lg:text-xl mt-5 md:mt-10'>{text}</p>
        </div>
        <div className=' mt-10'>
          <img src={Three} alt="pic" className='' />
        </div>
      </div>
      <div className='grid mt-20  lg:grid-cols-2'>
      <div>
        <img src={Four} alt="pic" className='w-[90%]' />
      </div>
      <div className='mt-20 '>
          <p className='text-2xl md:text-4xl font-semibold w-[70%'>Who do we do?</p>
          <p className='lg:w-[70%] text-sm md:text-lg lg:text-xl mt-5 md:mt-10'>{text}</p>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4 mt-20'>
        {
          Details.map((datum) => (
            <center className=' py-10 text-xs md:text-xl'>
            <p className='text-green-900 font-bold'>{datum.subOne}</p>
            <p className='uppercase'>{datum.subTwo}</p>
          </center>
          ))
        }
      </div>
      <div className='grid py-5 md:py-10 bg-green-900 md:grid-cols-2'>
        <div className='flex justify-center items-center'>
        <div className='w-[70%]'>
              <button className='text-green-900 w-[100%] border border-orange-600 bg-orange-600 font-bold px-10 py-2 mb-4 rounded-xl md:text-xl md:py-5 '>Our Services</button>
            </div>

        </div>
        <div className='gap-x-2 w-[100%] px-3 md:px-2 grid grid-cols-3 md:gap-x-5'>
          {
            Comp.map((items) => (
              <div className=' py-5 border bg-white rounded-xl'>
              <div className='mt-2'>
              <img src={items.picOne} alt="pic" className='w-5 m-auto ' />
              <center className='mt-2'>
              <p className='text-sm lg:text-lg'>{items.text}</p>
              </center>
                <img src={items.picTwo} alt="pic" className='w-5 mt-3 m-auto' />
              </div>
              </div>
            ))
          }

        </div>

      </div>
     </div>
     <Landfooter />
    </div>
  )
}

export default About
