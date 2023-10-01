import React from 'react'
import {FaInstagram, FaFacebook, FaTwitter, FaTelegram, FaPhone} from 'react-icons/fa'
import car1 from '/src/assets/lass-w/car1.jpg'
import car2 from '/src/assets/lass-w/car2.jpg'
const Forth_car = () => {
  return (
    <div className='w-full  h-[1600px] md:h-[1000px] flex justify-center py-24 bg-zinc-300 '>
     
      <div className='text-2xl  md:text-3xl md:h-[100px] md:ml-[-800px] text-center mt-[20px]'>
        <a className='font-bold ml-[-19px] text-center'> 
          We Have These Types Of
          <br/>
          <span className='ml-[-10px]' >Mercedes-Benz S-class</span> 
        </a>
          <div className='w-[419px] ml-[px] mt-[30px]  md:w-[481px] md:ml-[800px] md:mt-[36px]'>
            <img src={car1}/>
          </div>
       </div>
          <div className='py-2 px-2 ml-[-419px] h-[340px] mt-[354px] md:ml-[-482px] md:mt-[404px] md:h-[392px] text-xl md:px-10 md: bg-gradient-to-br from-stone-500' >
            <a className='text-center'>
            Mercedes-Benz S-Class 0352601101
            </a>
            <br/>
            <br/>
            <div className='flex justify-between '>
                <span className='text-sm font-bold'>Modification:</span>
                <span className='text-sm'>Mercedes-AMG S 63 L E Performance</span>
           </div>
        
            <div className='flex justify-between'>
                <span className='text-sm font-bold'>Engine capacity:</span>
                <span className='text-sm'>3 982 cc. cm.</span>
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Power:</span>
                <span className='text-sm'>612 h.p. + 190 h.p</span>
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Max speed:</span>
                <span className='text-sm'>290 km/h</span> 
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Acceleration 0-100 km/h:</span>
                <span className='text-sm'>3,3 s.</span> 
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Year:</span>
                <span className='text-sm'>2023.</span> 
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Car sum:</span>
                <span className='text-sm'>$281 732,53.</span> 
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

      
      <div className=' ml-[-419px] mt-[580px] w-[419px] md:ml-[-1150px] md:w-[499px]  md:mt-[-30px] py-40 '>
        <img src={car2} />
        </div>
          <div className='py-2 px-2 ml-[-419px] h-[340px] mt-[966px] md:mt-[399px] md:h-[400px] md:ml-[-499px] md:px-12 text-center bg-gradient-to-br from-stone-500 '>
                <a className='text-xl'>
                Mercedes-Benz S-Class 0352600316
               </a>
               <br/>
               <br/>
            <br/>
            <div className='flex justify-between '>
                <span className='text-sm font-bold'>Modification:</span>
                <span className='text-sm'>Mercedes-Benz S 580 4MATIC Long</span>
           </div>
        
            <div className='flex justify-between'>
                <span className='text-sm font-bold'>Engine capacity:</span>
                <span className='text-sm'>3 982. cm.</span>
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Power:</span>
                <span className='text-sm'>503 hp.</span>
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Max speed:</span>
                <span className='text-sm'>250 km/h</span> 
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Acceleration 0-100 km/h:</span>
                <span className='text-sm'>4,4 s.</span> 
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Year:</span>
                <span className='text-sm'>2023.</span> 
           </div>
           <div className='flex justify-between'>
                <span className='text-sm font-bold'>Car sum:</span>
                <span className='text-sm'>$233 697.</span> 
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
export default Forth_car;
