import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Progress from './Progress';

const Modalpageone = () => {
  const questionOne = "What is your Company's Name?"
  const questionTwo = "What is your website's Name?"
  const questionThree = "What is your website's url?"
  const option = '(Dont have a company registered,enter website/app name)'

  const initialValues = { companyname: "",websitename: "", websitelink: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.companyname) {
      errors.companyname = "Company name is required!";
    } 

    if (!values.websitename) {
      errors.websitename = "Website name is required";
    } 

    if (!values.websitelink) {
      errors.websitelink = "Website Url is required";
    }

    return errors;
  };
  
  return (
    <div className='p-5 md:p-20'>
      <div>
       <Progress done="35"/>
      </div>

      <form onSubmit={handleSubmit} className='mt-10'>
     <div className='mt-10'>
      <p className='text-green-900 text-lg md:text-xl font-extrabold'>{questionOne}</p>
      <p className='text-green-900 text-sm  md:text-lg font-bold mt-2'>{option}</p>

      <div className='w-[100%] md:w-[100%] border border-bg-green-900 drop-shadow-xl mt-5'>
        
      <input name='companyname'
      onChange={handleChange}
      type="text"
      placeholder='Enter Company Name'
      value={formValues.companyname}
      className='w-[100%] p-2 h-[6vh] font-bold outline-none' />
      </div>
      <center>
          <p className="text-red-500">{formErrors.companyname}</p>
      </center>
      </div>

      <div className='mt-10'>

      <p className='text-green-900 text-lg md:text-xl font-extrabold'>{questionTwo}</p>

      <div className='w-[100%] md:w-[100%] border border-bg-green-900 drop-shadow-xl mt-5'>
      <input name='websitename' 
      onChange={handleChange}
      type="text"
      placeholder='Enter website name'
      value={formValues.websitename}
      className='w-[100%] p-2 h-[6vh] outline-none' />
      </div>
      <center>
          <p className="text-red-500">{formErrors.websitename}</p>
      </center>
      </div>

      <div className='mt-10'>
      <p className='text-green-900 text-lg md:text-xl font-extrabold'>{questionThree}</p>
      <div className='w-[100%] md:w-[100%] h-[8vh] border border-bg-green-900 drop-shadow-xl mt-5'>
      <input name='websitelink'
      onChange={handleChange}
      type="text"
      placeholder='Enter website url'
      value={formValues.websitelink}
      className='w-[100%] p-2 h-[6vh] outline-none' />
      </div>
      <center>
          <p className="text-red-500">{formErrors.websitelink}</p>
      </center>
      </div>
      
      <div className='w-[100%] md:w-[100%] h-[8vh] flex justify-between items-center mt-10'>
     
        <div className='mt-5'>
        <Link to='/tandCgenpage'>
        <button type='button'
        className='px-8 py-2 mb-4 border outline-none bg-green-900 rounded-2xl text-white text-xl '
        >Back
        </button>
        </Link>
        </div>
      

       
         <div className='mt-5'>
         <Link to='/Modalpagetwo'>
           <button type='submit'
            className='px-8 py-2 mb-4 border outline-none bg-green-900 rounded-2xl text-white text-xl '>
                Next
                </button>
                </Link>
         </div>
        

        </div>

      </form>

      
    </div>
  )
}

export default Modalpageone
