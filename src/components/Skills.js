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
    <div name="Skills" className="px-0 sm:px-4 sm:p-24 w-full md:h-screen bg-dark  text-cream py-4">

      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col sm:pt-96 justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-accent4">Skills</p>
          <p className="py-4 text-green">These are the technologies I have been learning</p>
        </div>

        <div className="w-full bg-dark grid grid-cols-2 sm:grid-cols-3 gap-4 text-center font-light p-8">
          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2 sm:p-2" src={html} alt="HTML icon" />
            <p className="sm:text-xs">HTML</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2 sm:p-2" src={css3} alt="CSS icon" />
            <p className="sm:text-xs">CSS</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2 sm:p-2" src={javascript} alt="javascript icon" />
            <p className="sm:text-xs">JAVASCRIPT</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2 sm:p-2" src={python} alt="python icon" />
            <p className="sm:text-xs">PYTHON</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2 sm:p-2" src={nodejs} alt="Node.js icon" />
            <p className="sm:text-xs">Node.Js</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2 sm:p-2" src={mongodb} alt="mongodb icon" />
            <p className="sm:text-xs">MongoDB</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2 sm:p-2" src={express} alt="express icon" />
            <p className="sm:text-xs">Express</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2 sm:p-2" src={reactlight} alt="REACT icon" />
            <p className="sm:text-xs">REACT</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2 sm:p-2" src={postgresql} alt="postgresql icon" />
            <p className="sm:text-xs">PostgreSQL</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2 sm:p-2" src={flask2} alt="Flask icon" />
            <p className="sm:text-xs">FLASK</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2 sm:p-2" src={tailwind} alt="Tailwind icon" />
            <p className="sm:text-xs">Tailwind</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2 sm:p-2" src={vscode} alt="vscode icon" />
            <p className="sm:text-xs">VS Code</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2 sm:p-2" src={github} alt="vscode icon" />
            <p className="sm:text-xs">GitHub</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2 sm:p-2" src={jira} alt="jira icon" />
            <p className="sm:text-xs">Jira</p>
          </div>

          <div className="bg-white text-dark shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2 sm:p-2" src={figma} alt="figma icon" />
            <p className="sm:text-xs">Figma</p>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Skills