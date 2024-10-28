import React, { useState } from 'react';
import Layout from '../layout/Layout';
 import Education from './Education';
 import Achivements from './Achivements';
 import Experience from './Experience';
 import Skills from './Skills';
 
const Resume = () => {
  const[edu,setedu]=useState(true);
  const[ski,setski]=useState(false);
  const[exp,setexp]=useState(false);
  const[achi,setachi]=useState(false);
  return (
    <section id="resume"
    className='w-full py-20  xs:h-[3400px] h-[3600px] md:h-auto border-b-[1px] border-b-black '>
        <div className='felx justify-center items-center text-center'> 
      <Layout  
      title="Engineering Graduate with a Passion for Technology"
      des=" My Resume"/>
      </div>
      <div>
        <ul  className='w-full grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4    gap-3'>
            <li  onClick={()=>setedu(true)& setski(false)& setexp(false)&setachi(false)} className={`${edu? "border-designColor rounded-lg":"border-transparent" } resumeLi`}>Education</li>
            <li   onClick={()=>setedu(false)& setski(true)&setexp(false)&setachi(false)} className={`${ski? "border-designColor rounded-lg":"border-transparent" } resumeLi`}>Professional</li>
            <li  onClick={()=>setedu(false)& setski(false)&setexp(true)&setachi(false)}   className={`${exp? "border-designColor rounded-lg":"border-transparent" } resumeLi`}>Experience</li>
            <li   onClick={()=>setedu(false)&  setski(false)& setexp(false)&setachi(true)} className={`${achi? "border-designColor rounded-lg":"border-transparent" } resumeLi`}>Achievements</li>
        </ul>
      </div>
 <div className=' w-full flex justify-between gap-20'>
{ edu && <Education/>
}
{
  ski &&<Skills/>
}
{
exp && <Experience/>
}
{
achi && <Achivements/>
}
 </div>
    </section>
  );
}

export default Resume;

 