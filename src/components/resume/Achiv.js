import React from 'react';

const Achiv = ({description}) => {
    
  return (
    <div className="w-full  h-auto sm:h-[100px] group flex mt-6 ">
    <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duartion-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">

        <div>
          <div>
            <span className="absolute w-5 h-5 rounded-full  mt-2 flex justify-center items-center bg-black bg-opacity-60">
              <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300">
            
              </span>
            </span>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300 ml-8  ">
              {description}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achiv;
