import { nav } from 'framer-motion/client';
import {menu,close} from '../assets';
import logo from '../assets/pic1.jpg';
import {navLinks} from  '../constants'
import { styles } from '../styles';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [toggle,setToggle] = useState(false);
  const setActive = ()=>{}
  return (
    <nav className={`${styles.paddingX} w-full p-5 fixed top-0 z-20 bg-primary flex items-center`}>
             <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
              <Link to='/' className='flex items-center gap-2' onClick={()=>{
                setActive(""); 
                window.scrollTo(0,0);
              }}>
                <img src={logo} className='w-9 h-9 object-contain rounded-full' />
                <p className='font-bold text-xl cursor-pointer text-white hover:text-orange-400'>Yash</p>
              </Link>
               <ul className='list-none max-sm:hidden  text-[#915eff] flex  flex-row gap-10 '>
                 {
                  navLinks.map((link,index)=>(
                    <li key={index} className='text-[18px] hover:text-[#915eff] text-[#decfffa2] cursor-pointer font-medium'>
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))
                 }
               </ul>
               <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=>setToggle(!toggle)} />
                     <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-gray-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}>
                      <ul className='list-none  text-[#915eff] items-start gap-4 flex flex-col justify-end '>
                      {
                       navLinks.map((link,index)=>(
                         <li key={index} className='text-[18px]      hover:text-[#915eff] text-[#decfffa2] cursor-pointer  w-full font-medium'>
                           <a href={`#${link.id}`}>{link.title}</a>
                         </li>
                       ))
                      }
                     </ul>
                     </div>
               </div>
             </div>
    </nav>
  )
}

export default Navbar
