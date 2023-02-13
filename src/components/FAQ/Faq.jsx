import React, {useState} from 'react';
import Navbar from '../LandingPage/Navbar'
import Grouptwo from '../../images/Grouptwo.png';
import Vectornew from '../../images/Vectornew.png';
import Vector from '../../images/Vector.png';
import Term from '../../images/Term.png';
import Vectorup from '../../images/Vectorup.png';
import Vectordown from '../../images/Vectordown.png';
import Eyenew from '../../images/eyenew.png';
import Charm from '../../images/charm.png';
import { Link } from 'react-router-dom';
import Footer from '../LandingPage/Footer';

const Faq = () => {

  const [details, setdetails] = useState([
    {
    id:1,
    image:Vector,
    heading: 'New to Terma?',
    title: 'Do I need to register an account with Terma?',
    option: 'You do not need to register an account to use our Terma service',
    titletwo: 'Do I need to download a software application?',
    optiontwo: 'You do not need to download any software application to use our Terma service',

  },
  {
    id:2,
    image:Eyenew,
    heading: 'Download',
    title: 'Can i download my generated policy or agreement?',
    option: 'Yes you can choose to download yourgenerated aggreement or policy',
    titletwo: 'Can i link to my generated policy or agreement?',
    optiontwo: 'Yes you can with the public link. The public link is available on the download page:',
  },
  {
    id:3,
    image:Charm,
    heading: 'Terms and condition generator',
    title: 'How can i download my terms and conditions?',
    option: 'To download your Terms & conditions choose the file format you want and click the “Download” button',
    titletwo: 'Can i link my terms and conditions?',
    optiontwo: 'Yes you can with the public link. The public link is available on the download page:',
  },
  {
    id:4,
    image:Term,
    heading: 'Privacy policy generator',
    title: 'How can i download my privacy policy?',
    option: 'To download your Terms & conditions choose the file format you want and click the “Download” button',
    titletwo: 'Can i link my privacy policy?',
    optiontwo: 'Yes you can with the public link. The public link is available on the download page:',
  },

])

  const [Vectorups, setVectorups] = useState(false)
  const handleClick = () => {setVectorups(!Vectorups)}
  const handleClose =()=> {setVectorups(!Vectorups)}

  

  

  return (
    <div className='overflow-hidden'>
      <Navbar />
      <div className='px-5 md:px-16 '>
      <div className=' grid md:grid-cols-2'>

       <div className=''>
        <div className='mt-1 md:mt-20'>
          <p className='text-2xl font-bold text-green-900'>How Can We Help You?</p>
          <div className='border border-green-900 w-[80%] h-[8vh] flex justify-around items-center mt-10'>
            <input type="text" placeholder='Search...' className='w-[80%] h-[5vh] outline-none bg-transparent' />
            <img src={Vectornew} alt="pic" className='w-5' />
          </div>
          </div>
          <div className='mt-10'>
            <p className='text-xl md:text-2xl font-bold text-green-900 '>Frequently asked  questions</p>
            <p className='leading-7 mt-5'>Got questions? Here’s what you need to know about your Terma license, based on the questions we are asked the most.</p>
          </div>
        </div>

        <div className=''>
          <img src={Grouptwo} alt="pic" className='w-[100%] md:w-[80%]' />
        </div>

       </div>
       
       <div className='grid md:grid-cols-2 gap-10 mt-10 '>
        {
          details.map((datum) => {
            return(
              <div className=' p-5 border border-green-900 md: p-10 h-[40vh]'>
              <div className='gap-x-5 flex justify-start items-center md:gap-x-10'>
                 <img src={datum.image} alt="pic" className='w-10' />
                 <p className='text-lg font-bold md:text-2xl'>{datum.heading}</p> 
              </div>
              <div className='mt-5'>
              {!Vectorups ? 
            <div className='w-[100%] border border-green-900 h-[10vh] flex justify-between items-center px-1  md:px-5'> 
                <p className='w-[100%] bg-transparent font-bold text-black outline-none text-xs md:text-lg'>{datum.title}</p>
                <img src={Vectorup} alt="pic" className='w-2 md:w-3' onClick={handleClick} />
              </div> : 
              <div className='w-[100%] border border-green-900 h-[7vh] flex justify-between items-center px-1 md:px-5' >
                <p className='w-[100%] bg-transparent text-slate-700 outline-none text-xs md:text-sm'>{datum.option}</p>
                <img src={Vectordown} alt="pic" className='w-2 md:w-3' onClick={handleClose} />
              </div> }

              </div>
              <div className='mt-8'>
              {!Vectorups ? 
            <div className='w-[100%] border border-green-900 h-[5vh] flex justify-between items-center px-1  md:px-5'> 
                <p className='w-[100%] bg-transparent font-bold text-black outline-none text-xs md:text-lg'>{datum.titletwo}</p>
                <img src={Vectorup} alt="pic" className='w-2 md:w-3' onClick={handleClick} />
              </div> : 
              <div className='w-[100%] border border-green-900 h-[7vh] flex justify-between items-center px-1 md:px-5' >
                <p className='w-[100%] bg-transparent text-slate-700 outline-none text-xs md:text-sm'>{datum.optiontwo}</p>
                <img src={Vectordown} alt="pic" className='w-2 md:w-3' onClick={handleClose} />
              </div> }

              </div>
              
              </div>

            )
          })
        }
        
       </div>
       <center className='mt-10'>
        <p className='text-xl font-bold text-green-900'>Need further help?</p>
        <p className='text-lg font-bold text-green-900'>If you cannot find your answer in our help section, kindly contact us</p>
       </center>
       <center className='mt-5'>
            <Link to=''><button type='submit' 
            className='px-8 py-4 mb-4 border bg-green-900 w-[100%] rounded-2xl text-white text-xl md:w-[25%]'>Contact Terma Support</button></Link>
          </center>
       
      </div>
      <Footer />
    </div>
  )
}

export default Faq
