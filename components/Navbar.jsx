import React from 'react'

function Navbar() {
  return (
    <nav className="flex flex-row justify-around items-center text-xl py-4 mx-10">
      <img className='mr-4' src="./logo.svg"/>
      <div className="flex flex-grow flex-row justify-around items-center">
        <p>Active Listings</p>
        <p>Sell your self storage</p>
        <p>Free Evaluation</p>
        <p>Learn</p>
        <button className='flex text-black bg-yellow-500 px-2 py-2 rounded-md font-semibold'>Contact</button>
      </div>
    </nav>
  )
}

export default Navbar