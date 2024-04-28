import React from 'react'
import CVForm from './CVForm.jsx'
import CVDoc from './CVDoc.jsx'


const Grid = ({formData, setFormData}) => {

  return (
    <div 
    className='h-full flex-1
    flex flex-row flex-wrap gap-12 my-12 mx-12
    [&>*]:rounded-lg [&>*]:text-white [&>*]:cursor-pointer'>
        <div className='h-full text-center align-middle md:row-span-3 bg-gradient-to-r from-purple-500 to-pink-500 overflow-scroll'>
            <CVForm formData={formData} setFormData={setFormData}/>
        </div>
        <div className='h-full flex-1 flex justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-center align-middle sm:col-span-2 min-w-72 p-10'>
            <CVDoc formData={formData}/>
        </div>
    </div>
  )
}

export default Grid