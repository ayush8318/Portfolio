import React from 'react';
 
import { FaFacebookF,  FaGlobe, FaLinkedinIn,FaInstagram  } from "react-icons/fa";
import{PiCopyrightThin} from 'react-icons/pi'
const Footer = () => {
  return (
    <>
    <section id="home" className="w-full   pt-10 pb-20 flex items-center border-b-[1px] font-titleFont border-b-black" >
     <div className='flex  flex-col gap-10'>

     <div>
     <h2 className="text-sm md:text-base uppercase font-titleFont mb-4 text-designColor">Quick Links</h2>
      <div>
        <ul  className=' w-full grid grid-cols-1 sm:grid-cols-2    gap-6 md:grid-cols-3 lgl:grid-cols-5  md:gap-20'>
            <li  className='quicklinks' ><a href="https://drive.google.com/file/d/1YU9rOdgrJ9_ZO69qT5sOibUiLL2R6oV-/view?usp=drive_link">resume</a></li>
            <li  className='quicklinks'><a href="https://github.com/ayush8318?tab=repositories">Github </a></li>
            <li  className='quicklinks'><a href="https://leetcode.com/u/Ayu399/">Leetcode </a></li>
            <li  className='quicklinks'> <a href="https://www.geeksforgeeks.org/user/bt21eee019/">GFG</a></li>
            <li  className='quicklinks'> <a href="https://app.netlify.com/sites/take-note-today/overview">Netlify</a></li>
        </ul>
      </div>
     </div>
   
     <div className='flex justify-center mt-20   md:ml-20  ' >
 
<div className="flex flex-col sm:flex-row gap-4 mb-2 md:ml-3 lgl:ml-40  mt-2 ">
  <span className="bannerIcon" > <a href="https://www.facebook.com/share/NWKzwyi6gBi3S2rJ/"><FaFacebookF/></a></span>
  <span className="bannerIcon" > <a href="https://www.instagram.com/ayush_gupta._/profilecard/?igsh=MjZsc2U2Ym1vYWln"><FaInstagram/></a></span>
    <span className="bannerIcon" > <a href="https://www.linkedin.com/in/ayush-gupta-01a785228"><FaLinkedinIn/></a></span>
    <span className="bannerIcon" > <a href="https://ayush-g-portfolio.netlify.app/"><FaGlobe/></a></span>
  
</div>
     </div>

     </div>
  </section>
 <div className='flex justify-center mt-10 -ml-10 xs:ml-1'> 
    <div className='flex items-center mb-10 gap-1'>
    <div className=''><PiCopyrightThin/></div>
 <div> <p className='text-gray-500 text-base'> 2024 All rights are reserved by Ayush Gupta</p></div>
</div>

</div>
</>
  );
}

export default Footer;
