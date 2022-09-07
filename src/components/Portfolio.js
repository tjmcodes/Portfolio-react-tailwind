import React from 'react';
import UTTlandingpage from '../assets/UTTlandingpage.png';
import cocktailapplandingpage from '../assets/cocktailapplandingpage.png';
import myfoundsoundslandingpage from '../assets/myfoundsoundslandingpage.png';
import venuesartistslandingpage from '../assets/venuesartistslandingpage.png';
import html from '../assets/html.png';
import css3 from '../assets/css3.png';
import javascript from '../assets/javascript.png';
import python from '../assets/python.png';
import nodejs from '../assets/nodejs.png';
import mongodb from '../assets/mongodb.png';
import express from '../assets/express.png';
import reactlight from '../assets/reactlight.png';
import postgresql from '../assets/postgresql.png';
import flask2 from '../assets/flask2.png';
import vscode from '../assets/vscode.png';
import jira from '../assets/jira.png';
import tailwind from '../assets/tailwind.png';
import github from '../assets/github.png';
import figma from '../assets/figma.png';

const Portfolio = () => {
  return (
    <div name='Portfolio' className="px-0 lg:px-12 w-full h-full text-cream bg-dark">
      
      {/* Title */}
      <div className="max-w-[1200px] mx-auto py-24 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-cream border-accent4">Portfolio</p>
          <p className="text-green py-6">Software development projects below</p>
        </div>

        

        {/* GRID CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-24 justify-items-center">
          {/* Project 1 */}
          <div style={{backgroundImage: `url(${UTTlandingpage})`}} className="shadow-lg shadow-black group container rounded-md flex justify-center items-center portfolio-div">          
            {/* HOVER EFFECTS */}
            <div className="text-center rounded-lg px-4 py-3 m-2 opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Ultimate Tic-Tac-Toe Game
              </span>

              <div className="pt-8 text-center">
                <a href="https://tjmcodes.github.io/Ultimate-Tic-Tac-Toe/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-accent4 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/tjmcodes/Ultimate-Tic-Tac-Toe">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-accent4 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <span className="text-lg font-light flex items-start py-4">🕹 First solo student project at GA. Grid based turn-play game developed using HTML, CSS and JavaScript.</span>
              <div className="flex flex-row space-x-16 bg-white">
                <div className="p-2 mx-4 px-3 flex flex-col items-center text-dark hover:scale-110 duration-500">
                  <img className="w-12 py-2" src={javascript} alt="HTML icon" />
                  <p className="text-base lg:text-lg font-light">JavaScript</p>
                </div>
                
                <div className="p-2 mx-4 px-3 flex flex-col items-center text-dark hover:scale-110 duration-500">
                  <img className="w-12 py-2" src={reactlight} alt="HTML icon" />
                  <p className="text-base lg:text-lg font-light">React</p>
                </div>
                
                <div className="p-2 mx-4 px-3 flex flex-col items-center text-dark hover:scale-110 duration-500">
                  <img className="w-12 py-2" src={express} alt="HTML icon" />
                  <p className="text-base lg:text-lg font-light">Express</p>
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
                <a href="https://github.com/tjmcodes/Project-2">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-accent4 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between"> 
            <span className="text-lg font-light flex items-start py-4">🍸 Cocktail party app. Choose a cocktail that you would like to make, follow the instructions and listen to music to enjoy your prepared cocktail.</span>
              <div className="flex flex-row space-x-16 bg-white">
                <div className="p-2 mx-4 px-3 flex flex-col items-center text-dark hover:scale-110 duration-500">
                  <img className="w-12 py-2" src={javascript} alt="HTML icon" />
                  <p className="text-base lg:text-lg font-light">JavaScript</p>
                </div>
                
                <div className="p-2 mx-4 px-3 flex flex-col items-center text-dark hover:scale-110 duration-500">
                  <img className="w-12 py-2" src={reactlight} alt="HTML icon" />
                  <p className="text-base lg:text-lg font-light">React</p>
                </div>
                
                <div className="p-2 mx-4 px-3 flex flex-col items-center text-dark hover:scale-110 duration-500">
                  <img className="w-12 py-2" src={express} alt="HTML icon" />
                  <p className="text-base lg:text-lg font-light">Express</p>
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
                <a href="https://github.com/tjmcodes/Project-3-MERN-Frontend">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-accent4 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <span className="text-lg font-light flex items-start">🎧 My Found Sounds is an application that allows registered users to upload and download sounds posted by other users. It utilises the MERN stack (MongoDB, Express, React, Node.js).</span>
              <div className="flex flex-row space-x-16 bg-white">
                <div className="p-2 mx-4 px-3 flex flex-col items-center text-dark hover:scale-110 duration-500">
                  <img className="w-12 py-2" src={javascript} alt="HTML icon" />
                  <p className="text-base lg:text-lg font-light">JavaScript</p>
                </div>
                
                <div className="p-2 mx-4 px-3 flex flex-col items-center text-dark hover:scale-110 duration-500">
                  <img className="w-12 py-2" src={reactlight} alt="HTML icon" />
                  <p className="text-base lg:text-lg font-light">React</p>
                </div>
                
                <div className="p-2 mx-4 px-3 flex flex-col items-center text-dark hover:scale-110 duration-500">
                  <img className="w-12 py-2" src={express} alt="HTML icon" />
                  <p className="text-base lg:text-lg font-light">Express</p>
                </div>
              </div>
          </div>
          {/* Project 4 */}
          <div style={{backgroundImage: `url(${venuesartistslandingpage})`}} className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto portfolio-div">
            
            {/* HOVER EFFECTS */}
            <div className="text-center rounded-lg px-4 py-3 m-2 opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Venues and Artists
              </span>

              <div className="pt-8 text-center">
                <a href="https://venuesandartists.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-accent4 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/tjmcodes/Project-4-Frontend">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-accent4 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <span className="text-lg font-light flex items-start ">🎭 This fourth and last project at GA involved building a full-stack web application in just over two weeks (pair programming, part-time schedule). It utilises python and flask as a backend and JavaScript, React and TailwindCSS on the frontend.</span>
              <div className="flex flex-row space-x-16 bg-white">
                <div className="p-2 mx-4 px-3 flex flex-col items-center text-dark hover:scale-110 duration-500">
                  <img className="w-12 py-2" src={javascript} alt="HTML icon" />
                  <p className="text-base lg:text-lg font-light">JavaScript</p>
                </div>
                
                <div className="p-2 mx-4 px-3 flex flex-col items-center text-dark hover:scale-110 duration-500">
                  <img className="w-12 py-2" src={reactlight} alt="HTML icon" />
                  <p className="text-base lg:text-lg font-light">React</p>
                </div>
                
                <div className="p-2 mx-4 px-3 flex flex-col items-center text-dark hover:scale-110 duration-500">
                  <img className="w-12 py-2" src={express} alt="HTML icon" />
                  <p className="text-base lg:text-lg font-light">Express</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio