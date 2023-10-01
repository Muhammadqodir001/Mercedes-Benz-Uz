import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTelegram} from "react-icons/fa";
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiDribbble } from 'react-icons/fi'
import {Link} from 'react-scroll'
const Footer = () => {
  return (
    <div className=" bg-gray-900 text-center h-[] md:h-[200px] text-white">
      <div className="flex flex-col max-w-[1400px] mx-auto justify-between sm:flex-row text-center text-gray-500">
        <div className="flex  ml-[10px] md:px-0 justify-between px-16 sm:w-[300px] md:text-3xl text-2xl mt-[20px] md:mt-[130px] pt-4 ">
         
                            <FiInstagram className='hover:text-white hover:scale-110' />
                            <FiFacebook className='hover:text-white hover:scale-110' />
                            <FiLinkedin className='hover:text-white hover:scale-110' />
                            <FiDribbble className='hover:text-white hover:scale-110' />
                            <FiGithub className='hover:text-white hover:scale-110' />
           
        </div>

       <form className="md:mt-[20px] mt-[30px] md:ml-[100px]">   
            <h3 className="font-bold md:ml-[-40px]">Leaver your message here</h3>
            <FiMail className='ml-[100px] mt-[-19px] hover:text-white hover:scale-110 md:ml-[280px] text-2xl md:mt-[-20px] mail-icon' />
            <input className="md:mt-[20px] w-[350px] mt-[15px] h-[50px] md:w-[350px] md:h-[50px]" type="email " placeholder='Enter your email' />
          
        </form>

        <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='text-3xl ml-[10px] mt-[-85px] md:text-4xl md:mt-[20px] md:ml-[50px] hover:text-white hover:scale-110' />
                    </Link>

                    <div className="mt-[10px] md:mt-[130px]">

                   <p className="py-4 ">Copyright 2023 Mercedes Benz Uz LLC | All rights reserved.</p>
                    </div>
           </div>
    </div>
  );
};

export default Footer;