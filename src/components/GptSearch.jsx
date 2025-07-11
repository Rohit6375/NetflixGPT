import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
     <div className="fixed -z-10 opacity-90">
        <img  className='h-screen object-cover md:w-screen '
        src={BG_URL}
          alt="bg-img"
        />
      </div>
      <div >
      
    <GptSearchBar/>
    <GptMovieSuggestions/>
    </div>
    </>
    
  )
}

export default GptSearch