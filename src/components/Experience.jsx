import React from 'react'

const Experience = () => {
  return (
    <section className="relative w-full h-screen items-center justify-center bg-black overflow-hidden">

      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        {/* <ComputersCanvas /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-row items-start gap-5 w-full"> 
        <div>
          <p className="text-neutral-400 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-4 max-w-xl">
            Experience
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti expedita necessitatibus voluptas nulla placeat illum adipisci libero, voluptatum numquam voluptatibus?
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience