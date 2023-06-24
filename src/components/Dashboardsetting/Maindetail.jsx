import React, { useState, useEffect } from 'react'

const Maindetail = () => {
  const initialValues = { fullname: "",username: "", email: "", phonenumber: "" , text: ""};
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
      
      if (!values.username) {
        errors.username = "Username is required!";
      }
     
      if (!values.phonenumber) {
        errors.phonenumber = "Phone Number is required";
      } 
      
      if (!values.text) {
        errors.text = "Input Text!";
      }
      
      return errors;
    };
 
  
  return (
     <div className='w-[100%] h-full overflow-hidden'>
      <div className='hidden md:block'>
     <div className='p-5 w-[90%] flex justify-start items-center gap-x-5 '>
      <p className='text-xs hover:underline text-green-900 font-bold cursor-pointer md:text-xl'>Account Setting</p>
      <p className='text-xs hover:underline text-green-900 font-bold cursor-pointer md:text-xl'>Security</p>
      <p className='text-xs hover:underline text-green-900 font-bold cursor-pointer md:text-xl'>Notification</p>
      </div>
      <hr className='w-[40%] ml-5' />
      <div className='p-5'>
        <p className='text-green-900 font-bold'>Your Profile Picture</p>
      </div>
      <div className='p-10'>
      <div className='border border-dotted h-[30vh] md:h-[25vh] md:w-[50%] lg:w-[35%] lg:h-[30vh] border-green-900 bg-slate-300 flex justify-center items-center cursor-pointer'>
       <p className='text-green-900 font-bold'>Upload your photo</p>
      </div>
      </div>
      <hr className='m-auto w-[90%]' />
      
      <form onSubmit={handleSubmit} className='mt-10 px-10'>
        <div className='flex justify-around items-center w-[100%] m-auto'>
          <div className=' w-[50%]  mt-5'>
          <p className='w-[50%] font-bold text-green-900'>Full name:</p>
            <div className='flex justify-center items-center w-[90%]  '>
              <input name='fullname'
              onChange={handleChange}
               type="text"
                placeholder='John Doe' 
                value={formValues.fullname}
                className='w-[100%] p-2 text-sm border border-green-900 outline-none rounded-xl h-10  md:w-[100%] '/>
            </div>
            <center>
            <p className="text-red-500">{formErrors.fullname}</p>
            </center>
          </div>
          <div className=' w-[50%]  mt-5'>
          <p className='w-[50%] text-green-900 font-bold'>Email:</p>
            <div className='flex justify-center items-center  w-[90%]  '>
              <input name='email'
              onChange={handleChange}
               type="text"
                placeholder='johndoe@gmail.com' 
                value={formValues.email}
                className='w-[100%] p-2 text-sm border border-green-900 outline-none rounded-xl h-10 md:w-[100%] '/>
            </div>
            <center>
            <p className="text-red-500">{formErrors.email}</p>
            </center>
    
          </div>
        </div>

        <div className='flex justify-around items-center w-[100%] m-auto'>
          <div className=' w-[50%]  mt-5'>
          <p className='w-[50%]  text-green-900 font-bold'>Username:</p>
            <div className='flex justify-center items-center w-[90%]  '>
              <input name='username'
              onChange={handleChange}
               type="text"
                placeholder='Enter Username' 
                value={formValues.username}
                className='w-[100%] p-2 text-sm border border-green-900 outline-none rounded-xl h-10 md:w-[100%] '/>
            </div>
            <center>
            <p className="text-red-500">{formErrors.username}</p>
            </center>
          </div>

          <div className='w-[50%] mt-5'>
          <p className='w-[50%] text-green-900 font-bold'>Phone Number:</p>
            <div className='flex justify-center items-center  w-[90%]  '>
              <input name='phonenumber'
              onChange={handleChange}
               type="text"
                placeholder='Enter Phone Number' 
                value={formValues.phonenumber}
                className='w-[100%] p-2 text-sm border border-green-900 outline-none rounded-xl h-10 md:w-[100%] '/>
            </div>
            <center>
            <p className="text-red-500">{formErrors.phonenumber}</p>
            </center>
    
          </div>
          
        </div>
       
        <div className=' w-[100%] mt-5'>
          <p className='w-[50%] text-green-900 font-bold'>Bio:</p>
          <div className='flex justify-center items-center text-sm  w-[95%] border-green-900'>
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
          </div>
          
       
        <div className='flex justify-around items-center w-[100%]'>
        <div className='mt-5'>
              <button className='px-8 md:py-2 mb-4 border outline-none border-orange-600 bg-orange-600 rounded-2xl text-white text-xl '>
                Cancel</button>
            </div>

            <div className='mt-5'>
              <button type='submit' className='px-8 md:py-2 mb-4 border outline-none bg-green-900 rounded-2xl text-white text-xl '>
                Update</button>
            </div>

        </div>
            
          </form>
      </div>

      <div className='block md:hidden'>
     <div className='px-2 py-3 w-[100%]  flex justify-around items-center gap-x-2 '>
      <p className='text-xs hover:underline text-green-900 font-bold cursor-pointer md:text-xl'>Account Setting</p>
      <p className='text-xs hover:underline text-green-900 font-bold cursor-pointer md:text-xl'>Security</p>
      <p className='text-xs hover:underline text-green-900 font-bold cursor-pointer md:text-xl'>Notification</p>
      </div>
      <div className='px-5'>
        <p className='text-sm text-green-900 font-bold'>Your Profile Picture</p>
      </div>
      <div className='p-5'>
      <div className='border border-dotted h-[20vh] w-[90%]  border-green-900 bg-slate-300 flex justify-center items-center cursor-pointer'>
      <p className='text-green-900 text-xs font-bold'>Upload your photo</p>
      </div>
      </div>
      <hr />
      <form onSubmit={handleSubmit} className='mt-5'>
        <div className='w-[80%] h-15 m-auto '>
          <div className=' w-[100%]  mt-5 '>
          <p className='w-[50%] text-xs font-bold '>Full name:</p>
            <div className='flex justify-center items-center w-[90%]  '>
              <input name='fullname'
              onChange={handleChange}
               type="text"
                placeholder='John Doe' 
                value={formValues.fullname}
                className='w-[100%] p-2 text-xs h-6 border border-green-900 outline-none   '/>
            </div>
            <center>
            <p className="text-red-500 text-xs">{formErrors.fullname}</p>
            </center>
          </div>
          <div className=' w-[100%]  mt-3'>
          <p className='w-[50%] text-xs font-bold'>Email:</p>
            <div className='flex justify-center items-center  w-[90%]  '>
              <input name='email'
              onChange={handleChange}
               type="text"
                placeholder='johndoe@gmail.com' 
                value={formValues.email}
                className='w-[100%] p-2 text-xs h-6 border border-green-900 outline-none '/>
            </div>
            <center>
            <p className="text-red-500 text-xs">{formErrors.email}</p>
            </center>
    
          </div>
        </div>

        <div className='w-[80%] m-auto'>
        <div className=' w-[100%]  mt-3'>
          <p className='w-[50%] text-xs font-bold'>Username:</p>
            <div className='flex justify-center items-center w-[90%]  '>
              <input name='username'
              onChange={handleChange}
               type="text"
                placeholder='Enter Username' 
                value={formValues.username}
                className='w-[100%] p-2 text-xs h-6 border border-green-900 outline-none  '/>
            </div>
            <center>
            <p className="text-red-500 text-xs">{formErrors.username}</p>
            </center>
          </div>

          <div className=' w-[100%]  mt-3'>
          <p className='w-[50%] text-xs font-bold'>Phone Number:</p>
            <div className='flex justify-center items-center  w-[90%]  '>
              <input name='phonenumber'
              onChange={handleChange}
               type="text"
                placeholder='Enter Phone Number' 
                value={formValues.phonenumber}
                className='w-[100%] p-2 text-xs border border-green-900 outline-none '/>
            </div>
            <center>
            <p className="text-red-500 text-xs">{formErrors.phonenumber}</p>
            </center>
    
          </div>
          
        </div>
        <div className='flex justify-around items-center w-[80%] m-auto'>
        <div className=' w-[100%] mt-3'>
          <p className='w-[50%] text-xs font-bold'>Bio:</p>
          <div className='flex justify-center items-center  w-[90%] border border-green-900  '>
              <textarea name="text"
               onChange={handleChange}
               value={formValues.text}
               id="text"
                cols="600"
                 rows="3" ></textarea>
            </div>
            <center>
            <p className="text-red-500 text-xs">{formErrors.text}</p>
            </center>
          </div>
          
        </div>
        <div className='flex justify-around items-center w-[80%] m-auto'>
        <div className='mt-5'>
              <button className='px-3 py-1 mb-4 border outline-none  border-orange-600 bg-orange-600 rounded-2xl text-white text-sm '>
                Cancel</button>
            </div>

            <div className='mt-5'>
              <button type='submit' className='px-3 py-1 mb-4 border outline-none bg-green-900 rounded-2xl text-white text-sm '>
                Update</button>
            </div>

        </div>
            
          </form>
     
      </div>
     
    </div>

    
  )
}

export default Maindetail
