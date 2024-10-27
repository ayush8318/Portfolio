import React from 'react';
import { motion } from 'framer-motion';
const Codingskills = () => {
  return (
    <div className="w-full md:w-1/2">
        <div className="py-8 md:py-12 font-titleFont">
          <h2 className="text-3xl md:text-4xl font-bold">Coding SKills & Tools</h2>
        </div>
        <div className=" w-full flex flex-col gap-6 ">
          <div className="overflow-x-hidden">
          <span className="text-xl  inline-flex  font-bold  uppercase  ">C++</span>
            <span className="w-full h-2  bgOpacity inline-flex rounded-md ">
            <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
              className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                 <span className="absolute -top-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
          <span className="text-xl  inline-flex  font-bold  uppercase  ">C</span>
            <span className="w-full h-2  bgOpacity inline-flex rounded-md ">
            <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
              className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                 <span className="absolute -top-7 right-0">80%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
          <span className="text-xl  inline-flex  font-bold     ">Javascript</span>
            <span className="w-full h-2  bgOpacity inline-flex rounded-md ">
            <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
              className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                 <span className="absolute -top-7 right-0">60%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
          <span className="text-xl  inline-flex  font-bold    ">VsCode</span>
            <span className="w-full h-2  bgOpacity inline-flex rounded-md ">
            <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
              className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                 <span className="absolute -top-7 right-0">70%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
          <span className="text-xl  inline-flex  font-bold    ">Github</span>
            <span className="w-full h-2  bgOpacity inline-flex rounded-md ">
            <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
              className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                 <span className="absolute -top-7 right-0">60%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>


  );
}

export default Codingskills;
