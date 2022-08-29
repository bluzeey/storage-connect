import React from 'react'

function Footer() {
  return (
    <div className='flex flex-row justify-around'>
        <div className='w-1/4'>
           <img className='mb-4' src="./footerLogo.svg"/>
           <p>Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero.</p>
           <p className='pt-2'>© StorageConnect 2022, All Rights Reserved</p>
        </div>
        <div>
            <h4 className='uppercase font-bold mb-2'>Quick Links</h4>
            <p className='mb-2'>Active Listings</p>
            <p className='mb-2'>Self your Self Storage</p>
            <p className='mb-2'>Free Evaluation</p>
            <p>Learn</p>
        </div>
         <div className="flex flex-col w-1/4 flex-start">
            <h4 className='uppercase font-bold mb-2'>Newsletter</h4>
            <p>Get latest updates in your inbox</p>
            <input className='w-5/6 px-2 py-2 text-slate-200 rounded-md border-1 border-slate-200 mt-2 mb-2' type="text" placeholder="Enter your email"/>
            <button className='w-4/6 rounded-md bg-blue-700 text-white px-2 py-2'>Subscribe Now</button>
         </div>
         <div className="">
            <h4 className='uppercase mb-2'>Let's get social</h4>
            <img src="./Socmed.svg"/>
            <div className='flex  w-3/4 justify-center items-center bg-slate-100 mt-2 px-1 rounded-md'>
            <img src="./android-globe.svg" className=''/>
            <select className='bg-slate-100 px-2'>
                <option value="english">
                    English - EN 
                </option>
            </select>
            </div>
         </div>
    </div>
  )
}

export default Footer