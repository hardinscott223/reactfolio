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
    <div ref={titleRef}>
      Tech
    </div>
  );
};

export default Tech;