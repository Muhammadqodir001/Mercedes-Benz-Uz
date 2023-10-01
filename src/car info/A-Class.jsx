import React from 'react'
import {FaInstagram, FaFacebook, FaTwitter, FaTelegram, FaPhone} from 'react-icons/fa'

import a1 from '/src/assets/a-class/a1.jpg'
import a2 from '/src/assets/a-class/a2.jpg'

const A_Class = () => {
  return (
    <div className='w-full  h-[1600px] md:h-[1000px]  flex justify-center py-24 bg-zinc-300 '>
     
      <div className='text-2xl md:text-3xl ml-[0px]  md:ml-[-800px] text-center mt-[20px]'>
        <a className='font-bold md:ml-[0px]'> 
          We Have These Types Of 
          <br/>
          <span className='md:ml-[0px]'>Mercedes-Benz A-Class Limousine</span> 
        </a>
          <div className='w-[350px] ml-[5px] mt-[30px]  md:w-[495px] md:ml-[800px] md:mt-[40px]'>
            <img src={a1}/>
          </div>
       </div>
          <div className='py-2 w-[351px] md:w-[495px] px-2 ml-[-369px] h-[320px] mt-[320px] md:ml-[-495px] md:mt-[424px] md:h-[389px] text-xl md:px-10 md: bg-gradient-to-br from-stone-500' >
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
               <a className="text-green-600 hover:scale-125 ml-[150px] md:ml-[240px] mt-[-20px] duration-300 hover:text-white">
                   <FaPhone />
               </a>
               <a className='text-xl ml-[-20px] mt-[-25px] md:ml-[0]'>
               (555)123-4567
               </a>
           </div>
           <div className='justify-between mt-[-15px] md:mt-[0px] flex px-6 py-8 md:py-[30px]'>
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

      
      <div className=' ml-[-352px] mt-[580px] w-[350px] md:ml-[-1150px] md:w-[495px] md:h-[333px] md:mt-[-30px] py-40 '>
        <img src={a2} />
        </div>
          <div className='w-[350px]   md:w-[495px] py-2 px-2 ml-[-351px] h-[340px] mt-[938px] md:mt-[410px] md:h-[400px] md:ml-[-495px] md:px-10 text-center bg-gradient-to-br from-stone-500 '>
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

           <div className='justify-between md:mt-[100px] flex mt-[55px]'>
               <a className="text-green-600 hover:scale-125 ml-[150px] md:ml-[240px] mt-[-20px] duration-300 hover:text-white">
                   <FaPhone />
               </a>
               <a className='text-xl ml-[-25px] mt-[-27px] md:ml-[0]'>
               (555)123-4567
               </a>
           </div>

           <div className='justify-between mt-[-17px] md:mt-[0px] flex px-6 py-8 md:py-[30px]'>
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
