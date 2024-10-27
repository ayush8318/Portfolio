import React from 'react';
import { Link } from 'react-scroll';
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import {  FaReact } from "react-icons/fa";
import { SiTailwindcss  } from "react-icons/si";
import { navLinksdata } from '../../constants';
import {BiLogoMongodb} from "react-icons/bi";
import {SiLeetcode} from"react-icons/si";
const Leftside = () => {
    const [text]=useTypewriter({
        words:["Professional Coder.","Full Stack Developer.","Student."],
       loop:true,
       typeSpeed:20,
       deleteSpeed:10,
       delaySpeed:2000,
     });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20" >
    <div className="flex flex-col gap-5">
       <h4 className="text-lg font-normal">Welcome to My World</h4>
    <h1 className="text-6xl font-bold text-white">Hi,I'm{" "}
       <span className="text-designColor capitalize">Anurag</span>
    </h1>
    <h2 className="text-4xl font-bold text-white">a <span> {text} </span>
    <Cursor
    cursorBlinking="false"
    cursorStyle="|"
    cursorColor="#ff014f"
    />
    </h2>
    <p className='text-base font-bodyFont leading-6 tracking-wide'>
    Hi, I'm Ayush Gupta, a passionate full-stack developer and programmer currently pursuing a B.Tech in Electrical and Electronics Engineering at the National Institute of Technology, Uttarakhand (2021-2025).<br/>
     I’m seeking a growth-oriented and challenging position where I can apply my technical skills, contribute to the organization’s goals, and expand my knowledge through continuous learning and teamwork.<br/>

I have developed various projects like iNotebook, an online note-saving platform, and solved over 400 coding problems across different platforms. Additionally, I have successfully completed the GFG 100 Days Coding Challenge, constantly enhancing my problem-solving and coding abilities.
    </p>
    </div>
    {/* div A start from here */}
     <div className="flex  flex-col gap-6 xl:flex-row xl:gap-0 justify-between ">
        {/* divA1 */}
<div className='mt-8'>
<li className='quicklinks'>
  {
    navLinksdata
      .filter((navItem) => navItem.link === 'contact')
      .map((navItem) => (
        <Link key={navItem._id} to={navItem.link}>
          <span className='text-designColor cursor-pointer'>Hire Me</span>
        </Link>
      ))
  }
</li>
</div>

{/* divA2 */}

<div>
<h2 className="text-base uppercase font-titleFont mb-4">Best skill on</h2>
<div className="flex gap-4">
           <span className="bannerIconCu">
             <FaReact />
           </span>
           <span className="bannerIconCu">
             < BiLogoMongodb/>
           </span>
           <span className="bannerIconCu">
             <SiTailwindcss />
           </span>
           <span className="bannerIconCu">
             <SiLeetcode />
           </span>
         </div>
</div>

     </div>
</div>
  );
}

export default Leftside;
