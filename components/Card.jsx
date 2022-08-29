import React from 'react'

function Card() {
  return (
    <div className='flex flex-col rounded-md bg-slate-200 max-w-[250px] m-2 '>
        <img src="./storage1.png" className='max-w-[250px] p-2'/>
        <div>
            <h2>Heading of Self Storage</h2>
            <div className='grid grid-cols-2'>
                <span><img src="./totalUnits.svg"/>Total Units:</span>
                <span><img src="./size.svg"/>Size:</span>
                <span><img src="./totalUnits.svg"/>Total Units:</span>
                <span><img src="./size.svg"/>Size:</span>
            </div>
            <button className='bg-blue-500 text-white p-2 rounded-md m-2'>View More Detail</button>
        </div>
    </div>
  )
}

export default Card