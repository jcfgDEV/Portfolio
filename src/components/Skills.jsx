import React from 'react'


function Skills() {
  return (
    <div className="w-full lg:flex">
      <div className="flex justify-center">
        <div>
          <h1 className="text-5xl text-white m-6 font-extrabold">Skills &</h1>
          <h1 className="text-5xl text-white m-6 font-extrabold">Experience</h1>
          <p className="text-2xl text-gray-400  text-justify p-5">
          I will be glad to show you my skills.
          The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features and coding interactive layouts.
          </p>
        </div>
        
      </div>
      
      <div className='w-full p-5'>
        <li>
          <h1>Front End</h1>
          <span className='bar bars1'></span>
        </li>
        <li>
          <h1>Back End</h1>
          <span className='bar bars2'></span>
        </li>
        <li>
          <h1>React</h1>
          <span className='bar bars3'></span>
        </li>
        <li>
          <h1>JavaScript</h1>
          <span className='bar bars4'></span>
        </li>
      </div>
    </div>
  )
}

export default Skills