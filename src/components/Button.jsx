import React from 'react'

const Button = ({name}) => {
  return (
    <button className="py-2 px-4 border border-white bg-transparent text-white font-semibold hover:bg-indigo-200  hover:scale-110 hover:border-transparent rounded transition-all duration-300 ease-in-out">
        {name}
    </button>
  )
}

export default Button