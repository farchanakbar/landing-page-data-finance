import React, { useState } from 'react'

import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

function Navbar() {
  const [menu, setMenu] = useState(false)

  const menuHandler = () => {
    setMenu(!menu);
  }

  return <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
    <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
    <ul className='hidden md:flex'>
      <li className='p-4'>Home</li>
      <li className='p-4'>Company</li>
      <li className='p-4'>Resources</li>
      <li className='p-4'>About</li>
      <li className='p-4'>Contact</li>
    </ul>
    <div onClick={menuHandler} className='block md:hidden'>
      {!menu ? <AiOutlineClose size={23} /> : <AiOutlineMenu size={23} onClick={menuHandler} />}
    </div>
    <div className={!menu ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-[#1a1d1a] ease-in-out duration-500" : "fixed left-[-100%]"}>
    <h1 className='w-full text-3xl font-bold m-4 text-[#00df9a]'>React.</h1>
      <ul className='uppercase p-4'>
      <li className='p-4 border-b border-gray-600'>Home</li>
      <li className='p-4 border-b border-gray-600'>Company</li>
      <li className='p-4 border-b border-gray-600'>Resources</li>
      <li className='p-4 border-b border-gray-600'>About</li>
      <li className='p-4'>Contact</li>
      </ul>
    </div>
  </div>
}

export default Navbar