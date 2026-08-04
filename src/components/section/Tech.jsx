import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { technologies } from "../../constants";
import { styles } from "../../styles";

const Tech = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(
    () => {
      // Guard check ensures titleRef.current is present
      if (!titleRef.current) return;

      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
    { scope: containerRef } 
  );

  return (
    <section 
      ref={containerRef} 
      className={`${styles.section}`}
    >
      <div className="z-10 max-w-7xl mx-auto px-6 flex flex-row items-start gap-5 w-full"> 
        <div>
          {/* Attached ref={titleRef} here */}
          <p 
            ref={titleRef} 
            className="text-neutral-400 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-4 max-w-xl"
          >
            Technologies I Use
          </p>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-wrap gap-4 mt-4"> 
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center justify-center bg-gray-800 rounded-lg p-3 mt-4 mb-2"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;