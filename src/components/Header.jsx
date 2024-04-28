import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <header className='h-24 w-full bg-gradient-to-r from-sky-500 to-pink-500 border-1 border-gray-300 shadow-sm flex flex-row items-center justify-between'>
        <div className='text-2xl ml-5 px-5 py-2 font-bold text-white border-2 border-white rounded-md m-5'>CV Builder</div>
        <nav className='hidden sm:flex sm:flex-row mr-5 gap-5'>
        </nav>
    </header>
  )
}

export default Header