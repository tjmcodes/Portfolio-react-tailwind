import React from 'react';
import html from '../assets/html.png';
import css3 from '../assets/css3.png';
import javascript from '../assets/javascript.png';
import python from '../assets/python.png';
import nodejs from '../assets/nodejs.png';
import mongodb from '../assets/mongodb.png';
import expresslight from '../assets/expresslight.png';
import reactlight from '../assets/reactlight.png';
import postgresql from '../assets/postgresql.png';
import flasklight from '../assets/flasklight.png';
import vscode from '../assets/vscode.png';
import jira from '../assets/jira.png';
import tailwindlight from '../assets/tailwindlight.png';
import githublight from '../assets/githublight.png';
import figma from '../assets/figma.png';

const Skills = () => {
  return (
    <div name="Skills" className="px-4 sm:px-12  w-full md:h-screen bg-dark  text-cream py-4">
      
      {/* Container */}
      <div className="max-w-[1000px] mx-auto pt-24 pb-24 flex flex-col justify-center h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-accent4">Skills</p>
          <p className="py-4 text-green">These are the technologies I have been learning</p>
        </div>

        <div className="w-full bg-dark grid grid-cols-2 md:grid-cols-5 gap-4 text-center font-light p-8">
          <div className=" text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={html} alt="HTML icon" />
            <p className="text-lg lg:text-xl text-cream">HTML</p>
          </div>
          
          <div className=" text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={css3} alt="CSS icon" />
            <p className="text-lg lg:text-xl text-cream">CSS</p>
          </div>
          
          <div className=" text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={javascript} alt="javascript icon" />
            <p className="text-lg lg:text-xl text-cream">JAVASCRIPT</p>
          </div>
          
          <div className=" text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={python} alt="python icon" />
            <p className="text-lg lg:text-xl text-cream">PYTHON</p>
          </div>
          
          <div className=" text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={nodejs} alt="Node.js icon" />
            <p className="text-lg lg:text-xl text-cream">Node.Js</p>
          </div>
          
          <div className=" text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={mongodb} alt="mongodb icon" />
            <p className="text-lg lg:text-xl text-cream">MongoDB</p>
          </div>
          
          <div className=" text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={expresslight} alt="express icon" />
            <p className="text-lg lg:text-xl text-cream">Express</p>
          </div>
          
          <div className=" text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={reactlight} alt="REACT icon" />
            <p className="text-lg lg:text-xl text-cream">REACT</p>
          </div>
          
          <div className=" text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={postgresql} alt="postgresql icon" />
            <p className="text-lg lg:text-xl text-cream">PostgreSQL</p>
          </div>
          
          <div className=" text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={flasklight} alt="Flask icon" />
            <p className="text-lg lg:text-xl text-cream">FLASK</p>
          </div>
          
          <div className=" text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={tailwindlight} alt="Tailwind icon" />
            <p className="text-lg lg:text-xl text-cream">Tailwind</p>
          </div>
          
          <div className=" text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={vscode} alt="vscode icon" />
            <p className="text-lg lg:text-xl text-cream">VS Code</p>
          </div>
          
          <div className=" text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={githublight} alt="vscode icon" />
            <p className="text-lg lg:text-xl text-cream">GitHub</p>
          </div>

          <div className=" text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={jira} alt="jira icon" />
            <p className="text-lg lg:text-xl text-cream">Jira</p>
          </div>
          
          <div className=" text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={figma} alt="figma icon" />
            <p className="text-lg lg:text-xl text-cream">Figma</p>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Skills