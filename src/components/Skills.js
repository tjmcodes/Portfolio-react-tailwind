import React from 'react';
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

const Skills = () => {
  return (
    <div name="Skills" className="px-0 sm:px-12 w-full md:h-screen bg-dark  text-cream py-4">

      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-accent4">Skills</p>
          <p className="py-4 text-green">These are the technologies I have been learning</p>
        </div>

        <div className="w-full bg-dark grid grid-cols-2 sm:grid-cols-5 gap-4 text-center font-light p-8">
          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={html} alt="HTML icon" />
            <p>HTML</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={css3} alt="CSS icon" />
            <p>CSS</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={javascript} alt="javascript icon" />
            <p>JAVASCRIPT</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={python} alt="python icon" />
            <p>PYTHON</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={nodejs} alt="Node.js icon" />
            <p>Node.Js</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={mongodb} alt="mongodb icon" />
            <p>MongoDB</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={express} alt="express icon" />
            <p>Express</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={reactlight} alt="REACT icon" />
            <p>REACT</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={postgresql} alt="postgresql icon" />
            <p>PostgreSQL</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={flask2} alt="Flask icon" />
            <p>FLASK</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={tailwind} alt="Tailwind icon" />
            <p>Tailwind</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={vscode} alt="vscode icon" />
            <p>VS Code</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={github} alt="vscode icon" />
            <p>GitHub</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={jira} alt="jira icon" />
            <p>Jira</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={figma} alt="figma icon" />
            <p>Figma</p>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Skills