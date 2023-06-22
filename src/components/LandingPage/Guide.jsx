import React from 'react'
import { Link } from "react-router-dom";
import Arrow from '../../images/arrow.png';
import Arrows from '../../images/arrow-white.png';


const Guide = () => {
  const Details =[
    {
      id:1,
      step:"Step 1",
      pic: Arrow,
      text:"Enter your website name and the URL to the website. example(www.buymenow.com)"
    },
    {
      id:2,
      step:"Step 2",
      pic: Arrow,
      text:"All you need to do is answer a handful of simple questions,and we will generate the Terms of Service for your website or app. It should take you less than 5 minutes to get it done."
    },
    {
      id:3,
      step:"Step 3",
      pic: Arrow,
      text:"Go through the generated template that has been created for you or use the audio option for easy access."
    },
    {
      id:4,
      step:"Step 4",
      pic: Arrow,
      text:"Click on the download button to download your template or copy the link to share your template."
    }
  ]

  return (
    <div className='p-5 md:p-10'>
            <p className='mt-2 text-xl flex justify-center items-center gap-x-1 md:mt-5'>HOW IT <span className='font-bold '>WORKS</span></p>
            <div className='grid mt-3  md:grid-cols-2 gap-x-[100px]'>
              {Details.map((datum) => (
                <div className='mt-5 h-auto  p-5  border bg-white rounded-lg drop-shadow-xl'>
                <div className='flex justify-between items-center'>
                <p className='font-bold text-xl'>{datum.step}</p>
                <img src={datum.pic} alt="pic" className='w-5' />
                </div>
                <p className='mt-5  text-md'>{datum.text}</p>
                
              </div>
              ))

              }
            
            
            </div>
            
          </div>
  )
}

export default Guide
