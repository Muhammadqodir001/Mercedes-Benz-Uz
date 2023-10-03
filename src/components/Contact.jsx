import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Fade, Reveal } from 'react-reveal';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    continent: '',
    email: '',
    message: ''
  });
   

  const [message2, setMessage] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isSent, setIsSent] = useState(false);


  useEffect(() => {
    if (isButtonClicked) {
      setIsSent(true);
      setTimeout(() => setIsSent(false), 3000); 
    }
  }, [isButtonClicked]);

  
  const { name, lastName, email, continent, message } = formData;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsButtonClicked(false);
    setIsSent(true);
    setMessage('');

    
    setFormData({
      name: '',
      lastName: '',
      email: '',
      continent: '',
      message: ''
    });
   
  };
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
      
    });
  };

  return (
    <div name='contact' className='w-full h-[750px] bg-black mt-[-60px] flex justify-center items-center '>
       
     
    
        <form onSubmit={handleSubmit} className='flex md:max-w-[600px]  flex-col max-w-[400px] w-full'>
        <Fade bottom>
          <div>
            <p className='ml-[110px] md:ml-[200px] text-4xl font-bold inline border-b-4 border-orange-500 text-gray-300'>
              Contact Us
            </p>
            <p className='ml-[100px] md:ml-[200px] text-gray-300 py-4'>
                Contact us any time you want.
            </p>
          </div>
          </Fade>
          
          <Fade bottom>
          <div>
          <input className='rounded-sm bg-[#ccd6f6] p-2 w-[45%]' type="text" required placeholder='Name' name='name' value={name} onChange={handleChange} />
          <input className='rounded-sm bg-[#ccd6f6] p-2 float-right w-[45%]' required type="text" placeholder='Last Name' name='lastName' value={lastName} onChange={handleChange} />
         </div>
         </Fade>

         <Fade bottom>
         <div >
          <input className='rounded-sm my-4 p-2 bg-[#ccd6f6] w-[45%]' type="email" placeholder='Email' name='email' value={email} onChange={handleChange} required />
          <input className='rounded-sm my-4 p-2 bg-[#ccd6f6] float-right w-[45%]' type="continent" placeholder='Phone Number' name='continent' value={continent} onChange={handleChange} />
        </div>
        </Fade>

       <Fade bottom>
        <textarea className=' rounded-sm bg-[#ccd6f6]  p-3' name="message" rows="5" placeholder='Message' value={message} onChange={handleChange} required></textarea>
        </Fade>


        <Fade bottom>
        <div>
        <button className='hover:scale-110 duration-500 w-[25%] shadow-md shadow-[#69a5ee] justify-center text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md' type='submit'
          onClick={() => setIsButtonClicked(true)}>
          Submit
        </button>
        </div>
        </Fade>
        </form>
   
    </div>
  );
};

export default Contact;
