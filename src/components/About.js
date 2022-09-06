import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Portfolio from './Portfolio.js';

const About = () => {
  return (
    <div name="About" className="px-0 sm:px-12 w-full h-screen bg-dark">

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-5 flex flex-col justify-center h-full">
        <p className="text-accent4">Hi, my name is</p>
        <h1 className="text-4xl md:text-4xl font-bold text-white">Teresa</h1>
        <p className="text-cream py-4 max-w-[700px] text-base sm:text-lg">After recently graduating from University of West London with a Masters in Electronic Music Composition where I dedicated my practice to analysing brain activity whilst listening to sound design pieces and compositions I had created from my home studio, the natural step was to learn software development. I enrolled onto General Assembly’s remote software engineering course part-time to learn the fundamentals in programming and applied the learning by creating four projects. I am excited to be looking for my first role in the industry as a Junior Software Developer where I can leverage the skills and experience gained so far with my passion for developing software.</p>

        <div>
          <button onClick={<Portfolio />} className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-red hover:border-red"> 
          View Recent Projects
          <span className="animate-bounce">
            <HiArrowNarrowRight className="rotate-90" />
          </span>

          </button>
        </div>


      </div>

    </div>
  )
}

export default About