import React from 'react'
import {FaInstagram, FaFacebook, FaTwitter, FaTelegram, FaPhone} from 'react-icons/fa'

import a1 from '/src/assets/a-class/a1.jpg'
import a2 from '/src/assets/a-class/a2.jpg'

const A_Class = () => {
  return (
    <div className='w-full  h-[1600px] md:h-[1000px]  flex justify-center py-24 bg-zinc-300 '>
     
      <div className='text-2xl md:text-3xl  md:ml-[-800px] text-center mt-[20px]'>
        <a className='font-bold text-center'> 
          We Have These Types Of
          <br/>
          <span>Mercedes-Benz A-Class Limousine</span> 
        </a>
          <div className='w-[360px] ml-[-5px] mt-[30px]  md:w-[495px] md:ml-[800px] md:mt-[40px]'>
            <img src={a1}/>
          </div>
       </div>
          <div className='py-2 px-2 ml-[-431px] h-[340px] mt-[369px] md:ml-[-495px] md:mt-[424px] md:h-[389px] text-xl md:px-10 md: bg-gradient-to-br from-stone-500' >
            <a className='text-center'>
                Mercedes-Benz A-Class Limousine 0352600441 
            </a>
            <br/>
            <br/>
            <div className='flex justify-between '>
                <span className='text-sm font-bold'>Modification:</span>
                <span className='text-sm'>Mercedes-Benz A 200 d long</span>
           </div>
        
            <div className='flex justify-between'>
                <span className='text-sm font-bold'>Engine capacity:</span>
                <span className='text-sm'>1 950 cc. cm.</span>
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Power:</span>
                <span className='text-sm'>143 hp.</span>
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Max speed:</span>
                <span className='text-sm'>227 km/h</span> 
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Acceleration 0-100 km/h:</span>
                <span className='text-sm'>8,2 s.</span> 
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Year:</span>
                <span className='text-sm'>2022.</span> 
           </div>
           <div className='justify-between md:mt-[100px] flex mt-[50px]'>
               <a className="text-green-600 hover:scale-125 ml-[245px] mt-[10px] duration-300 hover:text-white">
                   <FaPhone />
               </a>
               <a className='text-xl'>
               (555)123-4567
               </a>
           </div>
           <div className='justify-between flex px-6 py-8 md:py-[30px]'>
           <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 duration-300 hover:text-white"
          >
            <FaFacebook size={30}/>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 duration-300 hover:text-white"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 duration-300 hover:text-white"
          >
            <FaTelegram size={30} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:scale-125 duration-300 hover:text-white"
          >
            <FaTwitter size={30}/>
          </a>
          </div>
                
          </div>

      
      <div className=' ml-[-431px] mt-[580px] w-[431px] md:ml-[-1150px] md:w-[495px] md:h-[333px] md:mt-[-30px] py-40 '>
        <img src={a2} />
        </div>
          <div className='py-2 px-2 ml-[-431px] h-[340px] mt-[984px] md:mt-[410px] md:h-[400px] md:ml-[-495px] md:px-10 text-center bg-gradient-to-br from-stone-500 '>
                <a className='text-xl'>
                Mercedes-Benz A-Class Limousine 0352600440 
               </a>
               <br/>
               <br/>
            <br/>
            <div className='flex justify-between '>
                <span className='text-sm font-bold'>Modification:</span>
                <span className='text-sm'>Mercedes-Benz A 250 d long</span>
           </div>
        
            <div className='flex justify-between'>
                <span className='text-sm font-bold'>Engine capacity:</span>
                <span className='text-sm'>1 132 cc. cm.</span>
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Power:</span>
                <span className='text-sm'>163 hp.</span>
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Max speed:</span>
                <span className='text-sm'>230 km/h</span> 
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Acceleration 0-100 km/h:</span>
                <span className='text-sm'>7,5 s.</span> 
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Year:</span>
                <span className='text-sm'>2021.</span> 
           </div>

           <div className='justify-between md:mt-[100px] flex mt-[30px]'>
               <a className="text-green-600 hover:scale-125 ml-[245px] mt-[8px] duration-300 hover:text-white">
                   <FaPhone size={20}/>
               </a>
               <a className='text-xl'>
               (555)123-4567
               </a>
           </div>

           <div className='justify-between flex px-6 py-8 md:py-6'>
           <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 duration-300 hover:text-white"
          >
            <FaFacebook size={30}/>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 duration-300 hover:text-white"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 duration-300 hover:text-white"
          >
            <FaTelegram size={30} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:scale-125 duration-300 hover:text-white"
          >
            <FaTwitter size={30}/>
          </a>
          </div>

          </div>

    </div>
  )};
export default A_Class;
