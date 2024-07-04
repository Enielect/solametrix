import React from "react";
import Button from "@/app/components/atoms/Button";

const Hero = () => {
  return (
    <div className='bg-[url("/solar_background.jpeg")] bg-cover h-[350px] text-white bg-center space-y-4 w-full py-[160px] capitalize'>
     <h2 className="text-center font-bold text-2xl"> data-driven insights for optimized solar investment strategies</h2>
     <p className="text-center">profit maximization and risk reduction for renewable energy integration</p>
     <div className="flex justify-center space-x-5">
        <Button className="border border-white p-[8px_20px] text-sm rounded-md">Get Startes</Button>
        <Button className="border border-white p-[8px_20px] text-sm rounded-md">Contace Us</Button>
     </div>
    </div>
  );
};

export default Hero;
