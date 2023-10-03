import React from "react";
import { FaCheck } from 'react-icons/fa';
import {Link} from "react-router-dom"

import car1 from '/src/assets/a-class/car1.webp'
import g4 from '/src/assets/g4/g4.webp'
import gelic from '/src/assets/gelic/gelic.webp'
import car4 from '/src/assets/lass-w/car4.webp'
import car5 from '/src/assets/5/car5.webp'
import car6 from '/src/assets/6/car6.webp'
import { Fade, Reveal } from 'react-reveal';


const Vehicle = () => {

    return (
    <div name="vehicle" className="vehicle max-w-[1800px] mt-[-50px] justify-between md:h-[800px] h-[2450px] mx-auto px-4">
      <div className="text-center ">
        <a className="text-4xl text-violet-500 ">Available Vehicles!</a>
      </div>

      <div className="font-bold  w-full mt-10 text-center gap-6 md:gap-60 grid grid-cols-1 sm:grid-cols-1 md:ml-[150px] md:mt-[150px] lg:grid-cols-3 md:h-[200px] md:w-[1300px] items-center">
        <Fade bottom>
          <div className="card rounded-md hover:shadow-2xl py-10 px-3 hover:shadow-slate-500 md:bg-none bg-gradient-to-br from-gray-300 ">
            <h3 >Mercedes Benz A-Class limousine</h3>
            <div className="hover:scale-90 duration-300">
            <img src={car1} style={{ width: 400 }} />
            </div>

            <div className="overlay text-black  mt-[10px]">
            <div className="overlay text-black mt-[10px]">
          <div className="md:mt-[10px]">
         
           <div className="flex hover:text-violet-500 justify-end md:py-0 border md:px-[46px] px-[126px] border-black">
            <span className="p-2 mr-4 hover:scale-110 duration-300">
            <Link to='/a_class'>  <FaCheck size={30} /></Link> 
            </span>
             <span className="p-1 hover:scale-110 mt-[5px] duration-300">
                 <Link to='/a_class'>  Check Out</Link>
            </span>
            </div>
            </div>
            </div>
            </div>
          </div>
          </Fade>
 
        <Fade bottom>
          <div className="card hover:shadow-2xl rounded-md py-10 px-3 hover:shadow-slate-500 md:bg-none bg-gradient-to-br from-gray-300 ">
            <h3>Mercedes-AMG GT 4</h3>
            <div className="hover:scale-90 duration-300">
            <img src={g4}  style={{ width: 400 }} />
            </div>

            <div className="overlay text-black  mt-[10px]">
            <div className="overlay text-black mt-[10px]">
          <div className="md:mt-[10px]">
       
           <div className="flex hover:text-violet-500 justify-end md:py-0 border md:px-[46px] px-[126px] border-black">
            <span className="p-2 mr-4 hover:scale-110 duration-300">
              <Link to='/sec_car'> <FaCheck size={30} /></Link>
            </span>
             <span className="p-1 hover:scale-110 mt-[5px] duration-300">
                 <Link to='/sec_car'>  Check Out</Link>
            </span>
            </div>
            </div>
            </div>
            </div>
          </div>
          </Fade>
          
      <Fade bottom>
      {/* The third car starts */}
      <div className="card hover:shadow-2xl rounded-md py-10 px-3 hover:shadow-slate-500 md:bg-none bg-gradient-to-br from-gray-300 ">
            <h3>Mercedes-Benz G-Class</h3>
            <div className="hover:scale-90 duration-300">
            <img src={gelic} style={{ width: 400 }} />
            </div>

            <div className="overlay text-black  mt-[10px]">
            <div className="overlay text-black mt-[10px]">
          <div className="md:mt-[10px]">
         
           <div className="flex hover:text-violet-500 justify-end md:py-0 border md:px-[46px] px-[126px] border-black">
            <span className="p-2 mr-4 hover:scale-110 duration-300">
            <Link to='/third_car'>  <FaCheck size={30} /> </Link>
            </span>
             <span className="p-1 hover:scale-110 mt-[5px] duration-300">
                 <Link to='/third_car'>  Check Out</Link>
            </span>
            </div>
            </div>
            </div>
            </div>
          </div>
          </Fade>

         {/* The forth car starts */}
         <Fade bottom>
      <div className="card hover:shadow-2xl rounded-md py-10 px-3 hover:shadow-slate-500 md:bg-none bg-gradient-to-br from-gray-300 ">
            <h3>Mercedes-Benz S-Class</h3>
            <div className="hover:scale-90 duration-300">
            <img src={car4} style={{ width: 400 }} />
            </div>

            <div className="overlay text-black  mt-[10px]">
            <div className="overlay text-black mt-[10px]">
          <div className="md:mt-[10px]">
        
           <div className="flex hover:text-violet-500 justify-end md:py-0 border md:px-[46px] px-[126px] border-black">
            <span className="p-2 mr-4 hover:scale-110 duration-300">
             <Link to='/forth_car'><FaCheck size={30} /></Link>
            </span>
             <span className="p-1 hover:scale-110 mt-[5px] duration-300">
                 <Link to='/forth_car'>  Check Out</Link>
            </span>
            </div>
            </div>
            </div>
            </div>
          </div>
          </Fade>
             {/* The fifth car starts */}
             <Fade bottom>
      <div className="card hover:shadow-2xl rounded-md  py-10 px-3 hover:shadow-slate-500 md:bg-none bg-gradient-to-br from-gray-300 ">
            <h3>Mercedes-Benz CLS Coupe</h3>
            <div className="hover:scale-90 duration-300">
            <img src={car5}  style={{ width: 400 }} />
            </div>

            <div className="overlay text-black  mt-[10px]">
            <div className="overlay text-black mt-[10px]">
          <div className="md:mt-[10px]">
        
           <div className="flex hover:text-violet-500 justify-end md:py-0 border md:px-[46px] px-[126px] border-black">
            <span className="p-2 mr-4 hover:scale-110 duration-300">
              <Link to='/fifth_car'> <FaCheck size={30}/></Link>
            </span>
             <span className="p-1 hover:scale-110 mt-[5px] duration-300">
                 <Link to='/fifth_car'> Check Out</Link>
            </span>
            </div>
            </div>
            </div>
            </div>
          </div>
          </Fade>
            {/* The sixth car starts */}
            <Fade bottom>
      <div className="card hover:shadow-2xl rounded-md py-10 px-3 hover:shadow-slate-500 md:bg-none bg-gradient-to-br from-gray-300 ">
            <h3>Mercedes-Maybach S-Class</h3>
            <div className="hover:scale-90 duration-300">
            <img src={car6} style={{ width: 400 }} />
            </div>

            <div className="overlay text-black  mt-[10px]">
            <div className="overlay text-black mt-[10px]">
          <div className="md:mt-[10px]">
        
           <div className="flex  hover:text-violet-500 justify-end md:py-0 border md:px-[46px] px-[126px] border-black">
            <span className="p-2 mr-4 hover:scale-110 duration-300">
              <Link to='/sixth_car'><FaCheck size={30} /></Link>
            </span>
             <span className="p-1 hover:scale-110 mt-[5px] duration-300">
                 <Link to='/sixth_car'> Check Out</Link>
            </span>
            </div>
            </div>
            </div>
            </div>
          </div>
          </Fade>
          </div>
    </div> 
);
  }  

export default Vehicle;

