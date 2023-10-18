import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';

const NavBar = () => {

  const [menu, setMenu] = useState(false);

  function handleClick() {
    setMenu(!menu)
  }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items0center px-4 bg-dark text-cream">

      {/* Logo */}
      <div className="py-6">
        Teresa.Morini
      </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-2 items-center">
        <li className="hover:underline hover:decoration-red hover:text-red">
          <Link to="Hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="hover:underline hover:decoration-red hover:text-red">
          <Link to="Portfolio" smooth={true} duration={500} >
            Portfolio
          </Link>
        </li>

        <li className="hover:underline hover:decoration-red hover:text-red">
          <Link to="Skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <li className="hover:underline hover:decoration-red hover:text-red">
          <Link to="Contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>

      </ul>


      {/* Mobile Bars */}
      <div onClick={handleClick} className=" md:hidden z-10 py-6">
        {!menu ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!menu ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-dark flex flex-col justify-center items-center"}>

        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="Hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="Portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>

        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="Skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="Contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Socials */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#161C22]">
            <a className="text-lg flex justify-between items-center w-full text-cream"
            href="https://github.com/tjmcodes/tjmcodes">Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0B66C2]">
            <a className="text-lg flex justify-between items-center w-full text-cream"
            href="https://www.linkedin.com/in/teresamorini">LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FF0100]">
            <a className="text-lg flex justify-between items-center w-full text-cream"
            href="https://www.youtube.com/user/teresamorini">Youtube <FaYoutube size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-400">
            <a className="text-lg flex justify-between items-center w-full text-cream"
            href="/">Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green">
            <a className="text-lg flex justify-between items-center w-full text-cream"
            href="/">CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>

        </ul>

      </div>

    </div>
  )
}

export default NavBar