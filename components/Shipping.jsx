import React from 'react'
import SectionCard from './SectionCard'
function Shipping() {
  return (
    <>
    <div className="bg-[url('../public/shippingBg.svg')] bg-cover rounded-br-[250px] flex justify-around items-center ">
        <div className='flex flex-col flex-start ml-20'>
            <h1 className='text-4xl font-bold bg-black-700 font-bold mb-5'>Do you have a Self Storage for Sale?</h1>
            <p className='text-xl text-[#000103]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet proin scelerisque nunc.</p>
            <button className='text-xl text-white bg-blue-700 px-2 py-2 rounded-md w-2/6 mt-5'>Sell Your Self Storage</button>
        </div>
        <img className="rounded-br-[250px]" height="600px" width="600px" src="./shipping.svg"/>
    </div>
    <div className="flex flex-row justify-between items-center w-full">
       <img className="-z-10" src="./pngwing3.png"/>
       <div className='flex flex-col flex-start ml-10'>
            <h1 className='text-4xl font-bold bg-black-700 font-bold mb-5'>Do you have a Self Storage for Sale?</h1>
            <p className='text-xl text-[#000103]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet proin scelerisque nunc.</p>
            <button className='text-xl text-white bg-blue-700 px-2 py-2 rounded-md w-2/6 mt-5'>Sell Your Self Storage</button>
        </div>
    </div>
    <div className="bg-[url('../public/Frame12.png')] bg-cover text-center text-white pb-36  -mt-52 rounded-tl-[250px]">
         <h1 className='font-semibold text-4xl p-10 w-1/2 m-auto'>Learn Everything About Buying, Selling, and Operating a Self Storage</h1>
         <h3 className='text-xl pt-5'>Learn about literally anything to know about Selling or Buying a Self Storage</h3>
         <div className='flex w-4/5 mx-auto my-10'>
          <SectionCard/>
          <SectionCard/>
          <SectionCard/>
          <SectionCard/>
         </div>
         <button className='bg-yellow-500 font-semibold text-black text-xl px-8 py-4 mt-5 rounded-md'>Explore the Learning Section</button>
    </div>
    </>
  )
}

export default Shipping