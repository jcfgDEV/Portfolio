import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
      <>
        <div className="absolute m-24">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white">Hi ,</h1>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white">I'm Juan </h1>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white">Web Developer</h1>
          <p className="text-2xl m-2 text-gray-600">Front End Developer</p>
          <Link to='/Contact'>
            <button className="bg-green-500 text-white text-3xl font-extrabold w-56 p-4 m-2 rounded-sm border-none outline-none  CustomBtn">Contact</button>
          </Link>
        </div>

      </>
  )
}

export default Home