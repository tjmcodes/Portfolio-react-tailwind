import React from 'react'


const Hero = () => {
  return (
    <div name="Hero" className="px-4 sm:px-12 w-full md:h-screen bg-dark text-cream py-24">
      {/* Title */}
      <div className="items-center text-center flex flex-col justify-center ">
        <div className="md:p-60 h-screen flex flex-col justify-center items-center">
          <p className="text-4xl md:text-8xl font-bold inline border-b-4 text-cream border-accent4">TERESA MORINI</p>
          <p className="text-green py-6">Software Development Portfolio</p>
        </div>
      </div>
    </div>
  )
}
  

export default Hero