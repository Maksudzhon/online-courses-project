import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="pt-5 flex">
        <div className="description ml-5">
            <p className="text-white font-bold">CodeMaster</p>
            <p className="text-gray-400 text-gray-500">Learn modern frontend development</p>
        </div>
        <div className="links ml-250 ">
        <div className="flex gap-10">
          <div>
            <p className="text-white font-bold mb-2">Product</p>
            <p className="text-gray-400 hover:text-gray-600 hover:cursor-pointer">Courses</p>
            <p className="text-gray-400 hover:text-gray-600 hover:cursor-pointer">Pricing</p>
            <p className="text-gray-400 hover:text-gray-600 hover:cursor-pointer">Docs</p>
          </div>
          <div>
            <p className="text-white font-bold mb-2">Company</p>
            <p className="text-gray-400 hover:text-gray-600 hover:cursor-pointer">Privacy Policy</p>
            <p className="text-gray-400 hover:text-gray-600 hover:cursor-pointer">About</p>
            <p className="text-gray-400 hover:text-gray-600 hover:cursor-pointer">Contact</p>
          </div>
        </div>
        </div>
      </div>
      <div className="mt-5 border-t border-gray-800 text-center text-gray-500">
        <p className='pt-5 pb-5'>© 2025 CodeMaster. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer