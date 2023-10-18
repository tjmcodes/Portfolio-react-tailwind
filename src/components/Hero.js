import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll';


const Hero = () => {
  return (
    <div name="Hero" className="px-0 sm:px-4 sm:pt-96 sm:text-sm sm:pb-72 w-full h-screen  bg-dark">

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-5 flex flex-col justify-center items-center h-full">
      <div className="flex">

      <h3 className="text-accent4 text-2xl flex ">Hi! &nbsp; <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" alt="wave" width="30"></img> &nbsp; <p className="text-accent4 text-2xl flex items-center">My name is</p> </h3></div>


        <h1 className="text-4xl md:text-6xl font-bold text-white">Teresa Morini</h1>
        <img src="https://readme-typing-svg.herokuapp.com?color=6341F7&lines=I+am+a+Junior+Software+Developer+;Based+in+the+UK+%F0%9F%87%AC%F0%9F%87%A7&center=true&width=440&height=45&color=f75c7e&vCenter=true&size=12" alt="scrolling-text"></img>


        <p className="text-cream py-4 sm:py-8 max-w-[700px] text-sm sm:text-sm">I graduated with a Master's in Electronic Music Composition from the University of West London. Following my studies, I delved into analyzing brain activity while listening to my own sound design pieces and compositions created in my home studio. <br /><br />
        Recognizing the growing importance of software development, I decided to learn the ropes. I enrolled part-time in General Assembly's remote software engineering course, learning the fundamentals of programming, and applying my knowledge to complete four projects.<br /><br />
        I'm committed to ongoing learning and improvement, updating my skills and knowledge. I achieve this by conducting research, creating new web applications, and refining my workflow for optimal efficiency.  I enjoy working and collaborating with others.</p>

        <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-accent4 hover:border-accent4">
          <Link to="Portfolio" smooth={true} duration={500}>
            View Projects
          </Link>
          <span className="animate-bounce">
            <HiArrowNarrowRight className="rotate-90" />
          </span>
          </button>
        </div>


      </div>

    </div>
  )
}

export default Hero