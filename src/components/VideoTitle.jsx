import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
const VideoTitle = ({title,overview}) => {
    
  return (
    
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black '>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/3'>{overview}</p>
        <div className='flex'>
            <button className='bg-white/95 text-black py-1 gap-2 px-3 my-2 md:px-8 md:py-4 text-xl hover:cursor-pointer  hover:bg-white/80  font-bold rounded-lg flex items-center '><FaPlay />Play</button>
            <button className="hidden bg-gray-500/70 hover:bg-gray-500/30 text-white hover:cursor-pointer font-bold gap-2 p-3 px-10 text-xl rounded-lg my-2 md:px-8 mx-3 md:flex items-center">
  <IoIosInformationCircleOutline />
  More Info
</button>

        </div>
    </div>
  )
}

export default VideoTitle;