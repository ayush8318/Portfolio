import React, { useState } from 'react';
import{ Link } from "react-scroll";
import{logo}from"../../assets/index"
import {navLinksdata} from "../../constants"
import{FiMenu} from "react-icons/fi";
import {IoMdClose} from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedinIn  } from "react-icons/fa";
const Navbar = () => {
  const [showMenu,setshowMenu]=useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50  bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600" >
     <div ><img  className="w-[60px] h-[60px]"src={logo} alt="logo" /></div>
     <div  >
<ul className="hidden mdl:inline-flex items-center  gap-6 lg:gap-10">
  {
    navLinksdata.map(({_id,title,link})=>(
      <li className="text-base font-normal text-gray-400  tracking-wide cursor-pointer hover:text-designColor duration-300" key={_id}>
        <Link 
        activeClass="active"
        to={link}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        
        >
        {title}</Link></li>
    ))
  }
</ul>
<span onClick={()=>setshowMenu(!showMenu)} className='text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer'><FiMenu/></span>
    {
      showMenu &&(
        <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
          <div className='flex flex-col gap-8 py-2 relative'>
          <div>
            <img  className="w-32 "src={logo} alt="logo" />
          <p className='text-sm text-gray-400 mt-2'>Hi, I'm Ayush Gupta, a passionate full-stack developer and programmer currently pursuing a B.Tech in Electrical and Electronics Engineering at the National Institute of Technology, Uttarakhand (2021-2025).</p>
          </div>
          <div>
            <ul className='flex flex-col  gap-4'>
              {
                 navLinksdata.map(({_id,title,link})=>(
                  <li  className="text-base font-normal text-gray-400  tracking-wide cursor-pointer hover:text-designColor duration-300" key={_id}>
                    <Link 
                    onClick={()=>setshowMenu(false)}
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    
                    >
                    {title}</Link></li>
                ))
              }
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
  <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
<div className="flex gap-4 mb-2">
  <span className="bannerIcon" ><a href="https://www.facebook.com/share/NWKzwyi6gBi3S2rJ/"><FaFacebookF/></a></span>
  <span className="bannerIcon" ><a href="https://www.instagram.com/ayush_gupta._/profilecard/?igsh=MjZsc2U2Ym1vYWln"><FaInstagram/></a></span>
  <span className="bannerIcon" > <a href="https://www.linkedin.com/in/ayush-gupta-01a785228"><FaLinkedinIn/></a></span>
</div>
</div>
          <span onClick={()=>setshowMenu(false)}
            className='absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer'><IoMdClose/></span>
          </div>
        </div>
        
      )
    }
     </div>
    </div>
  );
}

export default Navbar;

