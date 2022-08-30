import React from 'react'

function Contact() {
  return (
    <div className="bg-[url('./contact.png')] bg-cover pt-20 pb-20">
    <div className='bg-white bg-opacity-75 shadow m-auto w-1/2 h-1/2 rounded-md flex justify-center items-center p-10'>
        <div className='flex flex-start flex-col p-4'>
        <h1 className='text-4xl font-bold text-blue-900 '>Any Queries? Reach Out to Us</h1>
        <p className='text-xl text-gray-500'>Feel free to write to us, we are happy to help you</p>
        </div>
        <span className='bg-blue-700 flex items-center  px-5 py-2 rounded-md text-white'>
            <div className='w-28'>Write to Us</div>
            <img className="m-2" src="./arrowRight.svg"/></span>
    </div>
    </div>
  )
}

export default Contact