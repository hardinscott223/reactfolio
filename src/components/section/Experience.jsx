import React from 'react'

const Experience = () => {
  return (
    <section className="relative w-full h-screen items-center justify-center bg-black overflow-hidden h-[100dvh] pt-80">

      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        {/* <ComputersCanvas /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-row items-start gap-5 w-full"> 
        <div>
          <p className="text-neutral-400 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-4 max-w-xl">
            Experience
          </p>
          <p className="text-neutral-400 font-medium lg:text-[20px] sm:text-[16px] xs:text-[10px] text-[16px] lg:leading-[30px] mt-4 max-w-30">
            For the past two years, I've worked as a Web Developer at SoftGuide Software House, a Japanese-based software company. My work focuses on developing responsive web applications, writing clean and maintainable code, and creating user-friendly interfaces that deliver a smooth experience.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience