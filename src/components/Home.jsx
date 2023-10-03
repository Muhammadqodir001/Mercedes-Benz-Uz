import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import bag from '/src/assets/bag.webp'
import bgv from '/src/assets/bgv.mp4'
import logo from 'src/assets/log.jpg'

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div name='home' className='w-full py-20 text-center object-center justify-center h-full flex flex-1 md:flex-row flex-col items-center'>
    <div className='' style={{ width: '100%', height: '100vh' }}>
         <video className=' md:h-[100%] h-[100%]' style={{ objectFit: 'cover', width: '100%', }} src={bgv} autoPlay muted loop />
    </div>
     <div className='absolute md:ml-[1300px]  ml-[320px] mt-[-540px] md:mt-[-500px] text-white text-2xl'>
     <img  className='rounded-full hover:scale-90 duration-500 w-[120px] md:w-[150px]' src={logo} />
     
     </div>

     <div className='absolute px-40 md:px-32 text-black md:ml-[-400px] mt-[245px] md:mt-[270px] py-[10px] bg-slate-200 ml-[10px] md:mb-[-100px]  hover:scale-90 duration-500 shadow-md shadow-teal-300  rounded-md  group border-2 flex items-center hover:bg-violet-500  hover:border-violet-500'>
           <button>
             <Link  spy={true} smooth={true} duration={500}  to='vehicle'> Buy Now </Link>
           </button>
      </div>
       
       <div className='absolute px-28 md:px-20 text-white md:ml-[400px] mt-[360px] md:mt-[270px] py-[10px] bg-stone-800 ml-[10px] md:mb-[-100px]  hover:scale-90 duration-500 shadow-md shadow-teal-300  rounded-md  group border-2    flex items-center hover:bg-violet-500  hover:border-violet-500'>
           <button>
              <Link  spy={true} smooth={true} duration={500}  to='vehicle'> Discover Our Company </Link>
          </button>
       </div>
       <div className=' absolute mt-[491px]  md:mt-[500px]'>
        <a className='text-white '>
          Mercedes Change your life for the better.
          <br/>
          <p className='text-sm '>
          Start your journey by exploring our range and
          
           book your unforgettable test drive today!
           </p>
        </a>
       </div>

    </div> 
  );
};

export default Home;