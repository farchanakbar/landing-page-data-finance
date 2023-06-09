import React from 'react'

import laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto' src={laptop} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia et sequi assumenda voluptates aliquam harum labore blanditiis ipsum animi? Maiores odio enim perferendis nesciunt animi, explicabo sapiente fuga quibusdam officia.</p>
        <button className='bg-black w-52 rounded-md font-medium my-6 mx-auto py-3 text-white md:mx-0'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics