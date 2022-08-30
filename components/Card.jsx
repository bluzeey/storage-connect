import React from 'react'
import Image from 'next/image'

function Card({bgcolor}) {
  return (
    <div className={`flex flex-col rounded-md bg-${bgcolor} max-w-[250px] m-4 p-1 text-center`}>
        <img src="/storage1.png" className='max-w-[250px] p-2'/>
        <div className='text-black' >
            <h2 className='text-left'>Heading of Self Storage</h2>
            <div className='flex flex-col flex-start text-left mb-2'>
                <span className='text-xl font-bold flex justify-start items-center'><img src="/totalUnits.svg"/>Jersey City , NJ</span>
                <span className='flex justify-start items-center'><img src="/size.svg"/>Occupancy: 50%</span>
                <span className='flex justify-start items-center'><img src="/totalUnits.svg"/>Total Units:89</span>
                <span className='flex justify-start items-center'><img src="/size.svg"/>Size:40233 sq Ft</span>
            </div>
            <button className='bg-blue-500 flex items-center justify-center text-white p-2 rounded-md m-auto'>View More Detail</button>
        </div>
    </div>
  )
}

export default Card