import React, { useState, useEffect } from 'react'
import Images from '../../images/logoimgone.png';
import Signimage from '../../images/sign.png';
import Facebook from '../../images/Capaf.png';
import IG from '../../images/capaig.png';
import Linkedin from '../../images/capain.png';
import Twitter from '../../images/Capatw.png';
import Gog from '../../images/gogg.png';
import Checkbox from '../../images/Check Box.png';
import { Link } from "react-router-dom";
import { checkbox } from '@material-tailwind/react';


const Signup = () => {
 
    const initialValues = { firstname: "",lastname: "", username: "", email: "", password: "",confirmpassword: "" };
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
      if (!values.firstname) {
        errors.firstname = "Firstname is required!";
      }
      if (!values.lastname) {
        errors.lastname = "Lastname is required!";
      }
      if (!values.username) {
        errors.username = "Username is required!";
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
      if (!values.confirmpassword) {
        errors.confirmpassword = "Confirm Password";
      } else if (values.confirmpassword !==values.password) {
        errors.confirmpassword = "Incorrect password!";
      } 
      return errors;
    };
    const text = 'We are a legally verified agency that create customized privacy policies snd terms and condition a matter of seconds to keep your business safe from any legal Issues.'
    const moreDetails = 'Having a good Terms of Service (TOS) is very important for every website or application. Basically, is a legal agreement between a service and a person that wants to use that service. We will take care to clear all the doubts of your current and upcoming users with our highly professional TOS generator.'
  
  
    return (
      <div className='grid p-2 lg:grid-cols-2 md:p-10 md:gap-y-20'>
        <div className=''>
          <div>
          <img src={Images} alt="pic" className='w-[70%]' />
          </div>
          <div className='px-10 mt-1 md:px-10 md:mt-10'>
            <p className='text-3xl font-extrabold underline text-green-900 md:text-6xl'>WELCOME</p>
            <p className='text-lg mt-5 font-bold xl:text-2xl text-green-900'>{text}</p>
            <p className='mt-10'>{moreDetails}</p>
          </div>
         
        </div>
        <div className='mt-5 p-5 md:mt-0'>
          <div className='flex justify-center items-center mt-15'>
            <p className='text-xl font-bold text-green-900'>Create Account</p>
          </div>
  
          <div className='w-[100%] h-10 flex justify-center items-center gap-x-5 border border-green-900 outline-none rounded-xl mt-5 m-auto lg:w-[80%]'>
            <p className='text-sm font-semibold '>Sign up with goggle</p>
            <img src={Gog} alt="pic" className='w-3' />
          </div>
          <center className='flex justify-center gap-x-5 items-center mt-5'>
          <hr className='w-5 border-b border-slate-600  md:w-10'/>
          <p className='text-sm text-blue-600 cursor-pointer'>or sign up with your email</p>
          <hr className='w-5 border-b border-slate-600 md:w-10' />
          </center>
          <form onSubmit={handleSubmit} className='mt-5'>
          <p className='text-lg m-auto  w-[100%] lg:w-[80%]'>Firstname:</p>
            <div className='flex justify-center items-center mt-1   '>
              <input name='firstname'
              onChange={handleChange}
               type="text"
                placeholder='Enter Firstname' 
                value={formValues.firstname}
                className='w-[100%] p-2 border border-green-900 outline-none rounded-xl h-10 lg:w-[80%]'/>
            </div>
            <center>
            <p className="text-red-500">{formErrors.firstname}</p>
            </center>
            <p className='text-lg m-auto mt-3  w-[100%]  lg:w-[80%]'>Lastname:</p>
            <div className='flex justify-center items-center mt-1'>
              <input name='lastname'
              onChange={handleChange}
               type="text"
                placeholder='Enter Lastname' 
                value={formValues.lastname}
                className='w-[100%] border p-2 border-green-900 outline-none rounded-xl h-10 lg:w-[80%]'/>
            </div>
            <center>
            <p className="text-red-500">{formErrors.lastname}</p>
            </center>
    
            <p className='text-lg m-auto  w-[100%] mt-3  lg:w-[80%]'>Email Address:</p>
            <div className='flex justify-center items-center mt-1  '>
              <input name='email'
              onChange={handleChange}
               type="text"
               value={formValues.email}
               placeholder='Enter Email Address'
                className='w-[100%] p-2 border border-green-900 outline-none rounded-xl h-10 lg:w-[80%]'/>
            </div>
            <center>
            <p className="text-red-500">{formErrors.email}</p>
            </center>
  
            <p className='text-lg m-auto  w-[100%] mt-3  lg:w-[80%]'>Password:</p>
            <div className='flex justify-center items-center mt-1'>
              <input name='password'
              onChange={handleChange}
               type="text"
               value={formValues.password}
               placeholder='Enter Password'
               className='w-[100%] p-2 border border-green-900 outline-none rounded-xl h-10 lg:w-[80%]'/>
            </div>
            <center>
            <p className="text-red-500">{formErrors.password}</p>
            </center>
            <p className='text-lg m-auto  w-[100%] mt-3  lg:w-[80%]'>Confirm Password:</p>
            <div className='flex justify-center items-center mt-1'>
              <input name='confirmpassword'
              onChange={handleChange}
               type="text"
               value={formValues.confirmpassword}
               placeholder='Enter Password'
               className='w-[100%] p-2 border border-green-900 outline-none rounded-xl h-10 lg:w-[80%]'/>
            </div>
            <center>
            <p className="text-red-500">{formErrors.confirmpassword}</p>
            </center>
            <div className='flex justify-start items-center m-auto gap-x-1 mt-2 w-[100%] lg:w-[80%]'>
              <p className='text-xs text-blue-700 '>By registering,you agree to our Terms.
              Check box</p>
              <input 
              type='checkbox'
              />
             
            </div>
            <center className='mt-5'>
              <Link to='/signin'>
              <button type='submit' className='px-8 py-2 mb-4 border outline-none bg-green-900 w-[100%] rounded-2xl text-white text-xl lg:w-[80%]'>Sign Up</button>
              </Link>
            </center>
           
            <center className='flex justify-center items-center gap-x-3'>
              <p className='text-blue-700 text-sm'>Already have an account?</p>
              <Link to='/signin'><p className='text-red-500 text-sm'>Sign in</p></Link>
            </center>
            
          </form>
         
          
  
        </div>
       
      </div>
  )
}

export default Signup
