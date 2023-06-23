import React from 'react'
import Images from '../../images/logoimgone.png';
import Menu from '../../images/MENU.png';
import { Link } from 'react-router-dom';

const Privacypolicy = () => {
  const people = [
    'Profile name',
    'Email address',
    'Phone number',
    'Date of birth',
    'Gender',
    'Street address (see further details below)',
    'Country',
  ]

  const option = [
    'Registering you as a new customer.',
    'Processing and delivering your orders.',
    'Managing your relationship with us.',
    'Enabling you to participate in promotions, competitions and surveys.',
    'Improving our website, applications, products and services',
    'Recommending/advertising products or services which may be of interest to you.',
    'Complying with our legal obligations, including verifying your identity where necessary.',
    'Detecting fraud.',
  ]

  const data= [
    'Where we need to share personal data for the use of a “¬-------” service feature, or a third party application, service or device, which you have chosen to use, or ',
    'If you otherwise grant us your permission to share the personal data. For example, you can do it by selecting the appropriate setting in the “¬-------” service or by giving your consent to connect your “¬-------” account, or allow you to use the “¬-------” service in connection with third party applications or services.',
    'Examples of such third party applications, services and devices include: payment platforms, social media applications, automotive platforms, voice assistants etc.',
    
  ]

  const storage= [
    'Maintaining the performance of the service',
    'Making data-driven business decisions about new features and offerings.',
    'Complying with our legal obligations',
    'Resolving disputes.',
    
  ]

  const listItems = people.map(person =>
    <li>{person}</li>
  );

  const optionItems = option.map(person =>
    <li>{person}</li>
  );

  const dataItems = data.map(person =>
    <li>{person}</li>
  );

  const storageItems = storage.map(person =>
    <li>{person}</li>
  );

  return (
    <div className='py-10 md:py-20'>
      <div className=' w-[100%]'>
     <div className=' flex justify-between items-center px-5 md:px-10'>
     <div className='w-[40%] flex justify-start items-center '>
        <img src={Images} alt="pic" className=' w-[300px] md:w-[200px] ' />
      </div>
      <Link to='/privacyfinal'>
         <div className='mt-5'>
           <button type='submit'
            className='px-8 py-2 mb-4 border outline-none border-orange-600 bg-orange-600 text-white text-xl '>
                Cancel</button>
         </div>
        </Link>
     </div>
     </div>

     <div className='hidden md:block '>
      <div className='px-20 mt-10 flex justify-between items-center'>
      <p className='text-green-900 font-bold text-lg md:text-xl'>PRIVACY POLICY</p>
      <img src={Menu} alt="pic" className='w-[80%] md:w-[30%]' />
      </div>
     </div>


     <div className='p-10 block md:hidden'>
      <p className='text-green-900 font-bold text-lg'>PRIVACY POLICY</p>
      <img src={Menu} alt="pic" className='w-[80%] mt-5' />
     </div>


     <div className='px-10 leading-7 mt-5 text-sm md:px-20 md:mt-10'>
      <div>
      <p className='text-lg md:text-xl text-green-900 font-semibold'>Introduction</p>
      <p className='mt-2'>This privacy policy provides information on how “¬-------” collects and processes your personal data when you visit our website or mobile applications.</p>
      </div>

      <div>
      <p className='text-lg md:text-xl text-green-900 font-bold mt-5'>The Data We Collect About You?</p>
      <p className='mt-2'>We may collect, use, store and transfer the following different kinds of personal data about you to create a free account on “¬-------” and for personal data optimization purposes:</p>
      <ul className='list-disc ml-5 '>{listItems}</ul>
     
      </div>

      <div>
      <p className='text-lg md:text-xl text-green-900 font-bold mt-5'>How We Use Your Personal Data</p>
      <p>We collect your personal data in order to provide and continually improve our products and/or services. We use your personal data to operate, provide, develop and improve the products and services that we offer, including the following:</p>
      <ul className='list-disc ml-5 '>{optionItems}</ul>
     
      </div>

      <div>
      <p className='text-lg md:text-xl text-green-900 font-bold mt-5'>How we share your personal data</p>
      <p className='mt-2'>We will only share your personal data:</p>
      <ul className='list-disc ml-5 '>{dataItems}</ul>
     
      </div>

      <div>
      <p className='text-lg md:text-xl text-green-900 font-bold mt-5'>Data storage/retention</p>
      <p className='mt-2'>We keep your personal data only as long as necessary to provide you with the “¬-------” Service and for legitimate and essential business purposes, such as:</p>
      <ul className='list-disc ml-5 '>{storageItems}</ul>
     
      </div>

      

     
      
     </div>






    </div>
  )
}

export default Privacypolicy
