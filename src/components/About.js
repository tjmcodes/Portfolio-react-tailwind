import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import photo from '../assets/photo.jpg';


const About = () => {
  
  return (
    <div name="About" className="px-4 sm:px-12 w-full h-full bg-dark pt-24 pb-24">

      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col items-center justify-center">
        <div className="sm:items-left">
          <img src="https://readme-typing-svg.herokuapp.com?color=6341F7&lines=Junior+Software  +Developer+;Based+in+the+UK+%F0%9F%87%AC%F0%9F%87%A7&left=true&width=440&height=45&color=f75c7e&vCenter=true&size=22" alt="ticker" />

          <p className="text-accent4 pb-2 flex flex-row">Hi, my name is</p>

          <h1 className="text-4xl md:text-4xl font-bold text-white animate-none sm:animate-pulse">Teresa </h1>  

          <p className="text-cream py-4 max-w-[700px] font-light text-sm text-center sm:text-left sm:text-lg">
          <img className="sm:float-right sm:w-60 " src={photo} alt="Teresa"/>
          After recently graduating from University of West London with a Masters in Electronic Music Composition where I dedicated my practice to analysing brain activity whilst listening to sound design pieces and compositions I had created from my home studio, the natural step  was to learn software development. </p>

          <p className="text-cream py-4 max-w-[700px] font-light text-sm text-center sm:text-left sm:text-lg">I enrolled onto General Assembly’s remote software engineering course part-time to learn the fundamentals in programming and applied the learning by creating four projects. I am  excited to be looking for my first role in the industry as a Junior Software Developer   where I can leverage the skills and experience gained so far with my passion for developing software.</p>
          <p className="text-cream py-4 max-w-[700px] font-light text-sm text-center sm:text-left sm:text-lg">Soft skills: Communication, Teamwork, Problem-solving, Emotional Intelligence, Adaptability </p> 
        
        </div>

      <div>

      <Link to="Portfolio" smooth={true} duration={500} >
        <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-red hover:border-red"> 
          View Recent Projects
          <span className="animate-none sm:animate-bounce">
            <HiArrowNarrowRight className="rotate-90" />
          </span>
        </button>
      </Link>
      </div>


      </div>

    </div>
  )
}

export default About