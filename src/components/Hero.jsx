import React from 'react'
import heroImage from "../img/10.webp"
function Hero() {
  return (
    <div className='w-full h-130 flex items-center gap-50 bg-gray-900'>
        <div className="left w-200 h-120 m-5 mt-10">
            <p className='text-blue-400 text-[48px] font-bold mt-10'>Learn React + Tailwind <br /> from Zero to Hero</p>
            <p className='text-gray-400 w-120 mt-5'>
                Master modern front-end development by building real projects with React, TailwindCSS, and Flowbite UI patterns.
            </p>
            <div className="btns w-150 flex items-center gap-15 mt-5">
                <button className='w-30 h-12 text-white bg-blue-600 rounded-full hover:cursor-pointer hover:bg-blue-700'>Join Now</button>
                <button className='w-30 h-12 border border-gray-700 text-gray-300 rounded-full hover:bg-gray-800 hover:cursor-pointer'>Learn More</button>
            </div>
        </div>  
        <div className="right w-100 h-100 hover:scale-101 transition ml-15">
            <img src={heroImage} alt="404-img" className='rounded-xl'/>
        </div>
    </div>
  )
}

export default Hero