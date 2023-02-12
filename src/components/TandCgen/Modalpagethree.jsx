import React from 'react'
import { Link } from 'react-router-dom';

const Modalpagethree = () => {
  const nextQuest = 'Do you collect personal information from your users?'
  const option = '(Dont have a company registered,enter website/app name)'
   
  return (
    <div className='p-5 md:p-20'>
     <form>
     <div>
      <label className='text-green-900 font-bold'>{nextQuest}</label> <br />
      <input type="radio" value="Yes,we do" name="choice" className='mt-5' /> Yes,we do <br />
      <input type="radio" value="No,we dont" name="choice"  className='mt-3'  /> No,we dont
      </div>

      <div className='mt-10'>
      <label className='text-green-900 font-bold'>{nextQuest}</label> <br />
      <input type="radio" value="Yes,we do" name="choice" className='mt-5' /> Yes,we do <br />
      <input type="radio" value="No,we dont" name="choice"  className='mt-3'  /> No,we dont
      </div>


      <div className='mt-10'>
      <label className='text-green-900 font-bold'>{nextQuest}</label> <br />
      <input type="radio" value="Yes,we do" name="choice" className='mt-5 gap-x-5' /> Yes,we do <br />
      <input type="radio" value="No,we dont" name="choice"  className='mt-3'  /> No,we dont
      </div>
      
      <div className='w-[100%] md:w-[100%] h-[8vh] flex justify-between items-center mt-10'>
      <Link to='/modalpagethree'>
        <div className='mt-5'>
        <button type='submit'
        className='px-8 py-2 mb-4 border outline-none bg-green-900 rounded-2xl text-white text-xl '
        >Back</button>
        </div>
      </Link>

        <Link to='/modalfinal'>
         <div className='mt-5'>
           <button type='submit'
            className='px-8 py-2 mb-4 border outline-none bg-green-900 rounded-2xl text-white text-xl '>
                Next</button>
         </div>
        </Link>

        </div>
        </form>
    </div>
  )
}

export default Modalpagethree
