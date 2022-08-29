import React from "react";

function SectionCard() {
  return (
    <div className="flex flex-col bg-white shadow m-2 pb-5 rounded-md">
      <img src="./image16.png" className="max-w-[300px] p-0.5  m-auto"/>
      <div className="text-black m-auto text-center">
        <h3 className="font-semibold mb-5 mt-5">Learn Everything about managing and operating a Self Storage</h3>
        <div className="flex items-center justify-center pb-1">
          <span className="flex items-center justify-center text-center">
            <img src="./totalUnits.svg"  />
            Total Units:
          </span>
          <span className="flex items-center justify-center">
            <img src="./size.svg" />
            Size:
          </span>
          <span className="flex items-center justify-center">
            <img src="./size.svg" />
            Size:
          </span>
        </div>
        <button className='bg-blue-700 flex items-center  px-9 py-2 rounded-md text-white mx-auto my-1'>Read More</button>
      </div>
    </div>
  );
}

export default SectionCard;
