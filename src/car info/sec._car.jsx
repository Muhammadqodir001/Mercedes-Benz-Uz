import React from 'react'
import {FaInstagram, FaFacebook, FaTwitter, FaTelegram, FaPhone} from 'react-icons/fa'
import car1 from '/src/assets/g4/car1.jpg'
import car2 from '/src/assets/g4/car2.jpg'

const Sec_car = () => {
  return (
    <div className='w-full  h-[1600px] md:h-[1000px] flex justify-center py-24 bg-zinc-300 '>
     
      <div className='text-2xl  md:text-3xl  md:ml-[-800px] text-center mt-[20px]'>
        <a className='font-bold ml-[-19px] text-center'> 
          We Have These Types Of
          <br/>
          <span className='ml-[-10px]' >Mercedes-AMG GT 4 door Coupe</span> 
        </a>
          <div className='w-[418px] ml-[px] mt-[30px]  md:w-[499px] md:ml-[800px] md:mt-[40px]'>
            <img src={car1}/>
          </div>
       </div>
          <div className='py-2 px-2 ml-[-418px] h-[340px] mt-[338px] md:ml-[-499px] md:mt-[400px] md:h-[400px] text-xl md:px-12 md: bg-gradient-to-br from-stone-500' >
            <a className='text-center'>
            Mercedes-AMG GT 4 door 0352607009
            </a>
            <br/>
            <br/>
            <div className='flex justify-between '>
                <span className='text-sm font-bold'>Modification:</span>
                <span className='text-sm'>Mercedes-AMG GT 43 4MATIC</span>
           </div>
        
            <div className='flex justify-between'>
                <span className='text-sm font-bold'>Engine capacity:</span>
                <span className='text-sm'>2 999 cc. cm.</span>
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Power:</span>
                <span className='text-sm'>367 hp.</span>
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Max speed:</span>
                <span className='text-sm'>285  km/h</span> 
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Acceleration 0-100 km/h:</span>
                <span className='text-sm'>4.9 s.</span> 
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Year:</span>
                <span className='text-sm'>2023.</span> 
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Car sum:</span>
                <span className='text-sm'>$200000.</span> 
           </div>
           <div className='justify-between md:mt-[80px] flex mt-[40px] '>
               <a className="text-green-600 hover:scale-125 ml-[245px] mt-[10px] duration-300 hover:text-white">
                   <FaPhone />
               </a>
               <a className='text-xl ml-[10px]'>
               (555)123-4567
               </a>
           </div>
           <div className='justify-between flex md:px-0 px-6 py-6 md:py-8'>
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

      
      <div className=' ml-[-419px] mt-[580px] w-[418px] md:ml-[-1150px] md:w-[498px] md:h-[333px] md:mt-[-30px] py-40 '>
        <img src={car2}/>
        </div>
          <div className='py-2 px-2 ml-[-418px] h-[340px] mt-[966px] md:mt-[399px] md:h-[400px] md:ml-[-499px] md:px-12 text-center bg-gradient-to-br from-stone-500 '>
                <a className='text-xl'>
                Mercedes-AMG GT 4 door 0352600308
               </a>
               <br/>
               <br/>
            <br/>
            <div className='flex justify-between '>
                <span className='text-sm font-bold'>Modification:</span>
                <span className='text-sm'>Mercedes-AMG GT 53 4MATIC +</span>
           </div>
        
            <div className='flex justify-between'>
                <span className='text-sm font-bold'>Engine capacity:</span>
                <span className='text-sm'>2 999. cm.</span>
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Power:</span>
                <span className='text-sm'>435 hp.</span>
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Max speed:</span>
                <span className='text-sm'>285 km/h</span> 
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Acceleration 0-100 km/h:</span>
                <span className='text-sm'>4,5 s.</span> 
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Year:</span>
                <span className='text-sm'>2023.</span> 
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Car sum:</span>
                <span className='text-sm'>$220000.</span> 
           </div>

           <div className='justify-between md:mt-[75px] flex mt-[20px]'>
               <a className="text-green-600 hover:scale-125 ml-[245px] mt-[8px] duration-300 hover:text-white">
                   <FaPhone size={20}/>
               </a>
               <a className='text-xl ml-[10px]'>
               (555)123-4567
               </a>
           </div>

           <div className='justify-between md:px-0 flex px-6 py-6 md:py-8'>
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
export default Sec_car;
