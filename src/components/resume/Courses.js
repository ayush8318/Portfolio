 import React from 'react';
import ResumeCard from './ResumeCard';
const Courses = () => {
  return (
    <div className=' py-20 mt-20 md:py-0 md:mt-0 w-1/2 h-auto md:h-1/3'>
    <div className='mt-9 py-6 md:mt-0 lgl:py-12 font-titleFont'>
          <h2 className=' text-3xl md:text-4xl font-bold'>Courses</h2>
        </div>
        <div className='mt-6 lgl:mt-14  w-full  lgl:h-[1000px]  h-[1500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
        <ResumeCard
              title="Data Structure and Alogrithm"
              subTitle="NIT Uttarakhand "
             result="8/10"
              des="I studied Data Structures and Algorithms with a focus on developing efficient problem-solving skills and gaining a deep understanding of various algorithms, including Rabin-Karp, KMP, Moore's Voting, Floyd's, and Dijkstra's algorithms, along with Prim's Algorithm, Kruskal's Algorithm, and the Bellman-Ford Algorithm for graphs with negative weights."
            />
            <ResumeCard
              title="Object Oriented Design"
              subTitle="Nit Uttarakhand"
              result="9/10"
              des="I studied Object Oriented Design, which covered essential concepts known as the four pillars of OOP: encapsulation, inheritance, polymorphism, and abstraction. The course also included error handling techniques, such as try and catch "
            />
            <ResumeCard
              title="Database Management System"
              subTitle="Nit Uttarakhand"
              result="9/10"
              des="I studied Database Management Systems, where the course covered core concepts such as database architecture, normalization, SQL querying, transaction management, data modeling, and the principles of both relational and non-relational databases."
            />
        </div>
    </div>
  
  );
}

export default Courses;
