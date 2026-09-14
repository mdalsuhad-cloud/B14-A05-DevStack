import React from 'react'
import heroImg from '../assets/Banner-stack.png'
const Banner: React.FC = () => {
    
  return (
     <section className="overflow-hidden bg-[#f7f7f7] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        
        {/* Hero Content */}
        <div className="text-center lg:text-left">
          

          {/* Heading */}
          <h1 className="text-[42px] font-bold leading-[0.98] mt-2 tracking-[-2.5px] text-[#10182b] sm:text-[52px] lg:text-[68px]">
            Build Your Ideal
            <span className="block bg-gradient-to-r from-[#ff4f28] via-[#e72a68] to-[#ad28bf] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-[590px] text-[14px] leading-7 text-[#69758a] sm:text-[18px] lg:mx-0 lg:text-[20px]">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            
            <a
              href="#technologies"
              className="inline-flex min-h-[43px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#ff6a25] to-[#e7287d] px-[18px] text-xl font-semibold text-white shadow-[0_8px_18px_rgba(226,42,91,0.15)] transition hover:opacity-90"
            >
              Explore Technologies
              
            </a>

            <a
              href="#about"
              className="inline-flex min-h-[43px] min-w-[128px] items-center justify-center rounded-lg border border-[#e1e6ee] px-[18px] text-xl font-bold text-[#5f6b80] transition hover:border-[#d81b7d] hover:text-[#d81b7d]"
            >
              Learn More
            </a>

          </div>
        </div>
        <div className="relative">
          <img
            src={heroImg}
            alt="Hero Image"
            className="mx-auto h-auto w-full max-w-[600px]"
          />
        </div>  
      </div>
    </section>
  )
}

export default Banner