import React from 'react'
import Card from './Card'

function Listings() {
  return (
    <div className="bg-[url('../public/Rectangle8.svg')] text-white text-center">
        <h3 className='text-4xl font-semibold mb-5 pt-5'>Active Listing Self Storages</h3>
        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare</p>
        <div className='grid grid-cols-3 justify-items-center items-center m-auto '>
          <Card bgcolor={'white'}/>
          <Card bgcolor={'white'}/>
          <Card bgcolor={'white'}/>
          <Card bgcolor={'white'}/>
          <Card bgcolor={'white'}/>
          <Card bgcolor={'white'}/>
        </div>
        <button className='text-black font-semibold bg-yellow-500 px-8 py-4 text-md p-2 font-bold mb-5 rounded-md'>View More Listings</button>
    </div>
  )
}

export default Listings