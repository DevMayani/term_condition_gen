import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Images from '../../images/logoimgone.png';
import Imagesh from '../../images/shield-tick.png';
import Imagen from '../../images/Vectorss.png';
import Imagens from '../../images/user.png';
import Arrow from '../../images/arrow.png';
import Arrows from '../../images/arrow-white.png';
import Imagesgreen from '../../images/Ellipsebiggreen.png';
import Imagepage from '../../images/pagenew.png';
import VectorOne from '../../images/Vectorss.png';
import VectorTwo from '../../images/user-edit.png';
import VectorThree from '../../images/layer.png';
import HandImage from '../../images/Hand.png';
import redImage from '../../images/red.png';
import yellowImage from '../../images/yellow.png';

const Feedback = () => {
  const [name , setName] = useState([
    {
    id: 1,
    picture : redImage,
    clientName : 'Chandre moore',
    feedback : 'I felt ave really missed alot all this while ave not been using Terma, the results span accross all forms of usage and access.'
  },
  {
  id: 2,
    picture : redImage,
    clientName : 'Emeka Nobis',
    feedback : 'Using Terma terms and conditions template helped me save my business, and it was easy for me to read through'
  },
  {
    id: 3,
      picture : yellowImage,
      clientName : 'Emmanuel Akpe',
      feedback : 'Terms77 is the real deal.The grammars used were simple and understandable.'
    },
])
  return (
    <div className='p-10'>
        <p className='text-2xl md:text-4xl font-bold flex justify-center items-center mt-10'>Customer's Feedback</p>

            <div >
            <div className='grid md:grid-cols-3 gap-x-10 mt-10'>
              {
                name.map((datum) => {
                  return (
                    <div className='p-5 mt-5 border bg-green-900 md:rounded-lg  drop-shadow-xl '>
                      <img src={datum.picture} alt="pic" className='w-[30%] m-auto' />
                      <p className='text-center text-white mt-3'>{datum.clientName}</p>
                      <p className=' flex justify-center mt-3 text-white'>{datum.feedback}</p>
                    </div>
                  )
                })
              }
              </div>

            </div>
        </div>
  )
}

export default Feedback
