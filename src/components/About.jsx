import React from 'react';
import {Link} from 'react-router-dom';
import Lista from '../components/Lista.jsx';
import {GiFallingStar} from 'react-icons/gi';

function About(persona) {
  return (
    <>
      <div className="transform translate-y-12">
       <div className="flex justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-8xl mb-1 shadow">About Myself</h1>
       </div>
        <p className="text-lg md:text-3xl lg:text-2xl text-white m-5 leading-loose">I'm a Front End Developer located in Portugal.
          Well-organised person, with hight attetion to detail.
          Interested in the entire frontend spectrum and working on ambitious projects with positive people.
        </p>
       <Link to='/Contact'>
        <span className="text-green-400 text-2xl m-5 cursor-pointer hover:line-through">Let's make something special</span>
       </Link>
        <div className="flex justify-center transform translate-y-10">
          <div>
            <h1 className="flex items-center mb-3"><GiFallingStar className="text-3xl mr-2" color='yellow'/> Personal Interest</h1>
              <Lista text="In my free time, in addition to training I also like to learn by creating new projects" />
              <Lista text="I like to play video games with my friends. also enjoy hiking" />
          </div>
        </div>
      </div>
      
     
    </>
  )
}

export default About