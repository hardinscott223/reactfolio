import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
 const titleRef = useRef(null);
 
   useGSAP(() => {
     gsap.from(titleRef.current, {
       y: 50,
       opacity: 0,
       duration: 3.5,
     });
   });

  return (
   <section className="relative w-full h-screen items-center justify-center overflow-hidden">

      {/* 
        Background Visuals Wrapper
        This is where your 3D canvas (Stars, Computers, Grids) will sit behind your text 
      */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        {/* <ComputersCanvas /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-row items-start gap-5 w-full">
        
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#FF00AF] to-[#7000FF] shadow-[0_0_15px_#FF00AF]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#FF00AF] via-[#7000FF] to-transparent" />
        </div> */}

        <div>
          <h1 className="text-[#B3B4BD] font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I'm <span ref={titleRef} className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A21C0] to-[#050A44]">Code Terminal</span>
          </h1>
          <p className="text-[#B3B4BD] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-4 max-w-xl">
            I do code for living. Contact me if you are single. I'll be there ASAP!!!!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero