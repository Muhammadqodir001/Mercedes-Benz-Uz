import React from "react";
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import {  FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiDribbble } from 'react-icons/fi'
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div className=" bg-gray-900 text-center h-[] md:h-[100px] text-white">
      <div className="flex flex-col max-w-[1400px] mx-auto justify-between sm:flex-row text-center text-gray-500">
        <div className="flex  ml-[10px] md:px-0 justify-between px-16 sm:w-[300px] md:text-3xl text-2xl mt-[20px] md:mt-[35px] pt-4 ">
         
                            <FiInstagram className='hover:text-white hover:scale-110' />
                            <FiFacebook className='hover:text-white hover:scale-110' />
                            <FiLinkedin className='hover:text-white hover:scale-110' />
                            <FiDribbble className='hover:text-white hover:scale-110' />
                            <FiGithub className='hover:text-white hover:scale-110' />
           
        </div>

        <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='text-3xl ml-[10px] mt-[-50px] md:text-4xl md:mt-[20px] md:ml-[50px] hover:text-white hover:scale-110' />
                    </Link>
                    <div className="mt-[10px] md:mt-[35px]">
                   <p className="py-4 ">Copyright 2023 Mercedes Benz Uz LLC | All rights reserved.</p>
                    </div>
           </div>
    </div>
  );
};

export default Footer;