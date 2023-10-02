import React from 'react'
import {FaInstagram, FaFacebook, FaTwitter, FaTelegram, FaPhone} from 'react-icons/fa'
import car1 from '/src/assets/lass-w/car1.jpg'
import car2 from '/src/assets/lass-w/car2.jpg'
const Forth_car = () => {

  return (
    <div name="vehicle" className="vehicle w-full justify-between  bg-zinc-300  py-40 h-[1600px] md:h-[980px] mx-auto px-4">
    <div className="text-center mt-[-30px] md:mt-[-20px]">
       <a className='font-bold md:text-3xl text-xl md:ml-[0px]'> 
         We Have These Types Of 
       <br/>
       <span className='md:ml-[0px]'>Mercedes-Benz S-class</span> 
        </a>
    </div>
       

        <div className="text-center w-full gap-10 md:gap-20 md:ml-[275px]  mt-[40px] grid sm:grid-cols-1  md:w-[960px]  lg:grid-cols-2 items-center">
          
          <div className="card  shadow-md  hover:shadow-2xl py-4 px-3 rounded-md hover:shadow-slate-500  bg-gradient-to-br  from-stone-500  ">
            <div >
            <img src={car1} style={{ width: 500 }} />
            </div>
   
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

           <div className='justify-between md:mt-[50px] flex mt-[80px]'>
           <a className="text-green-600 hover:scale-125 ml-[190px] md:ml-[260px] mt-[-20px] duration-300 hover:text-white">
           <FaPhone />
           </a>
           <a className='text-xl ml-[-20px] mt-[-28px] md:ml-[0]'>
           (555)123-4567
           </a>
           </div>

           <div className='justify-between mt-[30px] md:mt-[30px] flex px-4 py-[-90px] md:py-[-50px]'>
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

          <div className="card shadow-md  hover:shadow-2xl py-4 px-3 rounded-md hover:shadow-slate-500  bg-gradient-to-br   from-stone-500 ">
            <div className="">
            <img src={car2} style={{ width: 500 }} />
            </div>
   
            <a className='text-center'>
            Mercedes-Benz S-Class 0352600316
            </a>
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


           <div className='justify-between md:mt-[60px] flex mt-[80px]'>
           <a className="text-green-600 hover:scale-125 ml-[190px] md:ml-[260px] mt-[-20px] duration-300 hover:text-white">
           <FaPhone />
           </a>
           <a className='text-xl ml-[-20px] mt-[-28px] md:ml-[0]'>
           (555)123-4567
           </a>
           </div>

           <div className='justify-between mt-[30px] md:mt-[30px] flex px-4 py-[-90px] md:py-[-50px]'>
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
   </div>
)
};
export default Forth_car;
