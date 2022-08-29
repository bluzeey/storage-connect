import React from 'react'
import Card from './Card'

function Listings() {
  return (
    <div className="bg-[url('../public/Rectangle8.svg')] text-white text-center">
        <h3 className='text-4xl font-semibold mb-5 pt-5'>Active Listing Self Storages</h3>
        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare</p>
        <div className='flex flex-wrap w-4/5 m-auto p-5  justify-around  items-center '>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <button className='text-black bg-yellow-500 px-5 py-2 text-md p-2 font-bold mb-5 rounded-md'>View More Listings</button>
    </div>
  )
}

export default Listings