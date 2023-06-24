import React from 'react'
import { Link } from 'react-router-dom';
import Progress from '../TandCgen/Progress';
import { useState } from 'react';

const Privacymodalthree = () => {
  const [questions, setQuestions] = useState([
    {
    id:1,
    mainQuestion: 'Do you collect personal information from your users?',
    optionOne: 'Yes,we do',
    optionTwo: 'No,we dont',
  },
  {
    id:2,
    mainQuestion: 'Do you collect personal information from your users?',
    optionOne: 'Yes,we do',
    optionTwo: 'No,we dont',
  },
  {
    id:3,
    mainQuestion: 'Do you collect personal information from your users?',
    optionOne: 'Yes,we do',
    optionTwo: 'No,we dont',
  },
])

  return (
    <div className='p-5 md:p-20'>
       <Progress done="100"/>
    <form>
    <div className='mt-10'>
      {
        questions.map((datum) => {
          return(
            <div className='mt-10'>
              <label className='text-green-900  font-extrabold'>{datum.mainQuestion}</label> <br />
              <div className='flex justify-start items-center mt-5 gap-x-3'>
             <input 
             type="radio" 
             value="Yes,we do" 
             name={`choice-${datum.id}`} className='' /><p>{datum.optionOne}</p><br />
             </div>
             <div className='flex justify-start items-center mt-5 gap-x-3'>
             <input 
             type="radio" 
             value="No,we dont" name={`choice-${datum.id}`} 
             className='' /><p>{datum.optionTwo}</p><br />
             </div>
            
            </div>
          )
        }) 
      }
  
   </div>


   
   
   <div className='w-[100%] md:w-[100%] h-[8vh] flex justify-between items-center mt-10'>
   <Link to='/privacymodaltwo'>
     <div className='mt-5'>
     <button type='submit'
     className='px-8 py-2 md:py-2 mb-4 border outline-none bg-green-900 rounded-2xl text-white md:text-xl '
     >Back</button>
     </div>
   </Link>

     <Link to='/privacyfinal'>
      <div className='mt-5'>
        <button type='submit'
         className='px-8 py-2 md:py-2 mb-4 border outline-none bg-green-900 rounded-2xl text-white md:text-xl '>
             Next</button>
      </div>
     </Link>

     </div>
     </form>
 </div>
  )
}

export default Privacymodalthree
