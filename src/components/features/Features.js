 import React from 'react';
import Layout from '../layout/Layout';
import Cards from './Cards';
import {SiBootstrap } from 'react-icons/si';
import { FaLaptopCode } from "react-icons/fa6";
import { FaReact } from 'react-icons/fa';
 import {BiLogoMongodb} from "react-icons/bi";
import{SiNetlify}from "react-icons/si";
import { TbApiOff } from "react-icons/tb";
 const Features = () => {
   return (
      <section id ="features"className="w-full h-full py-20   border-b-[1px] border-b-black">
      <Layout title="Features" des="What I do"/>
      <div className='grid  grid:cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
         <Cards 
         title="Full-Stack Development"
         des= "Develop and maintain web applications using the MERN stack (MongoDB, Express.js, React, Node.js)."
         icon={< FaReact/>}
         />
         <Cards 
         title="Frontend Design"
         des= "Craft intuitive and user-friendly interfaces using HTML, CSS, JavaScript, and frameworks like Bootstrap and Tailwind CSS."
          icon={<SiBootstrap/>}
          />
         <Cards 
         title=" Backend & Databases"
         des= "Design and manage databases using MongoDB, with expertise in data modeling and schema design & secure data storage using authentication tools like bcrypt"
         icon={<BiLogoMongodb/>}
         />
         <Cards 
         title="Problem Solving & Algorithms"
          des= " Strong foundation in data structures and algorithms.Participate in competitive programming challenges to enhance logic and algorithm efficiency."
         icon={<FaLaptopCode />}
         
         />
         <Cards 
         title=" API Integration"
          des= "Use RESTful APIs to connect applications with external services, providing seamless data flow and enhanced user experience."
         icon={<TbApiOff/>}
         
         />
         <Cards 
         title=" Deployment & Cloud Services"
     des= "Skilled in deploying full-stack applications using services like Netlify for frontend and Render for backend."
         icon={<SiNetlify/>}
         />
      </div>
      </section>
   );
 }
 
 export default Features;
 