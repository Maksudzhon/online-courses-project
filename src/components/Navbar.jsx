import React from 'react'

function Navbar() {
  return (
    <div className='h-15 bg-gray-800'>
        <div className="con w-full h-auto flex items-center">
            <div className="logo">
            <p className='text-blue-400 text-[24px] font-semibold p-2 hover:cursor-pointer'>CodeMaster</p>
        </div>
        <div className="links w-30 h-auto flex items-center gap-10 mt-2 ml-250">
            <p className='text-white text-[14px] hover:text-blue-400 hover:border-b solid 1px blue-400 hover:cursor-pointer'>Courses</p>
            <p className='text-white text-[14px] hover:text-blue-400 hover:border-b solid 1px blue-400 hover:cursor-pointer'>About</p>
            <p className='text-white text-[14px] hover:text-blue-400 hover:border-b solid 1px blue-400 hover:cursor-pointer'>Contact</p>
        </div>
        <div className="btn ml-40 mt-2">
            <button className='w-20 h-10 text-white bg-blue-600 rounded-xl hover:cursor-pointer hover:bg-blue-700'>Sign In</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar