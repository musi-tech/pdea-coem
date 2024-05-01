import React, { useEffect, useState } from "react";


function CntDiv({ number, description }) {
  const [count, setCount] = useState(0);

  useEffect(() => {

    const intervalId = setInterval(() => {
      if (count === number) {
        clearInterval(intervalId);
        return;
      }
      setCount(count + 1);
    }, 1); // Adjust delay for desired animation speed
    return () => {
      
      clearInterval(intervalId);
    } // Cleanup function
  
  });

  return (
    <div className="flex flex-col h-[150px] w-[150px] items-center justify-center  ">
      
      <div className="number-animation font-bold text-2xl">{count}+</div>

             <div className="flex flex-row items-center my-4 w-full">
               <div className=" w-full h-[1px] bg-slate-500  ml-0"></div>
               <div className="text-richblack-700 font-medium h-[7px] bg-blue-500  w-11/12 leading-[1.375rem]"> </div>
               <div className="h-[1px] w-full bg-slate-500   mr-0 "></div>
             </div>


      <div className="uppercase font-semibold text-sm">{description}</div>
      
    </div>

   
  );
}

export default CntDiv;

