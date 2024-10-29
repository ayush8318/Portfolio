 import React from 'react';
import ResumeCard from './ResumeCard';
const Courses = () => {
  return (
    <div className='  xs:py-0 xs:mt-0 py-20 mt-20 md:py-0 md:mt-0 w-1/2  xs:w-full h-auto md:h-1/3'>
    <div className=' xs:mt-4 mt-9 py-6 md:mt-0 lgl:py-12 font-titleFont'>
          <h2 className=' text-3xl md:text-4xl font-bold'>Courses</h2>
        </div>
        <div className='mt-6  lgl:mt-14  w-full  lgl:h-[1000px]  h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
        <ResumeCard
              title="Data Structure and Alogrithm"
              subTitle="NIT Uttarakhand "
             result="8/10"
              des="I studied "
            />
            <ResumeCard
              title="Object Oriented Design"
              subTitle="Nit Uttarakhand"
              result="9/10"
              des="I studied "
            />
            <ResumeCard
              title="Database Management System"
              subTitle="Nit Uttarakhand"
              result="9/10"
              des="I studied"
            />
        </div>
    </div>
  
  );
}

export default Courses;
