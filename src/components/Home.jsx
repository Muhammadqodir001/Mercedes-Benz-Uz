import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import bag from '/src/assets/bag.webp'

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div name='home' className='w-full py-20 text-center object-center justify-center h-full flex flex-1 md:flex-row flex-col items-center'>

     <div className='h-[600px]'>  
      <img className='md:w-[1000px] w-full ml-[10px] md:ml-[-200px]  ' src={bag}/>  
     </div>
      <motion.div
          initial={{opacity: 0, scale: 0, x: 500 }}
          whileInView = {{opacity: 1, scale: 1, x: 0}}
         animate={{ x: 0 }}
         variants={{
          hover: {
              scale: 1.1}
          }}
          whileHover="hover"
          className=' px-28 md:px-32 text-white md:ml-[-900px] mt-[-200px] md:mt-[450px] py-3 bg-stone-800 ml-[10px] md:mb-[-100px]  hover:scale-110 duration-500 shadow-md shadow-teal-300  rounded-md  group border-2   my-2 flex items-center hover:bg-violet-500  hover:border-violet-500'>
        
         <button>
          <Link  spy={true} smooth={true} duration={500}  to='vehicle'> Pick Your car </Link>
        </button>
        </motion.div>

      </div> 
  );
};

export default Home;