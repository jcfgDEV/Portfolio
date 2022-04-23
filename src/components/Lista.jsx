import React from 'react'
import {BsStars} from 'react-icons/bs';


function Lista(props) {
  return (
      <>
        <div className="bg-gray-200 p-3 w-72 md:w-96 lg:w-2/3 rounded-sm mb-3 flex">
           <div className="justify-center">
                <div className="">
                        <p className="text-justify text-lg flex"> <div><BsStars className="text-3xl mr-2 text-yellow-400" /></div>{props.text}</p>
                </div>
           </div>
        </div>
      </>
  )
}

export default Lista;