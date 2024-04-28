import React from 'react'

const Button = ({name, clearFields}) => {
  return (
    <button onClick={() => {clearFields()}} className="mt-5 py-2 px-4 border border-white bg-transparent text-white text-xs font-semibold hover:bg-indigo-200  hover:scale-110 hover:border-transparent rounded transition-all duration-300 ease-in-out">
        {name}
    </button>
  )
}

export default Button