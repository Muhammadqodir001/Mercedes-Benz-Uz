import React, { useState } from 'react'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'
import {Link} from 'react-scroll'
import download from '/src/assets/download (1).jpg'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='top' className='navbar fixed py-4 md:py-0 bg-slate-600'>
             <div className="container">
            <div className='  hover:scale-110 duration-500 px-3  hover:text-fuchsia-500 '>
                <img className=' rounded-full md:w-[25%] w-[25%]  shadow-md shadow-violet-500' src={download}/> 
         </div>
           <div className='justify-between flex px-2 ml-[-100px] md:ml-[-400px] font-bold cursor-pointer'>
               <span className='hover:text-violet-500 md:flex hidden md:ml-[-200px]'>
                Mercedes The Best Or Nothing!
               </span>
               <a className=" text-green-500 ml-[-95px] md:ml-[200px] mt-[8px] duration-300 ">
                   <FaPhone size={20} />
               </a>
               <a className='hover:text-violet-500 text-xl ml-[20px]'>
               (555)123-4567
               </a>
          </div>  

           <ul className={nav ? 'nav-menu active' : 'nav-menu'} style={{alignItems: 'center'}}>

            <li className=' hover:text-teal-500 duration-300 hover:scale-110 font-bold cursor-pointe'>
               <Link activeClass='active' onClick={handleNav} to='home' spy={true} smooth={true} offset={-250}  duration={400} > Home </Link>
            </li>
           
            <li className=' hover:text-teal-500 duration-300 hover:scale-110 font-bold cursor-pointer'>
                <Link activeClass='active' onClick={handleNav} to='vehicle' spy={true} smooth={true} offset={-50}  duration={400} > Vehicles </Link>
           </li>
        
           <li className='hover:text-teal-500 duration-300 hover:scale-110 font-bold cursor-pointer'>
               <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={400} onClick={handleNav} > Contact </Link>
           </li>
           </ul>
           
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
               </div>
        </div>
)};
export default Navbar

{/* <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                
<li><Link  className= 'hover:text-teal-500'  to='/'>Home</Link></li>
<li><Link  className= 'hover:text-teal-500'  to='/vehicle'>Vehicle</Link> </li>
<li><Link  className= 'hover:text-teal-500'  to='/contact'>Contact</Link></li>

</ul> */}