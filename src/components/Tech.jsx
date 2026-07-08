import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Tech = () => {
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
    });
  });

  return (
      <section className="relative w-full h-screen items-center justify-center bg-black overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-row items-start gap-5 w-full"> 
          <h4>Projects</h4>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-row items-start gap-5 w-full"> 
          <card className="border-2 bg-[#2C2E3A] border-white p-4 rounded-lg shadow-lg h-24 w-24 flex items-center justify-center">
            <div>
              test
            </div>
          </card>        
        </div>
      </section>
  );
};

export default Tech;