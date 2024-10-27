import React from 'react';
 
import {motion}from 'framer-motion'
const Experience = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:1}}} 
    div className='w-full'>
    <div className='py-12 font-titleFont'>
          <h2 className='text-4xl font-bold'>Experience</h2>
        </div>
         
        <div className='w-full h-auto group flex'>
      <div className='w-10 h-[6px]  bgOpacity mt-16 relative  '>
        <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
          <span className='w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300'></span>
        </span>
      </div>
      <div className='w-full bg-black bg-opacity-20 hover:bg-opacity-30 duartion-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne'>
 <div className='flex flex-col lgl:flex-row  gap-4 justify-between lgl:items-center lgl:gap-0'>
 <div >
  <h3 className='text-xl md:text-2xl font-semibold group-hover:text-white duration-300'>Internship</h3>
    <p  className='text-sm mt-2 text-gray-400 group-hover:text-white duration-300'> Bureau of Indian Standards (BIS)</p>
  
 </div>
 <div>
  <p className=' px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium '>Jun 2024-july 2024 <br/>New Delhi</p>
 </div>
 </div>
 <p className='text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300'>
 Objective: 
To update the existing standard to align with current industry practices and technological advancements.<br/>

Role: <br/>
Contributed to data collection and analysis, offering insights and recommendations for standard revisions.<br/>
Conducted an industry visit to Sterlite Power for comprehensive data gathering, enhancing the documentation process with real-world insights<br/>
Skills Acquired: 
<br/>
In-depth knowledge of standardization procedures and technical documentation.<br/>
Strong analytical and research capabilities, enhancing problem-solving skills.<br/>
Improved collaboration and teamwork in a professional technical environment.<br/>
Practical understanding of industry practices through firsthand experience during the site visit.
 </p>
      </div>
    </div>
             
        
    </motion.div>
  );
}

export default Experience;
