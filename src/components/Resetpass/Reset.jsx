import React, { useState, useEffect } from 'react'
import Images from '../../images/logoimgone.png';

import { Link } from "react-router-dom";

const Reset = () => {

    const initialValues = {  email: "", password: "" };
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
   
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };


  return (
    <div className='grid md:grid-cols-3 p-10'>
      <div className=' col-span-1 '>
        <div>
        <img src={Images} alt="pic" className='w-[100%] md:w-[90%]' />
        </div>
      </div>
      <div className='col-span-2 p-5 md:p-20'>
        
        <form onSubmit={handleSubmit} className=''>
          <div className=' mt-10  '>
            <input name='password'
            onChange={handleChange}
             type="text"
             value={formValues.password}
             placeholder='Reset Your Password'
             className='w-[100%] border border-green-900 outline-none rounded-xl h-10 md:w-[50%]'/>
          </div>
          <div>
          <p className="text-red-500">{formErrors.password}</p>
          </div>
          <p className='text-xl  w-[100%] mt-5  md:w-[50%]'>Email Address:</p>
          <div className=' mt-2 '>
            <input name='email'
            onChange={handleChange}
             type="text"
             value={formValues.email}
             placeholder='Enter email address'
              className='w-[100%] border border-green-900 outline-none rounded-xl h-10 md:w-[50%]'/>
          </div>
          <div>
          <p className="text-red-500">{formErrors.email}</p>
          </div>
          <div className='mt-5'>
            <button type='submit' className='px-8 py-2 mb-4 border bg-green-900 w-[100%] rounded-2xl text-white text-sm  md:w-[50%] '>Set Password Reset Link</button>
          </div>
         
     
        </form>
       
        

      </div>
     
    </div>
  )
}

export default Reset
