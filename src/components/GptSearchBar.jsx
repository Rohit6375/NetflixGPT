import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey=useSelector(store=>store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className=' w-1/2  bg-black/80 grid grid-cols-12 rounded-xl '>
            <input type="text" className='p-4 m-4 bg-white col-span-9' placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className='py-2 px-4 bg-red-600/80 font-bold hover:bg-red-600/50 hover:cursor-pointer text-white rounded-lg col-span-3 m-4'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar