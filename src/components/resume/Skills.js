import React from "react";
import { motion } from "framer-motion";
import Codingskills from "./Codingskills";
import WebDevelopment from "./WebDevelopment";
const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="w-full flex flex-col md:flex-row gap-6 lgl:gap-20"
    >
      <Codingskills />

      <WebDevelopment />
      
    </motion.div>
  );
};

export default Skills;
