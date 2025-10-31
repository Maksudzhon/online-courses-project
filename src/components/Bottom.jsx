import React from 'react'
import heroImage from "../img/10.webp"

function Bottom() {
    return (
            <div className="pt-10 pb-10 bg-gray-800 text-center">
            <h2 className="text-2xl font-bold text-blue-400 mb-8">Popular Courses</h2>

            <div className="flex items-center justify-around">

                <div className="w-100 bg-gray-900 rounded-xl p-5">
                    <img src={heroImage} alt="Course 1" className="rounded-lg w-full h-32 mb-4 hover:scale-101 transition"/>
                        <p className="text-white font-bold mb-2">React Advanced Course 1</p>
                        <p className="text-gray-400 mb-4">Learn React Hooks and Context API.</p>
                        <button className="w-30 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:cursor-pointer">Enroll Now</button>
                </div>

                <div className="w-100 bg-gray-900 rounded-xl p-5">
                    <img src={heroImage} alt="Course 2" className="rounded-lg w-full h-32 mb-4 hover:scale-101 transition"/>
                        <p className="text-white font-bold mb-2">React Advanced Course 2</p>
                        <p className="text-gray-400 mb-4">Build reusable UI components.</p>
                        <button className="w-30 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:cursor-pointer">Enroll Now</button>
                </div>

                <div className="w-100 bg-gray-900 rounded-xl p-5">
                    <img src={heroImage} alt="Course 3" className="rounded-lg w-full h-32 mb-4 hover:scale-101 transition"/>
                        <p className="text-white font-bold mb-2">React Advanced Course 3</p>
                        <p className="text-gray-400 mb-4">State management with Redux.</p>
                        <button className="w-30 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:cursor-pointer">Enroll Now</button>
                </div>

            </div>
        </div>
)
}
export default Bottom