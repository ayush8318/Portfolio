import React from 'react';
import ResumeCard from './ResumeCard';
import Courses from './Courses';
import {motion } from 'framer-motion';
const Education = () => {
  return (
    <>
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:1}}} className='w-full flex   flex-col lgl:flex-row gap-10  lgl:gap-20' >
    <div className='w-1/2'>
  <div className='py-4 lgl:py-12 font-titleFont'>
        <h2 className='text-3xl md:text-4xl font-bold'>Education  </h2>
      </div>
      <div className=' mt-6 lgl:mt-14 w-full   h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
      <ResumeCard
            title="National Institute Of Technology Uttarakhand (NIT)"
            subTitle="Bachelor Of Technology (2021-2025)"
            result="8.72/10"
            des="Electrical and Electronics Engineering "
          />
          <ResumeCard
            title="NLK Vidya Mandir Inter College Vishnupuri Kanpur"
            subTitle="Intermediate (2020)"
            result="79.2%"
            des="I completed my intermediate with first honors in PCM (Physics, Chemistry, Mathematics) in a full-time course."
          />
          <ResumeCard
            title="NLK Vidya Mandir Inter College Vishnupuri Kanpur"
            subTitle="Marticulation (2018)"
            result="85.83%"
            des="I completed my matriculation in regular mode with a score of 85.83%, demonstrating a strong foundation in core subjects and consistent academic performance. "
          />
      </div>
   
  </div> 
     <Courses/>
     </motion.div>
     </>
  
  );
}

export default Education;
