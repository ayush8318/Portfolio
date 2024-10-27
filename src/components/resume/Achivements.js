import React from "react";
 
import Achiv from "./Achiv";
 
const Achivements = () => {
  return (
    <div
      className="w-full"
    >
      <div className="py-12 font-titleFont">
        <h2 className="text-4xl font-bold">Achievements</h2>
      </div>
<Achiv 
description="Successfully completed 100days of code challenge by Geeks for Geeks."
/>
<Achiv 
description="Solved 400+ Questions on different coding plateforms"
/>
<Achiv 
description="JEE Advanced qualified."
/>

      
 
    </div>
  );
};

export default Achivements;
