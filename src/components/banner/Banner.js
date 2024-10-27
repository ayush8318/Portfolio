import React from 'react';
import Leftside from './Leftside';
 import Rightside from './Rightside';
 
const Banner = () => {
   
  return (
    <section id="home" className="w-full   pt-10 pb-20 flex flex-col gap-10 lgl:flex-row  lgl:gap-0 items-center border-b-[1px] font-titleFont border-b-black" >
 <Leftside/>
<Rightside/>
    </section>
  );
}

export default Banner;
