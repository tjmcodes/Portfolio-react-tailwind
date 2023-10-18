import React from 'react'
import UTTlandingpage from '../assets/UTTlandingpage.png'
import cocktailapplandingpage from '../assets/cocktailapplandingpage.png'
import myfoundsoundslandingpage from '../assets/myfoundsoundslandingpage.png'
import venuesartistslandingpage from '../assets/venuesartistslandingpage.png'

const Portfolio = () => {
  return (
    <div name='Portfolio' className="px-0 sm:pt-64 sm:px-2 w-full h-screen text-cream bg-dark">

      {/* Title */}
      <div className="max-w-[1000px] mx-auto p-4 pt-48 sm:pt-72 flex flex-col justify-center h-screen">
        <div className="pb-8 sm:pb-2">
          <p className="text-4xl font-bold inline border-b-4 text-cream border-accent4">Portfolio</p>
          <p className="text-green py-6">Check out my recent projects below</p>
        </div>



        {/* GRID CONTAINER */}
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:pb-48">
          {/* Project 1 */}
          <div style={{backgroundImage: `url(${UTTlandingpage})`}} className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto portfolio-div sm:mx-auto ">
            {/* HOVER EFFECTS */}
            <div className="text-center rounded-lg px-4 py-3 m-2 opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Ultimate Tic-Tac-Toe Game
              </span>

              <div className="pt-8 text-center">
                <a href="https://tjmcodes.github.io/Ultimate-Tic-Tac-Toe/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-accent4 font-bold text-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-accent4 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>




          {/* Project 2 */}
          <div style={{backgroundImage: `url(${cocktailapplandingpage})`}} className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto portfolio-div">

            {/* HOVER EFFECTS */}
            <div className="text-center rounded-lg px-4 py-3 m-2 opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Cocktail Party App (React)
              </span>

              <div className="pt-8 text-center">
                <a href="https://main--ephemeral-salmiakki-7db874.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-accent4 font-bold text-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-accent4 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>


          {/* Project 3 */}
          <div style={{backgroundImage: `url(${myfoundsoundslandingpage})`}} className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto portfolio-div">

            {/* HOVER EFFECTS */}
            <div className="text-center rounded-lg px-4 py-3 m-2 opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Sound Design Social App
              </span>

              <div className="pt-8 text-center">
                <a href="https://myfoundsounds-v2.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-accent4 font-bold text-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-accent4 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div style={{ backgroundImage: `url(${venuesartistslandingpage})`}} className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto portfolio-div ">

            {/* HOVER EFFECTS */}
            <div className="text-center rounded-lg px-4 py-3 m-2 opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Venues and Artists
              </span>

              <div className="pt-8 text-center">
                <a href="https://venuesandartists.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-accent4 font-bold text-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-accent4 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>

        </div>



      </div>
    </div>
  )
}

export default Portfolio