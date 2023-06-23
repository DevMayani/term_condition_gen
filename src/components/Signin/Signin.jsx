import React, { useState, useEffect } from 'react'
import Images from '../../images/logoimgone.png';
import Signimage from '../../images/sign.png';
import Facebook from '../../images/Capaf.png';
import IG from '../../images/capaig.png';
import Linkedin from '../../images/capain.png';
import Twitter from '../../images/Capatw.png';
import Gog from '../../images/gogg.png';
import { Link } from "react-router-dom";

const Signin = () => {
  const initialValues = { username: "", email: "", password: "" };
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
    return errors;
  };


  return (
    <div className='grid lg:grid-cols-2 p-10'>
      <div className=''>
        <div>
        <img src={Images} alt="pic" className='w-[50%]' />
        </div>
        <div className=''>
        <img src={Signimage} alt="pic" className='w-[100%] md:w-[80%]' />
        </div>
      </div>
      <div className='py-5'>
        <div className='flex justify-center items-center mt-15'>
          <p className='text-xl font-bold text-green-900'>Log in</p>
        </div>

        <div className='w-[100%] flex justify-center gap-x-5 items-center border border-green-900 outline-none rounded-xl mt-5 m-auto h-10 md:w-[80%] '>
          <p className='text-sm'>Log in with goggle</p>
          <img src={Gog} alt="pic" className='w-3' />
        </div>
        <center className='flex justify-center gap-x-5 items-center mt-5'>
        <hr className='w-8 border-b border-slate-600  md:w-10'/>
        <p className='text-sm text-blue-600 cursor-pointer'>log in with your email</p>
        <hr className='w-8 border-b border-slate-600 md:w-10' />
        </center>
        <form onSubmit={handleSubmit} className='mt-10'>
          <p className='text-xl m-auto  w-[100%]  md:w-[80%]'>Username:</p>
          <div className='flex justify-center items-center mt-2   '>
            <input name='username'
            onChange={handleChange}
             type="text"
              placeholder='Enter Firstname' 
              value={formValues.username}
              className='w-[100%] p-2 border border-green-900 outline-none rounded-xl h-10 md:w-[80%]'/>
          </div>
          <center>
          <p className="text-red-500">{formErrors.username}</p>
          </center>
  
          <p className='text-xl m-auto  w-[100%] mt-5  md:w-[80%]'>Email Address:</p>
          <div className='flex justify-center items-center mt-2  '>
            <input name='email'
            onChange={handleChange}
             type="text"
             value={formValues.email}
             placeholder='Enter Email Address'
              className='w-[100%] p-2 border border-green-900 outline-none rounded-xl h-10 md:w-[80%]'/>
          </div>
          <center>
          <p className="text-red-500">{formErrors.email}</p>
          </center>

          <p className='text-xl m-auto  w-[100%] mt-5  md:w-[80%]'>Password:</p>
          <div className='flex justify-center items-center mt-2  '>
            <input name='password'
            onChange={handleChange}
             type="text"
             value={formValues.password}
             placeholder='Enter Password'
             className='w-[100%] border p-2 border-green-900 outline-none rounded-xl h-10 md:w-[80%]'/>
          </div>
          <center>
          <p className="text-red-500">{formErrors.password}</p>
          </center>
          <div className='mt-5  m-auto w-[100%] md:w-[80%] '>
            <Link to='/reset'><p className='text-sm text-blue-700 cursor-pointer'>Forgot password?</p></Link>
          </div>
          <center className='mt-5'>
            <Link to='/dashhome'><button type='submit' className='px-8 py-2 mb-4 border bg-green-900 w-[100%] rounded-2xl text-white text-xl md:w-[80%]'>Login</button></Link>
          </center>
          <center className='flex justify-center items-center gap-x-3'>
            <p className='text-blue-700 text-sm'>Don't have an account?</p>
            <Link to='/signup'><p className='text-red-500 text-sm'>Sign up</p></Link>
          </center>
          <center className='flex justify-center items-center gap-x-3 mt-5'>
            <hr className='w-8 border-b border-slate-600'/>
            <p className='text-blue-700 text-sm font-semibold'>or sign in with</p>
            <hr className='w-8 border-b border-slate-600' />
          </center>
          <center className='mt-8 flex justify-center items-center gap-x-8'>
            <img src={Facebook} alt="pic" className='w-3' />
            <img src={IG} alt="pic" className='w-5' />
            <img src={Twitter} alt="pic" className='w-5' />
            <img src={Linkedin} alt="pic" className='w-5' />
          </center>
        </form>
       
        

      </div>
     
    </div>
  )
}

export default Signin
