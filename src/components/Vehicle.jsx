import React from "react";
import { FaCheck } from 'react-icons/fa';
import {Link} from "react-router-dom"

const Vehicle = () => {

    return (
    <div name="vehicle" className="vehicle max-w-[1800px] justify-between py-40 h-[2600px] md:h-[880px] mx-auto px-4">
      <div className="text-center md:mt-[-20px]">
        <a className="text-4xl text-violet-500 ">Available Vehicles!</a>
      </div>

      <div className="font-bold   w-full mt-10 text-center gap-6 md:gap-60 grid grid-cols-1 sm:grid-cols-1 md:ml-[150px] md:mt-[150px] lg:grid-cols-3 md:h-[400px] md:w-[1300px] items-center">
       
          <div className="card hover:shadow-2xl py-10 px-3 hover:shadow-slate-500 md:bg-none bg-gradient-to-br from-gray-300 ">
            <h3 >Mercedes Benz A-Class limousine</h3>
            <div className="hover:scale-90 duration-300">
            <img src='src/assets/a-class/mercedes-benz-a-class-limousine-1.webp'  style={{ width: 400 }} />
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
  
 

          <div className="card hover:shadow-2xl  py-10 px-3 hover:shadow-slate-500 md:bg-none bg-gradient-to-br from-gray-300 ">
            <h3>Mercedes-AMG GT 4</h3>
            <div className="hover:scale-90 duration-300">
            <img src='src/assets/g4/mercedes-amg-gt-4-door-coupe-1.webp'  style={{ width: 400 }} />
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
          
      {/* The third car starts */}

      <div className="card hover:shadow-2xl  py-10 px-3 hover:shadow-slate-500 md:bg-none bg-gradient-to-br from-gray-300 ">
            <h3>Mercedes-Benz G-Class</h3>
            <div className="hover:scale-90 duration-300">
            <img src='src/assets/gelic/mercedes-benz-g-class-1.webp'  style={{ width: 400 }} />
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

         {/* The forth car starts */}

      <div className="card hover:shadow-2xl  py-10 px-3 hover:shadow-slate-500 md:bg-none bg-gradient-to-br from-gray-300 ">
            <h3>Mercedes-Benz S-Class</h3>
            <div className="hover:scale-90 duration-300">
            <img src='src/assets/lass-w/mercedes-benz-s-class-wv223-1.webp'  style={{ width: 400 }} />
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
           
             {/* The fifth car starts */}

      <div className="card hover:shadow-2xl  py-10 px-3 hover:shadow-slate-500 md:bg-none bg-gradient-to-br from-gray-300 ">
            <h3>Mercedes-Benz CLS Coupe</h3>
            <div className="hover:scale-90 duration-300">
            <img src='src/assets/5/mercedes-benz-cls-coupe-2021-1.webp'  style={{ width: 400 }} />
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

            {/* The sixth car starts */}

      <div className="card hover:shadow-2xl  py-10 px-3 hover:shadow-slate-500 md:bg-none bg-gradient-to-br from-gray-300 ">
            <h3>Mercedes-Maybach S-Class</h3>
            <div className="hover:scale-90 duration-300">
            <img src='src/assets/6/mercedes-maybach-s-class-2021-new-1.webp'  style={{ width: 400 }} />
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

         
          </div>
    </div> 
);
  }  

export default Vehicle;

