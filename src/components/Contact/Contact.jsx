import React, { useState, useEffect } from 'react'
import Navbar from "../../components/LandingPage/Navbar";
import Clarity from '../../images/clarity.png';


const Contact = () => {
  const initialValues = { fullname: "", email: "", password: "", text: "" };
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
      if (!values.fullname) {
        errors.fullname = "Fullname is required!";
      }
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
      if (!values.text) {
        errors.text = "Input Text!";
      }
      
      return errors;
    };
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <div className=''>
        <img src={Clarity} alt="pic" className='w-[100%]' />
      </div>
      <div className='p-10'>
        <center>
          <p>Send Us An Email</p>
        </center>
        <form onSubmit={handleSubmit} className='mt-10'>
          <p className='text-xl m-auto  w-[100%] md:w-[70%] lg:w-[50%]'>Fullname:</p>
            <div className='flex justify-center items-center mt-2   '>
              <input name='fullname'
              onChange={handleChange}
               type="text"
                placeholder='Enter Full name' 
                value={formValues.fullname}
                className='w-[100%] p-2 border border-green-900 outline-none rounded-xl h-10 md:w-[70%] lg:w-[50%]'/>
            </div>
            <center>
            <p className="text-red-500">{formErrors.fullname}</p>
            </center>
    
            <p className='text-xl m-auto  w-[100%] mt-5  md:w-[70%] lg:w-[50%]'>Email Address:</p>
            <div className='flex justify-center items-center mt-2  '>
              <input name='email'
              onChange={handleChange}
               type="text"
               value={formValues.email}
               placeholder='Enter Email Address'
                className='w-[100%] p-2  border border-green-900 outline-none rounded-xl h-10 md:w-[70%] lg:w-[50%]'/>
            </div>
            <center>
            <p className="text-red-500">{formErrors.email}</p>
            </center>
            <center className='mt-10'>
              <p className='text-xl font-bold text-green-900'>How can we help you?</p>
            </center>
            <div className='flex justify-center items-center mt-10 bg-red-300 m-auto border border-bg-black drop-shadow-2xl md:w-[70%] lg:w-[50%] '>
              <textarea name="text"
               onChange={handleChange}
               value={formValues.text}
               id="text"
                cols="800"
                 rows="10" ></textarea>
            </div>
            <center>
            <p className="text-red-500">{formErrors.text}</p>
            </center>
  
            <center className='mt-5'>
              <button type='submit' className='px-8 py-1 md:py-2 mb-4 border outline-none bg-green-900 rounded-2xl text-white md:text-xl '>Sign Up</button>
            </center>
           
          
           
           
            
          </form>
      </div>
    </div>
  )
}

export default Contact
