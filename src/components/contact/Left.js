import React from 'react';
import { FaFacebookF, FaInstagram , FaLinkedinIn  } from "react-icons/fa";
import {contactImg} from "../../assets"
const Left = () => {
  return (
 <div className=" w-full md:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center ">

<img 
className="w-full h-65 object-cover rounded-lg mb-2 mt-2"
src={contactImg} alt="contactImg" />
<div className='flex flex-col gap-4'>
  <h3 className='text-3xl font-bold text-white'> Ayush Gupta </h3>
<p className='text-lg font-normal text-gray-400'>Mern Stack Developer</p>
<p className='text-base text-gray-400 tracking-wide'>I'm skilled in building full-stack web applications using MongoDB, Express.js, React, and Node.js.
 </p>
 <p className='text-base text-gray flex items-center gap-2'>Phone:<span className='text-lightText'>+91 8318707346</span></p>
 <p className='text-base text-gray flex items-center gap-2'>email:<span className='text-lightText'>bt21eee019@nituk.ac.in</span></p>
 </div>
 <div className='flex flex-col gap-2'>
  <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
<div className="flex gap-4 mb-2">
  <span className="bannerIcon" ><a href="https://www.facebook.com/share/NWKzwyi6gBi3S2rJ/"><FaFacebookF/></a></span>
  <span className="bannerIcon" ><a href="https://www.instagram.com/ayush_gupta._/profilecard/?igsh=MjZsc2U2Ym1vYWln"><FaInstagram/></a></span>
  <span className="bannerIcon" > <a href="https://www.linkedin.com/in/ayush-gupta-01a785228"><FaLinkedinIn/></a></span>
</div>
</div>
</div>
  );
}

export default Left;

