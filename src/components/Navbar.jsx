import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex mb-20 py-6 justify-between items-center '>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-10' src={logo} alt="..." />
      </div>
      <div className='flex gap-4 justify- items-center text-2xl'>
      <FaLinkedin />
      <FaGithub />
      <FaTwitterSquare />
      <FaInstagram />
      </div>
    </div>
  )
}

export default Navbar
