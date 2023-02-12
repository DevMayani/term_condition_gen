import React from 'react'
import Images from '../../images/logoimgone.png';
import Menu from '../../images/MENU.png';
import { Link } from 'react-router-dom';


const Termandcon = () => {
  const people = [
    'Confirm that you have obtained the necessary authority to agree to these general terms and conditions;',
    'Bind both yourself and the person company or other legal entity that operates that business or organizational project to these general terms and conditions; and',
    'Agree that you in these general terms and conditions shall reference both the individual user and the relevant person company or legal entity unless the context requires otherwise.',
  ]
  const option = [
    'Keep your password confidential;',
    'Notify us in writing immediately (using our contact details provided at“¬------” if you become aware of any disclosure of your password; and',
    'Your account shall be used exclusively by you and you shall not transfer your account to any third party. If you authorize any third party to manage your account on your behalf this shall be at your own risk.',
    'We may suspend or cancel your account details at any time in our sole discretion and without notice or explanation providing that if we cancel any products or services you have paid for but not received and you have not breached these general terms and conditions we will refund you in respect of the same.',
    'You may cancel your account on our platform by contacting us.',
  ]
  const service= [
    '“¬------” service may experience temporary interruptions due to technical difficulties, maintenance or testing, or updates, including those required to reflect changes in relevant laws and regulatory requirements.',
    'We aim to evolve and improve our services constantly, and we may modify, suspend, or stop (permanently or temporarily) providing all or part of the “¬------” service (including particular functions, features, subscription plans and promotional offerings).',
    'The platform has no obligation to provide any specific content through the “¬------” Service, ',
    'If you have already paid for a subscription that got discontinued by our discretion, we will refund the fees that were paid for the service that was discontinued by us. Your account and billing information must be up to date in order for us to refund you.',
    'We have no liability to you, nor any obligation to provide a refund to you, in connection with internet or other service outages or failures that are caused by the actions of government authorities, other third parties or events beyond our control.',
  ]
  const mobile = [
    'View pages from our website in a web browser;',
    'Download pages from our website for caching in a web browser;',
    'Print pages from our website for your own personal and non-commercial use providing that such printing is not systematic or excessive; and',
    'Use our platform services by means of a web browser subject to the other provisions of these general terms and conditions.',
    
  ]
  const listItems = people.map(person =>
    <li>{person}</li>
  );

  const optionItems = option.map(datum =>
    <li>{datum}</li>
  );

  const serviceItems = service.map(datum =>
    <li>{datum}</li>
  );

  const mobileItems = mobile.map(datum =>
    <li>{datum}</li>
  );

  const intro = "'¬------'is the trading name for the company. We operate an/a “¬------” platform consisting of a website and mobile application together with supporting payment infrastructure for the purchase of “¬------” products and/or services."

  const introc = 'These general terms and conditions shall apply to users of the platform (website and mobile application) and shall govern your use of the platform and related services.'

  const introcont = 'By using our platform you accept these general terms and conditions in full. If you disagree with these general terms and conditions or any part of these general terms and conditions you must not use our platform.'

  const reg = 'You may not register with our platform if you are under 18 years of age (by using our platform or agreeing to these general terms and conditions you warrant and represent to us that you are at least 18 years of age).'

  const reginfo = 'If you register for an account with our platform you will be asked to provide an email address/user ID and password and you agree to:'
   const serviceInfo = 'We use reasonable care and skill to keep the Platform’s Service operational and to provide you with a personalized, immersive experience. However, our service offerings and their availability may change from time to time and subject to applicable laws, without liability to you; for example:'

   const withdralSer = "If you sign up for a Trial, you agree that the withdrawal right for the paid Subscription for which you are receiving a Trial ends “¬------” (----) days after you start the Trial.If you don't cancel the Paid Subscription before the Trial ends, you lose your right of withdrawal and authorize“¬------” to automatically charge you the agreed price each month until you cancel the Paid Subscription. For trials less than“¬------” (----) days, you expressly consent to us providing you with the paid service immediately after the end of your Trial and that from that point you lose your right of withdrawal."

   const withdrawalService = 'If you purchase a Paid Subscription with no Trial, you agree you have “¬------” (----) days after your purchase to withdraw for any reason and must pay us for the services provided up until the time you tell us that you have changed your mind. You expressly consent to us providing you with the service immediately following your purchase, that you lose your right of withdrawal, and authorize“¬------” to charge you automatically each month until you cancel.'

   const use = 'You may:'
   const useWord = 'Except as expressly permitted by the other provisions of these general terms and conditions you must not download any material from our website or save any such material to your computer.'
   const usemobil = 'You may only use our website for your own personal and business purposes in respect of purchasing the services on our platform.'
   const detail = 'Except as expressly permitted by these general terms and conditions you must not edit or otherwise modify any material on our website.'

  return (
    
    <div>
      <div className=' w-[100%]   '>
     <div className=' flex justify-between items-center px-5 md:px-10'>
     <div className='w-[40%] flex justify-start items-center '>
        <img src={Images} alt="pic" className=' w-[300px] md:w-[200px] ' />
      </div>
      <Link to='/modalfinal'>
         <div className='mt-5'>
           <button type='submit'
            className='px-8 py-2 mb-4 border outline-none border border-orange-600 bg-orange-600 text-white text-xl '>
                Cancel</button>
         </div>
        </Link>
     </div>
     </div>

     <div className='hidden md:block '>
      <div className='px-20 mt-10 flex justify-between items-center'>
      <p className='text-green-900 font-bold text-lg md:text-xl'>TERM AND CONDITIONS</p>
      <img src={Menu} alt="pic" className='w-[80%] md:w-[30%]' />
      </div>
     </div>


     <div className='p-10 block md:hidden'>
      <p className='text-green-900 font-bold text-lg md:text-xl'>TERM AND CONDITIONS</p>
      <img src={Menu} alt="pic" className='w-[80%] mt-5' />
     </div>

     <div className='px-10 leading-7 mt-5 text-sm md:px-20 mt-10'>
      <div>
      <p className='text-xl text-green-900 font-semibold'>Introduction</p>
      <p >{intro}</p>
      <p className='mt-2'>{introc}</p>
      <p className='mt-2'>{introcont}</p>
      <ul className='list-disc ml-5 '>{listItems}</ul>
      </div>

      <div>
      <p className='text-xl text-green-900 font-bold mt-5'>Registration and account</p>
      <p className='mt-2'>{reg}</p>
      <p className='mt-2'>{reginfo}</p>
      <ul className='list-disc ml-5 mt-2'>{optionItems}</ul>
      </div>

      <div>
      <p className='text-xl text-green-900 font-bold mt-5'>Service Limitations and Modifications</p>
      <p className='mt-2'>{serviceInfo}</p>
      <ul className='list-disc ml-5 mt-2'>{serviceItems}</ul>
      </div>

      <div>
      <p className='text-xl text-green-900 font-bold mt-5'>Withdrawal/Cancelation right</p>
      <p className='mt-2'>{withdralSer}</p>
      <p className='mt-2'>{withdrawalService}</p>
     
      </div>

      <div>
      <p className='text-xl text-green-900 font-bold mt-5'>Use of website and mobile applications</p>
      <p className='mt-2'>{use}</p>
      <ol className='list-decimal ml-5 mt-2'>{mobileItems}</ol>
      <p className='mt-2'>{useWord}</p>
      <p className='mt-2'>{usemobil}</p>
      <p className='mt-2'>{detail}</p>
      <ol className='list-decimal ml-5 mt-2'>{mobileItems}</ol>
      <p className='mt-2'>Notwithstanding you may forward links to products and/or services on our website and redistribute our newsletter and promotional materials in print and electronic form to any person.</p>
      <p className='mt-2'>We reserve the right to suspend or restrict access to our website to areas of our website and/or to functionality upon our website. We may for example suspend access to the website during server maintenance or when we update the website. You must not circumvent or bypass or attempt to circumvent or bypass any access restriction measures on the website.</p>
      </div>
      
     </div>
     
    </div>
  )
}

export default Termandcon
