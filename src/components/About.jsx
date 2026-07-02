import React from 'react'

const About = () => {
  return (
      <section className="relative w-full h-96 items-center justify-center bg-black overflow-hidden">

      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        {/* <ComputersCanvas /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-row items-start gap-5 w-full"> 
        <div>
          <p className="text-neutral-400 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-4 max-w-xl">
            I'm a web developer who enjoys transforming ideas into thoughtful digital experiences. I focus on building responsive, intuitive, and visually balanced websites.
          </p>
        </div>
        <div className="mt-4">
            <p>Discover my journey (LinkedIn)</p>
            <p>Discover my journey (Git)</p>
            <p>Discover my journey (Other)</p>
        </div>
      </div>
    </section>
  )
}

export default About