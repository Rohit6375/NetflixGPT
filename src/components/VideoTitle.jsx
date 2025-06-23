import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
const VideoTitle = ({title,overview}) => {
    
  return (
    
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black '>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
        <div className='flex'>
            <button className='bg-white/95 text-black p-3 gap-2 px-10 text-xl hover:cursor-pointer  hover:bg-white/80  font-bold rounded-lg flex items-center '><FaPlay />Play</button>
            <button className="bg-gray-500/70 hover:bg-gray-500/30 text-white hover:cursor-pointer font-bold gap-2 p-3 px-10 text-xl rounded-lg mx-3 flex items-center">
  <IoIosInformationCircleOutline />
  More Info
</button>

        </div>
    </div>
  )
}

export default VideoTitle